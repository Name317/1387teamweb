
document.getElementById('blogin').disabled = true;
document.getElementById('blange').disabled = true;
document.getElementById('tolo').disabled = true;
function dete(){
    window.localStorage.setItem('nowname','null');
    location.reload();
}
var dy = window.localStorage.getItem('nowname');
if (dy === 'null' || dy == null || dy == ''){
    document.querySelector('strong.dename').textContent = '未登录';
    document.getElementById('blogin').disabled = false;
    document.getElementById('blange').disabled = false;
}
else{
    document.querySelector('strong.dename').textContent = dy;
    document.getElementById('tolo').disabled = false; 
}
function apt(tin,wm){
    return '&' + tin + '=' + wm;
}
function apd(act){
	var yon = 'https://tinywebdb.appinventor.space/api?user=turbo317&secret=bb6dc299&action=' + act;
	return yon;
}
function pt(o,...args){
	var xhr = new XMLHttpRequest();
    var url = '';
	if (o === 'count'){
		url = apd(o);
	}
	else if (o === 'get'){
		url = apd(o) + apt('tag',args[0]);
	}
	else if (o === 'delete'){
		url = apd(o) + apt('tag',args[0]);
	}
	else if (o === 'update'){
		url = apd(o) + apt('tag',args[0]) + apt('value',args[1]);
	}
	else if (o === 'search'){
		url = apd(o) + apt('no',args[0]) + apt('count',args[1]) + apt('tag',args[2]) + apt('type',args[3]);
	}
	xhr.open("GET", url, false); 
	xhr.send();
	if (xhr.status === 200) {
	    return(xhr.responseText);
	} else {
	    return(xhr.statusText);
	}
};
function simple(){
	if (window.localStorage.getItem('nowname') !== '未登录' && window.localStorage.getItem('nowname') !== 'null'){
		var dv = document.getElementById('cinn').value;
		var cnd0 = JSON.parse(pt('get','speak_counter'));
		var cnd = cnd0['speak_counter'];
		if (cnd == 'null'){
			pt('update','speak_counter','0');
			cnd = 0;
		}
		var up0 = JSON.parse(pt('get','speak_upel'));
		var up = up0['speak_upel'];
		if (up == 'null'){
			pt('update','speak_upel','0');
			up = 0;
		}
		if (cnd < 20){
			cnd++;
			pt('update','speak_counter',String(cnd));
		}
		else if (up >= (35 - 1)){
			pt('delete','speak_thing_' + String(up - 35));
			pt('delete','speak_user_' + String(up - 35));
		}
		up++;
		pt('update','speak_upel',String(up));
		pt('update','speak_user_' + String(up),window.localStorage.getItem('nowname'));
		pt('update','speak_thing_' + String(up),dv);
		console.log('发送 : ' + dv);
		location.reload();
	}
	else{
		alert('请先登录！');
	}
}
document.getElementById('cinn').disabled = true;
document.getElementById('cinn').placeholder = '加载中……';
document.getElementById('pres').disabled = true;
if (window.localStorage.getItem('nowname') !== '未登录' && window.localStorage.getItem('nowname') !== 'null'){
	document.getElementById('cinn').disabled = false;
	document.getElementById('cinn').placeholder = '输入你的犇犇，然后发送。';
	document.getElementById('pres').disabled = false;
}
else{
	document.getElementById('cinn').placeholder = '请先登录再发犇犇！';
}


        function app(nero){
	var parentDiv = document.getElementById('temp');
	var newDiv = document.createElement('div');
	newDiv.className = 'divdiv';
	newDiv.innerHTML = nero;
	parentDiv.appendChild(newDiv);
}
function dob(){
    var a;
	if(localStorage.teamweb){
        document.getElementById('motu').innerHTML = localStorage.teamweb;
a=1;
// return;
}	// localStorage.teamweb = document.getElementById('temp').innerHTML;
	// document.getElementById('motu').innerHTML = localStorage.teamweb;
}
function Update(){
var cnd0 = JSON.parse(pt('get','speak_counter'));
	var cnd = cnd0['speak_counter'];
	if (cnd == 'null'){
		pt('update','speak_counter','0');
		cnd = 0;
	}
	var up0 = JSON.parse(pt('get','speak_upel'));
	var up = up0['speak_upel'];
	if (up == 'null'){
		pt('update','speak_upel','0');
		up = 0;
	}
	for (var i = up;i >= up - cnd + 1;i--){
		var dd0 = JSON.parse(pt('get','speak_user_' + String(i)));
		var dd = dd0['speak_user_' + String(i)];
		var d0 = JSON.parse(pt('get','speak_thing_' + String(i)));
		var d = d0['speak_thing_' + String(i)];
		var repo = d.split(" ");
		for (var j = 0;j < repo.length;j++){
			if (repo[j][0] === '@'){
				repo[j] = '<a href = "https://name317.github.io/1387teamweb/users/?username=' + repo[j].substring(1,repo[j].length)  + '">' + repo[j] + '</a>';
			}
		}
		app('<a href = "https://name317.github.io/1387teamweb/users/?username=' + dd + '">' + dd + '</a> : ' + repo.join(' '));
		console.log(dd + ' : ' + d);
	}
localStorage.teamweb = document.getElementById('temp').innerHTML;

	document.getElementById('motu').innerHTML = localStorage.teamweb;
}
dob();
let updateInterval = setInterval(() => Update(), 500);

window.addEventListener('beforeunload', () => {
	clearInterval(updateInterval);
});
