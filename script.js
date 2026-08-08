const form = document.getElementById("bookingForm");
const hasil = document.getElementById("hasil");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const kamar = document.getElementById("kamarPilihan").value;
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;
    const tamu = document.getElementById("tamu").value;

    const masuk = new Date(checkin);
    const keluar = new Date(checkout);

    if (keluar <= masuk) {
        alert("Tanggal check-out harus setelah check-in!");
        return;
    }

    const waktu = keluar - masuk;
    const malam = Math.ceil(waktu / (1000 * 60 * 60 * 24));

    hasil.style.display = "block";

    hasil.innerHTML = `
        <h3>✅ Booking Berhasil!</h3>
        <p><strong>Nama:</strong> ${nama}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Kamar:</strong> ${kamar}</p>
        <p><strong>Check-in:</strong> ${checkin}</p>
        <p><strong>Check-out:</strong> ${checkout}</p>
        <p><strong>Jumlah Tamu:</strong> ${tamu} orang</p>
        <p><strong>Lama Menginap:</strong> ${malam} malam</p>
        <br>
        <p>Terima kasih telah memilih <strong>Dafa Hotel</strong>!</p>
    `;

    form.reset();
});
