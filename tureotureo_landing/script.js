/* 전화번호 설정: 아래 빈 문자열에 실제 번호를 입력하세요. 예: "01012345678" */
const PHONE_NUMBER = "01048106897";
document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
  const status = document.getElementById("phone-status");
  const number = PHONE_NUMBER.replace(/[^\d+]/g, "");
  document.querySelectorAll("[data-phone-link]").forEach((link) => {
    if (number.length >= 9) {
      link.href = `tel:${number}`;
      link.removeAttribute("aria-disabled");
    } else {
      link.href = "#contact";
      link.setAttribute("aria-disabled", "true");
      link.addEventListener("click", (event) => {
        event.preventDefault();
        if (status) {
          status.textContent = "전화번호가 아직 설정되지 않았습니다. script.js의 PHONE_NUMBER에 실제 번호를 입력하세요.";
          status.classList.add("phone-status-warning");
        } else alert("전화번호가 아직 설정되지 않았습니다.");
      });
    }
  });
});
