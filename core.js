function showVideo(mode) {
    // Hide all videos
    document.getElementById('vo-dai-video').style.display = 'none';
    document.getElementById('summoners-rift-video').style.display = 'none';
    document.getElementById('aram-video').style.display = 'none';
    document.getElementById('dau-truong-chan-ly-video').style.display = 'none';

    // Show the selected video
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
    // Mode
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