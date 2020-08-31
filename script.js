// img select
function select(i) {
    let imgPrew = document.querySelector('.main');
    let sImg = document.querySelectorAll('.small img');
    if (i == 1) {
        imgPrew.setAttribute('src', 'images/w1.jpg');
        sImg[0].className = 'selected';
        sImg[1].className = '';
        sImg[2].className = '';
    }
    if (i == 2) {
        imgPrew.setAttribute('src', 'images/w2.jpg');
        sImg[0].className = '';
        sImg[1].className = 'selected';
        sImg[2].className = '';
    }
    if (i == 3) {
        imgPrew.setAttribute('src', 'images/w11.jpg');
        sImg[0].className = '';
        sImg[1].className = '';
        sImg[2].className = 'selected';
    }
}

// sew + x rotate
let i = document.querySelector('.sew i');
function sew() {
    if (i.style.transform == 'rotate(-45deg)') {
        i.style.transform = 'rotate(0deg)'
    }else {
        i.style.transform = 'rotate(-45deg)'
    }
}
sew();