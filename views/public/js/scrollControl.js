
function scrollControl(){

      var upArrow = document.getElementById('uarrow');
      var downArrow = document.getElementById('darrow');
      

      function scrollUp(e){

            if (!screen.top) {
                  if (e.keyCode === 38){

                        window.scrollBy(0, - window.innerHeight + 40);
                        //need +48 if mozila
                  } else if(e.type === "click") {

                        window.scrollBy(0, - window.innerHeight);
                  }
            }
      }//scrollUp()

      upArrow.addEventListener('click', scrollUp);
      window.addEventListener('keydown', scrollUp);


      function scrollDown(e){

            if (!screen.bottom) {
                  if (document.getElementById('message') != null) {
                        document.getElementById('message').style.display = 'none';
                  }

                  if (e.keyCode === 40){
                        window.scrollBy(0,  window.innerHeight -40);
                        //need -48 if mozila

                  } else if(e.type === "click") {
                        window.scrollBy(0,  window.innerHeight);
                  }
            }
      }//scrollDown()

      downArrow.addEventListener('click', scrollDown);
      window.addEventListener('keydown', scrollDown);


}

window.addEventListener('DOMContentLoaded', scrollControl);
