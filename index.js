lostConnect = 1;
address_list = "wss://socketlanguage.space:8443";
backgroundColorGreen = '#D3F899';
backgroundColorRed = '#FBC3C3';
backgroundColorPurp = '#ECC8FF';
backgroundColorSLS = '#9B9D19';
backgroundColorGenerateKey = '#EA5CA9';
backgroundColorSupport = '#2CB22F';
backgroundColorOrange = '#FDB48D';
backgroundColorGray = '#E0E0E0';
backgroundColorYellow = '#F8F7B3';
backgroundColorSky = '#B0FDF3';
backgroundColorSiren = '#C1C8FE';
backgroundColorInsertCoin = '#F8841C';
backgroundColorSendCoin = '#209AD3';
backgroundColorChooseId = '#A6AFB3';
msg = "";
var t = true;
var f = false;
const copyToClipboard = (text) => navigator.clipboard.writeText(text);
connectionOnlineInnerHTMLimg = '<img src="ConnectionG.gif" title="Connection online">';
connectionOfflineInnerHTMLimg = '<img src="ConnectionR.gif" title="Connection offline">';

connectionOnlineInnerHTMLtext = 'Online';
connectionOfflineInnerHTMLtext = 'Offline';


//<img src="Logo-Game-Battle-Platforms-.gif" alt="Battle Platforms" onclick="window.open('https://playcanv.as/p/Vu3ddKWc/','_blank')">

