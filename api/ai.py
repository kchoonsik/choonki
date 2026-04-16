import os
import google.generativeai as genai
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Gemini API Key 설정
api_key = os.environ.get("GOOGLE_GENERATION_AI_API_KEY")
if api_key:
    genai.configure(api_key=api_key)

@app.route('/api/ai', methods=['POST'])
def generate():
    data = request.json
    prompt = data.get('prompt', '')
    
    if not api_key:
        return jsonify({"message": "API Key not configured in Vercel."}), 500

    try:
        model = genai.GenerativeModel('gemini-1.5-flash')
        response = model.generate_content(prompt)
        return jsonify({"text": response.text})
    except Exception as e:
        return jsonify({"message": str(e)}), 500

if __name__ == '__main__':
    app.run()
