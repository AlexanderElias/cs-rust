/* CSS Example *
#uarrow {
      top: 40%;
      right: 1%;
      z-index: 90;
      font-size: 250%;
      cursor: pointer;
      position: fixed;
}
#darrow {
      top: 50%;
      right: 1%;
      z-index: 90;
      font-size: 250%;
      cursor: pointer;
      position: fixed;
}
HTML Example
<div id="uarrow">&#9650;</div>
<div id="darrow">&#9660;</div>
*/

function scrollControl(){

      var table = document.getElementsByTagName("table");
      var upArrow = document.getElementById('uarrow');
      var downArrow = document.getElementById('darrow');
      upArrow.style.display = 'none';
      downArrow.style.display = 'none';

      if (table.length > 1)
      {
            var scrollTimeout;

            /*
                  Return the current table based on the relative top or relative bottom position
                  This function requires option for either the the up arrow or down arrow
            */
            function getCurrentTable(option) {
                  var windowRelativeTop = window.pageYOffset;
                  var windowRelativeBottom = window.pageYOffset+window.innerHeight;

                  if (option === 'up')
                  {
                        for (var i = 0; i < table.length; i++)
                        {
                              var tableTop = table[i].offsetTop;
                              var tableBottom = table[i].offsetTop + table[i].offsetHeight;

                              if ( (windowRelativeBottom <= tableBottom) && (windowRelativeBottom >= tableTop) )
                              {
                                    return i;
                              }
                        }
                  }

                  if (option === 'down')
                  {
                        for (var i = 0; i < table.length; i++)
                        {
                              var tableTop = table[i].offsetTop;
                              var tableBottom = table[i].offsetTop + table[i].offsetHeight;

                              if ( (windowRelativeTop >= tableTop) && (windowRelativeTop <= tableBottom) )
                              {
                                    return i;
                              }
                        }
                  }
            }

            function toElement(tableNumber, yValue) {
                  console.log(tableNumber);

                  var destinationTableTop = table[tableNumber].offsetTop;
                  var destinationTableBottom = table[tableNumber].offsetTop + table[tableNumber].offsetHeight;

                  if ( (window.pageYOffset === destinationTableTop || window.pageYOffset <= destinationTableTop) && yValue < 0 )
                  {
                        //Going UP
                        clearTimeout(scrollTimeout);
                  }
                  else if ( (window.pageYOffset+window.innerHeight === destinationTableBottom || window.pageYOffset+window.innerHeight >= destinationTableBottom) && yValue > 0 )
                  {
                        //Going DOWN
                        clearTimeout(scrollTimeout);
                  }
                  else //if (window.pageYOffset+window.innerHeight != destinationTableBottom)
                  {
                        scrollTimeout = setTimeout(function() { window.scrollBy(0, yValue); toElement(tableNumber, yValue); }, 1);
                  }
            }


            /* UP Arrow Controls */
            function scrollUp(e){
                  if (window.pageYOffset != window.document.body.offsetTop)
                  {
                        var currentTable = getCurrentTable('up');
                        var previousTable = currentTable - 1;

                        if (e.keyCode === 38)
                        {
                              toElement(previousTable, -6);
                        }
                        else if(e.type === "click")
                        {
                              toElement(previousTable, -6);
                        }
                  }
            }
            upArrow.addEventListener('click', scrollUp);
            window.addEventListener('keydown', scrollUp);
            /* UP Arrow Controls */


            /* Down Arrow Controls */
            function scrollDown(e){
                  //Hide hint message
                  if (document.getElementById('message') != null) {
                        document.getElementById('message').style.display = 'none';
                  }

                  if ( (window.pageYOffset + window.innerHeight) != window.document.body.offsetHeight)
                  {
                        var currentTable = getCurrentTable('down');
                        var nextTable = currentTable + 1;

                        if (e.keyCode === 40)
                        {
                              toElement(nextTable, 6);
                        }
                        else if(e.type === "click")
                        {
                              toElement(nextTable, 6);
                        }
                  }
            }
            downArrow.addEventListener('click', scrollDown);
            window.addEventListener('keydown', scrollDown);
            /* Down Arrow Controls */


            function showHideArrows(){
                  var upArrow = document.getElementById('uarrow');
                  var downArrow = document.getElementById('darrow');
                  var tables = document.getElementsByTagName("table");

                  if (tables.length > 1)
                  {
                        if (window.pageYOffset >= tables[1].offsetTop - 100)
                        {
                              upArrow.style.display = "block";
                              downArrow.style.display = "block";
                        }
                        else if(window.pageYOffset <= tables[1].offsetTop - 100)
                        {
                              upArrow.style.display = "none";
                              downArrow.style.display = "none";
                        }

                        //Hide down arrow when end is reached
                        if (window.pageYOffset >= tables[tables.length-1].offsetTop)
                        {
                              downArrow.style.display = "none";
                        }
                  }
            }
            window.addEventListener('scroll', showHideArrows);
      }
}
window.addEventListener('DOMContentLoaded', scrollControl);
