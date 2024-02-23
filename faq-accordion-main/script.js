const iconBtn = document.querySelectorAll('.icon-btn');
const hidden = document.querySelector('.hidden');
const subText = document.querySelectorAll('.sub-text');


for (let i = 0; i < iconBtn.length; i++) {
    iconBtn[i].addEventListener('click', function () {
        iconBtn[i] = subText[i].classList.toggle('hidden');
        
        let isHidden = subText[i].classList.contains('hidden');
        iconBtn[i].src = (isHidden) ? 'assets/images/icon-plus.svg' :'assets/images/icon-minus.svg' ;
    })
}