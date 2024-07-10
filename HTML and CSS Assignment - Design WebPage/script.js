document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.getElementById("sidebar");
    const openBtn = document.getElementById("openBtn");
    const insideCloseBtn = document.getElementById("insideCloseBtn");
  
    openBtn.addEventListener("click", () => {
      sidebar.style.left = "0";
      openBtn.classList.add("hidden");
    });
  
    insideCloseBtn.addEventListener("click", () => {
      sidebar.style.left = "-250px";
      openBtn.classList.remove("hidden");
    });
  });
  