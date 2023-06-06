//--------------------------------changpass開始------------------------------------------------------
btnchang.addEventListener('click', e => {
var password ;
var password2 ;
var password3 ;


	$.ajax({
		url: "changpass",           // 資料請求的網址
		type: "POST",           // GET | POST | PUT | DELETE | PATCH
		//		contentType: "application/json; charset=utf-8"  給controller的型別預設是json 
		data: {
			'password': exampleInputPassword.value,
			'password2': exampleInputPassword2.value,
			'password3': exampleInputPassword3.value
		},
		// 將物件資料(不用雙引號) 傳送到指定的 url
		dataType: "text",             // 預期會接收到回傳資料的格式： json | xml | html
		success: function(res) {      // request 成功取得回應後執行
					console.log(res);
				
			if(res != null && res.trim() !== '') {
				console.log("res");
			alert("更改成功");
			window.location.href = "login.html";
			}else{
				alert("新密碼與確認密碼不同");
			}
		


		}, error: function(jqXHR, textStatus, errorThrown) {
			alert("error");
		}
	});
});
//---------------------------------changpass結束------------------------------------------------------------

// 看見密碼
$(document).ready(function() {
	$("#checkEye").click(function() {

		var inputPassword = $("#exampleInputPassword");
		if ($(this).hasClass('fa-eye')) {
			inputPassword.attr('type', 'text');
		} else {
			inputPassword.attr('type', 'password');
			inputPassword.blur(); // 強制失去focus
			$(this).blur(); // 強制眼睛icon失去focus
		}
		$(this).toggleClass('fa-eye').toggleClass('fa-eye-slash');
	});


	$("#checkEye2").click(function() {

		var inputPassword = $("#exampleInputPassword2");
		if ($(this).hasClass('fa-eye')) {
			inputPassword.attr('type', 'text');
		} else {
			inputPassword.attr('type', 'password');
			inputPassword.blur(); // 強制失去focus
			$(this).blur(); // 強制眼睛icon失去focus
		}
		$(this).toggleClass('fa-eye').toggleClass('fa-eye-slash');
	});

	$("#checkEye3").click(function() {

		var inputPassword = $("#exampleInputPassword3");
		if ($(this).hasClass('fa-eye')) {
			inputPassword.attr('type', 'text');
		} else {
			inputPassword.attr('type', 'password');
			inputPassword.blur(); // 強制失去focus
			$(this).blur(); // 強制眼睛icon失去focus
		}
		$(this).toggleClass('fa-eye').toggleClass('fa-eye-slash');
	});
});