window.onload = function(){

	mainMenu = document.getElementById("mainMenu");
	formHome = document.getElementById("formHome");
	hiddenCaptcha = document.getElementById("hiddenCaptcha");
	divError = document.getElementById("divError");
	
	
	msg = "<table width=100% cellspacing='0' border='0'>";
	
	msg += "<tr><td width=10% colspan=2><input type='submit' id='homeBtn' value='Home' disabled = true></td>";
	msg += "<td width=10% colspan=1><input type='submit' id='scriptBtn' value='Script'></td>";
	msg += "<td width=10% colspan=1><input type='submit' id='gameBtn' value='Game'></td>";
	msg += "<td width=10% colspan=1><input type='submit' id='roomBtn' value='Room'></td>";
	msg += "<td width=10% colspan=1><input type='submit' id='chatBtn' value='Chat'></td>";
	msg += "<td width=10% colspan=1><input type='submit' id='tradeBtn' value='Trade'></td>";
	msg += "<td width=40% colspan=2></td></tr>";
	
	msg += "<tr><td width=2% title='Socket Language status'><div id='socketStatusImg'></div></td>";
	msg += "<td width=8% title='Network status'><div id='socketStatusText'></div></td>";
	msg += "<td width=10% title='Users + nodes online'><div id='usersOnline'></div></td>";
	msg += "<td width=10% title='Coins balance for current access key'><div id='balanceCoin'></div></td>";
	msg += "<td width=70% colspan=3 title='ReservTD0'><div id='ReservTD0'></div></td></tr>";

	msg += "</table>";
	mainMenu.innerHTML = msg;

	msg = "<table width=50% cellspacing='0' border='0'>";
	
	msg += "<tr><td width=25%><input type='submit' id='socketLanguageRoadmapBtn' value='Roadmap'></td>";
	msg += "<td width=25%><input type='submit' id='supportBtn' value='Support'></td>";
	msg += "<td><input type='submit' id='getNewAccessKeyBtn' value='Generate access keys'></td></tr></table><br>";

	msg += "<table width=50% cellspacing='0' border='0'><tr><td width=80% bgcolor='" + backgroundColorRed;
	msg += "'><div id='getNewAccessKeyDiv'>The access key is not recoverable.<br>Keep it safe and secret, please.</div></td>";
	msg += "<td><input type='submit' id='getNewAccessKeyCopyBtn' value='Copy'></td></tr></table><br>";
	
	msg += "<table width=50% cellspacing='0' border='0'><tr><td width=80% bgcolor='" + backgroundColorSky;
	msg += "'><div id='getNewPublicKeyDiv'>Public key for this access key</div></td>";
	msg += "<td><input type='submit' id='getNewPublicKeyCopyBtn' value='Copy'></td></tr></table><br>";
	
	msg += "<table width=50% cellspacing='0' border='0'><tr>";
	msg += "<td width=5%><img src='Coin.gif' title='Insert Coin'></td>";
	msg += "<td width=20%><input type='submit' id='insertCoinBtn' value='Insert Coin'></td>";
	msg += "<td width=75%></td></tr><tr>";
	msg += "<td width=5%><img src='Letter.gif' title='Send Coin'></td>";
	msg += "<td width=20%><input type='submit' id='sendCoinBtn' value='Send Coin'></td>";
	msg += "<td width=75%></td></tr><tr>";
	msg += "<td width=5%><img src='id.gif' title='Choose id'></td>";
	msg += "<td width=20%><input type='submit' id='chooseIdBtn' value='Choose id'></td>";
	msg += "<td width=75%></td></tr><tr>";
	msg += "</tr>";


	
	
	//msg += "<h5><table><tr>";
	//msg += "<td><img src='Coin.gif' title='Balance'></td>";
	//msg += "<td><img src='Letter.gif' title='Name'></td>";
	//msg += "<td><img src='id.gif' title='Your personal ID'></td>";
	//msg += "<tr></tr><table></h5>";
	//msg += "<input type='text' id='summInput' maxlength='19' title='Enter summ in Coin (100 Coin = $1)' ";
	//msg += "placeholder='number of Coin'>";
	//msg += "<br><br><input type='text' id='nicknameInput' maxlength='19' placeholder='choose your nickname'>";
	//msg += "<input type='submit' id='setNicknameBtn' value='Set nickname'>";
	
	formHome.innerHTML = msg;
	
	
	
	getNewAccessKeyDiv = document.getElementById("getNewAccessKeyDiv");
	getNewPublicKeyDiv = document.getElementById("getNewPublicKeyDiv");
	
	usersOnline = document.getElementById("usersOnline");
	usersOnline.innerHTML = 'Need net';
	
	balanceCoin = document.getElementById("balanceCoin");
	balanceCoin.innerHTML = 'Need key';
	
	socketStatusText = document.getElementById("socketStatusText");
	socketStatusText.innerHTML = connectionOfflineInnerHTMLtext;
	
	socketStatusImg = document.getElementById("socketStatusImg");
	socketStatusImg.innerHTML = connectionOfflineInnerHTMLimg;
	
	
	selectPage(t, t, f, t, t, t, t, t);
	connection();
	setInterval(connection, 5000);
    setInterval(refresh, 50000);
	
	msg = "<input type='submit' id='scriptEditBtn' value='Edit'>";
	msg += "&nbsp<input type='submit' id='scriptCopyBtn' value='Copy' disabled>";
	msg += "&nbsp<input type='submit' id='scriptSaveBtn' value='Save' disabled>";
	msg += "&nbsp<input type='submit' id='scriptRunBtn' value='Run' disabled>";
	msg += "&nbsp<input type='submit' id='scriptSetupBtn' value='Setup' disabled>";
	msg += "&nbsp<input type='submit' id='scriptFindBtn' value='Find' disabled>";
	msg += "&nbsp<input type='submit' id='scriptCheckBtn' value='Check'>";
	msg += `<br><textarea spellcheck='false' id='scriptTextArea' autocapitalize='none' rows='20' cols='42'>
	a 50
	b 70
	+ c a
	+ c b
	\n\n\n
	</textarea>`;
	msg += "<br><input type='submit' id='scriptClearBtn' value='Clear' disabled>";
	msg += "&nbsp<input type='submit' id='scriptLoadBtn' value='Load' disabled>";
	msg += "&nbsp<input type='submit' id='scriptBlankBtn' value='Blank' disabled>";
	msg += "&nbsp<input type='submit' id='scriptSellBtn' value='Sell' disabled>";
	msg += "&nbsp<input type='submit' id='scriptBuyBtn' value='Buy' disabled>";
	msg += "&nbsp<input type='submit' id='scriptHideBtn' value='Hide' disabled>";
	msg += "&nbsp<input type='submit' id='scriptHelpBtn' value='Help' disabled><br>";
	msg += "<textarea id='scriptTerminalTextArea' readonly rows='5' cols='42'></textarea>";
	formScript.innerHTML = msg;
	
	
	
	
	msg = "<table id='tableTrade' cellspacing='0' border='1'>";
	
	msg += "<tr><td colspan='1' bgcolor='" + backgroundColorSiren;
	msg += "'>Access key</td>";
	msg += "<td colspan='1' bgcolor='" + backgroundColorSiren;
	msg += "'><div id='accessKeyDiv'>";
	msg += "<input type='text' id='accessKey' maxlength='255' placeholder='paste access key here'></div></td>";
	msg += "<td bgcolor='" + backgroundColorSiren;
	msg += "'><input type='submit' id='accessKeyFillBtn' value='Enter'></td></tr>";
	
	msg += "<tr><td colspan='1' bgcolor='" + backgroundColorGray;
	msg += "'>Key info</td>";
	msg += "<td colspan='2' bgcolor='" + backgroundColorGray;
	msg += "'><div id='accessKeyInfoDiv'></td></tr>";
	
	msg += "<tr><td colspan='3' bgcolor='" + backgroundColorGray;
	msg += "'>(-_-)</td></tr>";
	
	
	msg += "<tr><td colspan='1' bgcolor='" + backgroundColorSiren;
	msg += "'>User key</td>";
	msg += "<td colspan='1' bgcolor='" + backgroundColorSiren;
	msg += "'><div id='userKeyDiv'>public</div></td>";
	msg += "<td bgcolor='" + backgroundColorSiren;
	msg += "'><input type='submit' id='publicKeyCopyBtn' value='Copy'></td></tr>";
	
	msg += "<tr><td colspan='1' bgcolor='" + backgroundColorGray;
	msg += "'>User info</td>";
	msg += "<td colspan='2' bgcolor='" + backgroundColorGray;
	msg += "'><div id='userKeyInfoDiv'></td></tr>";
	
	msg += "<tr><td colspan='3' bgcolor='" + backgroundColorGray;
	msg += "'>(*_*)</td></tr>";
	
	
	msg += "<tr><td colspan='1' bgcolor='" + backgroundColorSiren;
	msg += "'>Script key</td>";
	msg += "<td colspan='1' bgcolor='" + backgroundColorSiren;
	msg += "'><div id='scriptKeyDiv'>public</div></td>";
	msg += "<td bgcolor='" + backgroundColorSiren;
	msg += "'><input type='submit' id='scriptKeyCopyBtn' value='Copy'></td></tr>";
	
	msg += "<tr><td colspan='1' bgcolor='" + backgroundColorGray;
	msg += "'>Script info</td>";
	msg += "<td colspan='2' bgcolor='" + backgroundColorGray;
	msg += "'><div id='scriptKeyInfoDiv'></td></tr>";
	

	msg += "<tr><td colspan='3' bgcolor='" + backgroundColorGray;
	msg += "'>(^_^)</td></tr>";
	
	msg += "<tr><td colspan='1' bgcolor='" + backgroundColorSiren;
	msg += "'>List</td>";
	msg += "<td colspan='2' bgcolor='" + backgroundColorSiren;
	msg += "'><div id='scriptListDiv'><select id='scriptList' disabled>";
	msg += "<option value='0'>-S-C-R-I-P-T-S-_-F-O-R-_-T-H-I-S-_-K-E-Y-</option>";
	msg += "</select></div></td></tr>";
	
	msg += "<tr><td colspan='1' bgcolor='" + backgroundColorGray;
	msg += "'>Coockie key</td>";
	msg += "<td colspan='1' bgcolor='" + backgroundColorGray;
	msg += "'><div id='coockieKeyDiv'>access key</div></td>";
	msg += "<td bgcolor='" + backgroundColorGray;
	msg += "'><input type='submit' id='coockieKeyViewBtn' value='View'></td></tr>";	//	Hide
	
	msg += "<tr><td colspan='3' bgcolor='" + backgroundColorGray;
	msg += "'>(=_=)</td></tr>";	

	msg += "</table>";
	formRoom.innerHTML = msg;


	msg = "";
	formTrade.innerHTML = msg;
	
	scriptTerminalTextArea = document.getElementById("scriptTerminalTextArea");
	usersOnline = document.getElementById('usersOnline');

	homeBtn = document.getElementById('homeBtn');
	homeBtn.addEventListener('click', homeBtnFunc, f);
	homeBtn.style.background=backgroundColorPurp;
	
	scriptBtn = document.getElementById('scriptBtn');
	scriptBtn.addEventListener('click', scriptBtnFunc, f);
	scriptBtn.style.background=backgroundColorOrange;
	
	roomBtn = document.getElementById('roomBtn');
	roomBtn.addEventListener('click', roomBtnFunc, f);
	roomBtn.style.background=backgroundColorSiren;
	
	gameBtn = document.getElementById('gameBtn');
	gameBtn.addEventListener('click', gameBtnFunc, f);
	gameBtn.style.background=backgroundColorGreen;
	
	chatBtn = document.getElementById('chatBtn');
	chatBtn.addEventListener('click', chatBtnFunc, f);
	chatBtn.style.background=backgroundColorGray;
	
	tradeBtn = document.getElementById('tradeBtn');
	tradeBtn.addEventListener('click', tradeBtnFunc, f);
	tradeBtn.style.background=backgroundColorYellow;

	getNewAccessKeyBtn = document.getElementById('getNewAccessKeyBtn');
	getNewAccessKeyBtn.addEventListener('click', getNewAccessKeyBtnFunc, f);
	getNewAccessKeyBtn.style.fontSize="1.0em";
	getNewAccessKeyBtn.style.background=backgroundColorGenerateKey;
	getNewAccessKeyBtn.style.color="#ffffff";
	
	getNewAccessKeyCopyBtn = document.getElementById('getNewAccessKeyCopyBtn');
	getNewAccessKeyCopyBtn.addEventListener('click', getNewAccessKeyCopyBtnFunc, f);
	getNewAccessKeyCopyBtn.style.fontSize="1.0em";
	getNewAccessKeyCopyBtn.style.background=backgroundColorGenerateKey;
	getNewAccessKeyCopyBtn.style.color="#ffffff";
	
	getNewPublicKeyCopyBtn = document.getElementById('getNewPublicKeyCopyBtn');
	getNewPublicKeyCopyBtn.addEventListener('click', getNewPublicKeyCopyBtnFunc, f);
	getNewPublicKeyCopyBtn.style.fontSize="1.0em";
	getNewPublicKeyCopyBtn.style.background=backgroundColorGenerateKey;
	getNewPublicKeyCopyBtn.style.color="#ffffff";
	
	
	
	insertCoinBtn = document.getElementById('insertCoinBtn');
	insertCoinBtn.addEventListener('click', insertCoinBtnFunc, f);
	insertCoinBtn.style.fontSize="1.0em";
	insertCoinBtn.style.background=backgroundColorInsertCoin;
	insertCoinBtn.style.color="#ffffff";
	
	
	sendCoinBtn = document.getElementById('sendCoinBtn');
	sendCoinBtn.addEventListener('click', sendCoinBtnFunc, f);
	sendCoinBtn.style.fontSize="1.0em";
	sendCoinBtn.style.background=backgroundColorSendCoin;
	sendCoinBtn.style.color="#ffffff";
	
	
	chooseIdBtn = document.getElementById('chooseIdBtn');
	chooseIdBtn.addEventListener('click', chooseIdBtnFunc, f);
	chooseIdBtn.style.fontSize="1.0em";
	chooseIdBtn.style.background=backgroundColorChooseId;
	chooseIdBtn.style.color="#ffffff";
	
	
	
	socketLanguageRoadmapBtn = document.getElementById('socketLanguageRoadmapBtn');
	socketLanguageRoadmapBtn.addEventListener('click', socketLanguageRoadmapBtnFunc, f);
	socketLanguageRoadmapBtn.style.fontSize="1.0em";
	socketLanguageRoadmapBtn.style.background=backgroundColorSLS;
	socketLanguageRoadmapBtn.style.color="#ffffff";
	
	
	supportBtn = document.getElementById('supportBtn');
	supportBtn.addEventListener('click', supportBtnFunc, f);
	supportBtn.style.fontSize="1.0em";
	supportBtn.style.background=backgroundColorSupport;
	supportBtn.style.color="#ffffff";





	scriptEditBtn = document.getElementById('scriptEditBtn');
	scriptEditBtn.addEventListener('click', scriptEditSendFunc, f);
	scriptEditBtn.style.background=backgroundColorOrange;
	
	scriptCheckBtn = document.getElementById('scriptCheckBtn');
	scriptCheckBtn.addEventListener('click', scriptCheckSendFunc, f);
	scriptCheckBtn.style.background=backgroundColorOrange;
	
	scriptSaveBtn = document.getElementById('scriptSaveBtn');
	scriptSaveBtn.addEventListener('click', scriptSaveSendFunc, f);
	scriptSaveBtn.style.background=backgroundColorOrange;
	
	scriptRunBtn = document.getElementById('scriptRunBtn');
	scriptRunBtn.addEventListener('click', scriptRunSendFunc, f);
	scriptRunBtn.style.background=backgroundColorOrange;
	
	scriptSetupBtn = document.getElementById('scriptSetupBtn');
	scriptSetupBtn.addEventListener('click', scriptSetupSendFunc, f);
	scriptSetupBtn.style.background=backgroundColorOrange;
	
	scriptClearBtn = document.getElementById('scriptClearBtn');
	scriptClearBtn.addEventListener('click', scriptClearSendFunc, f);
	scriptClearBtn.style.background=backgroundColorOrange;
	
	scriptCopyBtn = document.getElementById('scriptCopyBtn');
	scriptCopyBtn.addEventListener('click', scriptCopySendFunc, f);
	scriptCopyBtn.style.background=backgroundColorOrange;
	
	scriptFindBtn = document.getElementById('scriptFindBtn');
	scriptFindBtn.addEventListener('click', scriptFindSendFunc, f);
	scriptFindBtn.style.background=backgroundColorOrange;
	
	scriptLoadBtn = document.getElementById('scriptLoadBtn');
	scriptLoadBtn.addEventListener('click', scriptLoadSendFunc, f);
	scriptLoadBtn.style.background=backgroundColorOrange;
	
	scriptBlankBtn = document.getElementById('scriptBlankBtn');
	scriptBlankBtn.addEventListener('click', scriptBlankSendFunc, f);
	scriptBlankBtn.style.background=backgroundColorOrange;
	
	scriptSellBtn = document.getElementById('scriptSellBtn');
	scriptSellBtn.addEventListener('click', scriptSellSendFunc, f);
	scriptSellBtn.style.background=backgroundColorOrange;
	
	scriptBuyBtn = document.getElementById('scriptBuyBtn');
	scriptBuyBtn.addEventListener('click', scriptBuySendFunc, f);
	scriptBuyBtn.style.background=backgroundColorOrange;
	
	
	scriptHideBtn = document.getElementById('scriptHideBtn');
	scriptHideBtn.addEventListener('click', scriptHideSendFunc, f);
	scriptHideBtn.style.background=backgroundColorOrange;
	
	scriptHelpBtn = document.getElementById('scriptHelpBtn');
	scriptHelpBtn.addEventListener('click', scriptHelpSendFunc, f);
	scriptHelpBtn.style.background=backgroundColorOrange;
	
}


