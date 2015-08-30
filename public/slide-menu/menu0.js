
function addCSS(url) {
      var head = document.getElementsByTagName('head')[0],
      link = document.createElement('link');
      link.type = 'text/css';
      link.rel = 'stylesheet';
      link.href = url;
      head.appendChild(link);
 }
 window.addEventListener('DOMContentLoaded', function(){
       addCSS('/slide-menu/menu.css')
 });

function menu() {

      var openIcon = document.getElementById('openIcon');
      var closeIcon = document.getElementById('closeIcon');
      var menu = document.getElementById('menu');
      var list = document.getElementById('list');
      var media = document.getElementById('media');
      var blurWrap = document.getElementById('blurWrap');

      function openMenu()
      {
            openIcon.style.display = 'none';
            closeIcon.style.display = 'block';

            blurWrap.classList.add('blur');

            function expand()
            {
                  if (list.offsetWidth < menu.offsetWidth) {
                        setTimeout(function(){
                              list.style.width = list.offsetWidth + 3 + 'px';
                              expand();
                        }, 10);
                  }
                  else
                  {
                        menu.style.left = '0px';
                  }
            }
            expand();
      }
      openIcon.addEventListener('click', openMenu);


      function closeMenu()
      {
            openIcon.style.display = 'block';
            closeIcon.style.display = 'none';
            menu.style.left = - menu.offsetWidth + openIcon.offsetWidth  + 20 +  'px';

            blurWrap.classList.remove('blur');

            function collpase()
            {
                  if (list.offsetWidth > menu.offsetWidth - 72)
                  {
                        setTimeout(function(){
                              list.style.width = list.offsetWidth - 3 + 'px';
                              collpase();
                        }, 10);
                  }
            }
            collpase();
      }
      closeIcon.addEventListener('click', closeMenu);


      function setPosition()
      {
            //Mobile Screen optimization
            if (window.innerWidth <= 360 || window.innerHeight <= 360)
            {
                  for (i=0; i < list.children.length; i++)
                  {
                        list.children[i].style.fontSize = '180%';
                        //list.children[i].style.padding = '3%';
                  }
            }
            if (window.innerWidth < 750)
            {
                  menu.style.width = '80%';
                  list.style.textAlign = 'left';
            }
            //Mobile Screen optimization

            //This variable must be after openIcon
            menu.style.left = - menu.offsetWidth + openIcon.offsetWidth + 20 + 'px';
            list.style.width = menu.offsetWidth - 72 + 'px';
      }
      setPosition();

      window.addEventListener('resize', function()
      {
            closeMenu()
            setPosition();
      });
}
window.addEventListener('load', menu);
