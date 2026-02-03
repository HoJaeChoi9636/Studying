// 1. 드래그 앤 드롭 기능 켜기 (SortableJS 라이브러리 사용)
const wordBank = document.getElementById('word-bank');
const answerBox = document.getElementById('answer-box');

// 'word-bank'를 드래그 가능하게 만듦
new Sortable(wordBank, {
    group: 'shared', // 두 박스가 서로 단어를 공유하게 함
    animation: 150, // 부드러운 이동 애니메이션 (ms)
});

// 'answer-box'를 드래그 가능하게 만듦
new Sortable(answerBox, {
    group: 'shared',
    animation: 150,
});


// 2. 정답 확인 함수 (버튼 누르면 실행)
function checkAnswer() {
    // answer-box 안에 있는 모든 단어 카드를 가져옵니다.
    const currentCards = answerBox.querySelectorAll('.word-card');
    
    // 카드들의 글자를 합쳐서 문장을 만듭니다.
    let userSentence = "";
    currentCards.forEach(card => {
        userSentence += card.innerText; 
    });

    // 정답 체크 (공백 없이 글자만 비교)
    // 정답: 저는 밥을 먹어요 -> "저는밥을먹어요"
    const resultMsg = document.getElementById('result-msg');

    if (userSentence === "저는밥을먹어요") {
        resultMsg.style.color = "blue";
        resultMsg.innerText = "정답입니다! 참 잘했어요 🎉";
        
        // (선택) 정답이면 버튼 색을 파란색으로 변경
        document.querySelector('.check-btn').style.backgroundColor = "#4c6ef5";
    } else {
        resultMsg.style.color = "red";
        resultMsg.innerText = "다시 시도해보세요 땡! ❌";
    }
}