function selectMenuBtns (a) {
	var a0=f;
	var a1=f;
	var a2=f;
	var a3=f;
	var a4=f;
	var a5=f;
	switch (a) {
		case 0:
			a0=t;
			break;
		case 1:
			a1=t;
			break;
		case 2:
			a2=t;
			break;
		case 3:
			a3=t;
			break;
		case 4:
			a4=t;
			break;
		case 5:
			a5=t;
			break;
	}
			
	homeBtn.disabled=a0;
	scriptBtn.disabled=a1;
	roomBtn.disabled=a2;
	gameBtn.disabled=a3;
	chatBtn.disabled=a4;
	tradeBtn.disabled=a5;
	return
}
function homeBtnFunc () {
	selectMenuBtns(0);
	selectPage(t, t, f, t, t, t, t, t);
	return;
}
function scriptBtnFunc () {
	selectMenuBtns(1);
	selectPage(t, t, t, f, t, t, t, t);
	return;
}
function roomBtnFunc () {
	selectMenuBtns(2);
	selectPage(t, t, t, t, f, t, t, t);
	return;
}
function gameBtnFunc () {
	selectMenuBtns(3);
	selectPage(t, t, t, t, t, f, t, t);
	return;
}
function chatBtnFunc () {
	selectMenuBtns(4);
	selectPage(t, t, t, t, t, t, f, t);
	return;
}
function tradeBtnFunc () {
	selectMenuBtns(5);
	selectPage(t, t, t, t, t, t, t, f);
	return;
}
function socketLanguageRoadmapBtnFunc () {
    window.open('Socket Language.Space_Roadmap.gif','viewwin', 'width=600, height=300'); 
	return;
}
function supportBtnFunc () {
	alert("support"); 
	return;
}
function getNewAccessKeyBtnFunc () {
	if (checkCaptcha()) {
		//send
		alert("Captcha OK");
		captchareset();
	}
	return;
}
function getNewAccessKeyCopyBtnFunc () {
	copyToClipboard(getNewAccessKeyDiv.innerHTML);
	
	return;
}
function getNewPublicKeyCopyBtnFunc () {
	copyToClipboard(getNewPublicKeyDiv.innerHTML);
	return;
}
function insertCoinBtnFunc () {
	alert("Insert Coin");
	return;
}
function sendCoinBtnFunc () {
	alert("Send Coin");
	return;
}
function chooseIdBtnFunc () {
	alert("Choose id");
	return;
}

