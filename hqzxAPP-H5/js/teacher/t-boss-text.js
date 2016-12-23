$(function(){
	setCss();
});

function setCss(){
	var browser={
  	  	versions:function(){
            var u = navigator.userAgent, app = navigator.appVersion;
            return {
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, 
            };
        }(),
        language:(navigator.browserLanguage || navigator.language).toLowerCase()
	}
	
	if(browser.versions.android){
		$(".boss-box .t-h1 .t-p2").css({"height":"3.4em"});
	}else{
		$(".boss-box .t-h1 .t-p1").css({"height":"3.2em","width":"3.2em"});
	}
}
