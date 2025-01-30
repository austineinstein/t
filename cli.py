import argparse
from thou import ThouModule

def main():
    parser = argparse.ArgumentParser(description="CLI for the Thou Node.js/TypeScript module")
    parser.add_argument("function", help="Function to call in the module")
    parser.add_argument("args", nargs="*", help="Arguments for the function")
    
    args = parser.parse_args()

    module = ThouModule()
    
    try:
        result = module.call_function(args.function, *args.args)
        print(result)
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    main()
