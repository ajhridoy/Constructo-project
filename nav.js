window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.getElementById("navbar2").style.position = "sticky";
    document.getElementById("navbar2").style.padding = "20px 0";
    document.getElementById("navbar2").style.width = "100%";
    document.getElementById("navbar2").style.top = "0";
    document.getElementById("navbar2").style.background = "#fff";
    // document.getElementById("navbar2").style.transition = ".4s";
    // document.getElementById("navbar2").style.boxShadow = "0 0 30px rgba(0,0,0,.075)";
    document.getElementById("navbar2").style.borderBottom = "none";
    document.getElementById("navbar2").style.zIndex = "99";
  } else {
    document.getElementById("navbar2").style.position = "initial";
    document.getElementById("navbar2").style.top = "0";
    document.getElementById("navbar2").style.padding = "38px 0";
    // document.getElementById("navbar2").style.background = "transparent";
    document.getElementById("navbar2").style.boxShadow = "none";
    document.getElementById("navbar2").style.borderBottom = "";
    document.getElementById("navbar2").style.zIndex = "99";
  }
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    
    // document.getElementById("navbar2").style.transition = ".4s";
    document.getElementById("navbar2").style.zIndex = "99";
    document.getElementById("navbar2").style.background = "#ffff";
  }
  else {
   
    document.getElementById("navbar2").style.zIndex = "99";
    
  }
}