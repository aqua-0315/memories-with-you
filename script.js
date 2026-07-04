// ===== パスワード設定 =====
const correctPassword = "0712"; // ここに彼女の誕生日（4桁）を入力

// ===== 要素の取得 =====
const passwordScreen = document.getElementById("password-screen");
const passwordInput = document.getElementById("password-input");
const passwordButton = document.getElementById("password-button");
const passwordError = document.getElementById("password-error");

// ===== ボタンが押された時の処理 =====
passwordButton.addEventListener("click", () => {
  const inputValue = passwordInput.value;

  if (inputValue === correctPassword) {
    // 正解の場合：フェードアウトして消す
    passwordScreen.classList.add("fade-out");

    // フェードアウトのアニメーション終了後に画面を消す
    setTimeout(() => {
      passwordScreen.style.display = "none";
    }, 1000);

  } else {
    // 不正解の場合：エラーメッセージを表示
    passwordError.style.display = "block";
  }
});

// ===== 記念日カウント =====

// 出会った日・付き合った日を設定
const metDate = new Date(2026, 4, 24);     // 2026年5月24日（月は0始まりなので「5月」は4と書く）
const datingDate = new Date(2026, 5, 6);   // 2026年6月6日

// 今日の日付を取得
const today = new Date();

// 経過日数を計算する関数
function getDaysDiff(startDate, endDate) {
  const diffTime = endDate - startDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

// 計算結果をHTMLに反映
document.getElementById("days-since-met").textContent = getDaysDiff(metDate, today);
document.getElementById("days-since-dating").textContent = getDaysDiff(datingDate, today);

// ===== ギャラリースライダー =====
const gallerySliders = document.querySelectorAll(".gallery-slider");

gallerySliders.forEach((slider) => {
  const slides = slider.querySelectorAll(".gallery-slide");
  const dots = slider.querySelectorAll(".gallery-dot");
  const arrowLeft = slider.querySelector(".gallery-arrow-left");
  const arrowRight = slider.querySelector(".gallery-arrow-right");
  let current = 0;

  // 写真が1枚の場合は処理不要
  if (slides.length <= 1) return;

  function showSlide(index) {
    slides[current].classList.remove("active");
    dots[current].classList.remove("active");

    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;

    current = index;
    slides[current].classList.add("active");
    dots[current].classList.add("active");
  }

  arrowLeft.addEventListener("click", () => showSlide(current - 1));
  arrowRight.addEventListener("click", () => showSlide(current + 1));
});

// ===== 画像拡大表示（モーダル） =====
const galleryPhotos = document.querySelectorAll(".gallery-slide");
const imageModal = document.getElementById("image-modal");
const modalImage = document.getElementById("modal-image");

galleryPhotos.forEach((photo) => {
  photo.addEventListener("click", () => {
    modalImage.src = photo.src;
    imageModal.classList.add("active");
  });
});

imageModal.addEventListener("click", () => {
  imageModal.classList.remove("active");
});

// 各ギャラリー写真にクリックイベントを設定
galleryPhotos.forEach((photo) => {
  photo.addEventListener("click", () => {
    modalImage.src = photo.src;       // タップした写真の画像をモーダルにセット
    imageModal.classList.add("active"); // モーダルを表示
  });
});

// モーダルをタップしたら閉じる
imageModal.addEventListener("click", () => {
  imageModal.classList.remove("active");
});

// ===== スライドショー自動再生 =====
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let currentSlide = 0;

function showNextSlide() {
  slides[currentSlide].classList.remove("active");
  dots[currentSlide].classList.remove("active");

  currentSlide = (currentSlide + 1) % slides.length;

  slides[currentSlide].classList.add("active");
  dots[currentSlide].classList.add("active");
}

// 3秒ごとに showNextSlide を実行
setInterval(showNextSlide, 3000);

// ===== スクロールアニメーション =====
const fadeSections = document.querySelectorAll(".fade-in-section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // 画面内に入ったら visible クラスを追加
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.1  // 要素が10%見えたらアニメーション開始
});

// 各セクションを監視対象に登録
fadeSections.forEach((section) => {
  observer.observe(section);
});

// ===== ローディング画面（誕生日のみ表示） =====
const loadingScreen = document.getElementById("loading-screen");

// 今日の日付を取得
const todayMonth = new Date().getMonth() + 1; // 月（1〜12）
const todayDay = new Date().getDate();         // 日（1〜31）

// 彼女の誕生日を設定（月・日）
const birthdayMonth = 7;  // ← 誕生日の月に変更
const birthdayDay = 5;   // ← 誕生日の日に変更

if (todayMonth === birthdayMonth && todayDay === birthdayDay) {
  // 誕生日の場合：ローディング画面を表示
  setTimeout(() => {
    loadingScreen.classList.add("fade-out");
    setTimeout(() => {
      loadingScreen.style.display = "none";
    }, 1000);
  }, 2500);
} else {
  // 誕生日以外：ローディング画面を即座に非表示
  loadingScreen.style.display = "none";
}