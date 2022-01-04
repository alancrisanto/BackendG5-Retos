from flask import Flask, json, request, jsonify
from productos import productos

app = Flask(__name__)


@app.route("/productos", methods=["GET"])
def home():
    return jsonify({
        "productos": productos,
        "ok": True,
        "message": "Lista productos Ok "
    })

@app.route("/productos", methods=["POST"])
def agregar_producto():
    nuevo_producto = {
        "id": request.json["id"],
        "name": request.json["name"],
        "price": request.json["price"],
        "quantity": request.json["quantity"]
    }

    productos.append(nuevo_producto)
    return jsonify({
        "message": "Producto agregado exitosamente",
        "productos": productos
        })


if __name__ == "__main__":
    app.run(debug=True)