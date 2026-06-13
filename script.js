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