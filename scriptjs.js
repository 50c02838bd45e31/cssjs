
	const scriptURL = 'https://script.google.com/macros/s/AKfycbzOT8jgm7ncHsXG2g_Sh8zDWKDQq96XxpaLe38D53V6SJS8-wZ5ihSWKjOrymSNJvH2/exec'
	let status = localStorage.getItem('lock-foodhandler')
	let fNameData = localStorage.getItem('fNameData')
	let lNameData = localStorage.getItem('lNameData')
	let usrIDData = localStorage.getItem('usrIDData')
	let telnoData = localStorage.getItem('telnoData')
	let emailData = localStorage.getItem('emailData')
	let SectPassData = localStorage.getItem('SectPassData')
	let Data = localStorage.getItem('Data')
  
	window.onload = async function (e) {
	  e.preventDefault()
	  let send = await fetch(scriptURL)
	  let data = await send.json()
	  if (status == 'login') {
		document.getElementById('user').value = usrIDData
		document.getElementById('pass').value = Data
		document.getElementById('submitFormBtn').click()
	  }
	  // if (status == 'logout') {
		// document.getElementById('btnLogOut').click()
	  // }
	  if (SectPassData == 'completed') {
		document.getElementById('postTest').style.display = "inline"
	  }
	}

	function page0() {
	  $('#page1').hide()
	  $('#page2').hide()
	  $('#page3').hide()
	  $('#page4').hide()
	  $('#page5').hide()
	  $('#page6').hide()
	  $('#page0').show()
	}

	function page1() {
	  $('#page0').hide()
	  $('#page2').hide()
	  $('#page3').hide()
	  $('#page4').hide()
	  $('#page5').hide()
	  $('#page6').hide()
	  $('#page1').show()
	}

	function page2() {
	  $('#page0').hide()
	  $('#page1').hide()
	  $('#page3').hide()
	  $('#page4').hide()
	  $('#page5').hide()
	  $('#page6').hide()
	  $('#page2').show()
	}

	function page3() {
	  $('#page0').hide()
	  $('#page1').hide()
	  $('#page2').hide()
	  $('#page4').hide()
	  $('#page5').hide()
	  $('#page6').hide()
	  $('#page3').show()
	}

	function page4() {
	  $('#page0').hide()
	  $('#page1').hide()
	  $('#page2').hide()
	  $('#page3').hide()
	  $('#page5').hide()
	  $('#page6').hide()
	  $('#page4').show()
	}

	function page5() {
	  $('#page0').hide()
	  $('#page1').hide()
	  $('#page2').hide()
	  $('#page3').hide()
	  $('#page4').hide()
	  $('#page6').hide()
	  $('#page5').show()
	}

	function page6() {
	  $('#page0').hide()
	  $('#page1').hide()
	  $('#page2').hide()
	  $('#page3').hide()
	  $('#page4').hide()
	  $('#page5').hide()
	  $('#page6').show()
	}
	
	const LoginForm = document.forms['submitForm']
		  LoginForm.addEventListener('submit', async function (e) {
			e.preventDefault()
			Swal.fire({
			  title: 'รอสักครู่!!!',
			  timerProgressBar: true,
			  didOpen: () => {
				Swal.showLoading()
			  },
			})
			let send = await fetch(scriptURL, {method: 'POST', body: new FormData(LoginForm)})
			let data = await send.json()
			let result = data.login
			if (result[0] == 'success') {
			  Swal.fire({
				position: 'center',
				icon: 'success',
				title: 'ลงชื่อเข้าใช้งานสำเร็จ!!',
				showConfirmButton: false,
				timer: 1500,
			  }).then(() => {
				localStorage.setItem("lock-foodhandler", "login")
				localStorage.setItem("usrIDData",result[1])
				localStorage.setItem("fNameData",result[2])
				localStorage.setItem("lNameData",result[3])
				localStorage.setItem("telnoData",result[4])
				localStorage.setItem("SectPassData",result[5])
				localStorage.setItem("emailData",result[6])
				localStorage.setItem("SectPassPlusData",result[7])
				localStorage.setItem("Data",result[8])
				$("#headerbar").html('<b>ยินดีต้อนรับ '+result[2]+'&nbsp;&nbsp;'+result[3]+'</b><br> (รหัสผู้ใช้งาน : '+result[1]+')')
				$("#pageformLogin").hide()
				$("#pageformIndex").show()
				page0()
				document.getElementById('objUsrIDData').value = result[1]
				document.getElementById("submitForm").reset()
			  })
			}
			else {
			  Swal.fire({
				position: 'center',
				icon: 'error',
				title: 'รหัสผู้ใช้งาน หรือ รหัสผ่าน ไม่ถูกต้อง!!',
				showConfirmButton: false,
				timer: 1500,
			  })
			  document.getElementById("submitForm").reset()
			}
	  })
	  
	const LogoutForm = document.forms['LogOutBtn']
		  LogoutForm.addEventListener('submit', async function (e) {
			e.preventDefault()
			Swal.fire({
			  title: 'รอสักครู่!!!',
			  timerProgressBar: true,
			  didOpen: () => {
				Swal.showLoading()
			  },
			})
			let send = await fetch(scriptURL, {method: 'POST', body: new FormData(LogoutForm)})
			let data = await send.json()
			let result = data.logout
			if (result == 'success') {
			  Swal.fire({
				position: 'center',
				icon: 'success',
				title: 'ลงชื่อออกจากระบบสำเร็จ!!',
				showConfirmButton: false,
				timer: 1500,
			  })
			  localStorage.setItem("lock-foodhandler", "logout")
			  $("#pageformLogin").show()
			  $("#pageformIndex").hide()
			}
	})
	
	const regForm = document.forms['myform']
		  regForm.addEventListener('submit', async function (e) {
			e.preventDefault()
			Swal.fire({
			  title: 'รอสักครู่!!!',
			  timerProgressBar: true,
			  didOpen: () => {
				Swal.showLoading()
			  },
			})
			let send = await fetch(scriptURL, {method: 'POST', body: new FormData(regForm)})
			let data = await send.json()
			if (data.verifiedUser == 'success') {
			  Swal.fire({
				position: 'center',
				icon: 'error',
				title: 'รหัสผู้ใช้งานนี้ ได้ลงทะเบียนแล้ว!!',
				showConfirmButton: false,
				timer: 1500,
			  })
			}
			else if (data.verifiedEmail == 'success') {
			  Swal.fire({
				position: 'center',
				icon: 'error',
				title: 'e-Mail นี้ได้ลงทะเบียนแล้ว!!',
				showConfirmButton: false,
				timer: 1500,
			  })
			}
			else {
			  Swal.fire({
				position: 'center',
				icon: 'success',
				title: 'บันทึกข้อมูลเรียบร้อย!!',
				showConfirmButton: false,
				timer: 1500,
			  }).then(() => {
				$('#closeModalStaticBackdrop').click()
				document.getElementById("myform").reset()
			  })
			}
	})
	
	const searchForm = document.forms['search-form']
		  searchForm.addEventListener('submit', async function (e) {
			e.preventDefault()
			let div = document.getElementById('search-results')
			let alertInfo = document.getElementById("alert")
				alertInfo.style.display = "inline"
			let textInfo = document.getElementById("searchText")
			if (textInfo.value == "") {
			  Swal.fire({
				title: 'คำเตือน !!!',
				timer: 60000,
				timerProgressBar: true,
				html: '<b>กรุณาใส่รหัสผู้ใช้งาน</b><br /><br />',
				icon: 'error',
				confirmButtonText:'<i class="fa fa-frown-o"></i>&nbsp; ปิดหน้าต่าง',
			  })
			  div.innerHTML = ""
			  alertInfo.style.display = "none"
			} 
			else {
			  div.innerHTML = ""
			  alertInfo.style.display = "inline"
			  let send = await fetch(scriptURL, {method: 'POST', body: new FormData(searchForm)})
			  let data = await send.json()
			  let searchData = data.searchData
			  if (textInfo.value == 9999) {
				createTableNew(searchData)
			  }
			  else {
				createTable(searchData)
			  }
			}
	})
	
	document.getElementById("certBtn").onclick = function () {
	  let searchTextForm = document.getElementById("searchTextForm")
		  searchTextForm.value = usrIDData
	  $('#submitSearchTextFormBtn').click()
	}
	
	const searchTextForm = document.forms['searchForm']
		  searchTextForm.addEventListener('submit', async function (e) {
			e.preventDefault()
			document.getElementById('search-resultsForm').innerHTML = ""
			document.getElementById("alertSearchTextForm").style.display = "inline"
			let send = await fetch(scriptURL, {method: 'POST', body: new FormData(searchTextForm)})
			let data = await send.json()
			let searchData = data.searchData
			createTableIndex(searchData)
			$('#closeModalCert').click()
	})
	
	function createTableNew(dataArray) {
	  document.getElementById('search-results').innerHTML = ""
	  let alertInfo = document.getElementById("alert")
	  let textInfo = document.getElementById("searchText")
	  if (dataArray && dataArray !== undefined && dataArray.length != 0) {
		alertInfo.style.display = "inline"
		let result = "<table class='table table-sm table-striped table-hover' id='dtable'>"+
					  "<thead style='white-space: nowrap'>"+
						"<tr>"+
						"<th scope='col'>รหัสผู้ใช้งาน</th>"+
						"<th scope='col'>ชื่อ</th>"+
						"<th scope='col'>สกุล</th>"+
						"<th scope='col'>ใบวุฒิบัตรรับรอง</th>"+
						"<th scope='col'>วันที่อบรม</th>"+
						"<th scope='col'>วันที่หมดอายุ</th>"+
					  "</tr>"+
					"</thead>"
		  for (let i = 0; i < dataArray.length; i++) {
			result += "<tr>"
			for (let j = 0; j < dataArray[i].length-1; j++) {
			  result += "<td class=\"table table-striped table-hover\">"+dataArray[i][j]+"</td>"
			}
			result += "</tr>"
		  }
		result += "</table>"
		Swal.fire({
		  title: 'ผลการค้นหาใบวุฒิบัตร',
		  timer: 60000,
		  timerProgressBar: true,
		  html: 'พบใบวุฒิบัตร <b>หลักสูตรผู้สัมผัสอาหาร</b><br />ของรหัสผู้ใช้งาน : <b> '+textInfo.value+'</b><br /><br />'+result+'',
		  icon: 'success',
		  confirmButtonText:'<i class="fa fa-thumbs-o-up"></i>&nbsp; ปิดหน้าต่าง',
		})
		$(document).ready(function () {
		  pdfMake.fonts = {
			Roboto: {
			  normal: 'Roboto-Regular.ttf',
			  bold: 'Roboto-Medium.ttf',
			  italics: 'Roboto-Italic.ttf',
			  bolditalics: 'Roboto-MediumItalic.ttf'
			}
		  }
		  $('#dtable').DataTable({
			data: dataArray,                  
			dom:'Bfrtip',
			responsive:true,
			language: {
			  url: "https://cdn.datatables.net/plug-ins/1.10.24/i18n/Thai.json",
			},
			columns: [
			  {"title":"รหัสผู้ใช้งาน"},
			  {"title":"ชื่อ"},
			  {"title":"สกุล"},
			  {"title":"ใบวุฒิบัตรรับรอง","render":function (data,type,row,meta)
				{
				  if (type === 'display') {
					data = '<a href="'+ data +'" target="_blank"><center><i class="fa fa-file-pdf-o" aria-hidden="true"></i>&nbsp; PDF</center></a>';
				  }
				  return data
				}
			  },
			  {"title":"วันที่อบรม"},
			  {"title":"วันที่หมดอายุ"},
			  {"title":" "},
			],
			columnDefs: [
			  {
				targets: [0,6],
				visible: false,
			  },
			],
		  })
		})
		textInfo.value = ""
		alertInfo.style.display = "none"
	  }
	  else {
		alertInfo.style.display = "inline"
		Swal.fire({
		  title: 'ผลการค้นหาใบวุฒิบัตร',
		  timer: 60000,
		  timerProgressBar: true,
		  html: 'ไม่พบใบวุฒิบัตรของรหัสผู้ใช้งาน : <b> '+textInfo.value+'</b>',
		  icon: 'error',
		  confirmButtonText:'<i class="fa fa-frown-o"></i>&nbsp; ปิดหน้าต่าง',
		})
		textInfo.value = ""
		alertInfo.style.display = "none"
	  }
	}
	
	function createTable(dataArray) {
	  document.getElementById('search-results').innerHTML = ""
	  let alertInfo = document.getElementById("alert")
	  let textInfo = document.getElementById("searchText")
	  if (dataArray && dataArray !== undefined && dataArray.length != 0) {
		alertInfo.style.display = "inline"
		let result = "<table class='table table-sm table-striped table-hover' id='dtable'>"+
					  "<thead style='white-space: nowrap'>"+
						"<tr>"+
						"<th scope='col'>รหัสผู้ใช้งาน</th>"+
						"<th scope='col'>ชื่อ</th>"+
						"<th scope='col'>สกุล</th>"+
						"<th scope='col'>ใบวุฒิบัตรรับรอง</th>"+
						"<th scope='col'>วันที่อบรม</th>"+
						"<th scope='col'>วันที่หมดอายุ</th>"+
					  "</tr>"+
					"</thead>"
		  for (let i = 0; i < dataArray.length; i++) {
			result += "<tr>"
			for (let j = 0; j < dataArray[i].length-1; j++) {
			  result += "<td class=\"table table-striped table-hover\">"+dataArray[i][j]+"</td>"
			}
			result += "</tr>"
		  }
		result += "</table>"
		Swal.fire({
		  title: 'ผลการค้นหาใบวุฒิบัตร',
		  timer: 60000,
		  timerProgressBar: true,
		  html: 'พบใบวุฒิบัตร <b>หลักสูตรผู้สัมผัสอาหาร</b><br />ของรหัสผู้ใช้งาน : <b> '+textInfo.value+'</b><br /><br />'+result+'',
		  icon: 'success',
		  confirmButtonText:'<i class="fa fa-thumbs-o-up"></i>&nbsp; ปิดหน้าต่าง',
		})
		$(document).ready(function () {
		  pdfMake.fonts = {
			Roboto: {
			  normal: 'Roboto-Regular.ttf',
			  bold: 'Roboto-Medium.ttf',
			  italics: 'Roboto-Italic.ttf',
			  bolditalics: 'Roboto-MediumItalic.ttf'
			}
		  }
		  $('#dtable').DataTable({
			data: dataArray,                  
			dom:'Bfrtip',
			responsive:true,
			searching:false,
			language: {
			  url: "https://cdn.datatables.net/plug-ins/1.10.24/i18n/Thai.json",
			},
			columns: [
			  {"title":"รหัสผู้ใช้งาน"},
			  {"title":"ชื่อ"},
			  {"title":"สกุล"},
			  {"title":"ใบวุฒิบัตรรับรอง","render":function (data,type,row,meta)
				{
				  if (type === 'display') {
					data = '<a href="'+ data +'" target="_blank"><center><i class="fa fa-file-pdf-o" aria-hidden="true"></i>&nbsp; PDF</center></a>'
				  }
				  return data
				}
			  },
			  {"title":"วันที่อบรม"},
			  {"title":"วันที่หมดอายุ"},
			  {"title":" "},
			],
			columnDefs: [
			  {
				targets: [0,6],
				visible: false,
			  },
			],
		  })
		})
		textInfo.value = ""
		alertInfo.style.display = "none"
	  }
	  else {
		alertInfo.style.display = "inline"
		Swal.fire({
		  title: 'ผลการค้นหาใบวุฒิบัตร',
		  timer: 60000,
		  timerProgressBar: true,
		  html: 'ไม่พบใบวุฒิบัตรของรหัสผู้ใช้งาน : <b> '+textInfo.value+'</b>',
		  icon: 'error',
		  confirmButtonText:'<i class="fa fa-frown-o"></i>&nbsp; ปิดหน้าต่าง',
		})
		textInfo.value = ""
		alertInfo.style.display = "none"
	  }
	}
	
	function createTableIndex(dataArray) {
	  document.getElementById('search-resultsForm').innerHTML = ""
	  let alertInfo = document.getElementById("alertSearchTextForm")
	  let textInfo = document.getElementById("searchTextForm")
	  if (dataArray && dataArray !== undefined && dataArray.length != 0) {
		alertInfo.style.display = "inline"
		let result = "<table class='table table-sm table-striped table-hover' id='dtables'>"+
					  "<thead style='white-space: nowrap'>"+
						"<tr>"+
						"<th scope='col'>รหัสผู้ใช้งาน</th>"+
						"<th scope='col'>ชื่อ</th>"+
						"<th scope='col'>สกุล</th>"+
						"<th scope='col'>ใบวุฒิบัตรรับรอง</th>"+
						"<th scope='col'>วันที่อบรม</th>"+
						"<th scope='col'>วันที่หมดอายุ</th>"+
					  "</tr>"+
					"</thead>"
		  for (let i = 0; i < dataArray.length; i++) {
			result += "<tr>"
			for (let j = 0; j < dataArray[i].length-1; j++) {
			  result += "<td class=\"table table-striped table-hover\">"+dataArray[i][j]+"</td>"
			}
			result += "</tr>"
		  }
		result += "</table>"
		Swal.fire({
		  title: 'ผลการค้นหาใบวุฒิบัตร',
		  timer: 60000,
		  timerProgressBar: true,
		  html: 'พบใบวุฒิบัตร <b>หลักสูตรผู้สัมผัสอาหาร</b><br />ของรหัสผู้ใช้งาน : <b> '+textInfo.value+'</b><br /><br />'+result+'',
		  icon: 'success',
		  confirmButtonText:'<i class="fa fa-thumbs-o-up"></i>&nbsp; ปิดหน้าต่าง',
		})
		$(document).ready(function () {
		  pdfMake.fonts = {
			Roboto: {
			  normal: 'Roboto-Regular.ttf',
			  bold: 'Roboto-Medium.ttf',
			  italics: 'Roboto-Italic.ttf',
			  bolditalics: 'Roboto-MediumItalic.ttf'
			}
		  }
		  $('#dtables').DataTable({
			data: dataArray,                  
			dom:'Bfrtip',
			responsive:true,
			searching:false,
			language: {
			  url: "https://cdn.datatables.net/plug-ins/1.10.24/i18n/Thai.json",
			},
			columns: [
			  {"title":"รหัสผู้ใช้งาน"},
			  {"title":"ชื่อ"},
			  {"title":"สกุล"},
			  {"title":"ใบวุฒิบัตรรับรอง","render":function (data,type,row,meta)
				{
				  if (type === 'display') {
					data = '<a href="'+ data +'" target="_blank"><center><i class="fa fa-file-pdf-o" aria-hidden="true"></i>&nbsp; PDF</center></a>'
				  }
				  return data
				}
			  },
			  {"title":"วันที่อบรม"},
			  {"title":"วันที่หมดอายุ"},
			  {"title":" "},
			],
			columnDefs: [
			  {
				targets: [0,6],
				visible: false,
			  },
			],
		  })
		})
		textInfo.value = ""
		alertInfo.style.display = "none"
	  }
	  else {
		alertInfo.style.display = "inline"
		Swal.fire({
		  title: 'ผลการค้นหาใบวุฒิบัตร',
		  timer: 60000,
		  timerProgressBar: true,
		  html: 'ไม่พบใบวุฒิบัตรของรหัสผู้ใช้งาน : <b> '+textInfo.value+'</b>',
		  icon: 'error',
		  confirmButtonText:'<i class="fa fa-frown-o"></i>&nbsp; ปิดหน้าต่าง',
		})
		textInfo.value = ""
		alertInfo.style.display = "none"
	  }
	}
	
	function getProvince(obj) {
	  let id = obj.value
	  if (id == '') {
		$("#dis").empty()
		$("#dis").append('<option value="">เลือกอำเภอ</option>')
		$("#subdis").empty()
		$("#subdis").append('<option value="">เลือกตำบล</option>')
		$("#govapp").empty()
		$("#govapp").append('<option value="">เลือกองค์กรปกครองส่วนท้องถิ่น</option>')
	  }
	  else {
		let data = onPro(id)
		$("#dis").empty()
		$("#dis").append('<option value="">เลือกอำเภอ</option>')
		$.each(data, function (i) {
		  $("#dis").append('<option value='+data[i].district+'>'+data[i].district+'</option>')
		  $("#subdis").empty()
		  $("#subdis").append('<option value="">เลือกตำบล</option>')
		  $("#govapp").empty()
		  $("#govapp").append('<option value="">เลือกองค์กรปกครองส่วนท้องถิ่น</option>')
		})
	  }
	}

	function getProvinceIndex(obj) {
	  let id = obj.value
	  if (id == '') {
		$("#disIndex").empty()
		$("#disIndex").append('<option value="">เลือกอำเภอ</option>')
		$("#subdisIndex").empty()
		$("#subdisIndex").append('<option value="">เลือกตำบล</option>')
		$("#govappIndex").empty()
		$("#govappIndex").append('<option value="">เลือกองค์กรปกครองส่วนท้องถิ่น</option>')
	  }
	  else {
		let data = onPro(id)
		$("#disIndex").empty()
		$("#disIndex").append('<option value="">เลือกอำเภอ</option>')
		$.each(data, function (i) {
		  $("#disIndex").append('<option value='+data[i].district+'>'+data[i].district+'</option>')
		  $("#subdisIndex").empty()
		  $("#subdisIndex").append('<option value="">เลือกตำบล</option>')
		  $("#govappIndex").empty()
		  $("#govappIndex").append('<option value="">เลือกองค์กรปกครองส่วนท้องถิ่น</option>')
		})
	  }
	}
	
	function getDistrict(obj) {
	  let pro = document.getElementById('pro').value
	  let id = obj.value
	  if (id == '') {
		$("#subdis").empty()
		$("#subdis").append('<option value="">เลือกตำบล</option>')
		$("#govapp").empty()
		$("#govapp").append('<option value="">เลือกองค์กรปกครองส่วนท้องถิ่น</option>')
	  }
	  else if (pro == 'บุรีรัมย์') {
		let dataDisBr = onDisBr(id)
		$("#subdis").empty()
		$("#subdis").append('<option value="">เลือกตำบล</option>')
		$.each(dataDisBr, function (i) {
		  $("#subdis").append('<option value='+dataDisBr[i].subdistrict+'>'+dataDisBr[i].subdistrict+'</option>')
		})
		let dataOrgBr = onOrgBr(id)
		$("#govapp").empty()
		$("#govapp").append('<option value="">เลือกองค์กรปกครองส่วนท้องถิ่น</option>')
		$.each(dataOrgBr, function (i) {
		  $("#govapp").append('<option value='+dataOrgBr[i].abtname+'>'+dataOrgBr[i].abtname+'</option>')
		})
	  }
	  else if (pro == 'ยโสธร') {
		let dataDisYs = onDisYs(id)
		$("#subdis").empty()
		$("#subdis").append('<option value="">เลือกตำบล</option>')
		$.each(dataDisYs, function (i) {
		  $("#subdis").append('<option value='+dataDisYs[i].subdistrict+'>'+dataDisYs[i].subdistrict+'</option>')
		})
		let dataOrgYs = onOrgYs(id)
		$("#govapp").empty()
		$("#govapp").append('<option value="">เลือกองค์กรปกครองส่วนท้องถิ่น</option>')
		$.each(dataOrgYs, function (i) {
		  $("#govapp").append('<option value='+dataOrgYs[i].abtname+'>'+dataOrgYs[i].abtname+'</option>')
		})
	  }
	}

	function getDistrictIndex(obj) {
	  let pro = document.getElementById('proIndex').value
	  let id = obj.value
	  if (id == '') {
		$("#subdisIndex").empty()
		$("#subdisIndex").append('<option value="">เลือกตำบล</option>')
		$("#govappIndex").empty()
		$("#govappIndex").append('<option value="">เลือกองค์กรปกครองส่วนท้องถิ่น</option>')
	  }
	  else if (pro == 'บุรีรัมย์') {
		let dataDisBr = onDisBr(id)
		$("#subdisIndex").empty()
		$("#subdisIndex").append('<option value="">เลือกตำบล</option>')
		$.each(dataDisBr, function (i) {
		  $("#subdisIndex").append('<option value='+dataDisBr[i].subdistrict+'>'+dataDisBr[i].subdistrict+'</option>')
		})
		let dataOrgBr = onOrgBr(id)
		$("#govappIndex").empty()
		$("#govappIndex").append('<option value="">เลือกองค์กรปกครองส่วนท้องถิ่น</option>')
		$.each(dataOrgBr, function (i) {
		  $("#govappIndex").append('<option value='+dataOrgBr[i].abtname+'>'+dataOrgBr[i].abtname+'</option>')
		})
	  }
	  else if (pro == 'ยโสธร') {
		let dataDisYs = onDisYs(id)
		$("#subdisIndex").empty()
		$("#subdisIndex").append('<option value="">เลือกตำบล</option>')
		$.each(dataDisYs, function (i) {
		  $("#subdisIndex").append('<option value='+dataDisYs[i].subdistrict+'>'+dataDisYs[i].subdistrict+'</option>')
		})
		let dataOrgYs = onOrgYs(id)
		$("#govappIndex").empty()
		$("#govappIndex").append('<option value="">เลือกองค์กรปกครองส่วนท้องถิ่น</option>')
		$.each(dataOrgYs, function (i) {
		  $("#govappIndex").append('<option value='+dataOrgYs[i].abtname+'>'+dataOrgYs[i].abtname+'</option>')
		})
	  }
	}
	
	function onPro(id) {
	  let ar = []
	  if (id == 'บุรีรัมย์') {
		ar = [
		  {
		  "district": "กระสัง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "district": "คูเมือง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "district": "ชำนิ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "district": "นางรอง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "district": "นาโพธิ์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "district": "บ้านกรวด",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "district": "บ้านด่าน",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "district": "บ้านใหม่ไชยพจน์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "district": "ประโคนชัย",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "district": "ปะคำ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "district": "พลับพลาชัย",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "district": "พุทไธสง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "district": "ละหานทราย",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "district": "ลำปลายมาศ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "district": "สตึก",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "district": "หนองกี่",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "district": "หนองหงส์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "district": "ห้วยราช",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "district": "เฉลิมพระเกียรติ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "district": "เมืองบุรีรัมย์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "district": "แคนดง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "district": "โนนดินแดง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "district": "โนนสุวรรณ",
		  "province": "บุรีรัมย์"
		  }
		]
	  }
	  if (id == 'ยโสธร') {
		ar = [
		  {
			"district": "ไทยเจริญ",
			"province": "ยโสธร"
		  }
		]
	  }
	  return ar
	}
	
	function onDisBr(id) {
	  let ar = []
	  if (id == 'กระสัง') {
		ar = [
		  {
		  "0": "310301",
		  "1": "กระสัง",
		  "2": "กระสัง",
		  "3": "บุรีรัมย์",
		  "code": "310301",
		  "subdistrict": "กระสัง",
		  "district": "กระสัง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310302",
		  "1": "ลำดวน",
		  "2": "กระสัง",
		  "3": "บุรีรัมย์",
		  "code": "310302",
		  "subdistrict": "ลำดวน",
		  "district": "กระสัง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310303",
		  "1": "สองชั้น",
		  "2": "กระสัง",
		  "3": "บุรีรัมย์",
		  "code": "310303",
		  "subdistrict": "สองชั้น",
		  "district": "กระสัง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310304",
		  "1": "สูงเนิน",
		  "2": "กระสัง",
		  "3": "บุรีรัมย์",
		  "code": "310304",
		  "subdistrict": "สูงเนิน",
		  "district": "กระสัง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310305",
		  "1": "หนองเต็ง",
		  "2": "กระสัง",
		  "3": "บุรีรัมย์",
		  "code": "310305",
		  "subdistrict": "หนองเต็ง",
		  "district": "กระสัง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310306",
		  "1": "เมืองไผ่",
		  "2": "กระสัง",
		  "3": "บุรีรัมย์",
		  "code": "310306",
		  "subdistrict": "เมืองไผ่",
		  "district": "กระสัง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310307",
		  "1": "ชุมแสง",
		  "2": "กระสัง",
		  "3": "บุรีรัมย์",
		  "code": "310307",
		  "subdistrict": "ชุมแสง",
		  "district": "กระสัง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310308",
		  "1": "บ้านปรือ",
		  "2": "กระสัง",
		  "3": "บุรีรัมย์",
		  "code": "310308",
		  "subdistrict": "บ้านปรือ",
		  "district": "กระสัง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310309",
		  "1": "ห้วยสำราญ",
		  "2": "กระสัง",
		  "3": "บุรีรัมย์",
		  "code": "310309",
		  "subdistrict": "ห้วยสำราญ",
		  "district": "กระสัง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310310",
		  "1": "กันทรารมย์",
		  "2": "กระสัง",
		  "3": "บุรีรัมย์",
		  "code": "310310",
		  "subdistrict": "กันทรารมย์",
		  "district": "กระสัง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310311",
		  "1": "ศรีภูมิ",
		  "2": "กระสัง",
		  "3": "บุรีรัมย์",
		  "code": "310311",
		  "subdistrict": "ศรีภูมิ",
		  "district": "กระสัง",
		  "province": "บุรีรัมย์"
		  }
		]
	  }
	  if (id == 'คูเมือง') {
		ar = [
		  {
		  "0": "310201",
		  "1": "คูเมือง",
		  "2": "คูเมือง",
		  "3": "บุรีรัมย์",
		  "code": "310201",
		  "subdistrict": "คูเมือง",
		  "district": "คูเมือง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310202",
		  "1": "ปะเคียบ",
		  "2": "คูเมือง",
		  "3": "บุรีรัมย์",
		  "code": "310202",
		  "subdistrict": "ปะเคียบ",
		  "district": "คูเมือง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310203",
		  "1": "บ้านแพ",
		  "2": "คูเมือง",
		  "3": "บุรีรัมย์",
		  "code": "310203",
		  "subdistrict": "บ้านแพ",
		  "district": "คูเมือง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310204",
		  "1": "พรสำราญ",
		  "2": "คูเมือง",
		  "3": "บุรีรัมย์",
		  "code": "310204",
		  "subdistrict": "พรสำราญ",
		  "district": "คูเมือง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310205",
		  "1": "หินเหล็กไฟ",
		  "2": "คูเมือง",
		  "3": "บุรีรัมย์",
		  "code": "310205",
		  "subdistrict": "หินเหล็กไฟ",
		  "district": "คูเมือง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310206",
		  "1": "ตูมใหญ่",
		  "2": "คูเมือง",
		  "3": "บุรีรัมย์",
		  "code": "310206",
		  "subdistrict": "ตูมใหญ่",
		  "district": "คูเมือง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310207",
		  "1": "หนองขมาร",
		  "2": "คูเมือง",
		  "3": "บุรีรัมย์",
		  "code": "310207",
		  "subdistrict": "หนองขมาร",
		  "district": "คูเมือง",
		  "province": "บุรีรัมย์"
		  }
		]
	  }
	  if (id == 'ชำนิ') {
		ar = [
		  {
		  "0": "311801",
		  "1": "ชำนิ",
		  "2": "ชำนิ",
		  "3": "บุรีรัมย์",
		  "code": "311801",
		  "subdistrict": "ชำนิ",
		  "district": "ชำนิ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311802",
		  "1": "หนองปล่อง",
		  "2": "ชำนิ",
		  "3": "บุรีรัมย์",
		  "code": "311802",
		  "subdistrict": "หนองปล่อง",
		  "district": "ชำนิ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311803",
		  "1": "เมืองยาง",
		  "2": "ชำนิ",
		  "3": "บุรีรัมย์",
		  "code": "311803",
		  "subdistrict": "เมืองยาง",
		  "district": "ชำนิ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311804",
		  "1": "ช่อผกา",
		  "2": "ชำนิ",
		  "3": "บุรีรัมย์",
		  "code": "311804",
		  "subdistrict": "ช่อผกา",
		  "district": "ชำนิ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311805",
		  "1": "ละลวด",
		  "2": "ชำนิ",
		  "3": "บุรีรัมย์",
		  "code": "311805",
		  "subdistrict": "ละลวด",
		  "district": "ชำนิ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311806",
		  "1": "โคกสนวน",
		  "2": "ชำนิ",
		  "3": "บุรีรัมย์",
		  "code": "311806",
		  "subdistrict": "โคกสนวน",
		  "district": "ชำนิ",
		  "province": "บุรีรัมย์"
		  }
		]
	  }
	  if (id == 'นางรอง') {
		ar = [
		  {
		  "0": "310401",
		  "1": "นางรอง",
		  "2": "นางรอง",
		  "3": "บุรีรัมย์",
		  "code": "310401",
		  "subdistrict": "นางรอง",
		  "district": "นางรอง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310403",
		  "1": "สะเดา",
		  "2": "นางรอง",
		  "3": "บุรีรัมย์",
		  "code": "310403",
		  "subdistrict": "สะเดา",
		  "district": "นางรอง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310405",
		  "1": "ชุมแสง",
		  "2": "นางรอง",
		  "3": "บุรีรัมย์",
		  "code": "310405",
		  "subdistrict": "ชุมแสง",
		  "district": "นางรอง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310406",
		  "1": "หนองโบสถ์",
		  "2": "นางรอง",
		  "3": "บุรีรัมย์",
		  "code": "310406",
		  "subdistrict": "หนองโบสถ์",
		  "district": "นางรอง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310408",
		  "1": "หนองกง",
		  "2": "นางรอง",
		  "3": "บุรีรัมย์",
		  "code": "310408",
		  "subdistrict": "หนองกง",
		  "district": "นางรอง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310413",
		  "1": "ถนนหัก",
		  "2": "นางรอง",
		  "3": "บุรีรัมย์",
		  "code": "310413",
		  "subdistrict": "ถนนหัก",
		  "district": "นางรอง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310414",
		  "1": "หนองไทร",
		  "2": "นางรอง",
		  "3": "บุรีรัมย์",
		  "code": "310414",
		  "subdistrict": "หนองไทร",
		  "district": "นางรอง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310415",
		  "1": "ก้านเหลือง",
		  "2": "นางรอง",
		  "3": "บุรีรัมย์",
		  "code": "310415",
		  "subdistrict": "ก้านเหลือง",
		  "district": "นางรอง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310416",
		  "1": "บ้านสิงห์",
		  "2": "นางรอง",
		  "3": "บุรีรัมย์",
		  "code": "310416",
		  "subdistrict": "บ้านสิงห์",
		  "district": "นางรอง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310417",
		  "1": "ลำไทรโยง",
		  "2": "นางรอง",
		  "3": "บุรีรัมย์",
		  "code": "310417",
		  "subdistrict": "ลำไทรโยง",
		  "district": "นางรอง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310418",
		  "1": "ทรัพย์พระยา",
		  "2": "นางรอง",
		  "3": "บุรีรัมย์",
		  "code": "310418",
		  "subdistrict": "ทรัพย์พระยา",
		  "district": "นางรอง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310424",
		  "1": "หนองยายพิมพ์",
		  "2": "นางรอง",
		  "3": "บุรีรัมย์",
		  "code": "310424",
		  "subdistrict": "หนองยายพิมพ์",
		  "district": "นางรอง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310425",
		  "1": "หัวถนน",
		  "2": "นางรอง",
		  "3": "บุรีรัมย์",
		  "code": "310425",
		  "subdistrict": "หัวถนน",
		  "district": "นางรอง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310426",
		  "1": "ทุ่งแสงทอง",
		  "2": "นางรอง",
		  "3": "บุรีรัมย์",
		  "code": "310426",
		  "subdistrict": "ทุ่งแสงทอง",
		  "district": "นางรอง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310427",
		  "1": "หนองโสน",
		  "2": "นางรอง",
		  "3": "บุรีรัมย์",
		  "code": "310427",
		  "subdistrict": "หนองโสน",
		  "district": "นางรอง",
		  "province": "บุรีรัมย์"
		  }
		]
	  }
	  if (id == 'นาโพธิ์') {
		ar = [
		  {
		  "0": "311301",
		  "1": "นาโพธิ์",
		  "2": "นาโพธิ์",
		  "3": "บุรีรัมย์",
		  "code": "311301",
		  "subdistrict": "นาโพธิ์",
		  "district": "นาโพธิ์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311302",
		  "1": "บ้านคู",
		  "2": "นาโพธิ์",
		  "3": "บุรีรัมย์",
		  "code": "311302",
		  "subdistrict": "บ้านคู",
		  "district": "นาโพธิ์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311303",
		  "1": "บ้านดู่",
		  "2": "นาโพธิ์",
		  "3": "บุรีรัมย์",
		  "code": "311303",
		  "subdistrict": "บ้านดู่",
		  "district": "นาโพธิ์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311304",
		  "1": "ดอนกอก",
		  "2": "นาโพธิ์",
		  "3": "บุรีรัมย์",
		  "code": "311304",
		  "subdistrict": "ดอนกอก",
		  "district": "นาโพธิ์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311305",
		  "1": "ศรีสว่าง",
		  "2": "นาโพธิ์",
		  "3": "บุรีรัมย์",
		  "code": "311305",
		  "subdistrict": "ศรีสว่าง",
		  "district": "นาโพธิ์",
		  "province": "บุรีรัมย์"
		  }
		]
	  }
	  if (id == 'บ้านกรวด') {
		ar = [
		  {
		  "0": "310801",
		  "1": "บ้านกรวด",
		  "2": "บ้านกรวด",
		  "3": "บุรีรัมย์",
		  "code": "310801",
		  "subdistrict": "บ้านกรวด",
		  "district": "บ้านกรวด",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310802",
		  "1": "โนนเจริญ",
		  "2": "บ้านกรวด",
		  "3": "บุรีรัมย์",
		  "code": "310802",
		  "subdistrict": "โนนเจริญ",
		  "district": "บ้านกรวด",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310803",
		  "1": "หนองไม้งาม",
		  "2": "บ้านกรวด",
		  "3": "บุรีรัมย์",
		  "code": "310803",
		  "subdistrict": "หนองไม้งาม",
		  "district": "บ้านกรวด",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310804",
		  "1": "ปราสาท",
		  "2": "บ้านกรวด",
		  "3": "บุรีรัมย์",
		  "code": "310804",
		  "subdistrict": "ปราสาท",
		  "district": "บ้านกรวด",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310805",
		  "1": "สายตะกู",
		  "2": "บ้านกรวด",
		  "3": "บุรีรัมย์",
		  "code": "310805",
		  "subdistrict": "สายตะกู",
		  "district": "บ้านกรวด",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310806",
		  "1": "หินลาด",
		  "2": "บ้านกรวด",
		  "3": "บุรีรัมย์",
		  "code": "310806",
		  "subdistrict": "หินลาด",
		  "district": "บ้านกรวด",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310807",
		  "1": "บึงเจริญ",
		  "2": "บ้านกรวด",
		  "3": "บุรีรัมย์",
		  "code": "310807",
		  "subdistrict": "บึงเจริญ",
		  "district": "บ้านกรวด",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310808",
		  "1": "จันทบเพชร",
		  "2": "บ้านกรวด",
		  "3": "บุรีรัมย์",
		  "code": "310808",
		  "subdistrict": "จันทบเพชร",
		  "district": "บ้านกรวด",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310809",
		  "1": "เขาดินเหนือ",
		  "2": "บ้านกรวด",
		  "3": "บุรีรัมย์",
		  "code": "310809",
		  "subdistrict": "เขาดินเหนือ",
		  "district": "บ้านกรวด",
		  "province": "บุรีรัมย์"
		  }
		]
	  }
	  if (id == 'บ้านด่าน') {
		ar = [
		  {
		  "0": "312101",
		  "1": "บ้านด่าน",
		  "2": "บ้านด่าน",
		  "3": "บุรีรัมย์",
		  "code": "312101",
		  "subdistrict": "บ้านด่าน",
		  "district": "บ้านด่าน",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "312102",
		  "1": "ปราสาท",
		  "2": "บ้านด่าน",
		  "3": "บุรีรัมย์",
		  "code": "312102",
		  "subdistrict": "ปราสาท",
		  "district": "บ้านด่าน",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "312103",
		  "1": "วังเหนือ",
		  "2": "บ้านด่าน",
		  "3": "บุรีรัมย์",
		  "code": "312103",
		  "subdistrict": "วังเหนือ",
		  "district": "บ้านด่าน",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "312104",
		  "1": "โนนขวาง",
		  "2": "บ้านด่าน",
		  "3": "บุรีรัมย์",
		  "code": "312104",
		  "subdistrict": "โนนขวาง",
		  "district": "บ้านด่าน",
		  "province": "บุรีรัมย์"
		  }
		]
	  }
	  if (id == 'บ้านใหม่ไชยพจน์') {
		ar = [
		  {
		  "0": "311901",
		  "1": "หนองแวง",
		  "2": "บ้านใหม่ไชยพจน์",
		  "3": "บุรีรัมย์",
		  "code": "311901",
		  "subdistrict": "หนองแวง",
		  "district": "บ้านใหม่ไชยพจน์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311902",
		  "1": "ทองหลาง",
		  "2": "บ้านใหม่ไชยพจน์",
		  "3": "บุรีรัมย์",
		  "code": "311902",
		  "subdistrict": "ทองหลาง",
		  "district": "บ้านใหม่ไชยพจน์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311903",
		  "1": "แดงใหญ่",
		  "2": "บ้านใหม่ไชยพจน์",
		  "3": "บุรีรัมย์",
		  "code": "311903",
		  "subdistrict": "แดงใหญ่",
		  "district": "บ้านใหม่ไชยพจน์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311904",
		  "1": "กู่สวนแตง",
		  "2": "บ้านใหม่ไชยพจน์",
		  "3": "บุรีรัมย์",
		  "code": "311904",
		  "subdistrict": "กู่สวนแตง",
		  "district": "บ้านใหม่ไชยพจน์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311905",
		  "1": "หนองเยือง",
		  "2": "บ้านใหม่ไชยพจน์",
		  "3": "บุรีรัมย์",
		  "code": "311905",
		  "subdistrict": "หนองเยือง",
		  "district": "บ้านใหม่ไชยพจน์",
		  "province": "บุรีรัมย์"
		  }
		]
	  }
	  if (id == 'ประโคนชัย') {
		ar = [
		  {
		  "0": "310701",
		  "1": "ประโคนชัย",
		  "2": "ประโคนชัย",
		  "3": "บุรีรัมย์",
		  "code": "310701",
		  "subdistrict": "ประโคนชัย",
		  "district": "ประโคนชัย",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310702",
		  "1": "แสลงโทน",
		  "2": "ประโคนชัย",
		  "3": "บุรีรัมย์",
		  "code": "310702",
		  "subdistrict": "แสลงโทน",
		  "district": "ประโคนชัย",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310703",
		  "1": "บ้านไทร",
		  "2": "ประโคนชัย",
		  "3": "บุรีรัมย์",
		  "code": "310703",
		  "subdistrict": "บ้านไทร",
		  "district": "ประโคนชัย",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310705",
		  "1": "ละเวี้ย",
		  "2": "ประโคนชัย",
		  "3": "บุรีรัมย์",
		  "code": "310705",
		  "subdistrict": "ละเวี้ย",
		  "district": "ประโคนชัย",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310706",
		  "1": "จรเข้มาก",
		  "2": "ประโคนชัย",
		  "3": "บุรีรัมย์",
		  "code": "310706",
		  "subdistrict": "จรเข้มาก",
		  "district": "ประโคนชัย",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310707",
		  "1": "ปังกู",
		  "2": "ประโคนชัย",
		  "3": "บุรีรัมย์",
		  "code": "310707",
		  "subdistrict": "ปังกู",
		  "district": "ประโคนชัย",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310708",
		  "1": "โคกย่าง",
		  "2": "ประโคนชัย",
		  "3": "บุรีรัมย์",
		  "code": "310708",
		  "subdistrict": "โคกย่าง",
		  "district": "ประโคนชัย",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310710",
		  "1": "โคกม้า",
		  "2": "ประโคนชัย",
		  "3": "บุรีรัมย์",
		  "code": "310710",
		  "subdistrict": "โคกม้า",
		  "district": "ประโคนชัย",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310713",
		  "1": "ไพศาล",
		  "2": "ประโคนชัย",
		  "3": "บุรีรัมย์",
		  "code": "310713",
		  "subdistrict": "ไพศาล",
		  "district": "ประโคนชัย",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310714",
		  "1": "ตะโกตาพิ",
		  "2": "ประโคนชัย",
		  "3": "บุรีรัมย์",
		  "code": "310714",
		  "subdistrict": "ตะโกตาพิ",
		  "district": "ประโคนชัย",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310715",
		  "1": "เขาคอก",
		  "2": "ประโคนชัย",
		  "3": "บุรีรัมย์",
		  "code": "310715",
		  "subdistrict": "เขาคอก",
		  "district": "ประโคนชัย",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310716",
		  "1": "หนองบอน",
		  "2": "ประโคนชัย",
		  "3": "บุรีรัมย์",
		  "code": "310716",
		  "subdistrict": "หนองบอน",
		  "district": "ประโคนชัย",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310718",
		  "1": "โคกมะขาม",
		  "2": "ประโคนชัย",
		  "3": "บุรีรัมย์",
		  "code": "310718",
		  "subdistrict": "โคกมะขาม",
		  "district": "ประโคนชัย",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310719",
		  "1": "โคกตูม",
		  "2": "ประโคนชัย",
		  "3": "บุรีรัมย์",
		  "code": "310719",
		  "subdistrict": "โคกตูม",
		  "district": "ประโคนชัย",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310720",
		  "1": "ประทัดบุ",
		  "2": "ประโคนชัย",
		  "3": "บุรีรัมย์",
		  "code": "310720",
		  "subdistrict": "ประทัดบุ",
		  "district": "ประโคนชัย",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310721",
		  "1": "สี่เหลี่ยม",
		  "2": "ประโคนชัย",
		  "3": "บุรีรัมย์",
		  "code": "310721",
		  "subdistrict": "สี่เหลี่ยม",
		  "district": "ประโคนชัย",
		  "province": "บุรีรัมย์"
		  }
		]
	  }
	  if (id == 'ปะคำ') {
		ar = [
		  {
		  "0": "311201",
		  "1": "ปะคำ",
		  "2": "ปะคำ",
		  "3": "บุรีรัมย์",
		  "code": "311201",
		  "subdistrict": "ปะคำ",
		  "district": "ปะคำ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311202",
		  "1": "ไทยเจริญ",
		  "2": "ปะคำ",
		  "3": "บุรีรัมย์",
		  "code": "311202",
		  "subdistrict": "ไทยเจริญ",
		  "district": "ปะคำ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311203",
		  "1": "หนองบัว",
		  "2": "ปะคำ",
		  "3": "บุรีรัมย์",
		  "code": "311203",
		  "subdistrict": "หนองบัว",
		  "district": "ปะคำ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311204",
		  "1": "โคกมะม่วง",
		  "2": "ปะคำ",
		  "3": "บุรีรัมย์",
		  "code": "311204",
		  "subdistrict": "โคกมะม่วง",
		  "district": "ปะคำ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311205",
		  "1": "หูทำนบ",
		  "2": "ปะคำ",
		  "3": "บุรีรัมย์",
		  "code": "311205",
		  "subdistrict": "หูทำนบ",
		  "district": "ปะคำ",
		  "province": "บุรีรัมย์"
		  }
		]
	  }
	  if (id == 'พลับพลาชัย') {
		ar = [
		  {
		  "0": "311501",
		  "1": "จันดุม",
		  "2": "พลับพลาชัย",
		  "3": "บุรีรัมย์",
		  "code": "311501",
		  "subdistrict": "จันดุม",
		  "district": "พลับพลาชัย",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311502",
		  "1": "โคกขมิ้น",
		  "2": "พลับพลาชัย",
		  "3": "บุรีรัมย์",
		  "code": "311502",
		  "subdistrict": "โคกขมิ้น",
		  "district": "พลับพลาชัย",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311503",
		  "1": "ป่าชัน",
		  "2": "พลับพลาชัย",
		  "3": "บุรีรัมย์",
		  "code": "311503",
		  "subdistrict": "ป่าชัน",
		  "district": "พลับพลาชัย",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311504",
		  "1": "สะเดา",
		  "2": "พลับพลาชัย",
		  "3": "บุรีรัมย์",
		  "code": "311504",
		  "subdistrict": "สะเดา",
		  "district": "พลับพลาชัย",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311505",
		  "1": "สำโรง",
		  "2": "พลับพลาชัย",
		  "3": "บุรีรัมย์",
		  "code": "311505",
		  "subdistrict": "สำโรง",
		  "district": "พลับพลาชัย",
		  "province": "บุรีรัมย์"
		  }
		]
	  }
	  if (id == 'พุทไธสง') {
		ar = [
		  {
		  "0": "310901",
		  "1": "พุทไธสง",
		  "2": "พุทไธสง",
		  "3": "บุรีรัมย์",
		  "code": "310901",
		  "subdistrict": "พุทไธสง",
		  "district": "พุทไธสง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310902",
		  "1": "มะเฟือง",
		  "2": "พุทไธสง",
		  "3": "บุรีรัมย์",
		  "code": "310902",
		  "subdistrict": "มะเฟือง",
		  "district": "พุทไธสง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310903",
		  "1": "บ้านจาน",
		  "2": "พุทไธสง",
		  "3": "บุรีรัมย์",
		  "code": "310903",
		  "subdistrict": "บ้านจาน",
		  "district": "พุทไธสง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310906",
		  "1": "บ้านเป้า",
		  "2": "พุทไธสง",
		  "3": "บุรีรัมย์",
		  "code": "310906",
		  "subdistrict": "บ้านเป้า",
		  "district": "พุทไธสง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310907",
		  "1": "บ้านแวง",
		  "2": "พุทไธสง",
		  "3": "บุรีรัมย์",
		  "code": "310907",
		  "subdistrict": "บ้านแวง",
		  "district": "พุทไธสง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310909",
		  "1": "บ้านยาง",
		  "2": "พุทไธสง",
		  "3": "บุรีรัมย์",
		  "code": "310909",
		  "subdistrict": "บ้านยาง",
		  "district": "พุทไธสง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310910",
		  "1": "หายโศก",
		  "2": "พุทไธสง",
		  "3": "บุรีรัมย์",
		  "code": "310910",
		  "subdistrict": "หายโศก",
		  "district": "พุทไธสง",
		  "province": "บุรีรัมย์"
		  }
		]
	  }
	  if (id == 'ละหานทราย') {
		ar = [
		  {
		  "0": "310601",
		  "1": "ละหานทราย",
		  "2": "ละหานทราย",
		  "3": "บุรีรัมย์",
		  "code": "310601",
		  "subdistrict": "ละหานทราย",
		  "district": "ละหานทราย",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310603",
		  "1": "ตาจง",
		  "2": "ละหานทราย",
		  "3": "บุรีรัมย์",
		  "code": "310603",
		  "subdistrict": "ตาจง",
		  "district": "ละหานทราย",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310604",
		  "1": "สำโรงใหม่",
		  "2": "ละหานทราย",
		  "3": "บุรีรัมย์",
		  "code": "310604",
		  "subdistrict": "สำโรงใหม่",
		  "district": "ละหานทราย",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310607",
		  "1": "หนองแวง",
		  "2": "ละหานทราย",
		  "3": "บุรีรัมย์",
		  "code": "310607",
		  "subdistrict": "หนองแวง",
		  "district": "ละหานทราย",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310610",
		  "1": "หนองตะครอง",
		  "2": "ละหานทราย",
		  "3": "บุรีรัมย์",
		  "code": "310610",
		  "subdistrict": "หนองตะครอง",
		  "district": "ละหานทราย",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310611",
		  "1": "โคกว่าน",
		  "2": "ละหานทราย",
		  "3": "บุรีรัมย์",
		  "code": "310611",
		  "subdistrict": "โคกว่าน",
		  "district": "ละหานทราย",
		  "province": "บุรีรัมย์"
		  }
		]
	  }
	  if (id == 'ลำปลายมาศ') {
		ar = [
		  {
		  "0": "311001",
		  "1": "ลำปลายมาศ",
		  "2": "ลำปลายมาศ",
		  "3": "บุรีรัมย์",
		  "code": "311001",
		  "subdistrict": "ลำปลายมาศ",
		  "district": "ลำปลายมาศ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311002",
		  "1": "หนองคู",
		  "2": "ลำปลายมาศ",
		  "3": "บุรีรัมย์",
		  "code": "311002",
		  "subdistrict": "หนองคู",
		  "district": "ลำปลายมาศ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311003",
		  "1": "แสลงพัน",
		  "2": "ลำปลายมาศ",
		  "3": "บุรีรัมย์",
		  "code": "311003",
		  "subdistrict": "แสลงพัน",
		  "district": "ลำปลายมาศ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311004",
		  "1": "ทะเมนชัย",
		  "2": "ลำปลายมาศ",
		  "3": "บุรีรัมย์",
		  "code": "311004",
		  "subdistrict": "ทะเมนชัย",
		  "district": "ลำปลายมาศ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311005",
		  "1": "ตลาดโพธิ์",
		  "2": "ลำปลายมาศ",
		  "3": "บุรีรัมย์",
		  "code": "311005",
		  "subdistrict": "ตลาดโพธิ์",
		  "district": "ลำปลายมาศ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311006",
		  "1": "หนองกะทิง",
		  "2": "ลำปลายมาศ",
		  "3": "บุรีรัมย์",
		  "code": "311006",
		  "subdistrict": "หนองกะทิง",
		  "district": "ลำปลายมาศ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311007",
		  "1": "โคกกลาง",
		  "2": "ลำปลายมาศ",
		  "3": "บุรีรัมย์",
		  "code": "311007",
		  "subdistrict": "โคกกลาง",
		  "district": "ลำปลายมาศ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311008",
		  "1": "โคกสะอาด",
		  "2": "ลำปลายมาศ",
		  "3": "บุรีรัมย์",
		  "code": "311008",
		  "subdistrict": "โคกสะอาด",
		  "district": "ลำปลายมาศ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311009",
		  "1": "เมืองแฝก",
		  "2": "ลำปลายมาศ",
		  "3": "บุรีรัมย์",
		  "code": "311009",
		  "subdistrict": "เมืองแฝก",
		  "district": "ลำปลายมาศ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311010",
		  "1": "บ้านยาง",
		  "2": "ลำปลายมาศ",
		  "3": "บุรีรัมย์",
		  "code": "311010",
		  "subdistrict": "บ้านยาง",
		  "district": "ลำปลายมาศ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311011",
		  "1": "ผไทรินทร์",
		  "2": "ลำปลายมาศ",
		  "3": "บุรีรัมย์",
		  "code": "311011",
		  "subdistrict": "ผไทรินทร์",
		  "district": "ลำปลายมาศ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311012",
		  "1": "โคกล่าม",
		  "2": "ลำปลายมาศ",
		  "3": "บุรีรัมย์",
		  "code": "311012",
		  "subdistrict": "โคกล่าม",
		  "district": "ลำปลายมาศ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311013",
		  "1": "หินโคน",
		  "2": "ลำปลายมาศ",
		  "3": "บุรีรัมย์",
		  "code": "311013",
		  "subdistrict": "หินโคน",
		  "district": "ลำปลายมาศ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311014",
		  "1": "หนองบัวโคก",
		  "2": "ลำปลายมาศ",
		  "3": "บุรีรัมย์",
		  "code": "311014",
		  "subdistrict": "หนองบัวโคก",
		  "district": "ลำปลายมาศ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311015",
		  "1": "บุโพธิ์",
		  "2": "ลำปลายมาศ",
		  "3": "บุรีรัมย์",
		  "code": "311015",
		  "subdistrict": "บุโพธิ์",
		  "district": "ลำปลายมาศ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311016",
		  "1": "หนองโดน",
		  "2": "ลำปลายมาศ",
		  "3": "บุรีรัมย์",
		  "code": "311016",
		  "subdistrict": "หนองโดน",
		  "district": "ลำปลายมาศ",
		  "province": "บุรีรัมย์"
		  }
		]
	  }
	  if (id == 'สตึก') {
		ar = [
		  {
		  "0": "311101",
		  "1": "สตึก",
		  "2": "สตึก",
		  "3": "บุรีรัมย์",
		  "code": "311101",
		  "subdistrict": "สตึก",
		  "district": "สตึก",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311102",
		  "1": "นิคม",
		  "2": "สตึก",
		  "3": "บุรีรัมย์",
		  "code": "311102",
		  "subdistrict": "นิคม",
		  "district": "สตึก",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311103",
		  "1": "ทุ่งวัง",
		  "2": "สตึก",
		  "3": "บุรีรัมย์",
		  "code": "311103",
		  "subdistrict": "ทุ่งวัง",
		  "district": "สตึก",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311104",
		  "1": "เมืองแก",
		  "2": "สตึก",
		  "3": "บุรีรัมย์",
		  "code": "311104",
		  "subdistrict": "เมืองแก",
		  "district": "สตึก",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311105",
		  "1": "หนองใหญ่",
		  "2": "สตึก",
		  "3": "บุรีรัมย์",
		  "code": "311105",
		  "subdistrict": "หนองใหญ่",
		  "district": "สตึก",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311106",
		  "1": "ร่อนทอง",
		  "2": "สตึก",
		  "3": "บุรีรัมย์",
		  "code": "311106",
		  "subdistrict": "ร่อนทอง",
		  "district": "สตึก",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311109",
		  "1": "ดอนมนต์",
		  "2": "สตึก",
		  "3": "บุรีรัมย์",
		  "code": "311109",
		  "subdistrict": "ดอนมนต์",
		  "district": "สตึก",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311110",
		  "1": "ชุมแสง",
		  "2": "สตึก",
		  "3": "บุรีรัมย์",
		  "code": "311110",
		  "subdistrict": "ชุมแสง",
		  "district": "สตึก",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311111",
		  "1": "ท่าม่วง",
		  "2": "สตึก",
		  "3": "บุรีรัมย์",
		  "code": "311111",
		  "subdistrict": "ท่าม่วง",
		  "district": "สตึก",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311112",
		  "1": "สะแก",
		  "2": "สตึก",
		  "3": "บุรีรัมย์",
		  "code": "311112",
		  "subdistrict": "สะแก",
		  "district": "สตึก",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311114",
		  "1": "สนามชัย",
		  "2": "สตึก",
		  "3": "บุรีรัมย์",
		  "code": "311114",
		  "subdistrict": "สนามชัย",
		  "district": "สตึก",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311115",
		  "1": "กระสัง",
		  "2": "สตึก",
		  "3": "บุรีรัมย์",
		  "code": "311115",
		  "subdistrict": "กระสัง",
		  "district": "สตึก",
		  "province": "บุรีรัมย์"
		  }
		]
	  }
	  if (id == 'หนองกี่') {
		ar = [
		  {
		  "0": "310501",
		  "1": "หนองกี่",
		  "2": "หนองกี่",
		  "3": "บุรีรัมย์",
		  "code": "310501",
		  "subdistrict": "หนองกี่",
		  "district": "หนองกี่",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310502",
		  "1": "เย้ยปราสาท",
		  "2": "หนองกี่",
		  "3": "บุรีรัมย์",
		  "code": "310502",
		  "subdistrict": "เย้ยปราสาท",
		  "district": "หนองกี่",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310503",
		  "1": "เมืองไผ่",
		  "2": "หนองกี่",
		  "3": "บุรีรัมย์",
		  "code": "310503",
		  "subdistrict": "เมืองไผ่",
		  "district": "หนองกี่",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310504",
		  "1": "ดอนอะราง",
		  "2": "หนองกี่",
		  "3": "บุรีรัมย์",
		  "code": "310504",
		  "subdistrict": "ดอนอะราง",
		  "district": "หนองกี่",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310505",
		  "1": "โคกสว่าง",
		  "2": "หนองกี่",
		  "3": "บุรีรัมย์",
		  "code": "310505",
		  "subdistrict": "โคกสว่าง",
		  "district": "หนองกี่",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310506",
		  "1": "ทุ่งกระตาดพัฒนา",
		  "2": "หนองกี่",
		  "3": "บุรีรัมย์",
		  "code": "310506",
		  "subdistrict": "ทุ่งกระตาดพัฒนา",
		  "district": "หนองกี่",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310507",
		  "1": "ทุ่งกระเต็น",
		  "2": "หนองกี่",
		  "3": "บุรีรัมย์",
		  "code": "310507",
		  "subdistrict": "ทุ่งกระเต็น",
		  "district": "หนองกี่",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310508",
		  "1": "ท่าโพธิ์ชัย",
		  "2": "หนองกี่",
		  "3": "บุรีรัมย์",
		  "code": "310508",
		  "subdistrict": "ท่าโพธิ์ชัย",
		  "district": "หนองกี่",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310509",
		  "1": "โคกสูง",
		  "2": "หนองกี่",
		  "3": "บุรีรัมย์",
		  "code": "310509",
		  "subdistrict": "โคกสูง",
		  "district": "หนองกี่",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310510",
		  "1": "บุกระสัง",
		  "2": "หนองกี่",
		  "3": "บุรีรัมย์",
		  "code": "310510",
		  "subdistrict": "บุกระสัง",
		  "district": "หนองกี่",
		  "province": "บุรีรัมย์"
		  }
		]
	  }
	  if (id == 'หนองหงส์') {
		ar = [
		  {
		  "0": "311401",
		  "1": "สระแก้ว",
		  "2": "หนองหงส์",
		  "3": "บุรีรัมย์",
		  "code": "311401",
		  "subdistrict": "สระแก้ว",
		  "district": "หนองหงส์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311402",
		  "1": "ห้วยหิน",
		  "2": "หนองหงส์",
		  "3": "บุรีรัมย์",
		  "code": "311402",
		  "subdistrict": "ห้วยหิน",
		  "district": "หนองหงส์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311403",
		  "1": "ไทยสามัคคี",
		  "2": "หนองหงส์",
		  "3": "บุรีรัมย์",
		  "code": "311403",
		  "subdistrict": "ไทยสามัคคี",
		  "district": "หนองหงส์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311404",
		  "1": "หนองชัยศรี",
		  "2": "หนองหงส์",
		  "3": "บุรีรัมย์",
		  "code": "311404",
		  "subdistrict": "หนองชัยศรี",
		  "district": "หนองหงส์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311405",
		  "1": "เสาเดียว",
		  "2": "หนองหงส์",
		  "3": "บุรีรัมย์",
		  "code": "311405",
		  "subdistrict": "เสาเดียว",
		  "district": "หนองหงส์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311406",
		  "1": "เมืองฝ้าย",
		  "2": "หนองหงส์",
		  "3": "บุรีรัมย์",
		  "code": "311406",
		  "subdistrict": "เมืองฝ้าย",
		  "district": "หนองหงส์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311407",
		  "1": "สระทอง",
		  "2": "หนองหงส์",
		  "3": "บุรีรัมย์",
		  "code": "311407",
		  "subdistrict": "สระทอง",
		  "district": "หนองหงส์",
		  "province": "บุรีรัมย์"
		  }
		]
	  }
	  if (id == 'ห้วยราช') {
		ar = [
		  {
		  "0": "311601",
		  "1": "ห้วยราช",
		  "2": "ห้วยราช",
		  "3": "บุรีรัมย์",
		  "code": "311601",
		  "subdistrict": "ห้วยราช",
		  "district": "ห้วยราช",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311602",
		  "1": "สามแวง",
		  "2": "ห้วยราช",
		  "3": "บุรีรัมย์",
		  "code": "311602",
		  "subdistrict": "สามแวง",
		  "district": "ห้วยราช",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311603",
		  "1": "ตาเสา",
		  "2": "ห้วยราช",
		  "3": "บุรีรัมย์",
		  "code": "311603",
		  "subdistrict": "ตาเสา",
		  "district": "ห้วยราช",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311604",
		  "1": "บ้านตะโก",
		  "2": "ห้วยราช",
		  "3": "บุรีรัมย์",
		  "code": "311604",
		  "subdistrict": "บ้านตะโก",
		  "district": "ห้วยราช",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311605",
		  "1": "สนวน",
		  "2": "ห้วยราช",
		  "3": "บุรีรัมย์",
		  "code": "311605",
		  "subdistrict": "สนวน",
		  "district": "ห้วยราช",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311606",
		  "1": "โคกเหล็ก",
		  "2": "ห้วยราช",
		  "3": "บุรีรัมย์",
		  "code": "311606",
		  "subdistrict": "โคกเหล็ก",
		  "district": "ห้วยราช",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311607",
		  "1": "เมืองโพธิ์",
		  "2": "ห้วยราช",
		  "3": "บุรีรัมย์",
		  "code": "311607",
		  "subdistrict": "เมืองโพธิ์",
		  "district": "ห้วยราช",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311608",
		  "1": "ห้วยราชา",
		  "2": "ห้วยราช",
		  "3": "บุรีรัมย์",
		  "code": "311608",
		  "subdistrict": "ห้วยราชา",
		  "district": "ห้วยราช",
		  "province": "บุรีรัมย์"
		  }
		]
	  }
	  if (id == 'เฉลิมพระเกียรติ') {
		ar = [
		  {
		  "0": "312301",
		  "1": "เจริญสุข",
		  "2": "เฉลิมพระเกียรติ",
		  "3": "บุรีรัมย์",
		  "code": "312301",
		  "subdistrict": "เจริญสุข",
		  "district": "เฉลิมพระเกียรติ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "312302",
		  "1": "ตาเป๊ก",
		  "2": "เฉลิมพระเกียรติ",
		  "3": "บุรีรัมย์",
		  "code": "312302",
		  "subdistrict": "ตาเป๊ก",
		  "district": "เฉลิมพระเกียรติ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "312303",
		  "1": "อีสานเขต",
		  "2": "เฉลิมพระเกียรติ",
		  "3": "บุรีรัมย์",
		  "code": "312303",
		  "subdistrict": "อีสานเขต",
		  "district": "เฉลิมพระเกียรติ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "312304",
		  "1": "ถาวร",
		  "2": "เฉลิมพระเกียรติ",
		  "3": "บุรีรัมย์",
		  "code": "312304",
		  "subdistrict": "ถาวร",
		  "district": "เฉลิมพระเกียรติ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "312305",
		  "1": "ยายแย้มวัฒนา",
		  "2": "เฉลิมพระเกียรติ",
		  "3": "บุรีรัมย์",
		  "code": "312305",
		  "subdistrict": "ยายแย้มวัฒนา",
		  "district": "เฉลิมพระเกียรติ",
		  "province": "บุรีรัมย์"
		  }
		]
	  }
	  if (id == 'เมืองบุรีรัมย์') {
		ar = [
		  {
		  "0": "310101",
		  "1": "ในเมือง",
		  "2": "เมืองบุรีรัมย์",
		  "3": "บุรีรัมย์",
		  "code": "310101",
		  "subdistrict": "ในเมือง",
		  "district": "เมืองบุรีรัมย์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310102",
		  "1": "อิสาณ",
		  "2": "เมืองบุรีรัมย์",
		  "3": "บุรีรัมย์",
		  "code": "310102",
		  "subdistrict": "อิสาณ",
		  "district": "เมืองบุรีรัมย์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310103",
		  "1": "เสม็ด",
		  "2": "เมืองบุรีรัมย์",
		  "3": "บุรีรัมย์",
		  "code": "310103",
		  "subdistrict": "เสม็ด",
		  "district": "เมืองบุรีรัมย์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310104",
		  "1": "บ้านบัว",
		  "2": "เมืองบุรีรัมย์",
		  "3": "บุรีรัมย์",
		  "code": "310104",
		  "subdistrict": "บ้านบัว",
		  "district": "เมืองบุรีรัมย์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310105",
		  "1": "สะแกโพรง",
		  "2": "เมืองบุรีรัมย์",
		  "3": "บุรีรัมย์",
		  "code": "310105",
		  "subdistrict": "สะแกโพรง",
		  "district": "เมืองบุรีรัมย์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310106",
		  "1": "สวายจีก",
		  "2": "เมืองบุรีรัมย์",
		  "3": "บุรีรัมย์",
		  "code": "310106",
		  "subdistrict": "สวายจีก",
		  "district": "เมืองบุรีรัมย์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310108",
		  "1": "บ้านยาง",
		  "2": "เมืองบุรีรัมย์",
		  "3": "บุรีรัมย์",
		  "code": "310108",
		  "subdistrict": "บ้านยาง",
		  "district": "เมืองบุรีรัมย์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310112",
		  "1": "พระครู",
		  "2": "เมืองบุรีรัมย์",
		  "3": "บุรีรัมย์",
		  "code": "310112",
		  "subdistrict": "พระครู",
		  "district": "เมืองบุรีรัมย์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310113",
		  "1": "ถลุงเหล็ก",
		  "2": "เมืองบุรีรัมย์",
		  "3": "บุรีรัมย์",
		  "code": "310113",
		  "subdistrict": "ถลุงเหล็ก",
		  "district": "เมืองบุรีรัมย์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310114",
		  "1": "หนองตาด",
		  "2": "เมืองบุรีรัมย์",
		  "3": "บุรีรัมย์",
		  "code": "310114",
		  "subdistrict": "หนองตาด",
		  "district": "เมืองบุรีรัมย์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310117",
		  "1": "ลุมปุ๊ก",
		  "2": "เมืองบุรีรัมย์",
		  "3": "บุรีรัมย์",
		  "code": "310117",
		  "subdistrict": "ลุมปุ๊ก",
		  "district": "เมืองบุรีรัมย์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310118",
		  "1": "สองห้อง",
		  "2": "เมืองบุรีรัมย์",
		  "3": "บุรีรัมย์",
		  "code": "310118",
		  "subdistrict": "สองห้อง",
		  "district": "เมืองบุรีรัมย์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310119",
		  "1": "บัวทอง",
		  "2": "เมืองบุรีรัมย์",
		  "3": "บุรีรัมย์",
		  "code": "310119",
		  "subdistrict": "บัวทอง",
		  "district": "เมืองบุรีรัมย์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310120",
		  "1": "ชุมเห็ด",
		  "2": "เมืองบุรีรัมย์",
		  "3": "บุรีรัมย์",
		  "code": "310120",
		  "subdistrict": "ชุมเห็ด",
		  "district": "เมืองบุรีรัมย์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310122",
		  "1": "หลักเขต",
		  "2": "เมืองบุรีรัมย์",
		  "3": "บุรีรัมย์",
		  "code": "310122",
		  "subdistrict": "หลักเขต",
		  "district": "เมืองบุรีรัมย์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310125",
		  "1": "สะแกซำ",
		  "2": "เมืองบุรีรัมย์",
		  "3": "บุรีรัมย์",
		  "code": "310125",
		  "subdistrict": "สะแกซำ",
		  "district": "เมืองบุรีรัมย์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310126",
		  "1": "กลันทา",
		  "2": "เมืองบุรีรัมย์",
		  "3": "บุรีรัมย์",
		  "code": "310126",
		  "subdistrict": "กลันทา",
		  "district": "เมืองบุรีรัมย์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310127",
		  "1": "กระสัง",
		  "2": "เมืองบุรีรัมย์",
		  "3": "บุรีรัมย์",
		  "code": "310127",
		  "subdistrict": "กระสัง",
		  "district": "เมืองบุรีรัมย์",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "310128",
		  "1": "เมืองฝาง",
		  "2": "เมืองบุรีรัมย์",
		  "3": "บุรีรัมย์",
		  "code": "310128",
		  "subdistrict": "เมืองฝาง",
		  "district": "เมืองบุรีรัมย์",
		  "province": "บุรีรัมย์"
		  }
		]
	  }
	  if (id == 'แคนดง') {
		ar = [
		  {
		  "0": "312201",
		  "1": "แคนดง",
		  "2": "แคนดง",
		  "3": "บุรีรัมย์",
		  "code": "312201",
		  "subdistrict": "แคนดง",
		  "district": "แคนดง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "312202",
		  "1": "ดงพลอง",
		  "2": "แคนดง",
		  "3": "บุรีรัมย์",
		  "code": "312202",
		  "subdistrict": "ดงพลอง",
		  "district": "แคนดง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "312203",
		  "1": "สระบัว",
		  "2": "แคนดง",
		  "3": "บุรีรัมย์",
		  "code": "312203",
		  "subdistrict": "สระบัว",
		  "district": "แคนดง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "312204",
		  "1": "หัวฝาย",
		  "2": "แคนดง",
		  "3": "บุรีรัมย์",
		  "code": "312204",
		  "subdistrict": "หัวฝาย",
		  "district": "แคนดง",
		  "province": "บุรีรัมย์"
		  }
		  ]
		  }
		  if (id == 'โนนดินแดง') {
		  ar = [
		  {
		  "0": "312001",
		  "1": "โนนดินแดง",
		  "2": "โนนดินแดง",
		  "3": "บุรีรัมย์",
		  "code": "312001",
		  "subdistrict": "โนนดินแดง",
		  "district": "โนนดินแดง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "312002",
		  "1": "ส้มป่อย",
		  "2": "โนนดินแดง",
		  "3": "บุรีรัมย์",
		  "code": "312002",
		  "subdistrict": "ส้มป่อย",
		  "district": "โนนดินแดง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "312003",
		  "1": "ลำนางรอง",
		  "2": "โนนดินแดง",
		  "3": "บุรีรัมย์",
		  "code": "312003",
		  "subdistrict": "ลำนางรอง",
		  "district": "โนนดินแดง",
		  "province": "บุรีรัมย์"
		  }
		]
	  }
	  if (id == 'โนนสุวรรณ') {
		ar = [
		  {
		  "0": "311701",
		  "1": "โนนสุวรรณ",
		  "2": "โนนสุวรรณ",
		  "3": "บุรีรัมย์",
		  "code": "311701",
		  "subdistrict": "โนนสุวรรณ",
		  "district": "โนนสุวรรณ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311702",
		  "1": "ทุ่งจังหัน",
		  "2": "โนนสุวรรณ",
		  "3": "บุรีรัมย์",
		  "code": "311702",
		  "subdistrict": "ทุ่งจังหัน",
		  "district": "โนนสุวรรณ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311703",
		  "1": "โกรกแก้ว",
		  "2": "โนนสุวรรณ",
		  "3": "บุรีรัมย์",
		  "code": "311703",
		  "subdistrict": "โกรกแก้ว",
		  "district": "โนนสุวรรณ",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "311704",
		  "1": "ดงอีจาน",
		  "2": "โนนสุวรรณ",
		  "3": "บุรีรัมย์",
		  "code": "311704",
		  "subdistrict": "ดงอีจาน",
		  "district": "โนนสุวรรณ",
		  "province": "บุรีรัมย์"
		  }
		]
	  }
	  return ar
	}

	function onDisYs(id) {
	  let ar = []
	  if (id == 'ไทยเจริญ') {
		ar = [
		  {
			"subdistrict": "คำเตย",
			"district": "ไทยเจริญ",
			"province": "ยโสธร"
		  },
		]
	  }
	  return ar
	}
	
	function onOrgBr(id) {
	  let ar = []
	  if (id == 'กระสัง') {
		ar = [
		  {
		  "0": "3131",
		  "1": "06310305",
		  "2": "องค์การบริหารส่วนตำบล",
		  "3": "องค์การบริหารส่วนตำบลกันทรารมย์",
		  "4": "กระสัง",
		  "5": "บุรีรัมย์",
		  "id": "3131",
		  "codeabt": "06310305",
		  "orgtype": "องค์การบริหารส่วนตำบล",
		  "abtname": "องค์การบริหารส่วนตำบลกันทรารมย์",
		  "district": "กระสัง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "3153",
		  "1": "06310306",
		  "2": "องค์การบริหารส่วนตำบล",
		  "3": "องค์การบริหารส่วนตำบลชุมแสง",
		  "4": "กระสัง",
		  "5": "บุรีรัมย์",
		  "id": "3153",
		  "codeabt": "06310306",
		  "orgtype": "องค์การบริหารส่วนตำบล",
		  "abtname": "องค์การบริหารส่วนตำบลชุมแสง",
		  "district": "กระสัง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "3187",
		  "1": "06310307",
		  "2": "องค์การบริหารส่วนตำบล",
		  "3": "องค์การบริหารส่วนตำบลบ้านปรือ",
		  "4": "กระสัง",
		  "5": "บุรีรัมย์",
		  "id": "3187",
		  "codeabt": "06310307",
		  "orgtype": "องค์การบริหารส่วนตำบล",
		  "abtname": "องค์การบริหารส่วนตำบลบ้านปรือ",
		  "district": "กระสัง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "3221",
		  "1": "06310309",
		  "2": "องค์การบริหารส่วนตำบล",
		  "3": "องค์การบริหารส่วนตำบลลำดวน",
		  "4": "กระสัง",
		  "5": "บุรีรัมย์",
		  "id": "3221",
		  "codeabt": "06310309",
		  "orgtype": "องค์การบริหารส่วนตำบล",
		  "abtname": "องค์การบริหารส่วนตำบลลำดวน",
		  "district": "กระสัง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "3226",
		  "1": "06310312",
		  "2": "องค์การบริหารส่วนตำบล",
		  "3": "องค์การบริหารส่วนตำบลศรีภูมิ",
		  "4": "กระสัง",
		  "5": "บุรีรัมย์",
		  "id": "3226",
		  "codeabt": "06310312",
		  "orgtype": "องค์การบริหารส่วนตำบล",
		  "abtname": "องค์การบริหารส่วนตำบลศรีภูมิ",
		  "district": "กระสัง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "3243",
		  "1": "06310310",
		  "2": "องค์การบริหารส่วนตำบล",
		  "3": "องค์การบริหารส่วนตำบลสูงเนิน",
		  "4": "กระสัง",
		  "5": "บุรีรัมย์",
		  "id": "3243",
		  "codeabt": "06310310",
		  "orgtype": "องค์การบริหารส่วนตำบล",
		  "abtname": "องค์การบริหารส่วนตำบลสูงเนิน",
		  "district": "กระสัง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "3264",
		  "1": "06310311",
		  "2": "องค์การบริหารส่วนตำบล",
		  "3": "องค์การบริหารส่วนตำบลห้วยสำราญ",
		  "4": "กระสัง",
		  "5": "บุรีรัมย์",
		  "id": "3264",
		  "codeabt": "06310311",
		  "orgtype": "องค์การบริหารส่วนตำบล",
		  "abtname": "องค์การบริหารส่วนตำบลห้วยสำราญ",
		  "district": "กระสัง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "3210",
		  "1": "06310308",
		  "2": "องค์การบริหารส่วนตำบล",
		  "3": "องค์การบริหารส่วนตำบลเมืองไผ่",
		  "4": "กระสัง",
		  "5": "บุรีรัมย์",
		  "id": "3210",
		  "codeabt": "06310308",
		  "orgtype": "องค์การบริหารส่วนตำบล",
		  "abtname": "องค์การบริหารส่วนตำบลเมืองไผ่",
		  "district": "กระสัง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "3068",
		  "1": "05310301",
		  "2": "เทศบาลตำบล",
		  "3": "เทศบาลตำบลกระสัง",
		  "4": "กระสัง",
		  "5": "บุรีรัมย์",
		  "id": "3068",
		  "codeabt": "05310301",
		  "orgtype": "เทศบาลตำบล",
		  "abtname": "เทศบาลตำบลกระสัง",
		  "district": "กระสัง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "3109",
		  "1": "05310302",
		  "2": "เทศบาลตำบล",
		  "3": "เทศบาลตำบลสองชั้น",
		  "4": "กระสัง",
		  "5": "บุรีรัมย์",
		  "id": "3109",
		  "codeabt": "05310302",
		  "orgtype": "เทศบาลตำบล",
		  "abtname": "เทศบาลตำบลสองชั้น",
		  "district": "กระสัง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "3117",
		  "1": "05310303",
		  "2": "เทศบาลตำบล",
		  "3": "เทศบาลตำบลหนองเต็ง",
		  "4": "กระสัง",
		  "5": "บุรีรัมย์",
		  "id": "3117",
		  "codeabt": "05310303",
		  "orgtype": "เทศบาลตำบล",
		  "abtname": "เทศบาลตำบลหนองเต็ง",
		  "district": "กระสัง",
		  "province": "บุรีรัมย์"
		  },
		  {
		  "0": "3127",
		  "1": "05310304",
		  "2": "เทศบาลตำบล",
		  "3": "เทศบาลตำบลอุดมธรรม",
		  "4": "กระสัง",
		  "5": "บุรีรัมย์",
		  "id": "3127",
		  "codeabt": "05310304",
		  "orgtype": "เทศบาลตำบล",
		  "abtname": "เทศบาลตำบลอุดมธรรม",
		  "district": "กระสัง",
		  "province": "บุรีรัมย์"
		  }
		  ]
	  }
	  if (id == 'คูเมือง') {
		ar = [
		{
		"0": "3135",
		"1": "06310203",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลคูเมือง",
		"4": "คูเมือง",
		"5": "บุรีรัมย์",
		"id": "3135",
		"codeabt": "06310203",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลคูเมือง",
		"district": "คูเมือง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3161",
		"1": "06310204",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลตูมใหญ่",
		"4": "คูเมือง",
		"5": "บุรีรัมย์",
		"id": "3161",
		"codeabt": "06310204",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลตูมใหญ่",
		"district": "คูเมือง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3189",
		"1": "06310205",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลบ้านแพ",
		"4": "คูเมือง",
		"5": "บุรีรัมย์",
		"id": "3189",
		"codeabt": "06310205",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลบ้านแพ",
		"district": "คูเมือง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3199",
		"1": "06310206",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลปะเคียบ",
		"4": "คูเมือง",
		"5": "บุรีรัมย์",
		"id": "3199",
		"codeabt": "06310206",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลปะเคียบ",
		"district": "คูเมือง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3203",
		"1": "06310207",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลพรสำราญ",
		"4": "คูเมือง",
		"5": "บุรีรัมย์",
		"id": "3203",
		"codeabt": "06310207",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลพรสำราญ",
		"district": "คูเมือง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3249",
		"1": "06310208",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลหนองขมาร",
		"4": "คูเมือง",
		"5": "บุรีรัมย์",
		"id": "3249",
		"codeabt": "06310208",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลหนองขมาร",
		"district": "คูเมือง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3270",
		"1": "06310209",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลหินเหล็กไฟ",
		"4": "คูเมือง",
		"5": "บุรีรัมย์",
		"id": "3270",
		"codeabt": "06310209",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลหินเหล็กไฟ",
		"district": "คูเมือง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3071",
		"1": "05310201",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลคูเมือง",
		"4": "คูเมือง",
		"5": "บุรีรัมย์",
		"id": "3071",
		"codeabt": "05310201",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลคูเมือง",
		"district": "คูเมือง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3125",
		"1": "05310202",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลหินเหล็กไฟ",
		"4": "คูเมือง",
		"5": "บุรีรัมย์",
		"id": "3125",
		"codeabt": "05310202",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลหินเหล็กไฟ",
		"district": "คูเมือง",
		"province": "บุรีรัมย์"
		}
		]
	  }
	  if (id == 'ชำนิ') {
		ar = [
		{
		"0": "3150",
		"1": "06311803",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลช่อผกา",
		"4": "ชำนิ",
		"5": "บุรีรัมย์",
		"id": "3150",
		"codeabt": "06311803",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลช่อผกา",
		"district": "ชำนิ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3218",
		"1": "06311806",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลละลวด",
		"4": "ชำนิ",
		"5": "บุรีรัมย์",
		"id": "3218",
		"codeabt": "06311806",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลละลวด",
		"district": "ชำนิ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3215",
		"1": "06311804",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลเมืองยาง",
		"4": "ชำนิ",
		"5": "บุรีรัมย์",
		"id": "3215",
		"codeabt": "06311804",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลเมืองยาง",
		"district": "ชำนิ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3144",
		"1": "06311805",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลโคกสนวน",
		"4": "ชำนิ",
		"5": "บุรีรัมย์",
		"id": "3144",
		"codeabt": "06311805",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลโคกสนวน",
		"district": "ชำนิ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3078",
		"1": "05311801",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลชำนิ",
		"4": "ชำนิ",
		"5": "บุรีรัมย์",
		"id": "3078",
		"codeabt": "05311801",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลชำนิ",
		"district": "ชำนิ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3118",
		"1": "05311802",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลหนองปล่อง",
		"4": "ชำนิ",
		"5": "บุรีรัมย์",
		"id": "3118",
		"codeabt": "05311802",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลหนองปล่อง",
		"district": "ชำนิ",
		"province": "บุรีรัมย์"
		}
		]
	  }
	  if (id == 'นางรอง') {
		ar = [
		{
		"0": "3132",
		"1": "06310406",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลก้านเหลือง",
		"4": "นางรอง",
		"5": "บุรีรัมย์",
		"id": "3132",
		"codeabt": "06310406",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลก้านเหลือง",
		"district": "นางรอง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3152",
		"1": "06310407",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลชุมแสง",
		"4": "นางรอง",
		"5": "บุรีรัมย์",
		"id": "3152",
		"codeabt": "06310407",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลชุมแสง",
		"district": "นางรอง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3162",
		"1": "06310403",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลถนนหัก",
		"4": "นางรอง",
		"5": "บุรีรัมย์",
		"id": "3162",
		"codeabt": "06310403",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลถนนหัก",
		"district": "นางรอง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3164",
		"1": "06310408",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลทรัพย์พระยา",
		"4": "นางรอง",
		"5": "บุรีรัมย์",
		"id": "3164",
		"codeabt": "06310408",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลทรัพย์พระยา",
		"district": "นางรอง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3175",
		"1": "06310404",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลนางรอง",
		"4": "นางรอง",
		"5": "บุรีรัมย์",
		"id": "3175",
		"codeabt": "06310404",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลนางรอง",
		"district": "นางรอง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3194",
		"1": "06310409",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลบ้านสิงห์",
		"4": "นางรอง",
		"5": "บุรีรัมย์",
		"id": "3194",
		"codeabt": "06310409",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลบ้านสิงห์",
		"district": "นางรอง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3222",
		"1": "06310410",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลลำไทรโยง",
		"4": "นางรอง",
		"5": "บุรีรัมย์",
		"id": "3222",
		"codeabt": "06310410",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลลำไทรโยง",
		"district": "นางรอง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3239",
		"1": "06310405",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลสะเดา",
		"4": "นางรอง",
		"5": "บุรีรัมย์",
		"id": "3239",
		"codeabt": "06310405",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลสะเดา",
		"district": "นางรอง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3247",
		"1": "06310411",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลหนองกง",
		"4": "นางรอง",
		"5": "บุรีรัมย์",
		"id": "3247",
		"codeabt": "06310411",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลหนองกง",
		"district": "นางรอง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3258",
		"1": "06310414",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลหนองยายพิมพ์",
		"4": "นางรอง",
		"5": "บุรีรัมย์",
		"id": "3258",
		"codeabt": "06310414",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลหนองยายพิมพ์",
		"district": "นางรอง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3257",
		"1": "06310413",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลหนองโบสถ์",
		"4": "นางรอง",
		"5": "บุรีรัมย์",
		"id": "3257",
		"codeabt": "06310413",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลหนองโบสถ์",
		"district": "นางรอง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3261",
		"1": "06310415",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลหนองโสน",
		"4": "นางรอง",
		"5": "บุรีรัมย์",
		"id": "3261",
		"codeabt": "06310415",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลหนองโสน",
		"district": "นางรอง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3253",
		"1": "06310412",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลหนองไทร",
		"4": "นางรอง",
		"5": "บุรีรัมย์",
		"id": "3253",
		"codeabt": "06310412",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลหนองไทร",
		"district": "นางรอง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3265",
		"1": "06310416",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลหัวถนน",
		"4": "นางรอง",
		"5": "บุรีรัมย์",
		"id": "3265",
		"codeabt": "06310416",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลหัวถนน",
		"district": "นางรอง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3085",
		"1": "05310402",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลทุ่งแสงทอง",
		"4": "นางรอง",
		"5": "บุรีรัมย์",
		"id": "3085",
		"codeabt": "05310402",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลทุ่งแสงทอง",
		"district": "นางรอง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3066",
		"1": "04310401",
		"2": "เทศบาลเมือง",
		"3": "เทศบาลเมืองนางรอง",
		"4": "นางรอง",
		"5": "บุรีรัมย์",
		"id": "3066",
		"codeabt": "04310401",
		"orgtype": "เทศบาลเมือง",
		"abtname": "เทศบาลเมืองนางรอง",
		"district": "นางรอง",
		"province": "บุรีรัมย์"
		}
		]
	  }
	  if (id == 'นาโพธิ์') {
		ar = [
		{
		"0": "3156",
		"1": "06311302",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลดอนกอก",
		"4": "นาโพธิ์",
		"5": "บุรีรัมย์",
		"id": "3156",
		"codeabt": "06311302",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลดอนกอก",
		"district": "นาโพธิ์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3176",
		"1": "06311303",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลนาโพธิ์",
		"4": "นาโพธิ์",
		"5": "บุรีรัมย์",
		"id": "3176",
		"codeabt": "06311303",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลนาโพธิ์",
		"district": "นาโพธิ์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3182",
		"1": "06311304",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลบ้านคู",
		"4": "นาโพธิ์",
		"5": "บุรีรัมย์",
		"id": "3182",
		"codeabt": "06311304",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลบ้านคู",
		"district": "นาโพธิ์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3184",
		"1": "06311305",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลบ้านดู่",
		"4": "นาโพธิ์",
		"5": "บุรีรัมย์",
		"id": "3184",
		"codeabt": "06311305",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลบ้านดู่",
		"district": "นาโพธิ์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3227",
		"1": "06311306",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลศรีสว่าง",
		"4": "นาโพธิ์",
		"5": "บุรีรัมย์",
		"id": "3227",
		"codeabt": "06311306",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลศรีสว่าง",
		"district": "นาโพธิ์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3086",
		"1": "05311301",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลนาโพธิ์",
		"4": "นาโพธิ์",
		"5": "บุรีรัมย์",
		"id": "3086",
		"codeabt": "05311301",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลนาโพธิ์",
		"district": "นาโพธิ์",
		"province": "บุรีรัมย์"
		}
		]
	  }
	  if (id == 'บ้านกรวด') {
		ar = [
		{
		"0": "3240",
		"1": "06310809",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลสายตะกู",
		"4": "บ้านกรวด",
		"5": "บุรีรัมย์",
		"id": "3240",
		"codeabt": "06310809",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลสายตะกู",
		"district": "บ้านกรวด",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3269",
		"1": "06310811",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลหินลาด",
		"4": "บ้านกรวด",
		"5": "บุรีรัมย์",
		"id": "3269",
		"codeabt": "06310811",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลหินลาด",
		"district": "บ้านกรวด",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3134",
		"1": "06310810",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลเขาดินเหนือ",
		"4": "บ้านกรวด",
		"5": "บุรีรัมย์",
		"id": "3134",
		"codeabt": "06310810",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลเขาดินเหนือ",
		"district": "บ้านกรวด",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3077",
		"1": "05310803",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลจันทบเพชร",
		"4": "บ้านกรวด",
		"5": "บุรีรัมย์",
		"id": "3077",
		"codeabt": "05310803",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลจันทบเพชร",
		"district": "บ้านกรวด",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3081",
		"1": "05310801",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลตลาดนิคมปราสาท",
		"4": "บ้านกรวด",
		"5": "บุรีรัมย์",
		"id": "3081",
		"codeabt": "05310801",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลตลาดนิคมปราสาท",
		"district": "บ้านกรวด",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3095",
		"1": "05310807",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลบึงเจริญ",
		"4": "บ้านกรวด",
		"5": "บุรีรัมย์",
		"id": "3095",
		"codeabt": "05310807",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลบึงเจริญ",
		"district": "บ้านกรวด",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3090",
		"1": "05310802",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลบ้านกรวด",
		"4": "บ้านกรวด",
		"5": "บุรีรัมย์",
		"id": "3090",
		"codeabt": "05310802",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลบ้านกรวด",
		"district": "บ้านกรวด",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3091",
		"1": "05310805",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลบ้านกรวดปัญญาวัฒน์",
		"4": "บ้านกรวด",
		"5": "บุรีรัมย์",
		"id": "3091",
		"codeabt": "05310805",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลบ้านกรวดปัญญาวัฒน์",
		"district": "บ้านกรวด",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3097",
		"1": "05310808",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลปราสาท",
		"4": "บ้านกรวด",
		"5": "บุรีรัมย์",
		"id": "3097",
		"codeabt": "05310808",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลปราสาท",
		"district": "บ้านกรวด",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3119",
		"1": "05310804",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลหนองไม้งาม",
		"4": "บ้านกรวด",
		"5": "บุรีรัมย์",
		"id": "3119",
		"codeabt": "05310804",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลหนองไม้งาม",
		"district": "บ้านกรวด",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3087",
		"1": "05310806",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลโนนเจริญ",
		"4": "บ้านกรวด",
		"5": "บุรีรัมย์",
		"id": "3087",
		"codeabt": "05310806",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลโนนเจริญ",
		"district": "บ้านกรวด",
		"province": "บุรีรัมย์"
		}
		]
	  }
	  if (id == 'บ้านด่าน') {
		ar = [
		{
		"0": "3225",
		"1": "06312104",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลวังเหนือ",
		"4": "บ้านด่าน",
		"5": "บุรีรัมย์",
		"id": "3225",
		"codeabt": "06312104",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลวังเหนือ",
		"district": "บ้านด่าน",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3178",
		"1": "06312103",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลโนนขวาง",
		"4": "บ้านด่าน",
		"5": "บุรีรัมย์",
		"id": "3178",
		"codeabt": "06312103",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลโนนขวาง",
		"district": "บ้านด่าน",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3092",
		"1": "05312101",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลบ้านด่าน",
		"4": "บ้านด่าน",
		"5": "บุรีรัมย์",
		"id": "3092",
		"codeabt": "05312101",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลบ้านด่าน",
		"district": "บ้านด่าน",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3098",
		"1": "05312102",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลปราสาท",
		"4": "บ้านด่าน",
		"5": "บุรีรัมย์",
		"id": "3098",
		"codeabt": "05312102",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลปราสาท",
		"district": "บ้านด่าน",
		"province": "บุรีรัมย์"
		}
		]
	  }
	  if (id == 'บ้านใหม่ไชยพจน์') {
		ar = [
		{
		"0": "3133",
		"1": "06311902",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลกู่สวนแตง",
		"4": "บ้านใหม่ไชยพจน์",
		"5": "บุรีรัมย์",
		"id": "3133",
		"codeabt": "06311902",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลกู่สวนแตง",
		"district": "บ้านใหม่ไชยพจน์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3165",
		"1": "06311904",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลทองหลาง",
		"4": "บ้านใหม่ไชยพจน์",
		"5": "บุรีรัมย์",
		"id": "3165",
		"codeabt": "06311904",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลทองหลาง",
		"district": "บ้านใหม่ไชยพจน์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3259",
		"1": "06311905",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลหนองเยือง",
		"4": "บ้านใหม่ไชยพจน์",
		"5": "บุรีรัมย์",
		"id": "3259",
		"codeabt": "06311905",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลหนองเยือง",
		"district": "บ้านใหม่ไชยพจน์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3260",
		"1": "06311906",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลหนองแวง",
		"4": "บ้านใหม่ไชยพจน์",
		"5": "บุรีรัมย์",
		"id": "3260",
		"codeabt": "06311906",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลหนองแวง",
		"district": "บ้านใหม่ไชยพจน์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3157",
		"1": "06311903",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลแดงใหญ่",
		"4": "บ้านใหม่ไชยพจน์",
		"5": "บุรีรัมย์",
		"id": "3157",
		"codeabt": "06311903",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลแดงใหญ่",
		"district": "บ้านใหม่ไชยพจน์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3094",
		"1": "05311901",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลบ้านใหม่ไชยพจน์",
		"4": "บ้านใหม่ไชยพจน์",
		"5": "บุรีรัมย์",
		"id": "3094",
		"codeabt": "05311901",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลบ้านใหม่ไชยพจน์",
		"district": "บ้านใหม่ไชยพจน์",
		"province": "บุรีรัมย์"
		}
		]
	  }
	  if (id == 'ประโคนชัย') {
		ar = [
		{
		"0": "3148",
		"1": "06310706",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลจรเข้มาก",
		"4": "ประโคนชัย",
		"5": "บุรีรัมย์",
		"id": "3148",
		"codeabt": "06310706",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลจรเข้มาก",
		"district": "ประโคนชัย",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3159",
		"1": "06310715",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลตะโกตาพิ",
		"4": "ประโคนชัย",
		"5": "บุรีรัมย์",
		"id": "3159",
		"codeabt": "06310715",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลตะโกตาพิ",
		"district": "ประโคนชัย",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3186",
		"1": "06310707",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลบ้านไทร",
		"4": "ประโคนชัย",
		"5": "บุรีรัมย์",
		"id": "3186",
		"codeabt": "06310707",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลบ้านไทร",
		"district": "ประโคนชัย",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3198",
		"1": "06310716",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลประทัดบุ",
		"4": "ประโคนชัย",
		"5": "บุรีรัมย์",
		"id": "3198",
		"codeabt": "06310716",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลประทัดบุ",
		"district": "ประโคนชัย",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3197",
		"1": "06310704",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลประโคนชัย",
		"4": "ประโคนชัย",
		"5": "บุรีรัมย์",
		"id": "3197",
		"codeabt": "06310704",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลประโคนชัย",
		"district": "ประโคนชัย",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3200",
		"1": "06310708",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลปังกู",
		"4": "ประโคนชัย",
		"5": "บุรีรัมย์",
		"id": "3200",
		"codeabt": "06310708",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลปังกู",
		"district": "ประโคนชัย",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3219",
		"1": "06310710",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลละเวี้ย",
		"4": "ประโคนชัย",
		"5": "บุรีรัมย์",
		"id": "3219",
		"codeabt": "06310710",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลละเวี้ย",
		"district": "ประโคนชัย",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3242",
		"1": "06310717",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลสี่เหลี่ยม",
		"4": "ประโคนชัย",
		"5": "บุรีรัมย์",
		"id": "3242",
		"codeabt": "06310717",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลสี่เหลี่ยม",
		"district": "ประโคนชัย",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3254",
		"1": "06310711",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลหนองบอน",
		"4": "ประโคนชัย",
		"5": "บุรีรัมย์",
		"id": "3254",
		"codeabt": "06310711",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลหนองบอน",
		"district": "ประโคนชัย",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3138",
		"1": "06310712",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลโคกตูม",
		"4": "ประโคนชัย",
		"5": "บุรีรัมย์",
		"id": "3138",
		"codeabt": "06310712",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลโคกตูม",
		"district": "ประโคนชัย",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3139",
		"1": "06310713",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลโคกมะขาม",
		"4": "ประโคนชัย",
		"5": "บุรีรัมย์",
		"id": "3139",
		"codeabt": "06310713",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลโคกมะขาม",
		"district": "ประโคนชัย",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3141",
		"1": "06310714",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลโคกย่าง",
		"4": "ประโคนชัย",
		"5": "บุรีรัมย์",
		"id": "3141",
		"codeabt": "06310714",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลโคกย่าง",
		"district": "ประโคนชัย",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3206",
		"1": "06310709",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลไพศาล",
		"4": "ประโคนชัย",
		"5": "บุรีรัมย์",
		"id": "3206",
		"codeabt": "06310709",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลไพศาล",
		"district": "ประโคนชัย",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3096",
		"1": "05310701",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลประโคนชัย",
		"4": "ประโคนชัย",
		"5": "บุรีรัมย์",
		"id": "3096",
		"codeabt": "05310701",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลประโคนชัย",
		"district": "ประโคนชัย",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3070",
		"1": "05310705",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลเขาคอก",
		"4": "ประโคนชัย",
		"5": "บุรีรัมย์",
		"id": "3070",
		"codeabt": "05310705",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลเขาคอก",
		"district": "ประโคนชัย",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3113",
		"1": "05310702",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลแสลงโทน",
		"4": "ประโคนชัย",
		"5": "บุรีรัมย์",
		"id": "3113",
		"codeabt": "05310702",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลแสลงโทน",
		"district": "ประโคนชัย",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3074",
		"1": "05310703",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลโคกม้า",
		"4": "ประโคนชัย",
		"5": "บุรีรัมย์",
		"id": "3074",
		"codeabt": "05310703",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลโคกม้า",
		"district": "ประโคนชัย",
		"province": "บุรีรัมย์"
		}
		]
	  }
	  if (id == 'ปะคำ') {
		ar = [
		{
		"0": "3255",
		"1": "06311205",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลหนองบัว",
		"4": "ปะคำ",
		"5": "บุรีรัมย์",
		"id": "3255",
		"codeabt": "06311205",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลหนองบัว",
		"district": "ปะคำ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3271",
		"1": "06311203",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลหูทำนบ",
		"4": "ปะคำ",
		"5": "บุรีรัมย์",
		"id": "3271",
		"codeabt": "06311203",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลหูทำนบ",
		"district": "ปะคำ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3140",
		"1": "06311202",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลโคกมะม่วง",
		"4": "ปะคำ",
		"5": "บุรีรัมย์",
		"id": "3140",
		"codeabt": "06311202",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลโคกมะม่วง",
		"district": "ปะคำ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3173",
		"1": "06311204",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลไทยเจริญ",
		"4": "ปะคำ",
		"5": "บุรีรัมย์",
		"id": "3173",
		"codeabt": "06311204",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลไทยเจริญ",
		"district": "ปะคำ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3099",
		"1": "05311201",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลปะคำ",
		"4": "ปะคำ",
		"5": "บุรีรัมย์",
		"id": "3099",
		"codeabt": "05311201",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลปะคำ",
		"district": "ปะคำ",
		"province": "บุรีรัมย์"
		}
		]
	  }
	  if (id == 'พลับพลาชัย') {
		ar = [
		{
		"0": "3201",
		"1": "06311505",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลป่าชัน",
		"4": "พลับพลาชัย",
		"5": "บุรีรัมย์",
		"id": "3201",
		"codeabt": "06311505",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลป่าชัน",
		"district": "พลับพลาชัย",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3238",
		"1": "06311506",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลสะเดา",
		"4": "พลับพลาชัย",
		"5": "บุรีรัมย์",
		"id": "3238",
		"codeabt": "06311506",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลสะเดา",
		"district": "พลับพลาชัย",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3241",
		"1": "06311504",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลสำโรง",
		"4": "พลับพลาชัย",
		"5": "บุรีรัมย์",
		"id": "3241",
		"codeabt": "06311504",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลสำโรง",
		"district": "พลับพลาชัย",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3076",
		"1": "05311502",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลจันดุม",
		"4": "พลับพลาชัย",
		"5": "บุรีรัมย์",
		"id": "3076",
		"codeabt": "05311502",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลจันดุม",
		"district": "พลับพลาชัย",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3101",
		"1": "05311501",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลพลับพลาชัย",
		"4": "พลับพลาชัย",
		"5": "บุรีรัมย์",
		"id": "3101",
		"codeabt": "05311501",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลพลับพลาชัย",
		"district": "พลับพลาชัย",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3073",
		"1": "05311503",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลโคกขมิ้น",
		"4": "พลับพลาชัย",
		"5": "บุรีรัมย์",
		"id": "3073",
		"codeabt": "05311503",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลโคกขมิ้น",
		"district": "พลับพลาชัย",
		"province": "บุรีรัมย์"
		}
		]
	  }
	  if (id == 'พุทไธสง') {
		ar = [
		{
		"0": "3183",
		"1": "06310903",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลบ้านจาน",
		"4": "พุทไธสง",
		"5": "บุรีรัมย์",
		"id": "3183",
		"codeabt": "06310903",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลบ้านจาน",
		"district": "พุทไธสง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3192",
		"1": "06310904",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลบ้านยาง",
		"4": "พุทไธสง",
		"5": "บุรีรัมย์",
		"id": "3192",
		"codeabt": "06310904",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลบ้านยาง",
		"district": "พุทไธสง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3188",
		"1": "06310905",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลบ้านเป้า",
		"4": "พุทไธสง",
		"5": "บุรีรัมย์",
		"id": "3188",
		"codeabt": "06310905",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลบ้านเป้า",
		"district": "พุทไธสง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3193",
		"1": "06310906",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลบ้านแวง",
		"4": "พุทไธสง",
		"5": "บุรีรัมย์",
		"id": "3193",
		"codeabt": "06310906",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลบ้านแวง",
		"district": "พุทไธสง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3205",
		"1": "06310902",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลพุทไธสง",
		"4": "พุทไธสง",
		"5": "บุรีรัมย์",
		"id": "3205",
		"codeabt": "06310902",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลพุทไธสง",
		"district": "พุทไธสง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3207",
		"1": "06310908",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลมะเฟือง",
		"4": "พุทไธสง",
		"5": "บุรีรัมย์",
		"id": "3207",
		"codeabt": "06310908",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลมะเฟือง",
		"district": "พุทไธสง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3267",
		"1": "06310907",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลหายโศก",
		"4": "พุทไธสง",
		"5": "บุรีรัมย์",
		"id": "3267",
		"codeabt": "06310907",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลหายโศก",
		"district": "พุทไธสง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3102",
		"1": "05310901",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลพุทไธสง",
		"4": "พุทไธสง",
		"5": "บุรีรัมย์",
		"id": "3102",
		"codeabt": "05310901",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลพุทไธสง",
		"district": "พุทไธสง",
		"province": "บุรีรัมย์"
		}
		]
	  }
	  if (id == 'ละหานทราย') {
		ar = [
		{
		"0": "3220",
		"1": "06310606",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลละหานทราย",
		"4": "ละหานทราย",
		"5": "บุรีรัมย์",
		"id": "3220",
		"codeabt": "06310606",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลละหานทราย",
		"district": "ละหานทราย",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3143",
		"1": "06310607",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลโคกว่าน",
		"4": "ละหานทราย",
		"5": "บุรีรัมย์",
		"id": "3143",
		"codeabt": "06310607",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลโคกว่าน",
		"district": "ละหานทราย",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3082",
		"1": "05310601",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลตาจง",
		"4": "ละหานทราย",
		"5": "บุรีรัมย์",
		"id": "3082",
		"codeabt": "05310601",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลตาจง",
		"district": "ละหานทราย",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3104",
		"1": "05310602",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลละหานทราย",
		"4": "ละหานทราย",
		"5": "บุรีรัมย์",
		"id": "3104",
		"codeabt": "05310602",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลละหานทราย",
		"district": "ละหานทราย",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3112",
		"1": "05310603",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลสำโรงใหม่",
		"4": "ละหานทราย",
		"5": "บุรีรัมย์",
		"id": "3112",
		"codeabt": "05310603",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลสำโรงใหม่",
		"district": "ละหานทราย",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3115",
		"1": "05310605",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลหนองตะครอง",
		"4": "ละหานทราย",
		"5": "บุรีรัมย์",
		"id": "3115",
		"codeabt": "05310605",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลหนองตะครอง",
		"district": "ละหานทราย",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3120",
		"1": "05310604",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลหนองแวง",
		"4": "ละหานทราย",
		"5": "บุรีรัมย์",
		"id": "3120",
		"codeabt": "05310604",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลหนองแวง",
		"district": "ละหานทราย",
		"province": "บุรีรัมย์"
		}
		]
	  }
	  if (id == 'ลำปลายมาศ') {
		ar = [
		{
		"0": "3158",
		"1": "06311007",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลตลาดโพธิ์",
		"4": "ลำปลายมาศ",
		"5": "บุรีรัมย์",
		"id": "3158",
		"codeabt": "06311007",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลตลาดโพธิ์",
		"district": "ลำปลายมาศ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3166",
		"1": "06311015",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลทะเมนชัย",
		"4": "ลำปลายมาศ",
		"5": "บุรีรัมย์",
		"id": "3166",
		"codeabt": "06311015",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลทะเมนชัย",
		"district": "ลำปลายมาศ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3196",
		"1": "06311016",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลบุโพธิ์",
		"4": "ลำปลายมาศ",
		"5": "บุรีรัมย์",
		"id": "3196",
		"codeabt": "06311016",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลบุโพธิ์",
		"district": "ลำปลายมาศ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3191",
		"1": "06311008",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลบ้านยาง",
		"4": "ลำปลายมาศ",
		"5": "บุรีรัมย์",
		"id": "3191",
		"codeabt": "06311008",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลบ้านยาง",
		"district": "ลำปลายมาศ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3202",
		"1": "06311009",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลผไทรินทร์",
		"4": "ลำปลายมาศ",
		"5": "บุรีรัมย์",
		"id": "3202",
		"codeabt": "06311009",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลผไทรินทร์",
		"district": "ลำปลายมาศ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3248",
		"1": "06311012",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลหนองกะทิง",
		"4": "ลำปลายมาศ",
		"5": "บุรีรัมย์",
		"id": "3248",
		"codeabt": "06311012",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลหนองกะทิง",
		"district": "ลำปลายมาศ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3250",
		"1": "06311003",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลหนองคู",
		"4": "ลำปลายมาศ",
		"5": "บุรีรัมย์",
		"id": "3250",
		"codeabt": "06311003",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลหนองคู",
		"district": "ลำปลายมาศ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3256",
		"1": "06311013",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลหนองบัวโคก",
		"4": "ลำปลายมาศ",
		"5": "บุรีรัมย์",
		"id": "3256",
		"codeabt": "06311013",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลหนองบัวโคก",
		"district": "ลำปลายมาศ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3252",
		"1": "06311017",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลหนองโดน",
		"4": "ลำปลายมาศ",
		"5": "บุรีรัมย์",
		"id": "3252",
		"codeabt": "06311017",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลหนองโดน",
		"district": "ลำปลายมาศ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3268",
		"1": "06311014",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลหินโคน",
		"4": "ลำปลายมาศ",
		"5": "บุรีรัมย์",
		"id": "3268",
		"codeabt": "06311014",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลหินโคน",
		"district": "ลำปลายมาศ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3213",
		"1": "06311010",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลเมืองแฝก",
		"4": "ลำปลายมาศ",
		"5": "บุรีรัมย์",
		"id": "3213",
		"codeabt": "06311010",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลเมืองแฝก",
		"district": "ลำปลายมาศ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3246",
		"1": "06311011",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลแสลงพัน",
		"4": "ลำปลายมาศ",
		"5": "บุรีรัมย์",
		"id": "3246",
		"codeabt": "06311011",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลแสลงพัน",
		"district": "ลำปลายมาศ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3137",
		"1": "06311004",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลโคกกลาง",
		"4": "ลำปลายมาศ",
		"5": "บุรีรัมย์",
		"id": "3137",
		"codeabt": "06311004",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลโคกกลาง",
		"district": "ลำปลายมาศ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3142",
		"1": "06311005",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลโคกล่าม",
		"4": "ลำปลายมาศ",
		"5": "บุรีรัมย์",
		"id": "3142",
		"codeabt": "06311005",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลโคกล่าม",
		"district": "ลำปลายมาศ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3146",
		"1": "06311006",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลโคกสะอาด",
		"4": "ลำปลายมาศ",
		"5": "บุรีรัมย์",
		"id": "3146",
		"codeabt": "06311006",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลโคกสะอาด",
		"district": "ลำปลายมาศ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3084",
		"1": "05311001",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลทะเมนชัย",
		"4": "ลำปลายมาศ",
		"5": "บุรีรัมย์",
		"id": "3084",
		"codeabt": "05311001",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลทะเมนชัย",
		"district": "ลำปลายมาศ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3105",
		"1": "05311002",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลลำปลายมาศ",
		"4": "ลำปลายมาศ",
		"5": "บุรีรัมย์",
		"id": "3105",
		"codeabt": "05311002",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลลำปลายมาศ",
		"district": "ลำปลายมาศ",
		"province": "บุรีรัมย์"
		}
		]
	  }
	  if (id == 'สตึก') {
		ar = [
		{
		"0": "3128",
		"1": "06311112",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลกระสัง",
		"4": "สตึก",
		"5": "บุรีรัมย์",
		"id": "3128",
		"codeabt": "06311112",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลกระสัง",
		"district": "สตึก",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3151",
		"1": "06311104",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลชุมแสง",
		"4": "สตึก",
		"5": "บุรีรัมย์",
		"id": "3151",
		"codeabt": "06311104",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลชุมแสง",
		"district": "สตึก",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3172",
		"1": "06311106",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลทุ่งวัง",
		"4": "สตึก",
		"5": "บุรีรัมย์",
		"id": "3172",
		"codeabt": "06311106",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลทุ่งวัง",
		"district": "สตึก",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3168",
		"1": "06311105",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลท่าม่วง",
		"4": "สตึก",
		"5": "บุรีรัมย์",
		"id": "3168",
		"codeabt": "06311105",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลท่าม่วง",
		"district": "สตึก",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3177",
		"1": "06311102",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลนิคม",
		"4": "สตึก",
		"5": "บุรีรัมย์",
		"id": "3177",
		"codeabt": "06311102",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลนิคม",
		"district": "สตึก",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3217",
		"1": "06311108",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลร่อนทอง",
		"4": "สตึก",
		"5": "บุรีรัมย์",
		"id": "3217",
		"codeabt": "06311108",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลร่อนทอง",
		"district": "สตึก",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3229",
		"1": "06311109",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลสนามชัย",
		"4": "สตึก",
		"5": "บุรีรัมย์",
		"id": "3229",
		"codeabt": "06311109",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลสนามชัย",
		"district": "สตึก",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3262",
		"1": "06311111",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลหนองใหญ่",
		"4": "สตึก",
		"5": "บุรีรัมย์",
		"id": "3262",
		"codeabt": "06311111",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลหนองใหญ่",
		"district": "สตึก",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3208",
		"1": "06311107",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลเมืองแก",
		"4": "สตึก",
		"5": "บุรีรัมย์",
		"id": "3208",
		"codeabt": "06311107",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลเมืองแก",
		"district": "สตึก",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3079",
		"1": "05311113",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลดอนมนต์",
		"4": "สตึก",
		"5": "บุรีรัมย์",
		"id": "3079",
		"codeabt": "05311113",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลดอนมนต์",
		"district": "สตึก",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3106",
		"1": "05311103",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลศรีสตึก",
		"4": "สตึก",
		"5": "บุรีรัมย์",
		"id": "3106",
		"codeabt": "05311103",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลศรีสตึก",
		"district": "สตึก",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3108",
		"1": "05311101",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลสตึก",
		"4": "สตึก",
		"5": "บุรีรัมย์",
		"id": "3108",
		"codeabt": "05311101",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลสตึก",
		"district": "สตึก",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3110",
		"1": "05311110",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลสะแก",
		"4": "สตึก",
		"5": "บุรีรัมย์",
		"id": "3110",
		"codeabt": "05311110",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลสะแก",
		"district": "สตึก",
		"province": "บุรีรัมย์"
		}
		]
	  }
	  if (id == 'หนองกี่') {
		ar = [
		{
		"0": "3169",
		"1": "06310511",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลทุ่งกระตาดพัฒนา",
		"4": "หนองกี่",
		"5": "บุรีรัมย์",
		"id": "3169",
		"codeabt": "06310511",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลทุ่งกระตาดพัฒนา",
		"district": "หนองกี่",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3170",
		"1": "06310505",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลทุ่งกระเต็น",
		"4": "หนองกี่",
		"5": "บุรีรัมย์",
		"id": "3170",
		"codeabt": "06310505",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลทุ่งกระเต็น",
		"district": "หนองกี่",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3167",
		"1": "06310504",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลท่าโพธิ์ชัย",
		"4": "หนองกี่",
		"5": "บุรีรัมย์",
		"id": "3167",
		"codeabt": "06310504",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลท่าโพธิ์ชัย",
		"district": "หนองกี่",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3195",
		"1": "06310509",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลบุกระสัง",
		"4": "หนองกี่",
		"5": "บุรีรัมย์",
		"id": "3195",
		"codeabt": "06310509",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลบุกระสัง",
		"district": "หนองกี่",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3209",
		"1": "06310506",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลเมืองไผ่",
		"4": "หนองกี่",
		"5": "บุรีรัมย์",
		"id": "3209",
		"codeabt": "06310506",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลเมืองไผ่",
		"district": "หนองกี่",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3216",
		"1": "06310510",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลเย้ยปราสาท",
		"4": "หนองกี่",
		"5": "บุรีรัมย์",
		"id": "3216",
		"codeabt": "06310510",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลเย้ยปราสาท",
		"district": "หนองกี่",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3145",
		"1": "06310507",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลโคกสว่าง",
		"4": "หนองกี่",
		"5": "บุรีรัมย์",
		"id": "3145",
		"codeabt": "06310507",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลโคกสว่าง",
		"district": "หนองกี่",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3147",
		"1": "06310508",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลโคกสูง",
		"4": "หนองกี่",
		"5": "บุรีรัมย์",
		"id": "3147",
		"codeabt": "06310508",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลโคกสูง",
		"district": "หนองกี่",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3080",
		"1": "05310502",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลดอนอะราง",
		"4": "หนองกี่",
		"5": "บุรีรัมย์",
		"id": "3080",
		"codeabt": "05310502",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลดอนอะราง",
		"district": "หนองกี่",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3107",
		"1": "05310503",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลศาลเจ้าพ่อขุนศรี",
		"4": "หนองกี่",
		"5": "บุรีรัมย์",
		"id": "3107",
		"codeabt": "05310503",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลศาลเจ้าพ่อขุนศรี",
		"district": "หนองกี่",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3114",
		"1": "05310501",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลหนองกี่",
		"4": "หนองกี่",
		"5": "บุรีรัมย์",
		"id": "3114",
		"codeabt": "05310501",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลหนองกี่",
		"district": "หนองกี่",
		"province": "บุรีรัมย์"
		}
		]
	  }
	  if (id == 'หนองหงส์') {
		ar = [
		{
		"0": "3232",
		"1": "06311406",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลสระทอง",
		"4": "หนองหงส์",
		"5": "บุรีรัมย์",
		"id": "3232",
		"codeabt": "06311406",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลสระทอง",
		"district": "หนองหงส์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3231",
		"1": "06311405",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลสระแก้ว",
		"4": "หนองหงส์",
		"5": "บุรีรัมย์",
		"id": "3231",
		"codeabt": "06311405",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลสระแก้ว",
		"district": "หนองหงส์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3251",
		"1": "06311408",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลหนองชัยศรี",
		"4": "หนองหงส์",
		"5": "บุรีรัมย์",
		"id": "3251",
		"codeabt": "06311408",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลหนองชัยศรี",
		"district": "หนองหงส์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3212",
		"1": "06311404",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลเมืองฝ้าย",
		"4": "หนองหงส์",
		"5": "บุรีรัมย์",
		"id": "3212",
		"codeabt": "06311404",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลเมืองฝ้าย",
		"district": "หนองหงส์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3245",
		"1": "06311407",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลเสาเดียว",
		"4": "หนองหงส์",
		"5": "บุรีรัมย์",
		"id": "3245",
		"codeabt": "06311407",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลเสาเดียว",
		"district": "หนองหงส์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3174",
		"1": "06311403",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลไทยสามัคคี",
		"4": "หนองหงส์",
		"5": "บุรีรัมย์",
		"id": "3174",
		"codeabt": "06311403",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลไทยสามัคคี",
		"district": "หนองหงส์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3121",
		"1": "05311401",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลหนองหงส์",
		"4": "หนองหงส์",
		"5": "บุรีรัมย์",
		"id": "3121",
		"codeabt": "05311401",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลหนองหงส์",
		"district": "หนองหงส์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3124",
		"1": "05311402",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลห้วยหิน",
		"4": "หนองหงส์",
		"5": "บุรีรัมย์",
		"id": "3124",
		"codeabt": "05311402",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลห้วยหิน",
		"district": "หนองหงส์",
		"province": "บุรีรัมย์"
		}
		]
	  }
	  if (id == 'ห้วยราช') {
		ar = [
		{
		"0": "3160",
		"1": "06311606",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลตาเสา",
		"4": "ห้วยราช",
		"5": "บุรีรัมย์",
		"id": "3160",
		"codeabt": "06311606",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลตาเสา",
		"district": "ห้วยราช",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3185",
		"1": "06311607",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลบ้านตะโก",
		"4": "ห้วยราช",
		"5": "บุรีรัมย์",
		"id": "3185",
		"codeabt": "06311607",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลบ้านตะโก",
		"district": "ห้วยราช",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3228",
		"1": "06311603",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลสนวน",
		"4": "ห้วยราช",
		"5": "บุรีรัมย์",
		"id": "3228",
		"codeabt": "06311603",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลสนวน",
		"district": "ห้วยราช",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3263",
		"1": "06311605",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลห้วยราช",
		"4": "ห้วยราช",
		"5": "บุรีรัมย์",
		"id": "3263",
		"codeabt": "06311605",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลห้วยราช",
		"district": "ห้วยราช",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3214",
		"1": "06311608",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลเมืองโพธิ์",
		"4": "ห้วยราช",
		"5": "บุรีรัมย์",
		"id": "3214",
		"codeabt": "06311608",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลเมืองโพธิ์",
		"district": "ห้วยราช",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3111",
		"1": "05311604",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลสามแวง",
		"4": "ห้วยราช",
		"5": "บุรีรัมย์",
		"id": "3111",
		"codeabt": "05311604",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลสามแวง",
		"district": "ห้วยราช",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3123",
		"1": "05311601",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลห้วยราช",
		"4": "ห้วยราช",
		"5": "บุรีรัมย์",
		"id": "3123",
		"codeabt": "05311601",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลห้วยราช",
		"district": "ห้วยราช",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3075",
		"1": "05311602",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลโคกเหล็ก",
		"4": "ห้วยราช",
		"5": "บุรีรัมย์",
		"id": "3075",
		"codeabt": "05311602",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลโคกเหล็ก",
		"district": "ห้วยราช",
		"province": "บุรีรัมย์"
		}
		]
	  }
	  if (id == 'เฉลิมพระเกียรติ') {
		ar = [
		{
		"0": "3272",
		"1": "06312305",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลอีสานเขต",
		"4": "เฉลิมพระเกียรติ",
		"5": "บุรีรัมย์",
		"id": "3272",
		"codeabt": "06312305",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลอีสานเขต",
		"district": "เฉลิมพระเกียรติ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3149",
		"1": "06312304",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลเจริญสุข",
		"4": "เฉลิมพระเกียรติ",
		"5": "บุรีรัมย์",
		"id": "3149",
		"codeabt": "06312304",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลเจริญสุข",
		"district": "เฉลิมพระเกียรติ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3083",
		"1": "05312303",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลถาวร",
		"4": "เฉลิมพระเกียรติ",
		"5": "บุรีรัมย์",
		"id": "3083",
		"codeabt": "05312303",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลถาวร",
		"district": "เฉลิมพระเกียรติ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3100",
		"1": "05312301",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลพนมรุ้ง",
		"4": "เฉลิมพระเกียรติ",
		"5": "บุรีรัมย์",
		"id": "3100",
		"codeabt": "05312301",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลพนมรุ้ง",
		"district": "เฉลิมพระเกียรติ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3103",
		"1": "05312302",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลยายแย้มวัฒนา",
		"4": "เฉลิมพระเกียรติ",
		"5": "บุรีรัมย์",
		"id": "3103",
		"codeabt": "05312302",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลยายแย้มวัฒนา",
		"district": "เฉลิมพระเกียรติ",
		"province": "บุรีรัมย์"
		}
		]
	  }
	  if (id == 'เมืองบุรีรัมย์') {
		ar = [
		{
		"0": "3064",
		"1": "02310101",
		"2": "องค์การบริหารส่วนจังหวัด",
		"3": "องค์การบริหารส่วนจังหวัดบุรีรัมย์",
		"4": "เมืองบุรีรัมย์",
		"5": "บุรีรัมย์",
		"id": "3064",
		"codeabt": "02310101",
		"orgtype": "องค์การบริหารส่วนจังหวัด",
		"abtname": "องค์การบริหารส่วนจังหวัดบุรีรัมย์",
		"district": "เมืองบุรีรัมย์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3129",
		"1": "06310105",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลกระสัง",
		"4": "เมืองบุรีรัมย์",
		"5": "บุรีรัมย์",
		"id": "3129",
		"codeabt": "06310105",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลกระสัง",
		"district": "เมืองบุรีรัมย์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3130",
		"1": "06310117",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลกลันทา",
		"4": "เมืองบุรีรัมย์",
		"5": "บุรีรัมย์",
		"id": "3130",
		"codeabt": "06310117",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลกลันทา",
		"district": "เมืองบุรีรัมย์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3163",
		"1": "06310118",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลถลุงเหล็ก",
		"4": "เมืองบุรีรัมย์",
		"5": "บุรีรัมย์",
		"id": "3163",
		"codeabt": "06310118",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลถลุงเหล็ก",
		"district": "เมืองบุรีรัมย์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3181",
		"1": "06310119",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลบัวทอง",
		"4": "เมืองบุรีรัมย์",
		"5": "บุรีรัมย์",
		"id": "3181",
		"codeabt": "06310119",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลบัวทอง",
		"district": "เมืองบุรีรัมย์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3190",
		"1": "06310106",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลบ้านยาง",
		"4": "เมืองบุรีรัมย์",
		"5": "บุรีรัมย์",
		"id": "3190",
		"codeabt": "06310106",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลบ้านยาง",
		"district": "เมืองบุรีรัมย์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3204",
		"1": "06310109",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลพระครู",
		"4": "เมืองบุรีรัมย์",
		"5": "บุรีรัมย์",
		"id": "3204",
		"codeabt": "06310109",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลพระครู",
		"district": "เมืองบุรีรัมย์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3224",
		"1": "06310110",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลลุมปุ๊ก",
		"4": "เมืองบุรีรัมย์",
		"5": "บุรีรัมย์",
		"id": "3224",
		"codeabt": "06310110",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลลุมปุ๊ก",
		"district": "เมืองบุรีรัมย์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3234",
		"1": "06310111",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลสวายจีก",
		"4": "เมืองบุรีรัมย์",
		"5": "บุรีรัมย์",
		"id": "3234",
		"codeabt": "06310111",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลสวายจีก",
		"district": "เมืองบุรีรัมย์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3235",
		"1": "06310112",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลสองห้อง",
		"4": "เมืองบุรีรัมย์",
		"5": "บุรีรัมย์",
		"id": "3235",
		"codeabt": "06310112",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลสองห้อง",
		"district": "เมืองบุรีรัมย์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3236",
		"1": "06310113",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลสะแกซำ",
		"4": "เมืองบุรีรัมย์",
		"5": "บุรีรัมย์",
		"id": "3236",
		"codeabt": "06310113",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลสะแกซำ",
		"district": "เมืองบุรีรัมย์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3237",
		"1": "06310114",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลสะแกโพรง",
		"4": "เมืองบุรีรัมย์",
		"5": "บุรีรัมย์",
		"id": "3237",
		"codeabt": "06310114",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลสะแกโพรง",
		"district": "เมืองบุรีรัมย์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3211",
		"1": "06310120",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลเมืองฝาง",
		"4": "เมืองบุรีรัมย์",
		"5": "บุรีรัมย์",
		"id": "3211",
		"codeabt": "06310120",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลเมืองฝาง",
		"district": "เมืองบุรีรัมย์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3244",
		"1": "06310115",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลเสม็ด",
		"4": "เมืองบุรีรัมย์",
		"5": "บุรีรัมย์",
		"id": "3244",
		"codeabt": "06310115",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลเสม็ด",
		"district": "เมืองบุรีรัมย์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3093",
		"1": "05310108",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลบ้านบัว",
		"4": "เมืองบุรีรัมย์",
		"5": "บุรีรัมย์",
		"id": "3093",
		"codeabt": "05310108",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลบ้านบัว",
		"district": "เมืองบุรีรัมย์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3116",
		"1": "05310116",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลหนองตาด",
		"4": "เมืองบุรีรัมย์",
		"5": "บุรีรัมย์",
		"id": "3116",
		"codeabt": "05310116",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลหนองตาด",
		"district": "เมืองบุรีรัมย์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3122",
		"1": "05310104",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลหลักเขต",
		"4": "เมืองบุรีรัมย์",
		"5": "บุรีรัมย์",
		"id": "3122",
		"codeabt": "05310104",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลหลักเขต",
		"district": "เมืองบุรีรัมย์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3126",
		"1": "05310103",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลอิสาณ",
		"4": "เมืองบุรีรัมย์",
		"5": "บุรีรัมย์",
		"id": "3126",
		"codeabt": "05310103",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลอิสาณ",
		"district": "เมืองบุรีรัมย์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3065",
		"1": "04310107",
		"2": "เทศบาลเมือง",
		"3": "เทศบาลเมืองชุมเห็ด",
		"4": "เมืองบุรีรัมย์",
		"5": "บุรีรัมย์",
		"id": "3065",
		"codeabt": "04310107",
		"orgtype": "เทศบาลเมือง",
		"abtname": "เทศบาลเมืองชุมเห็ด",
		"district": "เมืองบุรีรัมย์",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3067",
		"1": "04310102",
		"2": "เทศบาลเมือง",
		"3": "เทศบาลเมืองบุรีรัมย์",
		"4": "เมืองบุรีรัมย์",
		"5": "บุรีรัมย์",
		"id": "3067",
		"codeabt": "04310102",
		"orgtype": "เทศบาลเมือง",
		"abtname": "เทศบาลเมืองบุรีรัมย์",
		"district": "เมืองบุรีรัมย์",
		"province": "บุรีรัมย์"
		}
		]
	  }
	  if (id == 'แคนดง') {
		ar = [
		{
		"0": "3154",
		"1": "06312204",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลดงพลอง",
		"4": "แคนดง",
		"5": "บุรีรัมย์",
		"id": "3154",
		"codeabt": "06312204",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลดงพลอง",
		"district": "แคนดง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3233",
		"1": "06312203",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลสระบัว",
		"4": "แคนดง",
		"5": "บุรีรัมย์",
		"id": "3233",
		"codeabt": "06312203",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลสระบัว",
		"district": "แคนดง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3266",
		"1": "06312205",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลหัวฝาย",
		"4": "แคนดง",
		"5": "บุรีรัมย์",
		"id": "3266",
		"codeabt": "06312205",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลหัวฝาย",
		"district": "แคนดง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3136",
		"1": "06312202",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลแคนดง",
		"4": "แคนดง",
		"5": "บุรีรัมย์",
		"id": "3136",
		"codeabt": "06312202",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลแคนดง",
		"district": "แคนดง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3072",
		"1": "05312201",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลแคนดง",
		"4": "แคนดง",
		"5": "บุรีรัมย์",
		"id": "3072",
		"codeabt": "05312201",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลแคนดง",
		"district": "แคนดง",
		"province": "บุรีรัมย์"
		}
		]
		}
		if (id == 'โนนดินแดง') {
		ar = [
		{
		"0": "3223",
		"1": "06312003",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลลำนางรอง",
		"4": "โนนดินแดง",
		"5": "บุรีรัมย์",
		"id": "3223",
		"codeabt": "06312003",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลลำนางรอง",
		"district": "โนนดินแดง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3230",
		"1": "06312004",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลส้มป่อย",
		"4": "โนนดินแดง",
		"5": "บุรีรัมย์",
		"id": "3230",
		"codeabt": "06312004",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลส้มป่อย",
		"district": "โนนดินแดง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3179",
		"1": "06312002",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลโนนดินแดง",
		"4": "โนนดินแดง",
		"5": "บุรีรัมย์",
		"id": "3179",
		"codeabt": "06312002",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลโนนดินแดง",
		"district": "โนนดินแดง",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3088",
		"1": "05312001",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลโนนดินแดง",
		"4": "โนนดินแดง",
		"5": "บุรีรัมย์",
		"id": "3088",
		"codeabt": "05312001",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลโนนดินแดง",
		"district": "โนนดินแดง",
		"province": "บุรีรัมย์"
		}
		]
	  }
	  if (id == 'โนนสุวรรณ') {
		ar = [
		{
		"0": "3155",
		"1": "06311704",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลดงอีจาน",
		"4": "โนนสุวรรณ",
		"5": "บุรีรัมย์",
		"id": "3155",
		"codeabt": "06311704",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลดงอีจาน",
		"district": "โนนสุวรรณ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3171",
		"1": "06311705",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลทุ่งจังหัน",
		"4": "โนนสุวรรณ",
		"5": "บุรีรัมย์",
		"id": "3171",
		"codeabt": "06311705",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลทุ่งจังหัน",
		"district": "โนนสุวรรณ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3180",
		"1": "06311703",
		"2": "องค์การบริหารส่วนตำบล",
		"3": "องค์การบริหารส่วนตำบลโนนสุวรรณ",
		"4": "โนนสุวรรณ",
		"5": "บุรีรัมย์",
		"id": "3180",
		"codeabt": "06311703",
		"orgtype": "องค์การบริหารส่วนตำบล",
		"abtname": "องค์การบริหารส่วนตำบลโนนสุวรรณ",
		"district": "โนนสุวรรณ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3069",
		"1": "05311702",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลโกรกแก้ว",
		"4": "โนนสุวรรณ",
		"5": "บุรีรัมย์",
		"id": "3069",
		"codeabt": "05311702",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลโกรกแก้ว",
		"district": "โนนสุวรรณ",
		"province": "บุรีรัมย์"
		},
		{
		"0": "3089",
		"1": "05311701",
		"2": "เทศบาลตำบล",
		"3": "เทศบาลตำบลโนนสุวรรณ",
		"4": "โนนสุวรรณ",
		"5": "บุรีรัมย์",
		"id": "3089",
		"codeabt": "05311701",
		"orgtype": "เทศบาลตำบล",
		"abtname": "เทศบาลตำบลโนนสุวรรณ",
		"district": "โนนสุวรรณ",
		"province": "บุรีรัมย์"
		}
		]
	  }
	  return ar
	}

	function onOrgYs(id) {
	  let ar = []
	  if (id == 'ไทยเจริญ') {
		ar = [
		  {
			"abtname": "เทศบาลตำบลคำเตย",
			"district": "ไทยเจริญ",
			"province": "บุรีรัมย์"
		  },
		]
	  }
	  return ar
	}

	function sendMail() {
	  event.preventDefault()
	  Swal.fire({
		title: 'อีเมลสำหรับรับรหัสผ่าน',
		html: `<input type="email" id="send_eMail" class="swal2-input" placeholder="e-Mail">`,
		confirmButtonText: 'ยืนยัน',
		focusConfirm: false,
		showCancelButton: true,
		preConfirm: () => {
		  let eMail = Swal.getPopup().querySelector('#send_eMail').value
		  if (!eMail) {
			Swal.showValidationMessage(`กรุณาพิมพ์อีเมลที่ต้องการรับรหัสผ่าน`)
		  }
		  else {
			Swal.fire({
			  title: 'รอสักครู่!!!',
			  timerProgressBar: true,
			  didOpen: () => {
				Swal.showLoading()
			  },
			})
			document.getElementById('Email').value = eMail
			document.getElementById('sendMailBtn').click()
		  }
		},
	  })
	}

	const sendEmailForm = document.forms['sendMail']
		  sendEmailForm.addEventListener('submit', async function (e) {
			e.preventDefault()
			let send = await fetch(scriptURL, {method: 'POST', body: new FormData(sendEmailForm)})
			let data = await send.json()
			let output = data.output
			if (output == 'success') {
			  Swal.fire({
				position: 'center',
				icon: 'success',
				title: 'ส่งรหัสผ่านไปที่อีเมลของท่านแล้ว!!',
				showConfirmButton: false,
				timer: 1500,
			  })
			}
			else {
			  Swal.fire({
				position: 'center',
				icon: 'error',
				title: 'ไม่มีอีเมลนี้ในระบบ!!',
				showConfirmButton: false,
				timer: 1500,
			  })
			}
	})