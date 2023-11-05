const accBox = document.querySelectorAll(".accBox");
const accNumber = document.querySelectorAll(".accNumber");

accNumber.forEach(number => {
  number.onclick = function() {
    document.execCommand("copy");
  }

  number.addEventListener("copy", function(event) {
    event.preventDefault();
    if (event.clipboardData) {
      event.clipboardData.setData("text/plain", number.textContent);
      console.log(event.clipboardData.getData("text"))
      alert("ანგარიშის ნომერი დაკოპირებულია ♥ " + " " + event.clipboardData.getData("text"))
    }
  });
  
});