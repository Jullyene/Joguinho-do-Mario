const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

let isJumping = false;

// Função de pulo
const jump = () => {
    if (!isJumping) { 
        isJumping = true;
        mario.classList.add('jump'); 

        setTimeout(() => {
            mario.classList.remove('jump'); 
            isJumping = false; 
        }, 500); 
    }
};

// Função de detecção de colisão
const checkCollision = () => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = parseFloat(
        window.getComputedStyle(mario).bottom.replace('px', '')
    ); 

    // Verifica colisão
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = '/assets/images/game-over.png'; 
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
    }
};

// Função de animação de colisão
const gameLoop = () => {
    checkCollision();
    requestAnimationFrame(gameLoop); 
};

// Inicia o loop de animação
requestAnimationFrame(gameLoop);


document.addEventListener('keydown', (event) => {
    const validKeys = ['Space', 'ArrowUp']; 
    if (validKeys.includes(event.code)) {
        if (!isJumping) { 
            jump();
        }
    }
});
