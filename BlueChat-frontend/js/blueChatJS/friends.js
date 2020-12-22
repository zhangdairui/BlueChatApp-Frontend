//初始化页面
mui.init({
	swipeBack: true
});


//为了给通讯录页面传入li，准备数组friendInfo：
var friendInfo = [{
		imgUrl: 'images/profile1.jpg',
		name: 'Alice',
		Email: 'Alice@mail.com'
	},
	{
		imgUrl: 'images/profile2.jpg',
		name: 'Bob',
		Email: 'Bob@mail.com'
	},
	{
		imgUrl: 'images/profile3.jpg',
		name: 'Mary',
		Email: 'Mary@mail.com'
	},
	{
		imgUrl: 'images/profile4.jpg',
		name: 'coco',
		Email: 'coco@mail.com'
	},
	{
		imgUrl: 'images/profile5.jpg',
		name: 'Cindy',
		Email: 'Cindy@mail.com'
	},
	{
		imgUrl: 'images/profile6.jpg',
		name: 'John',
		Email: 'John@mail.com'
	},
	{
		imgUrl: 'images/profile7.jpg',
		name: 'Emo',
		Email: 'Emo@mail.com'
	},
	{
		imgUrl: 'images/profile8.jpg',
		name: 'Simon',
		Email: 'Simon@mail.com'
	},
	{
		imgUrl: 'images/profile9.png',
		name: 'Ma',
		Email: 'Ma@mail.com'
	},
	{
		imgUrl: 'images/profile10.jpg',
		name: 'Sharry',
		Email: 'Sharry@mail.com'
	},
	{
		imgUrl: 'images/profile11.jpg',
		name: 'Wang',
		Email: 'Wang@mail.com'
	},
	{
		imgUrl: 'images/profile12.jpg',
		name: 'Divid',
		Email: 'Divid@mail.com'
	},
	{
		imgUrl: 'images/profile13.jpg',
		name: 'Kate',
		Email: 'Kate@mail.com'
	},
	{
		imgUrl: 'images/profile14.jpg',
		name: 'Laura',
		Email: 'Luara@mail.com'
	},
	{
		imgUrl: 'images/profile15.jpg',
		name: 'Zhang',
		Email: 'Zhang@mail.com'
	},
	{
		imgUrl: 'images/profile16.jpg',
		name: 'Vivi',
		Email: 'Vivi@mail.com'
	},
	{
		imgUrl: 'images/profile17.jpg',
		name: 'Huang',
		Email: 'Huang@mail.com'
	},
	{
		imgUrl: 'images/profile18.jpg',
		name: 'sam',
		Email: 'sam@mail.com'
	},


];

//getInitial函数用来获取朋友昵称（数组中每一项的name参数）的开头字母，并转换成大写
function getInitial(string) {
	var names = string.split(' '),
		initials = names[0].substring(0, 1).toUpperCase();
	return initials;
};

//showFriend函数用来显示通讯录的好友list，把js中的数据打印到html上
//两个参数分别是friendList决定了打印位置，item决定了当前打印数组中的哪一项
function showFriend(friendList, item) {
	friendList.append(
		'<li data-value="' + item.name + '" data-tags = "' + item.name +
		'" class="mui-table-view-cell mui-indexed-list-item">' +
		'<a href="javascript:;" id="' + item.Email + '"title="' + item.name + '" class="friend-tochat">' +
		'<img class="mui-media-object mui-pull-left" src="' + item.imgUrl + '" >' +
		'<div class="mui-media-body">' +
		'<span class="friend-name">' + item.name + '</span>' +
		'</div>' +
		'</a>' +
		'</li>'
	)
};


