document.querySelectorAll('.option').forEach(option => {
    option.addEventListener('click', function() {
        const vote = this.getAttribute('data-vote');
        document.getElementById('result').innerText = `You voted for ${vote}!`;
        animateVote(this);
    });
});

function animateVote(element) {
    element.style.transform = 'scale(1.5)';
    setTimeout(() => {
        element.style.transform = 'scale(1)';
    }, 500);
}
