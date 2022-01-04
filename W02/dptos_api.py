from flask import Flask, request, jsonify
from departamentos import departamentos

app = Flask(__name__)


@app.route("/", methods=["GET"])
def home():
    return jsonify ({
        "ok": True,
        "content": departamentos,
        "message": "Lista conforme"
    })





if __name__ == '__main__':
    app.run(debug=True)