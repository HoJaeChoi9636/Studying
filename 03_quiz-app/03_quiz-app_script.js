// 1. 문제 데이터 만들기 (이게 바로 '문제 은행'입니다)
// 배열(Array) 안에 객체(Object)들이 들어있는 구조입니다.
const quizData = [
    {
        id: 1,
        question: "I eat rice.",
        answer: "저는밥을먹어요",
        words: ["먹어요", "저는", "밥을"] // 일부러 순서를 섞어둡니다
    },
    {
        id: 2,
        question: "The weather is good.",
        answer: "날씨가좋아요",
        words: ["좋아요", "날씨가", "나빠요"] // '나빠요'는 함정 카드! (선택)
    },
    {
        id: 3,
        question: "Do you love me?",
        answer: "나를사랑하니",
        words: ["사랑하니", "나를", "너는"] 
    }
];

// 2. 게임 상태 관리 변수
let currentLevel = 0; // 현재 몇 번째 문제인지 (0부터 시작)
let score = 0; // 점수

// HTML 요소들을 미리 찾아옵니다
const questionEl = document.getElementById('quiz-question');
const wordBankEl = document.getElementById('word-bank');
const answerBoxEl = document.getElementById('answer-box');
const progressEl = document.getElementById('progress');
const resultMsg = document.getElementById('result-msg');

// Sortable 기능을 위한 변수
let sortableBank, sortableAnswer;


// 3. 게임 시작 함수
function initGame() {
    currentLevel = 0;
    score = 0;
    loadQuestion(); // 첫 번째 문제 로딩
}

// 4. 문제를 화면에 뿌리는 함수 (Render)
function loadQuestion() {
    // 현재 문제 데이터를 가져옴
    const currentQuiz = quizData[currentLevel];

    // 1) 텍스트 업데이트
    progressEl.innerText = `문제 ${currentLevel + 1} / ${quizData.length}`;
    questionEl.innerText = currentQuiz.question;
    resultMsg.innerText = "";
    resultMsg.style.color = "black";

    // 2) 박스 초기화 (이전 문제의 흔적 지우기)
    wordBankEl.innerHTML = "";
    answerBoxEl.innerHTML = "";

    // 3) 단어 카드 생성
    currentQuiz.words.forEach(word => {
        const div = document.createElement('div');
        div.classList.add('word-card');
        div.innerText = word;
        wordBankEl.appendChild(div); // 단어장에 추가
    });

    // 4) 드래그 앤 드롭 다시 연결 (내용이 바뀌었으므로)
    setupSortable();
}

// 드래그 앤 드롭 설정 함수
function setupSortable() {
    // 기존에 연결된 게 있다면 끊고 다시 연결 (중복 방지)
    if (sortableBank) sortableBank.destroy();
    if (sortableAnswer) sortableAnswer.destroy();

    sortableBank = new Sortable(wordBankEl, {
        group: 'shared',
        animation: 150
    });

    sortableAnswer = new Sortable(answerBoxEl, {
        group: 'shared',
        animation: 150
    });
}

// 5. 정답 확인 및 다음 단계 이동
function checkAnswer() {
    // 현재 답안지에 있는 단어들을 합칩니다.
    const currentCards = answerBoxEl.querySelectorAll('.word-card');
    let userSentence = "";
    currentCards.forEach(card => userSentence += card.innerText);

    const currentQuiz = quizData[currentLevel];

    if (userSentence === currentQuiz.answer) {
        // 정답일 때
        resultMsg.style.color = "blue";
        resultMsg.innerText = "정답! 🎉 다음 문제로 넘어갑니다.";
        score++;
        
        // 1초 뒤에 다음 문제로 이동 (사용자가 정답 메시지를 볼 시간 줌)
        setTimeout(() => {
            nextLevel();
        }, 1000);

    } else {
        // 오답일 때
        resultMsg.style.color = "red";
        resultMsg.innerText = "땡! 다시 생각해보세요 😅";
    }
}

// 다음 단계로 넘어가는 함수
function nextLevel() {
    currentLevel++; // 레벨 1 증가

    // 아직 문제가 남았으면 로딩
    if (currentLevel < quizData.length) {
        loadQuestion();
    } else {
        // 문제가 다 끝났으면 종료 화면
        finishGame();
    }
}

// 게임 종료 함수
function finishGame() {
    questionEl.innerText = "모든 문제를 다 풀었습니다!";
    wordBankEl.innerHTML = "";
    answerBoxEl.innerHTML = `<h2>당신의 점수는: ${score} / ${quizData.length}</h2>`;
    document.querySelector('.check-btn').style.display = 'none'; // 버튼 숨기기
    progressEl.innerText = "완료";
}

// 게임 시작!
initGame();
