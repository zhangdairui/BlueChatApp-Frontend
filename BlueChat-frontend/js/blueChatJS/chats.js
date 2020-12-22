mui.init(); //初始化页面

//为了给chats页面传入li，准备数组chatInfo：
var chatInfo = [{

		imgUrl: 'images/profile1.jpg',
		name: 'Alice',
		messageTime: '11:22',
		messageContent: 'Hi!',
		messageStatus: 1
	},
	{

		imgUrl: 'images/profile2.jpg',
		name: 'SY',
		messageTime: '10:50',
		messageContent: 'Why?',
		messageStatus: 1
	}, {

		imgUrl: 'images/profile3.jpg',
		name: 'Mary',
		messageTime: '10:13',
		messageContent: 'If there is too many words, the message here will look like',
		messageStatus: 1
	}, {

		imgUrl: 'images/profile4.jpg',
		name: 'Kim John',
		messageTime: '09:50',
		messageContent: 'Yse, I think so',
		messageStatus: 0
	}, {

		imgUrl: 'images/profile5.jpg',
		name: 'Mom',
		messageTime: '09:20',
		messageContent: 'Okay',
		messageStatus: 0
	}, {

		imgUrl: 'images/profile6.jpg',
		name: 'HUANG',
		messageTime: '08:01',
		messageContent: 'Hello',
		messageStatus: 0
	}, {

		imgUrl: 'images/profile7.jpg',
		name: 'HUANG1',
		messageTime: '08:01',
		messageContent: 'Just',
		messageStatus: 0
	}, {

		imgUrl: 'images/profile8.jpg',
		name: 'TEST',
		messageTime: '08:01',
		messageContent: 'Test',
		messageStatus: 0
	}, {

		imgUrl: 'images/profile9.png',
		name: 'TEST',
		messageTime: '08:01',
		messageContent: 'LONG',
		messageStatus: 0
	}, {

		imgUrl: 'images/profile10.jpg',
		name: 'TEST',
		messageTime: '08:01',
		messageContent: 'LIST',
		messageStatus: 0
	}, {

		imgUrl: 'images/profile11.jpg',
		name: 'TEST',
		messageTime: '08:01',
		messageContent: '111',
		messageStatus: 0
	}, {

		imgUrl: 'images/profile12.jpg',
		name: 'TEST',
		messageTime: '08:01',
		messageContent: '222',
		messageStatus: 0
	}, {

		imgUrl: 'images/profile13.jpg',
		name: 'TEST',
		messageTime: '08:01',
		messageContent: '333',
		messageStatus: 0
	},


];
//让上面的数组在chats.html中显示出来：

var chatList = $('#chatInfo'); //和chats.html中的ul的id连接，告诉js是向这个ul中动态传数据
for (var i = 1; i <= chatInfo.length; i++) {
	var item = chatInfo[i - 1];
	chatList.append(

		'<li class="mui-table-view-cell mui-media">' +
		'<a href="javascript:;" title="    ' + item.name + '   " class="friend-chat">  ' + //a标签
		'<img class="mui-media-object mui-pull-left" src="   ' + item.imgUrl + '  " >  ' + //头像
		'<div class="mui-media-body">' +
		'<span class="list-name">' + item.name + '</span>' + //好友昵称
		'<span class="list-message-time">' + item.messageTime + '</span>' + //消息的接收时间
		'<span class="mui-badge mui-badge-danger list-message-time" style="color: white; width: 12px;height: 12px;display:none;"></span>' +
		//↑新消息红点默认不显示，可以根据数组里的messageStatus变量的值来写条件，但是我试了很多都不成功，红点可能需要后端去做。
		'<p class="mui-ellipsis">' + item.messageContent + '</p>' + //消息的内容
		'</div>' +
		'</a>' +
		'</li>'
	)
	// if(item.messageStatus !== 0){
	// 	$('.mui-badge .mui-badge-danger .list-message-time').show();
	// }本来想通过这个if控制红点的显示和隐藏，结果失败。
};

//给聊天list中的每个li都注册上轻击事件，点击进入单独聊天页面
mui.plusReady(function() {
	mui(".mui-table-view-cell").on("tap", "a", function() {
		//获取lists中的好友名称
		var title = this.getAttribute("title"); //get到被点击的a标签的title值，也就是 好友名称
		var friendProfileImg = this.childNodes[1].src; //get到被点击的标签的img子元素的src的值。以便于后面singlechat页面替换
		//注意上面的childNode[1]，如果a标签和img标签的换行发生变化有可能失效。

		//打开聊天页面
		mui.openWindow({
			url: "chats/singlechat.html",
			id: "chats/singlechat.html",
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
