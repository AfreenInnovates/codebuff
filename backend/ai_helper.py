import os
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()

client = OpenAI(
    base_url="https://api.studio.nebius.com/v1/",
    api_key=os.environ.get("NEBIUS_API_KEY")
)

def ask_route_comparison(origin, destination, route_data, user_loc):
    prompt = f"""
            You are a smart assistant helping users pick the best bus routes.

            Given the following list of bus routes:
            {route_data}

            User wants to go from "{origin}" to "{destination}".
            They are currently near: "{user_loc}".

            Your task:
            1. Pick the 2–3 best matching routes.
            2. For each route, provide:
            - route_name
            - estimated_duration (in minutes)
            - number_of_transfers (integer)
            - crowd_level (Low / Medium / High)
            - earliest_departure (like "10:15 AM")

            Then provide a short summary of which is best and why.

            Respond ONLY in this JSON format:

            {{
            "routes": [
                {{
                "route_name": "Route 61: KBS to Vijayanagar",
                "estimated_duration": 32,
                "number_of_transfers": 1,
                "crowd_level": "Medium",
                "earliest_departure": "10:15 AM"
                }},
                {{
                "route_name": "Route 63: KBS to Vijayanagar",
                "estimated_duration": 28,
                "number_of_transfers": 0,
                "crowd_level": "High",
                "earliest_departure": "10:05 AM"
                }}
            ],
            "summary": "Route 63 is fastest and has no transfers, but crowd levels are high. Route 61 is less crowded but slightly slower."
            }}

            Respond with **valid JSON only**. No markdown or extra text.
        """

    response = client.chat.completions.create(
        model="meta-llama/Llama-3.3-70B-Instruct",
        temperature=0.4,
        messages=[{"role": "user", "content": prompt}]
    )

    return response.choices[0].message.content

