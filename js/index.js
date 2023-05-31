window.addEventListener('scroll', function () {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 500) {
        document.querySelector('.back-to-top').classList.remove('hidden');
    } else {
        document.querySelector('.back-to-top').classList.add('hidden');
    }
});
window.onload = function() {
    document.querySelector('.back-to-top').addEventListener('click', function () {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    
        let delay = 5;
        let time = 200;
        let step = Math.ceil(scrollTop * delay / time);
    
        let timer = setInterval(function () {
            scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            if (scrollTop - step <= 0) {
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;
                clearInterval(timer);
            } else {
                document.documentElement.scrollTop = scrollTop - step;
                document.body.scrollTop = scrollTop - step;
            }
        }, delay);
    });
}
