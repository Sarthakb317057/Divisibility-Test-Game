score = 0;
cross = true;


audio = new Audio('static/music.mp3');
audiogo = new Audio('static/gameover.mp3');
setTimeout(() => {
    audio.play()
}, 1000);
document.onkeydown = function (e) {
    if (e.keyCode == 38) {
        testOf = document.querySelector('.testOf');
        testOf.classList.add('animatetestOf');
        setTimeout(() => {
            testOf.classList.remove('animatetestOf')
        }, 1500);
    }
    if (e.keyCode == 39) {
        testOf = document.querySelector('.testOf');
        testOfX = parseInt(window.getComputedStyle(testOf, null).getPropertyValue('left'));
        testOf.style.left = testOfX + 112 + "px";
    }
    if (e.keyCode == 37) {
        testOf = document.querySelector('.testOf');
        testOfX = parseInt(window.getComputedStyle(testOf, null).getPropertyValue('left'));
        testOf.style.left = (testOfX - 112) + "px";
    }
}


setInterval(() => {
    testOf = document.querySelector('.testOf');
    gameOver = document.querySelector('.gameOver');
    testFor = document.querySelector('.testFor');

    Ofx = parseInt(window.getComputedStyle(testOf, null).getPropertyValue('left'));
    Ofy = parseInt(window.getComputedStyle(testOf, null).getPropertyValue('top'));

    number=0;
    divisibility = 0;
    Forx = parseInt(window.getComputedStyle(testFor, null).getPropertyValue('left'));
    if (Forx > 1250) {
        num = Math.floor((Math.random() * 99) + 1);
        testFor.innerHTML = num;
        number = num;
    }
    i=6;
    testOf.innerHTML = "6";

    if (0 < Forx && Forx < 1250) {
        number = num;
        if(number % i == 0)
        {
            divisibility = 1;
        }   
    }
    Fory = parseInt(window.getComputedStyle(testFor, null).getPropertyValue('top'));

    offsetX = Math.abs(Ofx - Forx);
    offsetY = Math.abs(Ofy - Fory);

    if (offsetX < 53 && offsetY < 52 && divisibility == 0) {
        gameOver.innerHTML = "Game Over - Reload to Play Again"
        testFor.classList.remove('testForAni')
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
    }

    else if (offsetY > 20 && offsetX < 50 && divisibility == 1) {
        gameOver.innerHTML = "Game Over - Reload to Play Again"
        testFor.classList.remove('testForAni')
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
    }
    else if (offsetX < 100 && cross && divisibility == 0) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(testFor, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.09;
            testFor.style.animationDuration = newDur + 's';
        }, 500);
    }
 
    else if (offsetX < 100 && cross && divisibility == 1) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(testFor, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            testFor.style.animationDuration = newDur + 's';
        }, 500);
    }

}, 10);



function updateScore(score) {
    scoreCont.innerHTML = "Your Score: " + score
}
