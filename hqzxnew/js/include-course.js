$(function(){
	detateTabBorder();
});

function detateTabBorder(){
	$(".include-course-cont table").each(function(){
		$(this).find("tr").first().find("th").css({"borderTop":"none"});
		$(this).find("tr").last().find("td").css({"borderBottom":"none"});
		$(this).find("tr").each(function(){
			$(this).find("td,th").first().css({"borderLeft":"none"});
			$(this).find("td,th").last().css({"borderRight":"none"});
		});
	});
}
