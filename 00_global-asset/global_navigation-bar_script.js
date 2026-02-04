// common/global.js

// 1. 네비게이션 바 HTML 덩어리
const navHTML = `
    <nav class="top-nav">
        <div class="nav-left">
            <button id="menu-toggle" class="menu-btn">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </button>
            <a href="/index.html" class="nav-home">HOJAE.C</a>
        </div>
    </nav>

    <div id="sidebar" class="sidebar">
        <div class="sidebar-header">
            <h2>MENU</h2>
            <button id="close-btn" class="close-btn">×</button>
        </div>
        <ul class="sidebar-links">
            <li><a href="/index.html">HOME</a></li>
            <li><a href="/01_card-game/01_card-game_index.html">01. 단어장</a></li>
            <li><a href="/02_bible-sea/02_bible-sea_index.html">02. 홍해의 기적</a></li>
            <li><a href="/03_quiz-app/03_quiz-app_index.html">03. 퀴즈</a></li>
            <li><a href="/04_todays-verse/04_todays-verse_index.html">04. 말씀 뽑기</a></li>
            <li><a href="/#/#">05. coming soon</a></li>
        </ul>
    </div>

    <div id="overlay" class="overlay"></div>
`;

// 2. HTML을 body 맨 앞에 삽입하기
document.body.insertAdjacentHTML('afterbegin', navHTML);


// 3. 햄버거 메뉴 동작 로직 (아까 짰던 코드 이동)
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');
const overlay = document.getElementById('overlay');

function openMenu() {
    sidebar.classList.add('open');
    overlay.classList.add('show');
}

function closeMenu() {
    sidebar.classList.remove('open');
    overlay.classList.remove('show');
}

menuToggle.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
