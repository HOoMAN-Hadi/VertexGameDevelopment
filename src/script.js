const icons = document.querySelectorAll(".moving-icon");
let currentIndex = 0;

function animateIcon() {
  // افزودن انیمیشن لرزش به آیکون فعلی
  icons[currentIndex].classList.add("animate-shake");

  // پس از 1 ثانیه انیمیشن را متوقف می‌کنیم
  setTimeout(() => {
    icons[currentIndex].classList.remove("animate-shake");
  }, 1000);

  // حرکت به آیکون بعدی با تاخیر 5 ثانیه
  currentIndex = (currentIndex + 1) % icons.length;
}

// هر 5 ثانیه یکبار انیمیشن را اجرا می‌کند
setInterval(animateIcon, 4000);

// اجرای اولیه انیمیشن
animateIcon();

const menu = document.querySelectorAll(".moving-item");
let menuCurrentIndex = 0;

function animateMenu() {
  // افزودن انیمیشن لرزش به آیکون فعلی
  menu[menuCurrentIndex].classList.add("animate-movingmenu");

  // پس از 1 ثانیه انیمیشن را متوقف می‌کنیم
  setTimeout(() => {
    menu[menuCurrentIndex].classList.remove("animate-movingmenu");
  }, 1000);

  // حرکت به آیکون بعدی با تاخیر 5 ثانیه
  menuCurrentIndex = (menuCurrentIndex + 1) % menu.length;
}

// هر 5 ثانیه یکبار انیمیشن را اجرا می‌کند
setInterval(animateMenu, 7000);
