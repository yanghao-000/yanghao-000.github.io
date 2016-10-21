$(function(){
	judgeAndFly();
});

function judgeAndFly(){
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
		$(".item").each(function(){
			$(this).find(".right p").eq(3).css({"bottom":"2em"});
		});
	}
}