var jshover=function(){var f=document.getElementById("horizontal-multilevel-menu");if(!f){return}var e=f.getElementsByTagName("li");for(var d=0;d<e.length;d++){e[d].onmouseover=function(){this.className+=" jshover"};e[d].onmouseout=function(){this.className=this.className.replace(new RegExp(" jshover\\b"),"")}}};if(window.attachEvent){window.attachEvent("onload",jshover)};