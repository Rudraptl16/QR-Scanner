function generateQRCode() {
    const qrInput = document.getElementById("qrInput").value.trim();
    const qrImage = document.getElementById("qrCodeImage");

    if (qrInput === "") {
        alert("Please enter text or URL to generate QR code.");
        return;
    }

    // Use GoQR API (or you can switch to any other QR code API)
    const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrInput)}`;

    qrImage.src = apiUrl;
}
