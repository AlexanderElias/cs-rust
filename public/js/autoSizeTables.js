
// Updates all table tags to match window hieght
function autoSizeTables() {

      var table = document.querySelectorAll('table');

      function thb(num)
      {
            if (table[num].children.length >= 2)
            {
                  table[num].children[0].style.height = '38%';
                  table[num].children[1].style.height = '60%';
            }
      };


      if (window.innerHeight > 568)
      {
            for (i = 0; i < table.length; i++) {
                  //One px is need for scrollControl
                  table[i].style.height = window.innerHeight + 2 + 'px';
                  table[i].style.width = '100%';
                  thb(i);
            }
      }
      else
      {
            for (i = 0; i < table.length; i++)
            {
                  table[i].style.height = window.innerHeight + (window.innerHeight / 2) + 'px';
                  table[i].style.width = '100%';
                  thb(i);
            }
      }
};

// On window resize
window.addEventListener("resize", autoSizeTables);

// On window load
window.addEventListener('DOMContentLoaded', autoSizeTables);
