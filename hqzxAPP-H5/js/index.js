$(function(){
//	init();
$("#dome").mobiscroll().date({ 
        theme: 'ios7', 
        display: 'bottom',
        minDate: new Date(),
        maxDate: new Date(2030,1,1),   
        lang: 'zh',
        onSelect: function (valueText, inst) {
//      	alert(valueText+"=="+inst);
        	var selectedDate = inst.getVal();
        	console.log(selectedDate);
    	},
    	onBeforeShow: function (inst) {
    		console.log(inst.settings.wheels[0][0].values);
//          inst.settings.wheels[0].splice(2,1);//去掉“日”列表
        },
//      headerText: function (valueText) {
//          array = valueText.split('/');
//          return array[0] + "年"+array[1] + "月" ;//窗体标题头显示
//      },
    });
});

function init() {
    var curr = new Date().getFullYear();
    var opt = {
        'date': {
            preset: 'date',
            invalid: { daysOfWeek: [0, 6], daysOfMonth: ['5/1', '12/24', '12/25'] }
        },
        'datetime': {
            preset: 'datetime',
            minDate: new Date(2012, 3, 10, 9, 22),
            maxDate: new Date(2020, 7, 30, 15, 44),
            stepMinute: 5
        },
        'time': {
            preset: 'time'
        },
        'select': {
            preset: 'select'
        },
        'select-opt': {
            preset: 'select',
            group: true,
            width: 50
        }
    }

    $('.settings select').bind('change', function() {
        var demo = $('#demo').val();

        if (!demo.match(/select/i)) {
            $('.demo-test-' + demo).val('');
        }

        $('.demo-test-' + demo).scroller('destroy').scroller($.extend(opt[demo], {
            theme: "ios7",
            mode: "scroller",
            display: "bottom",
            animate: "slideup"
        }));
        $('.demo').hide();
        $('.demo-' + demo).show();
    });

    $('#demo').trigger('change');
	
	// debug this page
	$(".content").css({minHeight:$(window).height()-80});
 	
}