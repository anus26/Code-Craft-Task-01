 const  navabar=document.querySelector("nav")
  const menuIcon=document.querySelector(".menu-icon")
  const navLinks=document.querySelector('.nav-links')
  window.addEventListener("scroll",function(){
    if (window.screenY> 50) {
      navabar.classList.add("scrolled")
      
    }else{
      navabar.classList.remove("remove")
    }
  })
  menuIcon.addEventListener('click',()=>{
    navLinks.classList.toggle('active')
  })