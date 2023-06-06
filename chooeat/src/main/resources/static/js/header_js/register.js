//---------------------------------register註冊開始------------------------------------------------------------

btnReg.addEventListener('click', e => {
  var regusername = regusernameid.value;
  var regpassword = exampleInputPasswordid.value;
  var regname = regnameid.value;
  var regnickname = regnicknameid.value;
  var regmail = regmailid.value;
  var regbirth = regbirthid.value;
  var regphone = regphoneid.value;
  var regadd = regaddid.value;
  var reggender = reggenderid.value;
 if (regusername === "" || regpassword === ""|| regname === ""|| regnickname === ""|| regmail === ""|| regbirth === ""|| regphone === ""|| regadd === ""|| reggender === "") {
    alert("欄位不可為空");
    return; // 停止執行後續的程式碼
  }

	$.ajax({
		url: "register",           // 資料請求的網址
		type: "POST",           // GET | POST | PUT | DELETE | PATCH
		contentType: "application/json; charset=utf-8",
		data: JSON.stringify({
			'regusername': regusernameid.value,
			'regpassword': exampleInputPasswordid.value,
			'regname': regnameid.value,
			'regnickname': regnicknameid.value,
			'regmail': regmailid.value,
			'regbirth': regbirthid.value,
			'regphone': regphoneid.value,
			'regadd': regaddid.value,
			'regadd2': regaddid2.value,
			'regadd3': regaddid3.value,
			'reggender': reggenderid.value
		}),
		// 將物件資料(不用雙引號) 傳送到指定的 url
		dataType: "text",             // 預期會接收到回傳資料的格式： json | xml | html
		success: function(res) {      // request 成功取得回應後執行
			var loginJson = JSON.stringify(res);
			console.log(res);
			
			if (res === "註冊成功" ) {
				alert("註冊成功");
				window.location.href = "login.html";
			} else {
				alert("使用者名稱重複");
			}
			//			var loginJson = JSON.stringify(res);
			//			sessionStorage.setItem("loginReq", loginJson);
			//alter("success");
//
//			alert("success");
//			window.location.href = "login.html";
			//				$(location).attr("href", "");


		}, error: function(jqXHR, textStatus, errorThrown) {
			alert("error");
		}
	});
});

//---------------------------------register註冊結束------------------------------------------------------------
// 看見密碼
$(document).ready(function() {
	$("#checkEye").click(function() {

		var inputPassword = $("#exampleInputPasswordid");
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