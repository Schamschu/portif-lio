document.addEventListener("DOMContentLoaded", function () {
    const btnCopy = document.getElementById("btnCopy");
  
    if (btnCopy) {
      btnCopy.addEventListener("click", function () {
        const email = "guilhermescvh@gmail.com";
        navigator.clipboard.writeText(email).then(() => {
          alert("E-mail copiado para a área de transferência!");
        });
      });
    }
  });
  
