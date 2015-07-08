
function scrollControl(){

      var upArrow = document.getElementById('uarrow');
      var downArrow = document.getElementById('darrow');
      

      function scrollUp(e){
            var section = document.getElementsByTagName('section')[0];
            var sectionHeight = section.offsetHeight;

            if (!screen.top) {
                  if (e.keyCode === 38){

                        window.scrollBy(0, - sectionHeight +40);
                        //need +48 if mozila
                  } else if(e.type === "click") {

                        window.scrollBy(0, - sectionHeight);
                  }
            }
      }//scrollUp()

      upArrow.addEventListener('click', scrollUp);
      window.addEventListener('keydown', scrollUp);


      function scrollDown(e){
            var section = document.getElementsByTagName('section')[0];
            var sectionHeight = section.offsetHeight;

            if (!screen.bottom) {
                  if (document.getElementById('hint') != null) {
                        document.getElementById('hint').style.display = 'none';
                  }

                  if (e.keyCode === 40){
                        window.scrollBy(0, sectionHeight -40);
                        //need -48 if mozila

                  } else if(e.type === "click") {
                        window.scrollBy(0, sectionHeight);
                  }
            }
      }//scrollDown()

      downArrow.addEventListener('click', scrollDown);
      window.addEventListener('keydown', scrollDown);


}

window.addEventListener('DOMContentLoaded', scrollControl);
