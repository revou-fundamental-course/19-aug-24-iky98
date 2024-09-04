document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Form validation
    const nama = document.getElementById('nama').value.trim();
    const tanggalLahir = document.getElementById('tanggal-lahir').value;
    const jenisKelamin = document.getElementById('jenis-kelamin').value;
    const pesan = document.getElementById('pesan').value.trim();

    if (!nama || !tanggalLahir || !jenisKelamin || !pesan) {
        alert('All fields are required!');
        return;
    }

    if (pesan.length < 10) {
        alert('Pesan must be at least 10 characters long.');
        return;
    }

    // If validation passes, submit the form
    alert('Form submitted successfully!');
    // Here you can add code to submit form data to the server if needed
});
