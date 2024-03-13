const btn1 = document.getElementById('btn1')   //Membuat variabel bertipe const dengan nama btn1 untuk mengakses id btn1 pada dokumen html
const btn2 = document.getElementById('btn2')   //Membuat variabel bertipe const dengan nama btn2 untuk mengakses id btn2 pada dokumen html
body = document.body //Mendapatkan akses kedalam tag body di file html dan diberi nama body

btn1.style.border = 'none'  //Memberikan style untuk border button dengan nilai none
btn1.style.background = 'tomato' //Memberikan warna background tomato pada button
btn1.style.padding = '20px' //Memberikan padding 20px untuk elemen button
btn1.style.fontFamily = 'arial' //Memngatur fontFamily button menjadi arial
btn1.style.fontSize = '20px'

const defaultText = 'Klik Disini'  //Membuat variabel bertipe const dengan nama defaultText dan berisi string 'Klik Disin'
btn1.textContent = defaultText  //Mengatur textContent dengan menggunakan variable defaultText

const textHover = 'wkwkwk' //Membuat variabel deengan nama textHover bertipe const dan berisi string 'wkwkwk'

function gantiWarna(){  //Membuat function dengan nama gantiWarna
    btn1.style.background = 'burlywood'  //Mengatur background style pada btn1 didalam function gantiWarna
    const textOn = document.createElement('p') //Membuat variable bertipe const dengan nama textOn dan berisi akses untuk membuat elemen html ('p')
    textOn.textContent = 'haha hihi huhuy' //Mengisi variabel textContent dengan string 'haha hihi huhuy'
    body.append(textOn) //Memasukkan variabel textOn kedalam body
}

function hoverOn(){ //Membuat function dengan nama hoverOn
    btn1.textContent = 'haha hihi' //Mengatur text btn1 menjadi 'haha hihi' ketika berada dalam function hoverOn
    btn1.style.background = 'aqua' //Mengatur style background btn1 menjadi aqua ketika function hoverOn diakses
}

function hoverEnd(){ //Membuat function dengan nama hoverEnd
    btn1.textContent = defaultText //Mengatur text content btn1 menjadi variable defaultText
    btn1.style.background = 'tomato'
}

btn2.style.border = 'none' //Mengatur border btn2 menjadi none
btn2.style.background = 'aqua' //Mengatur background btn2 menjadi aqua
btn2.style.padding = '20px 30px' //Mengatur padding pada btn2
btn2.style.fontFamily = 'arial' //Mengatur fontFamily menjadi arial untuk teks btn2
btn2.style.fontSize = '20px' //Mengatur ukuran teks menjadi 20px
btn2.textContent = defaultText //Mengatur text content pada btn2 menjadi defaultText



function gantiWarna2 (){  //Membuat function dengan nema gantiWarna2
    btn2.textContent = textHover //Mengatur textContent untuk btn2 dengan variabel textHover
    btn2.style.background = 'brown' //Mengatur background btn2 menjadi brown
}

function hoverOn2(){ //Membuat function dengan nama hoverOn2
    btn2.style.background = 'tomato' //Mengatur background btn2 dengan warna tomato
    btn2.textContent = 'Gado Gado' //Mengatur textContent btn2 dengan teks 'Gado - Gado'

    const textHover2 = document.createElement('p') //Membuat variable bertipe const dengan nama textHover2 untuk membuat elemen html ('p')
    textHover2.textContent = 'wlewlewle' //Mengatur textContent variable yang telah dibuat dengan string 'wlewlewle'
    body.append(textHover2) //Menmasukaan variable yang telah dibuat kedalam tag body
}

function hoverEnd2(){ //Membuat function dengan nama hoverEnd
    btn2.style.background = 'aqua' //Mengatur bakground dengan warna aqua
    const textHover2 = document.createElement('p') //membuat variable bertipe const dengan nama textHover 2 untuk membuat elemen html 'p'
    textHover2.textContent = 'wlewlewle' //Mengatur text content dengan string 'wlewlewle'
    body.append(textHover2) //memasukan variable textHover2 kedalam body html
    textHover2.style.color = 'yellow'    //Mengatur waena variable textHover2
}