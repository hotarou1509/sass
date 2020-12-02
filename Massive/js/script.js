/* STICKY NAVBAR */

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

/* ANIMATED SKILL BARS */

window.addEventListener('load',()=>{
    let progressBar = document.querySelectorAll('.progress__bar');
    let values = [
        '80%',
        '90%',
        '75%'
    ];
    progressBar.forEach((per,index)=>{
        per.style.width = values[index];
    });
});
