function generateMultipleQRCodes() {
  var lokasi = document.getElementById('lokasi').value;
  var spkList = document.getElementById('spk-list').value;

  if (!lokasi) {
    alert('Masukkan kode lokasi!');
    return;
  }

  if (!spkList) {
    alert('Masukkan nomor SPK!');
    return;
  }

  var spks = spkList.split(',');
  for (var i = 0; i < spks.length; i++) {
    var spk = spks[i].trim();
    if (spk) {
      generateQRCode(lokasi, spk);
    } else {
      alert(`Nomor SPK tidak valid: ${spk}`);
    }
  }
}

function generateQRCode(lokasi, spk) {
  var qrText = `Lokasi: ${lokasi}\nSPK: ${spk}`;
  var qrCodeContainer = document.createElement('div');
  new QRCode(qrCodeContainer, {
    text: qrText,
    width: 200,
    height: 200,
  });
  addQRCodeToList(lokasi, spk, qrText, qrCodeContainer);
}

function addQRCodeToList(lokasi, spk, qrText, qrCodeContainer) {
  var qrList = document.getElementById('qr-list');
  var listItem = document.createElement('li');

  var qrContainer = document.createElement('div');
  qrContainer.className = 'qr-container';

  var qrInfo = document.createElement('div');
  qrInfo.textContent = `${lokasi}-${spk}`;

  var qrCodeDiv = document.createElement('div');
  qrCodeDiv.className = 'qr-code';
  qrCodeDiv.appendChild(qrCodeContainer);

  qrContainer.appendChild(qrInfo);
  qrContainer.appendChild(qrCodeDiv);

  listItem.appendChild(qrContainer);
  qrList.appendChild(listItem);
}

function printQRCodes() {
  window.print();
}
