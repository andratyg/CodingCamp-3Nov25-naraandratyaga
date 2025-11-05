window.addEventListener('load', function() {
    const userName = prompt("Silakan masukkan nama Anda:");
    
    const welcomeElement = document.getElementById("welcome-text");
    if (userName) {
        welcomeElement.textContent = `Hi ${userName}, Welcome To Website`;
    } else {
  
        welcomeElement.textContent = "Hi Guest, Welcome To Website";
    }
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
   
    event.preventDefault();

    const nama = document.getElementById("nama").value;
    const tanggalLahir = document.getElementById("tanggal-lahir").value;
    const pesan = document.getElementById("pesan").value;
    
    const genderElement = document.querySelector('input[name="gender"]:checked');
    
    if (nama === "" || tanggalLahir === "" || !genderElement || pesan === "") {
        alert("Semua field wajib diisi!");
        return; 
    }
    
    const gender = genderElement.value;
    
    const currentTime = new Date().toLocaleString('id-ID');

    const outputElement = document.getElementById("form-output");
    outputElement.innerHTML = `
        <p><strong>Current Time:</strong> ${currentTime}</p>
        <p><strong>Nama:</strong> ${nama}</p>
        <p><strong>Tanggal Lahir:</strong> ${tanggalLahir}</p>
        <p><strong>Jenis Kelamin:</strong> ${gender}</p>
        <p><strong>Pesan:</strong> ${pesan}</p>
    `;
});