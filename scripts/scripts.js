window.onscroll = function() {scrollFunction()};

const $html = document.querySelector('html')
const $checkbox = document.querySelector('#switch')

$checkbox.addEventListener('change',function(){
	$html.classList.toggle('dark-mode')
})

var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #A81EEB}";
        document.body.appendChild(css);
    };

		function scrollFunction() {
		  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200 || (document.getElementById('header-button').getAttribute('aria-expanded') == true && window.getComputedStyle(document.getElementById("header-button")).display != "none")) {
		  	document.getElementById("header").style.paddingBottom = "20px";
		    document.getElementById("header").style.backgroundColor = "rgba(242, 242, 242, 1)" ;
		    document.getElementById("header").style.transition = "all 2s";
		    document.getElementById("header").style.boxShadow = "0 2px 6px 0px rgba(0,0,0,0.15) ";
		  } else {
		  	document.getElementById("header").style.boxShadow = "0 8px 6px -6px rgba(0,0,0,0)";
		  	document.getElementById("header").style.paddingBottom = "0px";
		    document.getElementById("header").style.backgroundColor = "transparent";
		  }
		}

