let wrapper = document.querySelector('.wrapper');
let run = document.querySelector('.run');
run.addEventListener('click', runing);
let i = 1;
let lf = 3;
let point = document.querySelector('.point');
point.textContent = `0 Points`;
let gameOver = document.createElement('div');
gameOver.className = 'over';
let h2 = document.createElement('h2');
gameOver.append(h2);
h2.textContent = 'GAME OVER'
h2.style.fontSize = '100px';
h2.style.marginTop = '30px';
let newGame = document.createElement('div');
newGame.className = 'newGame';
newGame.textContent = 'NEW GAME';
newGame.addEventListener('click', () => {
    newGame.style.display = 'none';
    gameOver.style.display = 'none';
    runing();
});

function runing() {
    run.style.display = 'none'
    wrapper.style.background = 'url(img/5.jpg) 50% 50%';
    wrapper.style.backgroundSize = '100%';
    setInterval(() => {
        if (lf > 0) {
            game();
        }
        else {
            wrapper.style.background = 'url(img/6.jpg) 50% 50%';
            wrapper.append(gameOver, newGame);
            newGame.style.display = 'block';
            gameOver.style.display = 'block';
        }
    }, 2000);
    i = 1;
    lf = 3;

};



function game() {
    var birds = document.createElement('div');
    birds.className = 'birds';
    let random1 = Math.random() * 1150;
    let random = Math.floor(random1);
    let life = document.querySelector('.life');
    life.textContent = `life ${lf}`;

    life.style.textContent = `Life ${lf}`;
    birds.style.left = ` ${random}px`

    wrapper.append(birds);

    setInterval(() => {

        birds.style.marginTop = '530px'
        birds.style.transition = '8s'

        setTimeout(() => {
            birds.style.display = 'none';
        }, 8050);

        if (birds.offsetTop == 529) {
            life.textContent = `life ${lf}`;
            lf--;
            if (lf == 0) {
                birds.style.display = 'none';
                life.textContent = `life 0`;

            }
        };

    }, 400);

    birds.addEventListener('click', () => {
        birds.style.display = 'none';
        point.textContent = `${i} Points`
        i++;
    });


}


