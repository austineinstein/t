import { createModularAccountAlchemyClient } from "@alchemy/aa-alchemy";
import abi from "../artifacts/tinatb/abi.json";
import { LocalAccountSigner, arbitrumSepolia } from "@alchemy/aa-core";
import { encodeFunctionData, Hex } from "viem";
import "./paymaster.ts"
//import { withdraw } from "viem/zksync";

const { privateKeyToAccount } = require('viem/accounts');
const dotenv = require('dotenv');

dotenv.config();

const abiData = abi;

const privateKey = process.env.PRIVATE_KEY;

const requiredEnvs = [
    'PRIVATE_KEY', 
    'CONTRACT_ADDRESS',
    'ERC20_ADDRESS',
    'DEST_ADDRESS'
  ];
  
  requiredEnvs.forEach(env => {
    if (!process.env[env]) {
      throw new Error(`Missing required environment variable: ${env}`);
    }
  });
  
//can pass randomly gen private key
//const signer = LocalAccountSigner.privateKeyToAccountSigner(`0x${privateKey}`);

//const contractAddr: Hex = `0x${process.env.CONTRACT_ADDRESS}`;
const validateAddress = (addr: string): Hex => {
    if (!/^0x[ad-fA-F0-9]{40}$/.test(addr)) 
        {
            throw new Error(`Invalid address format: ${addr}`);
        }
        return addr as Hex;
};
const contractAddr = validateAddress(process.env.CONTRACT_ADDRESS!);
const paymasterAddr = validateAddress(process.env.TOKEN_ADDRESS!);

(async () => {
    try {
        const signer = LocalAccountSigner.privateKeyToAccountSigner(validateAddress(`0x${privateKey}`));
    // using alchemy
    const client = await createModularAccountAlchemyClient({
        apiKey: process.env.API_KEY!,
        chain: arbitrumSepolia,
        signer,
        gasManagerConfig: {
            policyId: process.env.POLICY_ID!,
        },
    });

    const uos = [1, 2, 3].map((x) => {
        const amount = x * 100000;
        const destAddr = validateAddress(process.env.DEST_ADDRESS!);

        return {
            target: contractAddr,
            data: encodeFunctionData({
                abi,
            functionName: "withdraw",
            args: [amount, destAddr]
            }),//add custom PaymasterParams
        };
    });
    const gasEstimates = await Promise.all(
        uos.map(uo => client.estimateGas(uo))
    );

    const result = await client.sendUserOperation({
        uo: uos.map((uo, i) => ({
            ...uo,
            gasLimit: gasEstimates[i],
        })),
    });

    const txHash = await client.waitForUserOperationTransaction(result);
    console.log("Transaction Hash:", txHash);

} catch (error) {
    console.error("Transaction failed:", error);
    process.exit(1);
}

    //const withdraw = await client.readContract(...);
})();