//下面开始正式传参到通讯录页面，做法是写一个for循环把数组传入通讯录：
//for循环中每次都执行：
//1.用getInitial函数获取数组name的开头字母，存为friendGroup
//2.判断friendGroup属于26个字母哪个case,每个case都指定响应的位置并且调用showFriend函数显示出来。注意每次都要记得把该item以及打印位置传到函数内。
for (var i = 1; i <= friendInfo.length; i++) {
	var item = friendInfo[i - 1];
	var friendGroup = getInitial(item.name);

	switch (friendGroup) {
		case "A":
			var friendList = $('#A');
			showFriend(friendList, item);
			break;
		case "B":
			var friendList = $('#B');
			showFriend(friendList, item);
			break;
		case "C":
			var friendList = $('#C');
			showFriend(friendList, item);
			break;
		case "D":
			var friendList = $('#D');
			showFriend(friendList, item);
			break;
		case "E":
			var friendList = $('#E');
			showFriend(friendList, item);
			break;
		case "F":
			var friendList = $('#F');
			showFriend(friendList, item);
			break;
		case "G":
			var friendList = $('#G');
			showFriend(friendList, item);
			break;
		case "H":
			var friendList = $('#H');
			showFriend(friendList, item);
			break;
		case "I":
			var friendList = $('#I');
			showFriend(friendList, item);
			break;
		case "J":
			var friendList = $('#J');
			showFriend(friendList, item);
			break;
		case "K":
			var friendList = $('#K');
			showFriend(friendList, item);
			break;
		case "L":
			var friendList = $('#L');
			showFriend(friendList, item);
			break;
		case "M":
			var friendList = $('#M');
			showFriend(friendList, item);
			break;
		case "N":
			var friendList = $('#N');
			showFriend(friendList, item);
			break;
		case "O":
			var friendList = $('#O');
			showFriend(friendList, item);
			break;
		case "P":
			var friendList = $('#P');
			showFriend(friendList, item);
			break;
		case "Q":
			var friendList = $('#Q');
			showFriend(friendList, item);
			break;
		case "R":
			var friendList = $('#R');
			showFriend(friendList, item);
			break;
		case "S":
			var friendList = $('#S');
			showFriend(friendList, item);
			break;
		case "T":
			var friendList = $('#T');
			showFriend(friendList, item);
			break;
		case "U":
			var friendList = $('#U');
			showFriend(friendList, item);
			break;
		case "V":
			var friendList = $('#V');
			showFriend(friendList, item);
			break;
		case "W":
			var friendList = $('#W');
			showFriend(friendList, item);
			break;
		case "X":
			var friendList = $('#X');
			showFriend(friendList, item);
			break;
		case "Y":
			var friendList = $('#Y');
			showFriend(friendList, item);
			break;
		case "Z":
			var friendList = $('#Z');
			showFriend(friendList, item);
			break;
	};


};


//给添加新好友按钮注册tap事件，点击进入搜索添加好友页面
mui.plusReady(function() {
	mui("body").on("tap", "#add_new", function() {

		//打开页面
		mui.openWindow({
			url: "friends/addnew.html",
			id: "friends/addnew.html",

			show: {
				autoShow: true, //页面loaded事件发生后自动显示，默认为true
				aniShow: "slide-in-right", //页面显示动画，默认为”slide-in-right“；
				duration: 200 //页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
			},
			waiting: {
				autoShow: true, //自动显示等待框，默认为true
				title: 'Loading...' //等待对话框上显示的提示内容
			}
		});
	});

	//给通讯录list中的每个li都注册上轻击事件，点击进入namecard页面
	mui("body").on("tap", ".friend-tochat", function() {
		//获取lists中的好友名称
		var title = this.getAttribute("title"); //get到被点击的a标签的title值，也就是 好友名称
		var friendProfileImg = this.childNodes[0].src; //get到被点击的标签的img子元素的src的值。以便于后面singlechat页面替换
		//注意上面的childNode[0]，如果a标签和img标签的换行发生变化有可能失效。
		var friendEmail= this.getAttribute("id"); //get到被点击的好友的Email，存为friendEmail变量。
		
		//打开namecard页面
		mui.openWindow({
			url: "namecard.html",
			id: "namecard.html",

			extras: {
				//自定义扩展参数，可以用来处理页面间传值,比如把前面获取的好友名称传到聊天界面的title
				name: title,
				friendimg: friendProfileImg
			},
			show: {
				autoShow: true, //页面loaded事件发生后自动显示，默认为true
				aniShow: "slide-in-right", //页面显示动画，默认为”slide-in-right“；
				duration: 200 //页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
			},
			waiting: {
				autoShow: true, //自动显示等待框，默认为true
				title: 'Loading...' //等待对话框上显示的提示内容
			}
		});
	});
});

//索引用js
mui.ready(function() {
	// var header = document.querySelector('header.mui-bar');
	var list = document.getElementById('list');
	//calc hieght
	// list.style.height = (document.body.offsetHeight - header.offsetHeight) + 'px';
	list.style.height = (document.body.offsetHeight) + 'px';
	//create
	window.indexedList = new mui.IndexedList(list);
});
