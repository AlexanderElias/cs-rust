
function addCSS(url) {

      var head = document.getElementsByTagName('head')[0],
      link = document.createElement('link');
      link.type = 'text/css';
      link.rel = 'stylesheet';
      link.href = url;
      head.appendChild(link);
 }
 window.addEventListener('DOMContentLoaded', function(){
      addCSS('/slide-menu/menu.css');
      var menu = document.getElementById('menu');
      menu.style.display = 'none';
 });


function menu() {

      var openIcon = document.getElementById('openIcon');
      var closeIcon = document.getElementById('closeIcon');
      var menu = document.getElementById('menu');
      var list = document.getElementById('list');
      var media = document.getElementById('media');
      var blurWrap = document.getElementById('blurWrap');

      menu.style.display = 'block';

      function openMenu()
      {
            openIcon.style.display = 'none';
            closeIcon.style.display = 'block';
            blurWrap.className = 'blur';
            menu.style.left = '0px';
            media.style.opacity = '1';

            function expand()
            {
                  if (list.offsetWidth < menu.offsetWidth) {
                        setTimeout(function(){
                              list.style.width = list.offsetWidth + 3 + 'px';
                              media.style.width = media.offsetWidth + 3 + 'px';
                              expand();
                        }, 10);
                  }
            }
            setTimeout(function(){expand();}, 700);

      }
      openIcon.addEventListener('click', openMenu);


      function closeMenu()
      {
            openIcon.style.display = 'block';
            closeIcon.style.display = 'none';
            menu.style.left = - menu.offsetWidth + openIcon.offsetWidth  + 20 +  'px';

            setTimeout(function(){
                  blurWrap.className = 'unBlur';
            }, 400);
            function collpase()
            {
                  if (list.offsetWidth > menu.offsetWidth - 72)
                  {
                        setTimeout(function(){
                              list.style.width = list.offsetWidth - 3 + 'px';
                              media.style.width = media.offsetWidth - 3 + 'px';
                              collpase();
                        }, 10);
                  }
                  else
                  {
                        setTimeout(function () {
                              media.style.opacity = '0';
                        }, 500);
                  }
            }
            collpase();

      }
      closeIcon.addEventListener('click', closeMenu);


      function setPosition()
      {
            //This variable must be after openIcon
            menu.style.left = - menu.offsetWidth + openIcon.offsetWidth + 20 + 'px';
            list.style.width = menu.offsetWidth - 72 + 'px';
            media.style.width = menu.offsetWidth - 72 + 'px';
      }
      setPosition();

      window.addEventListener('resize', function()
      {
            closeMenu()
            setPosition();
      });
}
window.addEventListener('load', menu);
