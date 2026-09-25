/* Zafe demo starter JS — tiny, no deps, deferred. */
(function(){
  document.documentElement.classList.remove('no-js');
  // header shadow on scroll
  var h=document.querySelector('.site-header');
  var onS=function(){h&&h.classList.toggle('is-scrolled',scrollY>8)};onS();addEventListener('scroll',onS,{passive:true});
  // mobile nav
  var mb=document.querySelector('.menu-btn'),mn=document.getElementById('mobile-nav');
  if(mb&&mn){mb.addEventListener('click',function(){var o=mn.classList.toggle('is-open');mb.setAttribute('aria-expanded',o)});
    mn.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){mn.classList.remove('is-open');mb.setAttribute('aria-expanded','false')})})}
  // reveal on scroll
  if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('is-in');io.unobserve(e.target)}})},{threshold:.12,rootMargin:'0px 0px -40px 0px'});
    document.querySelectorAll('.reveal').forEach(function(el,i){el.style.transitionDelay=(el.dataset.delay||0)+'ms';io.observe(el)})}
  else document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('is-in')});
  // ticker: duplicate content once for a seamless loop (copy is aria-hidden)
  document.querySelectorAll('.ticker__track').forEach(function(t){var n=t.children.length;t.innerHTML+=t.innerHTML;for(var i=n;i<t.children.length;i++)t.children[i].setAttribute('aria-hidden','true')});
  // carousels
  document.querySelectorAll('.carousel').forEach(function(c){var t=c.querySelector('.carousel__track');
    c.querySelectorAll('.carousel__btn').forEach(function(b){b.addEventListener('click',function(){t.scrollBy({left:(b.classList.contains('carousel__btn--prev')?-1:1)*t.clientWidth*.8,behavior:'smooth'})})})});
  // demo form: never sends anything
  document.querySelectorAll('form[data-demo]').forEach(function(f){f.addEventListener('submit',function(e){e.preventDefault();var m=f.querySelector('.form__msg');if(m){m.classList.add('is-on');m.focus()}})});
})();
