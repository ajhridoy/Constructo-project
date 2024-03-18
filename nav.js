window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.getElementById("navbar2").style.position = "sticky";
    document.getElementById("navbar2").style.padding = "20px 0";
    document.getElementById("navbar2").style.width = "100%";
    document.getElementById("navbar2").style.top = "0";
    document.getElementById("navbar2").style.background = "#fff";
    document.getElementById("dropdown-menu1").style.top = "57px"
    document.getElementById("dropdown-menu2").style.top = "57px"
    document.getElementById("dropdown-menu3").style.top = "57px"
    // document.getElementById("navbar2").style.transition = ".4s";
    // document.getElementById("navbar2").style.boxShadow = "0 0 30px rgba(0,0,0,.075)";
    document.getElementById("navbar2").style.borderBottom = "none";
    document.getElementById("navbar2").style.zIndex = "99";
  } else {
    document.getElementById("navbar2").style.position = "initial";
    document.getElementById("navbar2").style.top = "0";
    document.getElementById("dropdown-menu1").style.top = "140px"
    document.getElementById("dropdown-menu2").style.top = "140px"
    document.getElementById("dropdown-menu3").style.top = "140px"
    document.getElementById("navbar2").style.padding = "38px 0";
    // document.getElementById("navbar2").style.background = "transparent";
    document.getElementById("navbar2").style.boxShadow = "none";
    document.getElementById("navbar2").style.borderBottom = "";
    document.getElementById("navbar2").style.zIndex = "999999";
  }
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    
    // document.getElementById("navbar2").style.transition = ".4s";
    document.getElementById("navbar2").style.zIndex = "99";
    document.getElementById("dropdown-menu1").style.top = "57px"
    document.getElementById("dropdown-menu2").style.top = "57px"
    document.getElementById("dropdown-menu3").style.top = "57px"
    document.getElementById("navbar2").style.background = "#ffff";
  }
  else {
   
    document.getElementById("navbar2").style.zIndex = "99";
    document.getElementById("dropdown-menu1").style.top = "140px"
    document.getElementById("dropdown-menu2").style.top = "140px"
    document.getElementById("dropdown-menu3").style.top = "140px"
    
  }
}