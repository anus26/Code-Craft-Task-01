
  // const navabar =document.getElementsByClassName("navbar")

  // window.addEventListener("scroll ", function(){
  //   if (window.scrollY> 50) {
  //       navabar.classList.add("scrolled")
        
  //   }else{
  //       navabar.classList.remove('scrolled')
  //   }
  // })
  const  navabar=document.querySelector("nav")
  window.addEventListener("scroll",function(){
    if (window.screenY> 50) {
      navabar.classList.add("scrolled")
      
    }else{
      navabar.classList.remove("remove")
    }
  })
  