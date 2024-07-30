
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const num = document.querySelectorAll('.num');
const line = document.querySelectorAll('.line');

let currentIndex = 1;
let lineIndex = 0;
num[0].style.borderColor = 'rgb(54, 151, 231)';
prev.style.width = 'rgba(0,0,0,0.4)';  
prev.style.cursor = 'not-allowed';  
next.addEventListener('click', function () {
    if (currentIndex < num.length) {
        num[currentIndex].style.borderColor = 'rgb(54, 151, 231)';
        currentIndex++;
        prev.style.backgroundColor = 'rgb(54, 151, 231)';
        prev.style.cursor = 'pointer';
        if (currentIndex === 4) {
            next.style.backgroundColor = 'rgba(0,0,0,0.4)';
            next.style.cursor = 'not-allowed';
        }
    }
    if (lineIndex < line.length) {
        line[lineIndex].style.width = '100%'
        lineIndex++;
    }
});

prev.addEventListener('click', function () {
    if (currentIndex > 1) {
        if (currentIndex === 2) {
            prev.style.backgroundColor = 'rgba(0,0,0,0.4)';
            prev.style.cursor = 'not-allowed';
        }
        currentIndex--;
        next.style.backgroundColor = '';
        next.style.cursor = 'pointer';
        num[currentIndex].style.borderColor = '';
        if (currentIndex === 3) {
            num[currentIndex].style.borderColor = '';
        }

    }
    if (lineIndex > 0) {
        lineIndex--;
        line[lineIndex].style.width = '0%';

    }

});




