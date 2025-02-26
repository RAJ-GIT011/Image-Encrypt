# Image Steganography: Encrypt & Decrypt Hidden Messages

## 📌 Project Overview
This project implements **image steganography**, allowing users to hide secret text inside an image and later decrypt it using a password. The encryption process embeds the message into the image pixels, and the decryption process extracts the hidden message with the correct password.

## 🚀 Features
- 🔒 **Encrypt & Hide Message**: Hide secret text inside an image.
- 🔑 **Password Protection**: Retrieve hidden text only with the correct password.
- 📤 **Download Encrypted Image**: Users can save the encrypted image.
- 🔍 **Extract Hidden Message**: Load an encrypted image and extract the message.

## 🛠️ Technologies Used
- **Python** (Flask, OpenCV, NumPy)
- **JavaScript** (Frontend & API calls)
- **HTML & CSS** (User Interface)

## 📂 Project Structure
```
📦 image-steganography
 ┣ 📂 static
 ┃ ┣ 📜 style.css
 ┃ ┣ 📜 script.js
 ┣ 📂 templates
 ┃ ┣ 📜 index.html
 ┣ 📜 app.py
 ┣ 📜 requirements.txt
 ┣ 📜 README.md
```

## 🖥️ Installation & Setup
### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/image-steganography.git
cd image-steganography
```

### 2️⃣ Install Dependencies
```bash
pip install -r requirements.txt
```

### 3️⃣ Run the Flask Server
```bash
python app.py
```
Server will run at `http://127.0.0.1:5000/`

## 🎯 Usage Guide
1. **Upload an image** and enter a secret message.
2. Click **Encrypt & Hide Message** → Download the encrypted image.
3. Select the **encrypted image**, enter the password, and click **Extract Hidden Message**.
4. The decrypted message will be displayed below.

## ❓ Troubleshooting
- **ModuleNotFoundError: No module named 'flask'** → Install Flask using:
  ```bash
  pip install flask
  ```
- **405 Method Not Allowed Error** → Ensure Flask server is running properly.



---
Developed by **Rajan Kumar Das** 🚀

