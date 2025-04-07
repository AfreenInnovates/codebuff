from flask import Flask, request, jsonify
from ai_helper import ask_route_comparison
import json
from flask_cors import CORS 

app = Flask(__name__)
CORS(app)

@app.route('/get-route', methods=['POST'])
def get_route():
    print(request)
    data = request.get_json()
    print(data)
    origin = data.get('origin')
    destination = data.get('destination')
    user_loc = data.get('user_loc')

    if not origin or not destination:
        return jsonify({'error': 'Origin and destination required'}), 400

    # Read route data
    with open('bus_routes_clm.txt', 'r') as file:
        route_data = file.read()

    # Ask AI for best route
    ai_response_raw = ask_route_comparison(origin, destination, route_data, user_loc)

    try:
        cleaned = ai_response_raw.strip()
        if cleaned.startswith("```json"):
            cleaned = cleaned.removeprefix("```json").strip()
        if cleaned.endswith("```"):
            cleaned = cleaned.removesuffix("```").strip()

        ai_response_json = json.loads(cleaned)
        return jsonify(ai_response_json)

    except json.JSONDecodeError:
        return jsonify({
            "error": "AI returned unexpected format.",
            "raw": ai_response_raw
        }), 500



if __name__ == '__main__':
    app.run(debug=True)
