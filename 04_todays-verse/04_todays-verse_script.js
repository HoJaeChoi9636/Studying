// 1. 말씀 데이터 (원하시는 구절로 채워보세요!)
const verses = [
    {
        text: "두려워하지 말라 내가 너와 함께 함이라 놀라지 말라 나는 네 하나님이 됨이라",
        ref: "이사야 41:10"
    },
    {
        text: "내게 능력 주시는 자 안에서 내가 모든 것을 할 수 있느니라",
        ref: "빌립보서 4:13"
    },
    {
        text: "여호와는 나의 목자시니 내게 부족함이 없으리로다",
        ref: "시편 23:1"
    },
    {
        text: "구하라 그리하면 너희에게 주실 것이요 찾으라 그리하면 찾아낼 것이요",
        ref: "마태복음 7:7"
    },
    {
        text: "사랑은 오래 참고 사랑은 온유하며 시기하지 아니하며",
        ref: "고린도전서 13:4"
    },
    {
        text: "너희는 세상의 빛이라 산 위에 있는 동네가 숨겨지지 못할 것이요",
        ref: "마태복음 5:14"
    }
];

// 2. HTML 요소 가져오기
const verseText = document.getElementById('verse-text');
const verseRef = document.getElementById('verse-ref');
const drawBtn = document.getElementById('draw-btn');
const card = document.querySelector('.card');

// 3. 랜덤 말씀 뽑기 함수
function drawVerse() {
    // (1) 랜덤 숫자 만들기: 0 ~ (데이터개수 - 1) 사이의 정수
    // Math.random() -> 0.xxxx
    // verses.length -> 6
    // 곱하면 -> 0.xxx ~ 5.xxx
    // Math.floor(내림) -> 0, 1, 2, 3, 4, 5 중 하나
    const randomIndex = Math.floor(Math.random() * verses.length);
    
    // (2) 데이터 가져오기
    const selectedVerse = verses[randomIndex];

    // (3) 화면에 보여주기
    verseText.innerText = selectedVerse.text;
    verseRef.innerText = selectedVerse.ref;

    // (옵션) 깜빡이는 애니메이션 효과
    card.style.opacity = 0;
    setTimeout(() => {
        card.style.opacity = 1;
    }, 200);
}

// 4. 클릭 이벤트 연결
drawBtn.addEventListener('click', drawVerse);
card.addEventListener('click', drawVerse); // 카드 자체를 눌러도 바뀌게

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