document.addEventListener('DOMContentLoaded', function () {
    const block1 = document.querySelectorAll('.block-1');
    const block2 = document.querySelectorAll('.block-2');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__pulse');
                observer.unobserve(entry.target);
            }
        });
    });
    const observer2 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__zoomIn');
                observer.unobserve(entry.target);
            }
        });
    });

    block1.forEach(block => {
        observer.observe(block);
    });
    block2.forEach(block => {
        observer2.observe(block);
    });
});