document.addEventListener("DOMContentLoaded", function() {
    updateDOM();
  });

  function updateDOM (){
    let ptext = document.querySelector("#text")
    ptext.innerHTML = "This is really cool!";
  }