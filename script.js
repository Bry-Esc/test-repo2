document.addEventListener("DOMContentLoaded", function (event) {
  let myHeader = document.getElementById("header-id");

  // Wait 3 seconds, then display the header
  setTimeout(() => {
    myHeader.classList.remove("hidden");
  }, 3000);
});
