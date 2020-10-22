var $word = $("div.bloc_text1");
var controller = new ScrollMagic.Controller();
var tween = new TimelineMax().add(TweenMax.to($word, 0.1, { display: 'block' }))					
var scene = new ScrollMagic.Scene({ triggerElement: "#start1", duration: 700, tweenChanges: true }).setTween(tween).addTo(controller);

var $word1 = $("p.text_demo");
var controller = new ScrollMagic.Controller();
var tween = new TimelineMax().add(TweenMax.to($word1, 0.1, { display: 'block' }))					
var scene = new ScrollMagic.Scene({ triggerElement: "#start2", duration: 700, tweenChanges: true }).setTween(tween).addTo(controller);

var $word2 = $("#text_decor0");
var controller = new ScrollMagic.Controller();
var tween = new TimelineMax().add(TweenMax.to($word2, 0.1, { display: 'block' }))					
var scene = new ScrollMagic.Scene({ triggerElement: "#start3", duration: 700, tweenChanges: true }).setTween(tween).addTo(controller);

var $word3 = $("#text_decor");
var controller = new ScrollMagic.Controller();
var tween = new TimelineMax().add(TweenMax.to($word3, 0.1, { display: 'block' }))					
var scene = new ScrollMagic.Scene({ triggerElement: "#start3", duration: 700, tweenChanges: true }).setTween(tween).addTo(controller);

var $word4 = $("button.button_up");
var controller = new ScrollMagic.Controller();
var tween = new TimelineMax().add(TweenMax.to($word4, 0.1, { opacity:'1',visibility:'visible' }))					
var scene = new ScrollMagic.Scene({ triggerElement: "#start4", duration: 100, tweenChanges: true }).setTween(tween).addTo(controller);