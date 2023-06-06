var imageBase64;
var preview_img = function(file) {

	var reader = new FileReader();
	reader.readAsDataURL(file);
	reader.addEventListener("load", function() {

		let img_str = '<img src="' + reader.result + '" class="preview_img">';
		preview.innerHTML = img_str;
		imageBase64 = reader.result.substring(reader.result.indexOf(",") + 1);
		console.log(imageBase64);
	});
};

p_file.addEventListener("change", function(e) {
	if (this.files.length > 0) {
		preview_img(this.files[0]);
	} else {
		preview.innerHTML = '<span class="text">上傳頭像</span>';
	}
});




//--------------------------------------------------把資料顯示出來-------------------------------------------------------------------------------
var userinputname = document.querySelector('#userinputname');
var userinputnick = document.querySelector('#userinputnick');
var userinputadd = document.querySelector('#userinputadd');
var userinputbirth = document.querySelector('#userinputbirth');
var userinputgender = document.querySelector('#userinputgender');
var userinputphone = document.querySelector('#userinputphone');
var userinputmail = document.querySelector('#userinputmail');
var usertextarea = document.querySelector('#usertextarea');
var sname = document.querySelector('.sname');
$("document").ready(function() {
	
	
	$.ajax({
		url: "userCenter",
		type: "POST",
		data: {
			"action": "printdata"

		},
		dataType: "json",
		success: function(data) {      // request 成功取得回應後執行
			// 更新前端頁面上的表單欄位值
			console.log(data);
			if (data.acc_pic1 != null || data.acc_pic1 != "")
			//data:image/null;base64 判斷檔案類型是否為空值
			{
				let img_str = '<img src="data:image/null;base64,' + data.acc_pic1 + '" class="preview_img">';
				preview.innerHTML = img_str;
				console.log(img_str);
			}
			console.log(sname);
			sname.textContent = data.acc_name;
			userinputmail.value = data.acc_mail;
			userinputname.value = data.acc_name;
			userinputnick.value = data.acc_nickname;
			userinputadd.value = data.acc_add1;
			var birthDate = moment(data.acc_birth, "M月 D, YYYY");
			var formattedBirthDate = birthDate.format("YYYY-MM-DD");
			userinputbirth.value = formattedBirthDate;
			userinputgender.value = data.acc_gender;
			console.log(data.acc_gender);
			userinputphone.value = data.acc_phone;
			if (data.acc_text === undefined || data.acc_text === null) {
				usertextarea.value = "";
			} else { usertextarea.value = data.acc_text; }


		}
	});



});




//-------------------------------------------------更新資料-------------------------------------------------------------------------------
$("#savbtn").on("click", e => {
	if (imageBase64 === undefined) {
	console.log(imageBase64)
		$.ajax({
			url: "userCenter",        // 請求的網址
			type: "POST",            // 請求方法: GET, POST, PUT, DELETE 等

			data: {
				"action": "update",
				'userinputmail': $("#userinputmail").val(),// 請求的參數
				'userinputname': $("#userinputname").val(),
				'userinputnick': $("#userinputnick").val(),
				'userinputadd': $("#userinputadd").val(),
				'userinputbirth': $("#userinputbirth").val(),
				'userinputgender': $("#userinputgender").val(),
				'userinputphone': $("#userinputphone").val(),
				'usertextarea': $("#usertextarea").val(),



			},

			dataType: "json",       // 預期回傳的資料類型: json, xml, html 等
			success: function(response) {
				// 請求成功後的處理邏輯
				alert("Success");
			},
			error: function(xhr, status, error) {
				// 請求失敗後的處理邏輯
				console.log("請求失敗: " + error);
			}
		});



	} else {
console.log(imageBase64)
		$.ajax({
			
			url: "userCenter",        // 請求的網址
			type: "POST",            // 請求方法: GET, POST, PUT, DELETE 等

			data: {
				"action": "update",
				'userinputmail': $("#userinputmail").val(),// 請求的參數
				'userinputname': $("#userinputname").val(),
				'userinputnick': $("#userinputnick").val(),
				'userinputadd': $("#userinputadd").val(),
				'userinputbirth': $("#userinputbirth").val(),
				'userinputgender': $("#userinputgender").val(),
				'userinputphone': $("#userinputphone").val(),
				'usertextarea': $("#usertextarea").val(),
				'imageBase64': imageBase64,


			},

			dataType: "json",       // 預期回傳的資料類型: json, xml, html 等
			success: function(response) {
				// 請求成功後的處理邏輯
				alert("Success");
			},
			error: function(xhr, status, error) {
				// 請求失敗後的處理邏輯
				console.log("請求失敗: " + error);
			}
		});



	}






});




