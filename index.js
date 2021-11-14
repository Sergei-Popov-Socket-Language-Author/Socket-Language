lostConnect = 1;
lostConnectNew = 1;
address_list = "wss://socketlanguage.space:8443";
address_listNew = "wss://socketlanguage.space:8443";
divRedFadeOutRGB = [249, 49, 49];
divGreenFadeOutRGB = [4, 178, 13];
divFadeOutGo = [0, 0, 0];
divErrorFadeOutFlag = f;
backgroundColorGreen = '#D3F899';
backgroundColorRed = '#FBC3C3';
backgroundColorPurp = '#ECC8FF';
backgroundColorSLS = '#9B9D19';
backgroundColorOrange = '#FDB48D';
backgroundColorGray = '#E0E0E0';
backgroundColorYellow = '#F8F7B3';
backgroundColorSky = '#B0FDF3';
backgroundColorSiren = '#C1C8FE';
flags = "0";	//	Флаги подписок на броадкасты. Бит 1 = Trade
tradeOFF = 'Press to start';
tradeON = 'Press to stop';
coin = ["ADA","ADX","AE","AGI","AION","ALGO","AMB","ANKR","APPC","ARDR","ARK","ARPA","AST","ATOM","BAND","BAT","BCD","BCH","BCPT","BEAM","BLZ","BNB","BNT","BQX","BRD","BTG","BTS","CDT","CELR","CHR","CHZ","CMT","CND","COMP","COS","COTI","CTSI","CTXC","CVC","DAI","DASH","DATA","DCR","DGB","DLT","DNT","DOCK","DOGE","DREP","DUSK","ELF","ENG","ENJ","EOS","ERD","ETC","ETH","EVX","FET","FTM","FTT","FUN","GAS","GNT","GO","GRS","GTO","GVT","GXS","HBAR","HC","HIVE","HOT","ICX","INS","IOST","IOTA","IOTX","IRIS","KAVA","KMD","KNC","LEND","LINK","LOOM","LRC","LSK","LTC","LTO","MANA","MATIC","MBL","MCO","MDA","MDT","MITH","MKR","MTH","MTL","NANO","NAS","NAV","NEBL","NEO","NKN","NULS","NXS","QAX","OGN","OMG","ONE","ONG","ONT","OST","PERL","PHB","PIVX","PNT","POA","POE","POLY","POWR","PPT","QKC","QLC","QSP","QTUM","RCN","RDN","REN","REP","REQ","RLC","RUNE","RVN","SC","SKY","SNGLS","SNM","SNT","SNX","SOL","STEEM","STMX","STORJ","STPT","STRAT","STX","SXP","SYS","TCT","TFUEL","THETA","TNB","TNT","TOMO","TROY","TRX","VET","VIA","VIB","VIBE","VITE","WABI","WAN","WAVES","WPR","WRX","WTC","XEM","XLM","XMR","XRP","XTZ","XVG","XZC","YOYO","ZEC","ZEN","ZIL","ZRX"]
market = ["BTC"];

var t = true;
var f = false;

fadeSymbolType = '*';
msg = "";

