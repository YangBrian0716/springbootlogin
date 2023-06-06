btnforget.addEventListener('click', e => {
console.log(exampleInputEmail.value);
	$.ajax({
		url: "forget",           // 資料請求的網址
		type: "POST",           // GET | POST | PUT | DELETE | PATCH
		contentType: "application/json; charset=utf-8",
		data: JSON.stringify({
			'forgetemail': exampleInputEmail.value,
		
		}),
		// 將物件資料(不用雙引號) 傳送到指定的 url
		dataType: "json",             // 預期會接收到回傳資料的格式： json | xml | html
		success: function(res) {      // request 成功取得回應後執行
		
			var loginJson = JSON.stringify(res);
			console.log(loginJson);
			console.log(loginJson[1]);
		if(loginJson[1]==="1"){
			
				alert("success");
				window.location.href="login.html";
			
		}else{
		alert("沒有信箱資料");
		}

			
			

			
		},error:function(jqXHR, textStatus, errorThrown){
			alert("error");
		}
	});
	});

