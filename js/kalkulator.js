function tambah() {
    var angka1 = parseFloat(document.getElementById("angka1").value);
    var angka2 = parseFloat(document.getElementById("angka2").value);
    document.getElementById("hasil").value = angka1 + angka2;
}

function kurang() {
    var angka1 = parseFloat(document.getElementById("angka1").value);
    var angka2 = parseFloat(document.getElementById("angka2").value);
    document.getElementById("hasil").value = angka1 - angka2;
}

function kali() {
    var angka1 = parseFloat(document.getElementById("angka1").value);
    var angka2 = parseFloat(document.getElementById("angka2").value);
    document.getElementById("hasil").value = angka1 * angka2;
}

function bagi() {
    var angka1 = parseFloat(document.getElementById("angka1").value);
    var angka2 = parseFloat(document.getElementById("angka2").value);
    document.getElementById("hasil").value = angka1 / angka2;
}

function pangkat() {
    var angka1 = parseFloat(document.getElementById("angka1").value);
    var angka2 = parseFloat(document.getElementById("angka2").value);
    document.getElementById("hasil").value = Math.pow(angka1, angka2);
}