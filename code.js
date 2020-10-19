const btnLeft = document.querySelector('.btn-left');

const btnRight = document.querySelector('.btn-right');

const photo = document.querySelectorAll('.photo');

const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const img3 = document.querySelector('.img3');


btnRight.addEventListener('click', () => {
 img1.classList.toggle('noActive');
//  img2.classList.toggle('active');
})

btnLeft.addEventListener('click', () => {
    img2.classList.toggle('noActive');
   //  img2.classList.toggle('active');
   })