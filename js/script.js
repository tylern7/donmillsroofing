(function(){
  var t=document.querySelector('.nav__toggle'),m=document.getElementById('menu');
  function close(){t.setAttribute('aria-expanded','false');t.setAttribute('aria-label','Open menu');document.body.classList.remove('menu-open');}
  t.addEventListener('click',function(){var o=t.getAttribute('aria-expanded')==='true';t.setAttribute('aria-expanded',String(!o));t.setAttribute('aria-label',o?'Open menu':'Close menu');document.body.classList.toggle('menu-open',!o);});
  m.querySelectorAll('a').forEach(function(a){a.addEventListener('click',close);});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')close();});
  var f=document.querySelector('#contact form'),err=document.getElementById('checkErr');
  if(f){f.addEventListener('submit',function(e){if(!f.querySelector('input[type=checkbox]:checked')){e.preventDefault();err.hidden=false;f.querySelector('input[type=checkbox]').focus();}else{err.hidden=true;}});}
  var y=document.getElementById('yr');if(y)y.textContent=new Date().getFullYear();
})();
