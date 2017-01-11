var _isBridgeRegisterHandler = false;
/**
 * 交互WebView
 * @param webViewName   androidWebView名字
 * @param webViewMethod 方法名
 * @param pcallback 回调函数
 * @param paramsAndroid 参数param0
 */
function webViewMethod( webViewName,webViewMethod, pcallback ,paramsAndroid , paramsIos ) {
        try {
            var androidMethod = null;
            if(paramsAndroid == null){
                androidMethod = "window."+webViewName+"."+webViewMethod + "()";
            }else{
                androidMethod = "window."+webViewName+"."+webViewMethod + "(" + paramsAndroid + ")";
            }
            //alert(androidMethod);
            var webViewParams = eval(androidMethod);
            if($.isFunction(pcallback)){
                pcallback(webViewParams);
            }
        }
        catch (err) {
        }

    window.onerror = function (err) {

    }

    function connectWebViewJavascriptBridge(callback) {
        if (window.WebViewJavascriptBridge) {
            callback(WebViewJavascriptBridge);
        } else {
            document.addEventListener('WebViewJavascriptBridgeReady', function () {
                callback(WebViewJavascriptBridge);
            }, false)
        }
    }

    connectWebViewJavascriptBridge(function (bridge) {
        var uniqueId = 1;

        function log(message, data) {

        }
        if(!_isBridgeRegisterHandler){
            _isBridgeRegisterHandler = true;


            bridge.init(function (message, responseCallback) {
                var data = {'Javascript Responds': 'Wee!'};
                responseCallback(data);
            });
            bridge.registerHandler('testJavascriptHandler', function (data, responseCallback) {
                var responseData = {'Javascript Says': 'Right back atcha!'};
                responseCallback(responseData);
            });
        }


            try {
                bridge.callHandler(webViewMethod, paramsIos, function (response) {
                    if ($.isFunction(pcallback)) {
                        pcallback(response);
                    }
                });
            } catch (e) {
            }
    });

}

function _SS(s){
    return "'" + s + "'";
}
