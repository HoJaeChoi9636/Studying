// GSAP의 ScrollTrigger 플러그인을 등록합니다.
gsap.registerPlugin(ScrollTrigger);

// 1. 왼쪽 바다 애니메이션
gsap.to(".sea-left", {
    scrollTrigger: {
        trigger: ".miracle-container", // 이 구역에 도달하면
        start: "top top", // 화면 맨 위에 닿았을 때 시작
        end: "+=1000", // 스크롤 1000px 만큼 내리는 동안 진행
        scrub: true, // 스크롤을 올리면 되감기 (반응형)
        pin: true, // 화면을 고정시켜서 바다가 다 갈라질 때까지 못 지나가게 함
    },
    xPercent: -100, // 왼쪽으로 100% 이동 (화면 밖으로 나감)
});

// 2. 오른쪽 바다 애니메이션
gsap.to(".sea-right", {
    scrollTrigger: {
        trigger: ".miracle-container",
        start: "top top",
        end: "+=1000",
        scrub: true,
    },
    xPercent: 100, // 오른쪽으로 100% 이동
});

// 3. 마른 땅(글자) 등장 애니메이션
gsap.to(".dry-land", {
    scrollTrigger: {
        trigger: ".miracle-container",
        start: "top top",
        end: "+=500", // 바다가 절반쯤 갈라질 때 완료
        scrub: true,
    },
    opacity: 1, // 서서히 나타남
    scale: 1, // 크기가 원래대로 돌아옴
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