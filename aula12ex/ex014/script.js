function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var h1 = document.getElementById('titulo')
    var pRODAPE = document.getElementById('p-footer')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <= 12) { //Manhã
        img.src = 'imagens/foto-manha.jpg'
        document.body.style.background = 'lightblue'
        h1.style.color = 'black'
        pRODAPE.style.color = 'black'
    } else if (hora >= 12 && hora <= 18){ //Tarde
        img.src = 'imagens/foto-tarde.jpg'
        document.body.style.background = 'blue'
    } else { //Noite
        img.src = 'imagens/foto-noite.jpg'
        document.body.style.background = 'darkblue'
    }
}


