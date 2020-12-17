let img = document.querySelector('#img');
img.addEventListener ( 'click', myFunction);

 function myFunction() {
    window.scrollTo(0,0);
   // document.body.scrollTop = 0; // Instruction fonctionnelle juste sur Safari
  // document.documentElement.scrollTop = 0 // avec les autres navigateurs
}



