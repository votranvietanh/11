document.querySelector('#menu').innerHTML = ` <ul class="menu container-fluid" id="menu1">
<li><a href="./index.html">Homepage</a></li>
<li><a href="./service.html">Service</a></li>
<li><a href="./product.html">Product</a></li>
<li><a href="./introduce.html">Introduce</a></li>
<li><a href="">Liên hệ </a></li>
</ul>

<div class="bar">
<input type="text" name="" id="search"><i class="fa fa-search"></i>
<i id="open" onclick="openMenu()" class="fa fa-bars"></i>
<i id="close" onclick="closeMenu()" class="fa fa-bars"></i>
</div>`