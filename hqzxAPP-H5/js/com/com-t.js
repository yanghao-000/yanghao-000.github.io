document.body.addEventListener('touchstart', function (){});  


function judgeAnd(){
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
		$(".check-in-body ul li").each(function(){
			$(this).find("i").eq(0).css({"marginTop":"24%"});
		});
		$(".slide-nav").css({"width":"128%"});
		$(".course-list-box .item .right").each(function(){
			$(this).find("p").eq(0).css({"marginBottom":"0.2em"});
		});
	}
}