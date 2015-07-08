
// Updates all section tags to match window hieght
function autoSizeSections(){

      // Gets all sections and matches the window height
      var allSections = document.getElementsByTagName('section');

      for (i = 0; i < allSections.length; i++) {
            allSections[i].style.height = window.innerHeight + 'px';
      }
}

// On window resize
window.addEventListener("resize", function(){ autoSizeSections(); } );

// On window load
window.addEventListener('DOMContentLoaded', function(){ autoSizeSections(); });
