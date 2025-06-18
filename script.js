// Hiển thị progress bar khi cuộn tới phần kỹ năng
document.addEventListener("DOMContentLoaded", function () {
  const skillSection = document.querySelector("#skills");
  const progressBars = document.querySelectorAll(".progress");
  let animated = false;

  function animateProgressBars() {
    if (animated) return;

    const sectionTop = skillSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 100) {
      progressBars.forEach((bar) => {
        const targetWidth = bar.textContent.trim(); //
        bar.style.width = targetWidth;
      });
      animated = true;
    }
  }

  animateProgressBars(); // chạy ngay nếu đã thấy section
  window.addEventListener("scroll", animateProgressBars);
});
