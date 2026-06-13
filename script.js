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