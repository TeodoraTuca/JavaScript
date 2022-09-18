var dr = document.querySelector('#dreptunghi')

document.querySelector('#dreptunghi').addEventListener('click', minimize)

// i reprezinta em
async function minimize() {
    for(let i = 10;i >= 0; i--) {
        // asteptam 20 de ms:
        await new Promise(r => setTimeout(r, 20))
        dr.style.height = i + 'em'
    }
}