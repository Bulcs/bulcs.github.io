window.onscroll = function() {scrollFunction()};

		function scrollFunction() {
		  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
		  	document.getElementById("header").style.paddingBottom = "20px";
		    document.getElementById("header").style.backgroundColor = "rgba(242, 242, 242, 1)" ;
		    document.getElementById("header").style.transition = "all 2s";
		    document.getElementById("header").style.boxShadow = "0 2px 6px 0px rgba(0,0,0,0.15) ";
		  } else {
		  	document.getElementById("header").style.boxShadow = "0 8px 6px -6px rgba(0,0,0,0)";
		  	document.getElementById("header").style.paddingBottom = "0px";
		    document.getElementById("header").style.backgroundColor = "rgba(0,0,0,0)";
		  }

		  if (document.getElementById('header-button').getAttribute('aria-expanded') == true) {
		  	document.getElementById("header").style.backgroundColor = "rgba(242, 242, 242, 1)";
		  }else{
		  	document.getElementById("header").style.backgroundColor = "rgba(0,0,0,0)";
		  }
		}