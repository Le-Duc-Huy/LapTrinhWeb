// cv1.js - FULL CHUẨN THEO YÊU CẦU

// Hàm tạo vòng tròn kỹ năng (Skills)
// Danh sách các kỹ năng
document.addEventListener("DOMContentLoaded", () => {
  const circles = document.querySelectorAll(".circular-progress");

  circles.forEach((circle) => {
    const value = parseFloat(circle.dataset.progress);
    const ring = circle.querySelector(".progress-ring-fill");
    const radius = ring.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    ring.style.strokeDasharray = `${circumference} ${circumference}`;
    ring.style.strokeDashoffset = circumference;

    // Tính toán phần trăm
    const offset = circumference - (value / 5) * circumference;
    ring.style.strokeDashoffset = offset;
  });
});

// ===============================================
// Phần animation cho Career Goals và Languages (tăng dần thanh năng lượng)

document.addEventListener("DOMContentLoaded", () => {
  // Career Goals Progress
  const progressBars = document.querySelectorAll(".progress-fill");
  progressBars.forEach((bar) => {
    const percentage = bar.getAttribute("data-percentage");
    bar.style.width = percentage + "%";
  });

  // Language Bars Progress
  const languageBars = document.querySelectorAll(".language-fill");
  languageBars.forEach((bar) => {
    const percentage = bar.getAttribute("data-percentage");
    bar.style.width = percentage + "%";
  });
});
document.querySelectorAll(".progress-bar-dino").forEach(function (bar) {
  const percent = parseInt(bar.getAttribute("data-percent"));
  const fill = bar.querySelector(".progress-fill");
  const head = bar.querySelector(".dino-head");
  const label = bar.querySelector(".progress-percent");
  fill.style.width = percent + "%";

  // Độ rộng tổng thể của thanh progress-bar-dino
  const totalWidth = bar.offsetWidth;

  // Tính vị trí left cho dino-head và số %, đảm bảo không bị tràn
  let px = ((totalWidth - 40) * percent) / 100; // 40 = width of .dino-head
  px = Math.max(0, Math.min(px, totalWidth - 40)); // Giới hạn trong thanh

  head.style.left = px + "px";
  label.style.left = px + 36 + "px"; // Hiện số % ngay sau đầu khủng long (có thể chỉnh)
});
document.querySelectorAll(".language-bar-dino").forEach(function (bar) {
  const percent = parseInt(bar.getAttribute("data-percent"));
  const fill = bar.querySelector(".language-fill");
  const foot = bar.querySelector(".footprint");
  const label = bar.querySelector(".language-percent");
  fill.style.width = percent + "%";

  // Độ rộng của thanh
  const totalWidth = bar.offsetWidth;

  // Vị trí vết chân (căn chỉnh để không tràn thanh)
  let px = ((totalWidth - 32) * percent) / 100; // 32 = width footprint
  px = Math.max(0, Math.min(px, totalWidth - 32));

  foot.style.left = px + "px";
  label.style.left = px + 28 + "px"; // Hiện số % sát ngay dấu chân
});
