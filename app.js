const pianoKeys = document.querySelectorAll('.key')
const reMap = ['02', '04', '06', '09', '11', '14', '16', '18', '21', '23', '01', '03', '05', '07', '08', '10', '12', '13', '15', '17', '19', '20', '22', '24']

function playSound(newUrl) {
    console.log(newUrl);
    new Audio(newUrl).play()
}

pianoKeys.forEach((pianoKey, i) => {
    const newUrl = 'key' + reMap[i] + '.mp3'
    console.log(newUrl);
    pianoKey.addEventListener('click', () => playSound(newUrl))
})

