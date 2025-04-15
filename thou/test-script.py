from openai import OpenAI
client = OpenAI()

response = client.responses.create(
    model="gpt-4.1",
    input="Write a one-sentence about collections vs collectibles."
)

print(response.output_text)
