const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    if (!mario.classList.contains('jump')) { // Impede múltiplos saltos
        mario.classList.add('jump');

        setTimeout(() => {
            mario.classList.remove('jump');
        }, 500); // Tempo deve ser igual ao tempo da animação
    }
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    // Verifica a colisão
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`; 
        mario.style.animation = 'none'; 
        mario.style.bottom = `${marioPosition}px`; 
        alert('Game Over!'); 
        clearInterval(loop);   
    }
}, 10);

document.addEventListener('keydown', jump);