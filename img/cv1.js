// Tạo hiệu ứng loading mượt
document.addEventListener("DOMContentLoaded", function () {
  const cvWrapper = document.querySelector(".cv-wrapper");
  cvWrapper.style.opacity = 0;
  setTimeout(() => {
    cvWrapper.style.transition = "opacity 1.5s ease-in-out";
    cvWrapper.style.opacity = 1;
  }, 500);
});

// Thêm dark mode chuyên nghiệp
const darkModeToggle = document.createElement("button");
darkModeToggle.textContent = "🌙";
darkModeToggle.classList.add("dark-mode-toggle");
document.body.appendChild(darkModeToggle);

// Thêm CSS động luôn (đẳng cấp 5 năm nè)
const style = document.createElement("style");
style.innerHTML = `
  .dark-mode-toggle {
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: #333;
    color: #fff;
    border: none;
    padding: 12px 20px;
    border-radius: 50px;
    font-size: 18px;
    cursor: pointer;
    z-index: 999;
    transition: all 0.3s;
  }
  .dark-mode-toggle:hover {
    background-color: #555;
  }
  body.dark-mode {
    background: linear-gradient(135deg, #2c3e50, #4ca1af);
    color: #ecf0f1 !important;
  }
  body.dark-mode .cv-wrapper {
    background-color: #34495e !important;
    box-shadow: 0 0 40px rgba(0,0,0,0.6);
  }
  body.dark-mode h1, 
  body.dark-mode h2, 
  body.dark-mode h3, 
  body.dark-mode p, 
  body.dark-mode li {
    color: #ecf0f1 !important;
  }
`;
document.head.appendChild(style);

// Xử lý chuyển dark mode
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Scroll mượt như giới siêu lập trình viên
document.documentElement.style.scrollBehavior = "smooth";

// Thêm hiệu ứng khi hover skill
const skills = document.querySelectorAll(".skills .skill p");
skills.forEach((skill) => {
  skill.addEventListener("mouseover", () => {
    skill.style.transform = "scale(1.05)";
    skill.style.transition = "transform 0.3s";
  });
  skill.addEventListener("mouseout", () => {
    skill.style.transform = "scale(1)";
  });
});

// Mở rộng hiệu ứng cho nút heart
const hearts = document.querySelectorAll(".heart-btn");
hearts.forEach((heart) => {
  heart.addEventListener("click", () => {
    heart.classList.toggle("liked");
  });
});
