$httpClient.post({
	url: 'http://127.0.0.1:6171/v1/dns/flush',
	headers: {
		'X-Key': 'surgepasswd'
	}
},function(error, response, data) {
    if(error){
        console.log(error);
        $notification.post('刷新DNS失败！','执行脚本->'+$script.name,error);
    }else{
        $notification.post('刷新DNS成功！','执行脚本->'+$script.name,data);
    }
	$done();
});