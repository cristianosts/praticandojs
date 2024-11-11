function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = (`<strong>Agora são ${hora} horas!</strong>`)
    if (hora >= 0 && hora < 12) {
           img.src = 'manha.png'
           document.body.style.background = '#e4f7a2'
    } else if (hora >= 12 && hora < 18) {
           img.src = 'tarde.png'
           document.body.style.background = '#fdbd93'
    } else {
           img.src = 'noite.png'
           document.body.style.background = '#5868c2'
    }
}