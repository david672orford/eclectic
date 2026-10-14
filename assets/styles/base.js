window.addEventListener("load", function() {
	console.log("loaded");
	if(document.location.hash == "") {
		let scroller = document.getElementsByClassName("scroller")[0];
		let pathName = document.location.pathname;
		window.addEventListener("unload", function() {
			console.log("unload");
			sessionStorage.setItem("scrollY_" + pathName, scroller.scrollTop.toString());
			});
		scroller.scrollTo(0, sessionStorage.getItem("scrollY_" + pathName));
		}
	});
