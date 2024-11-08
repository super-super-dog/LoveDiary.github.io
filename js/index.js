const img = document.querySelector('.banner img')
let random = Math.floor(Math.random() * 6)
img.src = `./images/banner_${random}.png`
