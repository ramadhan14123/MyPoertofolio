const texts = ["Photographer", "UI/UX Desaigner", "Designer"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';
(function type() {
    if (count === texts.length) {
        count = 0; 
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.sec-text').textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000);
    } else {
        setTimeout(type, 150); 
    }
})();

function redirectToLink() {
     window.open("https://www.instagram.com/mvp.captured.id?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", "_blank");
}


document.getElementById('menu-icon').addEventListener('click', function() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
});

let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        header.style.top = '-100px';
    } else {
        header.style.top = '0';
    }
    
    lastScrollTop = scrollTop;
});

const video = document.querySelector('.background-video');
video.addEventListener('ended', function() {
    video.currentTime = 0;
    video.play();
});


// telpon
document.getElementById('click-phone').addEventListener('click', function(event) {
    const phoneNumber = document.getElementById('phone-no').innerText;
    navigator.clipboard.writeText(phoneNumber).then(() => {
        alert('Nomor telepon berhasil disalin!');
    }).catch(err => {
        console.error('Gagal menyalin teks: ', err);
    });
});

// email
document.getElementById('click-gmail').addEventListener('click', function(event) {
    const phoneNumber = document.getElementById('gmail').innerText;
    navigator.clipboard.writeText(phoneNumber).then(() => {
        alert('Email berhasil disalin!');
    }).catch(err => {
        console.error('Gagal menyalin teks: ', err);
    });
});