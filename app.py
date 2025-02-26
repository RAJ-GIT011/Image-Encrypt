from flask import Flask, request, send_file, jsonify
import cv2
import numpy as np
import os

app = Flask(__name__)

# Function to encode message into an image
def encode_image(image_path, secret_message, password):
    img = cv2.imread(image_path)
    if img is None:
        return None, "Error: Image not found."

    # Convert message into ASCII and encode it inside pixels
    m, n, z = 0, 0, 0
    for char in secret_message:
        img[n, m, z] = ord(char)
        n = (n + 1) % img.shape[0]
        m = (m + 1) % img.shape[1]
        z = (z + 1) % 3  

    # Save the encrypted image
    encrypted_path = "encrypted_image.jpg"
    cv2.imwrite(encrypted_path, img)
    return encrypted_path, None

# Function to decode the hidden message
def decode_image(image_path, password, original_password, message_length):
    img = cv2.imread(image_path)
    if img is None:
        return None, "Error: Image not found."

    if password != original_password:
        return None, "Incorrect password!"

    m, n, z = 0, 0, 0
    extracted_message = ""

    for _ in range(message_length):
        extracted_message += chr(img[n, m, z])
        n = (n + 1) % img.shape[0]
        m = (m + 1) % img.shape[1]
        z = (z + 1) % 3

    return extracted_message, None

# Route to encrypt an image
@app.route("/encrypt", methods=["POST"])
def encrypt():
    file = request.files["image"]
    secret_message = request.form["message"]
    password = request.form["password"]

    if not file or not secret_message or not password:
        return jsonify({"error": "Missing required fields."}), 400

    image_path = "uploaded_image.jpg"
    file.save(image_path)

    encrypted_image, error = encode_image(image_path, secret_message, password)
    if error:
        return jsonify({"error": error}), 500

    return send_file(encrypted_image, as_attachment=True, download_name="encrypted_image.jpg")

# Route to decrypt an image
@app.route("/decrypt", methods=["POST"])
def decrypt():
    file = request.files["image"]
    password = request.form["password"]
    original_password = request.form["original_password"]
    message_length = int(request.form["message_length"])

    if not file or not password or not original_password:
        return jsonify({"error": "Missing required fields."}), 400

    image_path = "decryption_image.jpg"
    file.save(image_path)

    extracted_message, error = decode_image(image_path, password, original_password, message_length)
    if error:
        return jsonify({"error": error}), 401

    return jsonify({"message": extracted_message})


if __name__ == "__main__":
    app.run(debug=True)
