let frm = document.getElementById('online');
let prodpil = ['TV', 'AC', 'Kulkas'];
let pilihprod = `<option value=""> Pilihan Produk -----</option>`;
for (let p in prodpil){
    pilihprod += `<option value="${prodpil[p]}">${prodpil[p]}</option>`;
}
frm.produk.innerHTML = pilihprod;
function transaksi(){
    let nama = frm.nama.value;
    let produk = frm.produk.value;
    let jumlah = frm.jumlah.value

}