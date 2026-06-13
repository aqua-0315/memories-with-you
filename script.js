// ===== パスワード設定 =====
const correctPassword = "0700"; // ここに彼女の誕生日（4桁）を入力

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

// ===== 画像拡大表示（モーダル） =====
const galleryPhotos = document.querySelectorAll(".gallery-photo");
const imageModal = document.getElementById("image-modal");
const modalImage = document.getElementById("modal-image");

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
  // 現在の写真・丸印から active クラスを外す
  slides[currentSlide].classList.remove("active");
  dots[currentSlide].classList.remove("active");

  // 次の写真の番号を計算（最後まで行ったら最初に戻る）
  currentSlide = (currentSlide + 1) % slides.length;

  // 次の写真・丸印に active クラスを付ける
  slides[currentSlide].classList.add("active");
  dots[currentSlide].classList.add("active");
}

// 3秒ごとに showNextSlide を実行
setInterval(showNextSlide, 3000);