function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  return time;
}

function refresh(){
	send("\u0000");
}

function coockieDelete () {
	localStorage.removeItem('hashSession');
}
function coockieSet (hashStr) {
	localStorage.setItem('hashSession', hashStr);
}
function coockieGet () {
	return localStorage.getItem('hashSession');
}
function captchareset (){
	grecaptcha.reset();
}
//*******************************
function errorCaptcha () {
	//divError.innerHTML = 're-CAPTCHA error';
	alert('re-CAPTCHA error');
}
//*******************************
function scriptEditSendFunc(){
	alert("Script Edit Btn");
}
function scriptCopySendFunc(){
	alert("Script Copy Btn");
}
function scriptSaveSendFunc(){
	alert("Script Save Btn");
}
function scriptRunSendFunc(){
	alert("Script Run Btn");
}
function scriptSetupSendFunc(){
	alert("Script Setup Btn");
}
function scriptClearSendFunc(){
	alert("Script Clear Btn");
}
function scriptCheckSendFunc(){
	scriptTextArea = document.getElementById("scriptTextArea");
	send("\u0001" + scriptTextArea.value);
}
function scriptFindSendFunc(){
	alert("ScriptFindBtn");
}
function scriptLoadSendFunc(){
	alert("Script Load Btn");
}
function scriptBlankSendFunc(){
	alert("ScriptBlankBtn");
}
function scriptSellSendFunc(){
	alert("Script Sell Btn");
}
function scriptBuySendFunc(){
	alert("Script Buy Btn");
}
function scriptHideSendFunc(){
	alert("Script Hide Btn");
}
function scriptHelpSendFunc(){
	alert("Script Help Btn");
}
function connection (){
	if (lostConnect == 1){
		if(socket = new WebSocket(address_list)) {} else {return;}
		socket.onopen = function () {
			lostConnect = 0;
			send("\u0000");
			//if (coockieCheck = coockieGet()) {
			//	send("l" + coockieCheck);
			//}
			socketStatusImg.innerHTML = connectionOnlineInnerHTMLimg;
			socketStatusText.innerHTML = connectionOnlineInnerHTMLtext;
		};
		socket.onclose = function(e) {
			socket.close();
			lostConnect = 1;
			socketStatusImg.innerHTML = connectionOfflineInnerHTMLimg;
			socketStatusText.innerHTML = connectionOfflineInnerHTMLtext;
		};
		socket.onerror = function(err) {
			socket.close();
			lostConnect = 1;
			socketStatusImg.innerHTML = connectionOfflineInnerHTMLimg;
			socketStatusText.innerHTML = connectionOfflineInnerHTMLtext;
		};
		socket.onmessage = function (e) {
			var t = new Date();
			var SR = e.data;
			var SRL = SR.length;
			var resp = SR.split("\u0000");
			var respL = resp.length;
			var errorMsg = "";
			if (SR[0] == "\u0000"){	//	Пинг от сервера
				//usersOnline.innerHTML = SR.slice(1);
			}
			if (SR[0] == "L") {
				if (SR[1] == "\u0000"){	//	SCRIPT ERRORS LOG START	****************************************************
					switch (SR[2]) {
						case "\u0000":
							errorMsg = "Check script is Ok\n";
							break;
						case "\u0001":
							errorMsg = "Unknown error\n";
							break;
						case "\u0002":
							errorMsg = "Need correct var's type\nCommand " + SR.slice(3) + "\n";
							break;
						case "\u0003":
							errorMsg = "First word of the command must be non-digital\nCommand " + SR.slice(3) + "\n";
							break;
						case "\u0004":
							errorMsg = "Label is already declared\nCommand " + SR.slice(3) + "\n";
							break;
						case "\u0005":
							errorMsg = "First parameter must be var\nCommand " + SR.slice(3) + "\n";
							break;
						case "\u0006":
							errorMsg = "There must be a named var\nCommand " + SR.slice(3) + "\n";
							break;
						case "\u0007":
							errorMsg = "There must be a filename var\nCommand " + SR.slice(3) + "\n";
							break;
						case "\u0008":
							errorMsg = "There must be a string or named var\nCommand " + SR.slice(3) + "\n";
							break;
						case "\u0009":
							errorMsg = "There must be a non-var parameter\nCommand " + SR.slice(3) + "\n";
							break;
						case "\u0010":
							errorMsg = "Only named var for `now` and uint var for `to` in Unix-time 13 digit\nCommand " + SR.slice(3) + "\n";
							break;
						case "\u0011":
							errorMsg = "Only named var, uint, byte\nCommand " + SR.slice(3) + "\n";
							break;
						case "\u0012":
							errorMsg = "Need parameter\nCommand " + SR.slice(3) + "\n";
							break;
						case "\u0013":
							errorMsg = "Parameter must be a function name\nCommand " + SR.slice(3) + "\n";
							break;
						case "\u0014":
							errorMsg = "Zero parameter's length\nCommand " + SR.slice(3) + "\n";
							break;
						case "\u0015":
							errorMsg = "Pointer type only for MOV command between two named vars\nCommand " + SR.slice(3) + "\n";
							break;
						case "\u0016":
							errorMsg = "Command type is only uint, time or byte\nCommand " + SR.slice(3) + "\n";
							break;
						case "\u0017":
							errorMsg = "Type is only byte, uint, float, counter or time\nCommand " + SR.slice(3) + "\n";
							break;
						case "\u0018":
							errorMsg = "Need 4th parameter\nCommand " + SR.slice(3) + "\n";
							break;
						case "\u0019":
							errorMsg = "String-type is only for ADD and MOV commands\nCommand " + SR.slice(3) + "\n";
							break;
						case "\u0020":
							errorMsg = "File open error\nCommand " + SR.slice(3) + "\n";
							break;
						case "\u0021":
							errorMsg = "Zero sector write fail\nCommand " + SR.slice(3) + "\n";
							break;
						case "\u0022":
							errorMsg = "File create error\nCommand " + SR.slice(3) + "\n";
							break;
						case "\u0023":
							errorMsg = "File read error\nCommand" + SR.slice(3) + "\n";
							break;
						case "\u0024":
							errorMsg = "Get file's size error\nCommand" + SR.slice(3) + "\n";
							break;
						case "\u0025":
							errorMsg = "String var must be a 255 byte length max\nCommand" + SR.slice(3) + "\n";
							break;
						case "\u0026":
							errorMsg = "Variable type not defined\nCommand" + SR.slice(3) + "\n";
							break;
						case "\u0027":
							errorMsg = "Not a byte-var\nCommand" + SR.slice(3) + "\n";
							break;
						case "\u0028":
							errorMsg = "First word of command not must be a true or false\nCommand" + SR.slice(3) + "\n";
							break;
						case "\u0029":
							errorMsg = "Need command's type uint, time, counter or byte\nCommand" + SR.slice(3) + "\n";
							break;
						case "\u0030":
							errorMsg = "Bad parameter\nCommand" + SR.slice(3) + "\n";
							break;
						case "\u0031":
							errorMsg = "Need parameter string's name for the jump\nCommand" + SR.slice(3) + "\n";
							break;
						case "\u0032":
							errorMsg = "Parameter must be a type of var\nCommand" + SR.slice(3) + "\n";
							break;
						case "\u0033":
							errorMsg = "Division by zero\nCommand" + SR.slice(3) + "\n";
							break;
							
						default:
					}
					scriptTerminalTextArea.innerHTML = errorMsg;
				}
			}
		}
	}
}
function send(msgToSend) {
	socket.send(msgToSend);
}
function selectPage(b0, b1, b2, b3, b4, b5, b6, b7) {
	if (!b0 || !b1 || !b2) {
		//if (_ = coockieGet()) {
		//	b0 = t;
		//	b1 = t;
		//	b2 = f;
		//} else {
		//	b0 = f;
		//	b1 = f;
		//	b2 = t;
		//}
		
		b0 = f;
		b2 = f;
	}
	hiddenCaptcha.hidden = b0;
	//formLogin.hidden = b1;
	formHome.hidden = b2;
	formScript.hidden = b3;
	formRoom.hidden = b4;
	formGame.hidden = b5;
	formChat.hidden = b6;
	formTrade.hidden = b7;
	return;
}
function checkCaptcha () {
	captchaMsg = document.getElementById("g-recaptcha-response");
	if (captchaMsg.value.length < 300) {
		errorCaptcha();
		captchareset();
		return f;
	}
	return t;
}
/*CAPTCHA
if (!checkLoginFields(t, t, t, f, f)) {return;}
	captchaMsg = document.getElementById("g-recaptcha-response");
	send("l" + captchaMsg.value + "\u0000" + loginMsg.value + "\u0000" + passMsg.value);
	captchareset();
CAPTCHA
function checkLoginFields (captchaFlag, loginFlag, passFlag, mailCodeFlag, checkBoxTermFlag) {
	resultFlag = t;
	captchaMsg = document.getElementById("g-recaptcha-response");
	if (captchaFlag && captchaMsg.value.length < 300) {
		errorCaptcha();
		resultFlag = f;
	}
	if (loginFlag && loginMsg.value.length < 5 && loginMsg.value != "1") {
		if (resultFlag) {lmailError();}
		loginMsg.style.background = backgroundColorRed;
		resultFlag = f;
	} else {loginMsg.style.background = '';}
	if (passFlag && passMsg.value.length < 8 && passMsg.value != "2") {
		passMsg.style.background = backgroundColorRed;
		if (resultFlag) {lpError();}
		resultFlag = f;
	} else {passMsg.style.background = '';}
	if (mailCodeFlag && mailCodeMsg.value.length != 16) {
		mailCodeMsg.style.background = backgroundColorRed;
		//if (resultFlag) {lmailCodeError();}
		resultFlag = f;
	} else {mailCodeMsg.style.background = '';}
	if (checkBoxTermFlag && !checkBoxTerm.checked) {
		//checkBoxTerm.style.background = '#FBC3C3';
		divError.innerHTML = 'Select checkbox befor registration';
		resultFlag = f;
	}
	return resultFlag;
	
	
	
	
	passMsg.value.value = "";
	
	
	
}*/