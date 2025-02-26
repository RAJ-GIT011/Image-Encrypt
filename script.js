function encryptImage() {
    let image = document.getElementById("imageInput").files[0];
    let message = document.getElementById("messageInput").value;
    let password = document.getElementById("passwordInput").value;

    if (!image || !message || !password) {
        alert("Please select an image, enter a message, and a password.");
        return;
    }

    let formData = new FormData();
    formData.append("image", image);
    formData.append("message", message);
    formData.append("password", password);

    fetch("/encrypt", {
        method: "POST",
        body: formData
    })
    .then(response => response.blob())
    .then(blob => {
        let link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = "encrypted_image.jpg";
        link.click();
    })
    .catch(error => console.error("Error:", error));
}

function decryptImage() {
    let image = document.getElementById("decryptImageInput").files[0];
    let password = document.getElementById("decryptPassword").value;

    if (!image || !password) {
        alert("Please select an image and enter the password.");
        return;
    }

    let formData = new FormData();
    formData.append("image", image);
    formData.append("password", password);
    formData.append("original_password", password);
    formData.append("message_length", 50); // Adjust based on expected message length

    fetch("/decrypt", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            alert(data.error);
        } else {
            document.getElementById("decryptedMessage").innerText = "Message: " + data.message;
        }
    })
    .catch(error => console.error("Error:", error));
}


function encryptImage() {
    let image = document.getElementById("imageInput").files[0];
    let message = document.getElementById("messageInput").value;
    let password = document.getElementById("passwordInput").value;

    if (!image || !message || !password) {
        alert("Please select an image, enter a message, and a password.");
        return;
    }

    let formData = new FormData();
    formData.append("image", image);
    formData.append("message", message);
    formData.append("password", password);

    fetch("/encrypt", {
        method: "POST",
        body: formData
    })
    .then(response => response.blob())
    .then(blob => {
        let link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = "encrypted_image.jpg";
        link.click();
    })
    .catch(error => console.error("Error:", error));
}

function decryptImage() {
    let image = document.getElementById("decryptImageInput").files[0];
    let password = document.getElementById("decryptPassword").value;
    let messageDisplay = document.getElementById("decryptedMessage");

    if (!image || !password) {
        alert("Please select an image and enter the password.");
        return;
    }

    let formData = new FormData();
    formData.append("image", image);
    formData.append("password", password);
    formData.append("original_password", password);
    formData.append("message_length", 50); // Adjust as needed

    fetch("/decrypt", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            messageDisplay.innerText = "❌ Error: " + data.error;
            messageDisplay.style.color = "red";
        } else {
            messageDisplay.innerText = "✅ Hidden Message: " + data.message;
            messageDisplay.style.color = "green";
        }
        messageDisplay.style.display = "block"; // Ensure it's visible
    })
    .catch(error => console.error("Error:", error));
}