window.onload = function(){
	connection();
	connectionNew();
	setInterval(connection, 5000);
	setInterval(connectionNew, 5000);
    setInterval(refresh, 50000);

	mainMenu = document.getElementById("mainMenu");
	//formPayment = document.getElementById("formPayment");
	formLogin = document.getElementById("formLogin");
	formHome = document.getElementById("formHome");
	hiddenCaptcha = document.getElementById("hiddenCaptcha");
	divError = document.getElementById("divError");
	
	socketStatusText = document.getElementById("socketStatusText");
	socketStatusImg = document.getElementById("socketStatusImg");
	socketStatusImgNew = document.getElementById("socketStatusImgNew");
	
	
	//selectMenuBtns(0);
	selectPage(t, t, f, t, t, t, t, t);

	//formPayment.innerHTML = msg;
	msg = "<input type='submit' id='homeBtn' value='Home' disabled = true>";
	msg += "<input type='submit' id='scriptEditorBtn' value='Script'>";
	msg += "<input type='submit' id='gamesBtn' value='Game'>";
	msg += "<input type='submit' id='devicesBtn' value='Device'>";
	msg += "<input type='submit' id='messagesBtn' value='Message'>";
	msg += "<input type='submit' id='tradesBtn' value='Trade'>";

	mainMenu.innerHTML = msg;
	
	//msg = "<h4>Authorization | Registration</h4>";
	//msg += "<p>E-mail:";
	msg = "<input type='text' id='loginInput' maxlength='64' placeholder='enter e-mail'>";
	//msg += "<p>Password:";
	msg += "<br><br><input type='password' id='passInput' maxlength='32' placeholder='enter or choose new passwd'><br>";
	msg += "<div id='mailCodeHidden' hidden=t><h5>Check e-mail & enter code:</h5>";
	msg += "<input type='text' id='mailCodeInput' maxlength='16' placeholder='enter code from e-mail'></div>";
	msg += "<div id='checkBoxTermHidden' hidden=t><h6><input type='checkbox' id='checkBoxTerm' background-color:'" + backgroundColorRed + "' title='Checkbox for agree license' onchange=''>Terms & Conditions and Data Privacy Policy read and accepted</h6></div>";
	msg += "<br><input type='submit' id='loginBtn' value='Login' disabled=true>";
	msg += "<input type='submit' id='registrationBtn' value='Registration / Reset password' disabled=true>";
	msg += "<input type='submit' id='socketLanguageAboutBtn' value='Roadmap'></td>";
	formLogin.innerHTML = msg;
	
	//msg = "<h4>Home</h4>";
	msg = "<input type='submit' id='logoutBtn' value='Logout'>";
	msg += "<h5><table><tr><td><img src='Coin.gif' title='Your Balance'></td><td><div id='yourBalance' title='Your Balance'></div></td><td><img src='Letter.gif' title='Your e-mail'></td><td><div id='yourEmail' title='Your e-mail'></div></td><td><img src='id.gif' title='Your personal ID'></td><td><div id='yourID' title='Your personal ID'></div></td></tr><tr></tr><table></h5>";
	msg += "<input type='text' id='summInput' maxlength='19' title='Enter summ in Coins (100 Coins = $1)' placeholder='number of Coins'>";
	msg += "<input type='submit' id='depositBalanceBtn' title='Deposit' value='Buy Coins'>";
	msg += "<input type='submit' id='depositQiwiBtn' title='Deposit' value='Qiwi'>";
	msg += "<br><br><input type='text' id='nicknameInput' maxlength='19' placeholder='choose your nickname'>";
	msg += "<input type='submit' id='setNicknameBtn' value='Set nickname'>";
	formHome.innerHTML = msg;
	
	
	
	//msg = "<h4>Script</h4>";
	
	msg = "<input type='submit' id='scriptEditBtn' value='Edit'>";
	msg += "&nbsp<input type='submit' id='scriptCopyBtn' value='Copy'>";
	msg += "&nbsp<input type='submit' id='scriptSaveBtn' value='Save'>";
	msg += "&nbsp<input type='submit' id='scriptRunBtn' value='Run'>";
	msg += "&nbsp<input type='submit' id='scriptSetupBtn' value='Setup'>";
	msg += "&nbsp<input type='submit' id='scriptClearBtn' value='Clear'>";
	msg += "&nbsp<input type='submit' id='scriptCheckBtn' value='Check'>";
	msg += `<br><textarea spellcheck='false' id='scriptTextArea' autocapitalize='none' rows='20' cols='42'>
	a 50
	b 70
	+ c a
	+ c b
	\n\n\n
	</textarea>`;
	msg += "<br><input type='submit' id='scriptNewBtn' value='New'>";
	msg += "&nbsp<input type='submit' id='scriptLoadBtn' value='Load'>";
	msg += "&nbsp<input type='submit' id='scriptChatBtn' value='Chat'>";
	msg += "&nbsp<input type='submit' id='scriptSellBtn' value='Sell'>";
	msg += "&nbsp<input type='submit' id='scriptBuyBtn' value='Buy'>";
	msg += "&nbsp<input type='submit' id='scriptScanBtn' value='Scan'>";
	msg += "&nbsp<input type='submit' id='scriptHideBtn' value='Hide'>";
	msg += "&nbsp<input type='submit' id='scriptHelpBtn' value='?'>";
	
	
	msg += "<table id='tableTrade' cellspacing='0' border='1'>";
	msg += "<tr><td colspan='2' bgcolor='" + backgroundColorGreen + "'> Script ID </td>";
	msg += "<td colspan='2' bgcolor='" + backgroundColorYellow + "'><div id='setupScriptID' >15434</div></tr>";
	msg += "<tr><td colspan='2' bgcolor='" + backgroundColorGreen + "'> Name </td>";
	msg += "<td bgcolor='" + backgroundColorYellow + "'><div id='setupScriptName' ><input type='text' id='scriptNameInput' maxlength='255' placeholder='choose script name'></div></td><td bgcolor='" + backgroundColorYellow + "'><input type='submit' id='ScriptHelpBtn' value='Save'></td></tr>";
	msg += "<tr><td colspan='2' bgcolor='" + backgroundColorGreen + "'> Writer </td>";
	msg += "<td bgcolor='" + backgroundColorYellow + "'><div id='setupScriptWriter' ><input type='text' id='scriptWriterInput' maxlength='255' placeholder='choose Writer name'></div></td><td bgcolor='" + backgroundColorYellow + "'><input type='submit' id='ScriptHelpBtn' value='Save'></td></tr>";
	msg += "</table>";
	
	
	msg += "<br><br><textarea id='scriptTerminalTextArea' readonly rows='5' cols='42'></textarea>";
	formScriptEditor.innerHTML = msg;
	
	
	
	//msg = "<h4>Trade</h4>";
	msg = "<input type='submit' id='tradesFlatBusterBtn' value='" + tradeOFF + "'>";
	msg += "<table id='tableTrade' cellspacing='0' border='1'>";
	msg += "<tr>";
	msg += "<td colspan='2' bgcolor='" + backgroundColorYellow + "'> Pair </td>";
	msg += "<td colspan='2' bgcolor='" + backgroundColorGreen + "'> Buy </td>";
	msg += "<td colspan='2' bgcolor='" + backgroundColorRed + "'> Sell </td>";
	msg += "</tr><tr>";
	msg += "<td bgcolor='" + backgroundColorYellow + "'> Coin </td>";
	msg += "<td bgcolor='" + backgroundColorYellow + "'> Market </td>";
	msg += "<td bgcolor='" + backgroundColorGreen + "'> Time </td>";
	msg += "<td bgcolor='" + backgroundColorGreen + "'> Price </td>";
	msg += "<td bgcolor='" + backgroundColorRed + "'> Time </td>";
	msg += "<td bgcolor='" + backgroundColorRed + "'> Price </td>";
	msg += "</tr></table>";
	formTrades.innerHTML = msg;
	
	loginMsg = document.getElementById("loginInput");
	passMsg = document.getElementById("passInput");
	mailCodeHidden = document.getElementById('mailCodeHidden');
	mailCodeMsg = document.getElementById('mailCodeInput');
	checkBoxTerm = document.getElementById('checkBoxTerm');
	usersOnline = document.getElementById('usersOnline');
	yourEmail = document.getElementById('yourEmail');
	yourID = document.getElementById('yourID');
	yourBalance = document.getElementById('yourBalance');
	tableTrade = document.getElementById('tableTrade');
	
	
	homeBtn = document.getElementById('homeBtn');
	homeBtn.addEventListener('click', homeBtnFunc, f);
	homeBtn.style.background=backgroundColorPurp;
	
	scriptEditorBtn = document.getElementById('scriptEditorBtn');
	scriptEditorBtn.addEventListener('click', scriptEditorBtnFunc, f);
	scriptEditorBtn.style.background=backgroundColorOrange;
	
	devicesBtn = document.getElementById('devicesBtn');
	devicesBtn.addEventListener('click', devicesBtnFunc, f);
	devicesBtn.style.background=backgroundColorSiren;
	
	gamesBtn = document.getElementById('gamesBtn');
	gamesBtn.addEventListener('click', gamesBtnFunc, f);
	gamesBtn.style.background=backgroundColorGreen;
	
	messagesBtn = document.getElementById('messagesBtn');
	messagesBtn.addEventListener('click', messagesBtnFunc, f);
	messagesBtn.style.background=backgroundColorGray;
	
	tradesBtn = document.getElementById('tradesBtn');
	tradesBtn.addEventListener('click', tradesBtnFunc, f);
	tradesBtn.style.background=backgroundColorYellow;
	
	
	
	
	loginBtn = document.getElementById('loginBtn');
	loginBtn.addEventListener('click', loginSend, f);
	loginBtn.style.background=backgroundColorPurp;
	
	registrationBtn = document.getElementById('registrationBtn');
	registrationBtn.addEventListener('click', registrationSend, f);
	registrationBtn.style.background=backgroundColorPurp;
	
	
	
	socketLanguageAboutBtn = document.getElementById('socketLanguageAboutBtn');
	socketLanguageAboutBtn.addEventListener('click', socketLanguageAboutBtnFunc, f);
	socketLanguageAboutBtn.style.fontSize="0.8em";
	socketLanguageAboutBtn.style.background=backgroundColorSLS;
	socketLanguageAboutBtn.style.color="#ffffff";
	
	
	
	logoutBtn = document.getElementById('logoutBtn');
	logoutBtn.addEventListener('click', logoutSend, f);
	logoutBtn.style.background=backgroundColorPurp;
	
	tradesFlatBusterBtn = document.getElementById('tradesFlatBusterBtn');
	tradesFlatBusterBtn.addEventListener('click', tradesFlatBusterBtnFunc, f);
	tradesFlatBusterBtn.style.background=backgroundColorYellow;
	
	
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
	
	
	
	scriptNewBtn = document.getElementById('scriptNewBtn');
	scriptNewBtn.addEventListener('click', scriptNewSendFunc, f);
	scriptNewBtn.style.background=backgroundColorOrange;
	
	
	
	scriptLoadBtn = document.getElementById('scriptLoadBtn');
	scriptLoadBtn.addEventListener('click', scriptLoadSendFunc, f);
	scriptLoadBtn.style.background=backgroundColorOrange;
	
	
	scriptChatBtn = document.getElementById('scriptChatBtn');
	scriptChatBtn.addEventListener('click', scriptChatSendFunc, f);
	scriptChatBtn.style.background=backgroundColorOrange;
	
	
	
	scriptSellBtn = document.getElementById('scriptSellBtn');
	scriptSellBtn.addEventListener('click', scriptSellSendFunc, f);
	scriptSellBtn.style.background=backgroundColorOrange;
	
	
	
	scriptBuyBtn = document.getElementById('scriptBuyBtn');
	scriptBuyBtn.addEventListener('click', scriptBuySendFunc, f);
	scriptBuyBtn.style.background=backgroundColorOrange;
	
	
	
	scriptScanBtn = document.getElementById('scriptScanBtn');
	scriptScanBtn.addEventListener('click', scriptScanSendFunc, f);
	scriptScanBtn.style.background=backgroundColorOrange;
	
	
	
	scriptHideBtn = document.getElementById('scriptHideBtn');
	scriptHideBtn.addEventListener('click', scriptHideSendFunc, f);
	scriptHideBtn.style.background=backgroundColorOrange;
	
	
	scriptHelpBtn = document.getElementById('scriptHelpBtn');
	scriptHelpBtn.addEventListener('click', scriptHelpSendFunc, f);
	scriptHelpBtn.style.background=backgroundColorOrange;
	
	
	depositBalanceBtn = document.getElementById('depositBalanceBtn');
	depositBalanceBtn.addEventListener('click', depositBalanceBtnFunc, f);
	depositBalanceBtn.style.background=backgroundColorPurp;
	
	depositQiwiBtn = document.getElementById('depositQiwiBtn');
	depositQiwiBtn.addEventListener('click', depositQiwiBtnFunc, f);
	depositQiwiBtn.style.background=backgroundColorPurp;
	

	nicknameInput = document.getElementById('nicknameInput');
	setNicknameBtn = document.getElementById('setNicknameBtn');
	setNicknameBtn.addEventListener('click', setNicknameSend, f);
	setNicknameBtn.style.background=backgroundColorPurp;
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
	scriptEditorBtn.disabled=a1;
	devicesBtn.disabled=a2;
	gamesBtn.disabled=a3;
	messagesBtn.disabled=a4;
	tradesBtn.disabled=a5;
	return
}


