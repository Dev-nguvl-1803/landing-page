function showVideo(mode) {
    document.getElementById('vo-dai-video').style.display = 'none';
    document.getElementById('summoners-rift-video').style.display = 'none';
    document.getElementById('aram-video').style.display = 'none';
    document.getElementById('dau-truong-chan-ly-video').style.display = 'none';

    document.getElementById(mode + '-video').style.display = 'block';
}


function addClass(element, className) {
    var buttons = document.getElementsByClassName('game-mode-button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove(className);
    }

    element.classList.add(className);
}

function theme(element, text) {
    var cards = document.getElementsByClassName(text);
    for (var i = 0; i < cards.length; i++) {
        cards[i].classList.toggle('dark');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const searchIcon = document.querySelector('.search-icon');
    const searchBox = document.querySelector('.search-box');

    searchIcon.addEventListener('click', () => {
        searchBox.focus();
    });
});

function myToggle() {
    var element = document.body;
    var gameMode = document.getElementById('gameplay')
    var newsSection = document.getElementById('news')
    var section1 = document.getElementById('introduction')
    var learnMore = document.getElementById('learn-more-btw')
    for (let i = 1; i < 4; i++) {
        document.getElementById(`tag${i}`).classList.toggle('dark')
        document.getElementById(`tagg${i}`).classList.toggle('dark')
        document.getElementById(`taggg${i}`).classList.toggle('dark')
    }
    var gameModeSection = document.getElementsByClassName('gameplay')
    for (let i = 0; i < 1; i++) {
        document.getElementById(`gameMode${i}`).classList.toggle('dark')
    }

    newsSection.classList.toggle('dark');
    section1.classList.toggle('dark');
    learnMore.classList.toggle('dark');
    h3.classList.toggle('dark');
    gameModeSection.classList.toggle('dark');
    gameModeSectionh2.classList.toggle('dark');
    gameModeSectionh1.classList.toggle('dark');
    gameMode.classList.toggle("dark");
    card.classList.toggle("dark");
    element.classList.toggle("dark");
}

var audio = document.getElementById('background-audio');
audio.volume = 0.1;

document.addEventListener('DOMContentLoaded', function() {
    let isDown = false;
    var check = false;
    let startX;
    let scrollLeft;

    feedbackCarousel.addEventListener('mousedown', (e) => {
        check = true
        isDown = true;
        feedbackCarousel.classList.add('active');
        startX = e.pageX - feedbackCarousel.offsetLeft;
        scrollLeft = feedbackCarousel.scrollLeft;
    });

    feedbackCarousel.addEventListener('mouseleave', () => {
        isDown = false;
        check = false;
        feedbackCarousel.classList.remove('active');
    });

    feedbackCarousel.addEventListener('mouseup', () => {
        isDown = false;
        check = false;
        feedbackCarousel.classList.remove('active');
    });

    feedbackCarousel.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        check = true;
        const x = e.pageX - feedbackCarousel.offsetLeft;
        const walk = (x - startX) * 1.5
        feedbackCarousel.scrollLeft = scrollLeft - walk;
    });
});

function changeText(txt) {
    var text1 = document.getElementById('dau-truong-intro');
    var text2 = document.getElementById('dau-truong-intro2');
    if (txt == 'vodai') {
        text1.innerText = 'SÀN ĐẤU VÕ ĐÀI';
        text2.innerText = 'Tham gia Võ Đài với 16 người chơi, nơi đội bạn đấu với các cặp khác\n trên nhiều bản đồ. Hạ gục đối thủ để trở thành bộ đôi chiến thắng cuối cùng!\n Chọn Nâng Cấp ngẫu nhiên để mỗi trận đấu thêm phần thú vị và căng thẳng.';
    } else if (txt == 'summon') {
        text1.innerText = "SUMMONER'S RIFT";
        text2.innerText = 'Summoner’s Rift trong League of Legends là nơi hai đội 5 người đấu với nhau\n trong trận chiến chiến lược. Với ba đường chính và khu rừng đầy quái vật,\n người chơi phải phối hợp chặt chẽ, dùng chiến thuật thông minh để phá trụ bảo vệ.';
    } else if (txt == 'aram') {
        text1.innerText = 'ĐẤU TRƯỜNG ARAM';
        text2.innerText = 'ARAM (All Random All Mid) trong League of Legends là chế độ chơi phong cách,\n nơi người chơi được chọn ngẫu nhiên tướng và chiến đấu trên một đường duy nhất.\n ARAM mang đến trải nghiệm nhanh và đầy hành động, tập trung vào các trận giao tranh liên tục.';
    } else if (txt == 'dau') {
        text1.innerText = 'ĐẤU TRƯỜNG CHÂN LÝ';
        text2.innerText = 'Đấu Trường Chân Lý trong League of Legends là chế độ chơi chiến thuật tự động,\n xây dựng đội hình từ các tướng và trang bị để đối đầu với người chơi khác.\n Mỗi trận đấu là cuộc chiến trí tuệ, chọn lựa và sắp xếp đội hình mạnh nhất.';
    }
}

function scroll() {
    var i = 0;
    var get = document.getElementsByClassName('game-mode-button');
    for (i = 0; i < 9; i++) {

    }
}
var mybutton = document.getElementById("scrollToTopBtn");
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function scrollToTop() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}

function count() {
    const counter = document.querySelectorAll('.counter');
    const array = Array.from(counter);
    array.map((item) => {
        let counterInnerText = item.textContent;
        let count = 1;
        let speed = item.dataset.speed / counterInnerText
        function counterUp() {
            item.textContent = count++
            if (counterInnerText < count) {
                clearInterval(stop);
            }
        }
        const stop = setInterval(() => {
            counterUp();
        }, speed);
    })
}
