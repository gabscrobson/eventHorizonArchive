var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } 
  
  else {
    document.getElementById("navbar").style.top = "-70px";
  }
  
  if(prevScrollpos != currentScrollPos) {
    document.getElementById("menuToggle").checked = false;
  }

  prevScrollpos = currentScrollPos;
}