function depositBalanceBtnFunc () {
	selectMenuBtns(0);
	selectPage(t, t, f, t, t, t, t, t);
	return;
}

function depositQiwiBtnFunc () {
	selectMenuBtns(0);
	selectPage(t, t, f, t, t, t, t, t);
	return;
}


function homeBtnFunc () {
	selectMenuBtns(0);
	selectPage(t, t, f, t, t, t, t, t);
	return;
}
function scriptEditorBtnFunc () {
	selectMenuBtns(1);
	selectPage(t, t, t, f, t, t, t, t);
	return;
}
function devicesBtnFunc () {
	selectMenuBtns(2);
	selectPage(t, t, t, t, f, t, t, t);
	return;
}
function gamesBtnFunc () {
	selectMenuBtns(3);
	selectPage(t, t, t, t, t, f, t, t);
	return;
}
function messagesBtnFunc () {
	selectMenuBtns(4);
	selectPage(t, t, t, t, t, t, f, t);
	return;
}
function tradesBtnFunc () {
	selectMenuBtns(5);
	selectPage(t, t, t, t, t, t, t, f);
	return;
}
function socketLanguageAboutBtnFunc () {
    viewwin = window.open('Socket Language.Space_Roadmap.gif','viewwin', 'width=600,height=300'); 
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


function tradesFlatBusterBtnFunc () {
	send("tF");
	//selectMenuBtns(5);
	//selectPage(t, t, t, t, t, t, t, f);
	var x = new Date();
	var currentTimeZoneOffsetInHours = x.getTimezoneOffset() / 60;
	//alert(currentTimeZoneOffsetInHours);	//	UTC
	//alert(timeConverter(1596400017));
	
	
	for(x=0;x<coin.length;x++){
		if (!document.getElementById(coin[x]+market[0])) {
			addRow(coin[x], market[0]);
		} else {alert('Уже существует' + coin[x])};
	}
	
	//addRow('DOGE', 'BTC');
	//var newDiv = document.createElement("div");
	//var yyy = document.getElementById('ttt')
	//ttt.innerHTML = '4444444444';
	//if (document.getElementById('DOGEBTo')) {alert('Есть');} else {alert('Нету');}
	return;
}


function addRow (moneta, rinok) {
	var tbody = document.getElementById('tableTrade').getElementsByTagName("TBODY")[0];
    var row = document.createElement("TR")
    var td1 = document.createElement("TD")
    td1.appendChild(document.createTextNode(moneta))
    td1.style.background = backgroundColorYellow;
    var td2 = document.createElement("TD")
    td2.appendChild (document.createTextNode(rinok))
    td2.style.background = backgroundColorYellow;
    var td3 = document.createElement("TD")
	var newDiv = document.createElement("div");
	newDiv.id = moneta + rinok + 'buytime';
    newDiv.appendChild (document.createTextNode("-"))
	td3.appendChild (newDiv);
    td3.style.background = backgroundColorGreen;
    var td4 = document.createElement("TD")
	newDiv = document.createElement("div");
	newDiv.id = moneta + rinok + 'buyprice';
    newDiv.appendChild (document.createTextNode("-"))
	td4.appendChild (newDiv);
    td4.style.background = backgroundColorGreen;
    var td5 = document.createElement("TD")
	newDiv = document.createElement("div");
	newDiv.id = moneta + rinok + 'selltime';
    newDiv.appendChild (document.createTextNode("-"))
	td5.appendChild (newDiv);
    td5.style.background = backgroundColorRed;
    var td6 = document.createElement("TD")
	newDiv = document.createElement("div");
	newDiv.id = moneta + rinok + 'sellprice';
    newDiv.appendChild (document.createTextNode("-"))
	td6.appendChild (newDiv);
    td6.style.background = backgroundColorRed;
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
    row.appendChild(td5);
    row.appendChild(td6);
	row.hidden = t;
	row.id = moneta + rinok + 'tr';
    tbody.appendChild(row);
	return;
}




function refresh(){
	send("\u0000");
	sendNew("\u0000");
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
	passMsg.value.value = "";
	grecaptcha.reset();
}
//*******************************
function lcError () {
	divError.innerHTML = 're-CAPTCHA error';
	errorFadeOutStart(f, '.');
}
function liError () {
	divError.innerHTML = 'Login / Password incorrect';
	errorFadeOutStart(f, '.');
}
function lpError () {
	divError.innerHTML = 'Password format incorrect';
	errorFadeOutStart(f, '.');
}
function lmailError () {
	divError.innerHTML = 'Login format incorrect';
	errorFadeOutStart(f, '.');
}
function lrError () {
	divError.innerHTML = 'Check e-mail';
	errorFadeOutStart(t, '.');
}
function lgError () {
	divError.innerHTML = 'Guest enter activate';
	errorFadeOutStart(t, '.');
}
function lsError () {
	divError.innerHTML = 'Code sent to e-mail';
	errorFadeOutStart(t, '.');
}
function lmailCodeError () {
	divError.innerHTML = 'Code incorrect';
	errorFadeOutStart(f, '.');
}
function nicknameError () {
	divError.innerHTML = 'Nickname error';
	errorFadeOutStart(f, '.');
}
function nicknameWasChange () {
	divError.innerHTML = 'Nickname was changed';
	errorFadeOutStart(t, '.');
}


function servicesError () {
	divError.innerHTML = 'Service busy. Try again latter';
	errorFadeOutStart(f, '.');
}
//*******************************
function checkLoginFields (captchaFlag, loginFlag, passFlag, mailCodeFlag, checkBoxTermFlag) {
	resultFlag = t;
	captchaMsg = document.getElementById("g-recaptcha-response");
	if (captchaFlag && captchaMsg.value.length < 300) {
		lcError();
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
		errorFadeOutStart(f, '.');
		resultFlag = f;
	}
	return resultFlag;
}
//*******************************
function loginSend(){
	mailCodeHidden.hidden = t;
	checkBoxTermHidden.hidden = t;
	if (!checkLoginFields(t, t, t, f, f)) {return;}
	captchaMsg = document.getElementById("g-recaptcha-response");
	send("l" + captchaMsg.value + "\u0000" + loginMsg.value + "\u0000" + passMsg.value);
	captchareset();
	passMsg.value = '';
}

function registrationSend(){
	mailCodeHidden.hidden = f;
	checkBoxTermHidden.hidden = f;
	if (!checkLoginFields(t, t, t, f, t)) {return;}
	captchaMsg = document.getElementById("g-recaptcha-response");
	send("l" + captchaMsg.value + "\u0000" + loginMsg.value + "\u0000" + passMsg.value + "\u0000" + mailCodeMsg.value);
	captchareset();
	if (!checkLoginFields(f, f, f, t, f)) {return;}
}

function guestSend(){
	mailCodeHidden.hidden = t;
	checkBoxTermHidden.hidden = f;
	if (!checkLoginFields(t, f, f, f, t)) {return;}
	captchaMsg = document.getElementById("g-recaptcha-response");
	send("l" + captchaMsg.value + "\u0000");
	captchareset();
}
//*******************************
function logoutSend(){
	send("l");
	errorFadeOutStart(t, '*');
}


function scriptEditSendFunc(){
	alert("Script Edit Btn");
	//send("l");
	//errorFadeOutStart(t, '*');
}
function scriptCopySendFunc(){
	alert("Script Copy Btn");
	//send("l");
	//errorFadeOutStart(t, '*');
}
function scriptSaveSendFunc(){
	alert("Script Save Btn");
	//send("l");
	//errorFadeOutStart(t, '*');
}
function scriptRunSendFunc(){
	alert("Script Run Btn");
	//send("l");
	//errorFadeOutStart(t, '*');
}
function scriptSetupSendFunc(){
	alert("Script Setup Btn");
	//send("l");
	//errorFadeOutStart(t, '*');
}
function scriptClearSendFunc(){
	alert("Script Clear Btn");
	//send("l");
	//errorFadeOutStart(t, '*');
}
function scriptCheckSendFunc(){
	scriptTextArea = document.getElementById("scriptTextArea");
	//alert("Script Check Btn");
	sendNew("\u0001" + scriptTextArea.value);
	//errorFadeOutStart(t, '*');
}
function scriptNewSendFunc(){
	alert("Script New Btn");
	//send("l");
	//errorFadeOutStart(t, '*');
}
function scriptLoadSendFunc(){
	alert("Script Load Btn");
	//send("l");
	//errorFadeOutStart(t, '*');
}
function scriptChatSendFunc(){
	alert("Script Chat Btn");
	//send("l");
	//errorFadeOutStart(t, '*');
}
function scriptSellSendFunc(){
	alert("Script Sell Btn");
	//send("l");
	//errorFadeOutStart(t, '*');
}
function scriptBuySendFunc(){
	alert("Script Buy Btn");
	//send("l");
	//errorFadeOutStart(t, '*');
}
function scriptScanSendFunc(){
	alert("Script Scan Btn");
	//send("l");
	//errorFadeOutStart(t, '*');
}
function scriptHideSendFunc(){
	alert("Script Hide Btn");
	//send("l");
	//errorFadeOutStart(t, '*');
}
function scriptHelpSendFunc(){
	alert("Script Help Btn");
	//send("l");
	//errorFadeOutStart(t, '*');
}

	
	
	
function setNicknameSend(){
	if (nicknameInput.value.length > 19 || nicknameInput.value.length < 1) {return;}
	//send("n" + nicknameInput.value);
	send("tB");
	errorFadeOutStart(t, '*');
}
function geoFailure() {
	
}

function geoGo() {
	navigator.geolocation.getCurrentPosition(geoSuccess, geoFailure, 
			{enableHighAccuracy: t,
			 timeout: 1000,
			 maximumAge: 0});
			 
			 
			 
}

function connectionNew (){
	if (lostConnectNew == 1){
		if(socketNew = new WebSocket(address_listNew)) {} else {return;}
		socketNew.onopen = function () {
			lostConnectNew = 0;
			sendNew("\u0000");
			//if (coockieCheck = coockieGet()) {
			//	send("l" + coockieCheck);
			//}
			socketStatusImgNew.innerHTML = '<img src="ConnectionG.gif" title="online">';
		};
		socketNew.onclose = function(e) {
			socketNew.close();
			lostConnectNew = 1;
			socketStatusImgNew.innerHTML = '<img src="ConnectionR.gif" title="offline">';
		};
		socketNew.onerror = function(err) {
			socketNew.close();
			lostConnectNew = 1;
			socketStatusImgNew.innerHTML = '<img src="ConnectionR.gif" title="offline">';
		};
		socketNew.onmessage = function (e) {
			var t = new Date();
			var SR = e.data;
			var SRL = SR.length;
			var resp = SR.split("\u0000");
			var respL = resp.length;
			
			if (SR[0]=="\u0000"){	//	Подтверждение от сервера, что web-клиент подключен
				//usersOnline.innerHTML = SR.slice(1);
			}
		}
	}
}
function connection (){
	if (lostConnect == 1){
		//selectPage(t, t, f, t, t, t, t, t);
		if(socket = new WebSocket(address_list)) {} else {return;}
		socket.onopen = function () {
			lostConnect = 0;
			send("\u0001\u0009");
			if (coockieCheck = coockieGet()) {
				send("l" + coockieCheck);
			}
			socketStatusImg.innerHTML = '<img src="ConnectionG.gif" title="online">';
			socketStatusText.innerHTML = "Connected";
			errorFadeOutStart(t, '*');
			if (flags == 1) {send("tF");}
		};
		socket.onclose = function(e) {
			socket.close();
			lostConnect = 1;
			if (e.wasClean) {
				socketStatusText.innerHTML = "Connection close";
			} else {
				socketStatusText.innerHTML = "Connection lost";
			}
			socketStatusText.innerHTML = "Connection error: " + e.code + " \:/ " + e.reason;
			socketStatusImg.innerHTML = '<img src="ConnectionR.gif" title="offline">';
			socketStatusText.innerHTML = "Disonnected";
			usersOnline.innerHTML = "0";
		};
		socket.onerror = function(err) {
			socket.close();	//	?
			lostConnect = 1;
			//socketStatusText.innerHTML = err.message;
			socketStatusImg.innerHTML = '<img src="ConnectionR.gif" title="offline">';
		};

		socket.onmessage = function (e) {
			var t = new Date();
			var SR = e.data;
			var SRL = SR.length;
			var resp = SR.split("\u0000");
			var respL = resp.length;
			
			if (SR[0]=="9"){	//	Подтверждение от сервера, что web-клиент подключен
				usersOnline.innerHTML = SR.slice(1);
			}
			
			
			if (SR[0]=="n"){	//	Ответ по смене ника
				if (SRL == 1) {
					nicknameWasChange();
				} else {
					switch (SR[1]) {
						case "-":
							nicknameError();
							break;
						default:
					}
				}
				return;
			}
			
			
			if (SR[0]=="t"){	//	Ответ от Trade
				if (SR[1] == 'u') {
					for(x=1;x<respL;x+=6){
						//if (document.getElementById(resp[x]+resp[x+1])) {
							//alert(resp[x]);
							document.getElementById(resp[x] + resp[x+1] + 'buytime').innerHTML = timeConverter(resp[3]);
							document.getElementById(resp[x] + resp[x+1] + 'buyprice').innerHTML = resp[4];
							document.getElementById(resp[x] + resp[x+1] + 'selltime').innerHTML = timeConverter(resp[5]);
							document.getElementById(resp[x] + resp[x+1] + 'sellprice').innerHTML = resp[6];
							document.getElementById(resp[x] + resp[x+1] + 'tr').hidden = f;
						//}
					}
					return;
				}
				if (respL == 4) {
					a = resp[1] + resp[2] + 'tr';
					
					if (SR[1] == 'b'){
						tTime = 'buytime';
						tPrice = 'buyprice';
					}
					if (SR[1] == 's'){
						tTime = 'selltime';
						tPrice = 'sellprice';
					}
					document.getElementById(resp[0].slice(2) + resp[1] + tTime).innerHTML = timeConverter(resp[2]);
					document.getElementById(resp[0].slice(2) + resp[1] + tPrice).innerHTML = resp[3];
					document.getElementById(a).hidden = f;
				}
				
				if (SR[1] == 'h') {
					document.getElementById(resp[0].slice(2) + resp[1] + 'tr').hidden = t;
				}
				
				
				
				//"tb" + "DOGE" + uu + "BTC" + uu + "1596400017" + uu + "0.45342312"
				//"ts" + "DOGE" + uu + "BTC" + uu + "1596400017" + uu + "0.45342312"
				//"tu" + uu + "DOGE" + uu + "BTC" + uu + "1596400017" + uu + "0.45342312" + uu + "1596400017" + uu + "0.45342312"
				//"th" + "DOGE" + uu + "BTC"
				return;
			}
			if (SR[0]=="f"){	//	Ответ по установке флага
				if (SRL == 2) {
					flags = SR[1];
					//alert(SR[1]);
					if (SR[1] == "0") {
						tradesFlatBusterBtn.value = tradeOFF;
					}
					if (SR[1] == "1") {
						tradesFlatBusterBtn.value = tradeON;
					}
				}
				return;
			}
			// Login / Logout / Coockie check
			if (SR[0]=="l"){
				if (SRL == 1) {
					coockieDelete();
					selectPage(t, t, f, t, t, t, t, t);
				} else {
					switch (SR[0] + SR[1]) {
						case "ll":
							yourEmail.innerHTML = resp[0].slice(2)
							yourID.innerHTML = coockieCheck.slice(32)
							yourBalance.innerHTML = '1000';
							nicknameInput.value = resp[1];
							return;
						case "lc":
							lcError();
							break;
						case "li":
							liError();
							break;
						case "lp":
							lpError();
							break;
						case "l@":
							lmailError();
							break;
						case "lr":
							lrError();
							break;
						case "lg":
							lgError();
							break;
						case "ls":
							lsError();
							break;
						case "lm":
							lmailCodeError();
							break;
						case "lb":
							servicesError();
							break;
						default:
							coockieSet(resp[0].slice(1));	//	Все символы от 1-го и до конца строки
							yourEmail.innerHTML = resp[1] + " | " + "id " + resp[0].slice(33) + " | " + "1000" + " Coins";
							nicknameInput.value = resp[2];
							errorFadeOutStart(t, '*');
							selectPage(t, t, f, t, t, t, t, t);
					}
				}
				connection();
			}
			// Get statistic (users online etc)
			if (SR[0]=="s"){
				usersOnline.innerHTML = SR.slice(1);
				return
			}
		};
	} else {
	}
}

function sendNew(msgToSend) {
	socketNew.send(msgToSend);
}
function send(msgToSend) {
	socket.send(msgToSend);
}
function sendNew(msgToSend) {
	socketNew.send(msgToSend);
}


function errorFadeOut () {
	divError.innerHTML += fadeSymbolType;
	if (divFadeOutGo[0] < 247) {divFadeOutGo[0]+=8};
	if (divFadeOutGo[1] < 247) {divFadeOutGo[1]+=8};
	if (divFadeOutGo[2] < 247) {divFadeOutGo[2]+=8};
	
	divError.style.color = "rgb(" + divFadeOutGo[0] + ", " + divFadeOutGo[1] + ", " + divFadeOutGo[2] + ")";
	
	if (divFadeOutGo[0] > 247 && divFadeOutGo[1] > 247 && divFadeOutGo[2] > 247) {
		divError.innerHTML = '';
		clearTimeout(timerErrorFadeOutID);
		divErrorFadeOutFlag = f;
		turnBtnFadeOut();
	}
}
function errorFadeOutStart (flag, marker) {
	fadeSymbolType = marker;
	if (divErrorFadeOutFlag) {clearTimeout(timerErrorFadeOutID);}
	divErrorFadeOutFlag = t;
	turnBtnFadeOut();
	if (flag) {
		divFadeOutGo[0] = divGreenFadeOutRGB[0];
		divFadeOutGo[1] = divGreenFadeOutRGB[1];
		divFadeOutGo[2] = divGreenFadeOutRGB[2];
	} else {
		divFadeOutGo[0] = divRedFadeOutRGB[0];
		divFadeOutGo[1] = divRedFadeOutRGB[1];
		divFadeOutGo[2] = divRedFadeOutRGB[2];
	}
	timerErrorFadeOutID = setInterval(errorFadeOut, 130);
}
function turnBtnFadeOut () {
	if (divErrorFadeOutFlag) {
		loginBtn.disabled=t;
		registrationBtn.disabled=t;
		setNicknameBtn.disabled=t;
	} else {
		loginBtn.disabled=f;
		registrationBtn.disabled=f;
		setNicknameBtn.disabled=f;
	}
}

function selectPage(b0, b1, b2, b3, b4, b5, b6, b7) {
	if (!b0 || !b1 || !b2) {
		if (_ = coockieGet()) {
			b0 = t;
			b1 = t;
			b2 = f;
		} else {
			b0 = f;
			b1 = f;
			b2 = t;
		}
	}
		
	hiddenCaptcha.hidden = b0;
	formLogin.hidden = b1;
	formHome.hidden = b2;
	formScriptEditor.hidden = b3;
	formDevices.hidden = b4;
	formGames.hidden = b5;
	formMessages.hidden = b6;
	formTrades.hidden = b7;
	return;
}
