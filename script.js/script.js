// Import QRCode library (simple via CDN in HTML)
// This code assumes you use a CDN like "https://cdn.jsdelivr.net/npm/qrcode/build/qrcode.min.js"

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('qrForm');
  const qrDiv = document.getElementById('qrcode');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const address = document.getElementById('address').value.trim();
    const amount = document.getElementById('amount').value.trim();

    if (!address || !amount) {
      alert('Please fill in both fields!');
      return;
    }

    const trxURI = `tron:${address}?amount=${amount}`;
    qrDiv.innerHTML = '';

    // Use QRCode.js via CDN
    new QRCode(qrDiv, {
      text: trxURI,
      width: 256,
      height: 256,
      colorDark : "#000000",
      colorLight : "#ffffff",
      correctLevel : QRCode.CorrectLevel.H
    });
  });
});

