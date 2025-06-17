// Cuộn mượt mà khi nhấp vào các liên kết trong navbar
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Ngăn chặn hành động mặc định
        const targetId = this.getAttribute('href'); // Lấy ID của phần mục tiêu
        const targetElement = document.querySelector(targetId); // Tìm phần mục tiêu
        // Cuộn mượt mà đến phần mục tiêu
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Thông báo khi nhấp vào nút "Quay lại trang chủ"
document.querySelector('.back-home-btn').addEventListener('click', function() {
    alert('Bạn đang quay lại trang chủ!');
});

// Thay đổi màu sắc của navbar khi cuộn trang
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) { // Nếu cuộn xuống hơn 50px
        navbar.style.backgroundColor = '#003f66'; // Màu nền mới
    } else {
        navbar.style.backgroundColor = '#005f99'; // Màu nền ban đầu
    }
});

// Hiệu ứng hiển thị cho các phần khi cuộn đến
const sections = document.querySelectorAll('section');
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 // Khi 10% phần tử xuất hiện trong viewport
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Thêm lớp 'visible' khi phần tử xuất hiện
            observer.unobserve(entry.target); // Ngừng theo dõi phần tử
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section); // Theo dõi từng phần
});

// Hàm tạo bông tuyết
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.innerHTML = '❄'; // Biểu tượng bông tuyết
    // Đặt vị trí ngẫu nhiên cho bông tuyết
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // Thời gian rơi ngẫu nhiên
    document.body.appendChild(snowflake);
    // Xóa bông tuyết sau khi nó rơi xuống
    snowflake.addEventListener('animationend', () => {
        snowflake.remove();
    });
}
// Tạo bông tuyết mỗi 300ms
setInterval(createSnowflake, 300);
