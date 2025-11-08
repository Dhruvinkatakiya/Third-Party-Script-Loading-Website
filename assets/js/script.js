
// script.js – Unoptimized version
document.addEventListener('DOMContentLoaded', function(){
  var button = document.querySelector('header button');
  button.addEventListener('mouseover', function(){
    this.style.backgroundColor = '#555';
    this.style.color = '#fff';
  });
  button.addEventListener('mouseout', function(){
    this.style.backgroundColor = 'orange';
    this.style.color = 'white';
  });

  // Simulate heavy computation on load
  window.addEventListener('load', function(){
    console.log("Simulating heavy load…");
    for(var i=0;i<5000000;i++){
      // Just loop to create blocking
      var a = Math.sqrt(i);
    }
    console.log("Load simulation done.");
  });

  // Contact alert
  function contactAlert(){
    alert('Thank you for clicking! We will reach you soon.');
  }
  var sections = document.querySelectorAll('section');
  sections.forEach(function(sec){
    sec.addEventListener('click', contactAlert);
  });
});
