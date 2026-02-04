// 1. 문서에 있는 모든 '.card'를 다 찾아옵니다. (배열처럼 담김)
const cards = document.querySelectorAll('.card');

// 2. 찾아온 카드들 각각(forEach)에게 명령을 심어줍니다.
cards.forEach(function(card) {
    card.addEventListener('click', function() {
        // "지금 클릭된 바로 그 카드(this)"만 뒤집어라!
        this.classList.toggle('is-flipped');
    });
});

