// 1. 문서에 있는 모든 '.card'를 다 찾아옵니다. (배열처럼 담김)
const cards = document.querySelectorAll('.card');

// 2. 찾아온 카드들 각각(forEach)에게 명령을 심어줍니다.
cards.forEach(function(card) {
    card.addEventListener('click', function() {
        // "지금 클릭된 바로 그 카드(this)"만 뒤집어라!
        this.classList.toggle('is-flipped');
    });
});

// ▼▼▼ 사이드바 메뉴 기능 (여기서부터 추가) ▼▼▼

const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');
const overlay = document.getElementById('overlay');

// 1. 메뉴 열기 함수
function openMenu() {
    sidebar.classList.add('open'); // 사이드바 등장
    overlay.classList.add('show'); // 배경 어두워짐
}

// 2. 메뉴 닫기 함수
function closeMenu() {
    sidebar.classList.remove('open'); // 사이드바 퇴장
    overlay.classList.remove('show'); // 배경 밝아짐
}

// 클릭 이벤트 연결
menuToggle.addEventListener('click', openMenu); // 햄버거 버튼 누르면 열기
closeBtn.addEventListener('click', closeMenu);  // X 버튼 누르면 닫기
overlay.addEventListener('click', closeMenu);   // 바깥 어두운 부분 눌러도 닫기