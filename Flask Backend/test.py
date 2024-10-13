import key
import openai
client = openai.OpenAI(api_key=key.apiKey)
def get_chatgpt_response(prompt):
    try:
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "user", "content": prompt}
            ]
        )
        return response.choices[0].message.content
    except Exception as e:
        return f"An error occurred: {str(e)}"
print(get_chatgpt_response("hello what is ur name"))