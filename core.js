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
        console.log(`CHECK BUTTONS: ${buttons[i].classList}`)
        buttons[i].classList.remove(className);
    }

    element.classList.add(className);
}


document.addEventListener('DOMContentLoaded', () => {
    const searchIcon = document.querySelector('.search-icon');
    const searchBox = document.querySelector('.search-box');

    searchIcon.addEventListener('mouseenter', () => {
        searchBox.focus();
    });
});