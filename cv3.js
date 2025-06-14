// script.js
document.querySelectorAll('.circular-progress').forEach(function(progress) {
    const percent = progress.getAttribute('data-percent');
    const circle = progress.querySelector('.progress-circle');
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percent / 100 * circumference);
    
    // Thiết lập strokeDasharray và strokeDashoffset
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = offset;
    circle.style.transition = 'stroke-dashoffset 1s ease-in-out'; // Thêm hiệu ứng chuyển động
});
