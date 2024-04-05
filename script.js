document.addEventListener('DOMContentLoaded', function() {
    let qrContentInput = document.getElementById("qr-content");
    let qrForm = document.getElementById("qrform");
    let qrCode;

    function generateQrCode(qrContent) {
        return new QRCode("qrcode", {
            text: qrContent,
            width: 256,
            height: 256,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H,
        });
    }

    qrForm.addEventListener('submit', function(event) {
        event.preventDefault();
        let qrContent = qrContentInput.value;
        if (typeof qrCode === 'undefined' || qrCode === null) {
            qrCode = generateQrCode(qrContent);
        } else {
            qrCode.makeCode(qrContent);
        }
    });
});


