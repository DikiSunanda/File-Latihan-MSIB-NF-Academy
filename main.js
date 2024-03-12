const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
body = document.body

btn1.style.border = 'none'
btn1.style.background = 'tomato'
btn1.style.padding = '20px'
btn1.style.fontFamily = 'arial'
btn1.style.fontSize = '20px'

const defaultText = 'Klik Disini'
btn1.textContent = defaultText

const textHover = 'wkwkwk'

function gantiWarna(){
    btn1.style.background = 'burlywood'
    const textOn = document.createElement('p')
    textOn.textContent = 'haha hihi huhuy'
    body.append(textOn)
}

function hoverOn(){
    btn1.textContent = 'haha hihi'
    btn1.style.background = 'aqua'
}

function hoverEnd(){
    btn1.textContent = defaultText
    btn1.style.background = 'tomato'
}

btn2.style.border = 'none'
btn2.style.background = 'aqua'
btn2.style.padding = '20px 30px'
btn2.style.fontFamily = 'arial'
btn2.style.fontSize = '20px'
btn2.textContent = defaultText



function gantiWarna2 (){
    btn2.textContent = textHover
    btn2.style.background = 'brown'
}

function hoverOn2(){
    btn2.style.background = 'tomato'
    btn2.textContent = 'Gado Gado'

    const textHover2 = document.createElement('p')
    textHover2.textContent = 'wlewlewle'
    body.append(textHover2)
}

function hoverEnd2(){
    btn2.style.background = 'aqua'
    const textHover2 = document.createElement('p')
    textHover2.textContent = 'wlewlewle'
    body.append(textHover2)
    textHover2.style.color = 'yellow'   
}