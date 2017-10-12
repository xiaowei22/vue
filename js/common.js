let $ = {
	getStyle: function(obj, attr) { //获取非行间样式，obj是对象，attr是值
		if(obj.currentStyle) { //针对ie获取非行间样式
			return obj.currentStyle[attr];
		} else {
			return getComputedStyle(obj, false)[attr] //针对非IE
		}
	},
	Xuan: function(obj, obj1) {
		for(let i = 0; i < obj.length; i++) {
			obj[i].index = i;
			obj[i].onclick = function() {
				for(let i = 0; i < obj1.length; i++) {
					obj[i].className = "";
					obj1[i].style.display = "none"
				}
				obj1[i].style.display = "block";
				obj[i].className = "active"
			}
		}
	},
	random: function(max, min) {
		return parseInt(Math.random() * (max - min + 1) + min)
	},
	addEvent: function(obj, evt, fn) { //事件绑定，将会让一个事件发生多个  
		if(obj.attachEvent) {
			obj.attachEvent('on' + evt, fn); //attachEvent方法只支持IE浏览器,执行顺序是，后绑定的先执行．  
		} else {
			//功能相同的指令是addEventListener,该指令支持FF等浏览器，并且是W3C标准  
			obj.addEventListener(evt, fn, false); //执行顺序是，先绑定的先执行  
		}
	},
	/** url转json
	 * */
	url_: function(obj) {
		let objs = {}
		let arr = obj.split('&')
		arra = [];
		for(let i = 0; i < arr.length; i++) {
			let arrs = arr[i].split('=');
			let shu = String(arrs.splice(0, 1))
			let zhi = Number(arrs.splice(0, 1))
			objs["" + shu + ""] = zhi
		}
		return objs
	},
	//domreaddy
	Domready: function(fn) {
		//判断如果支持addEc=ventListener（非IE--IE支持的是attachEvent）则绑定DOMContentLoaded事件
		if(document.addEventListener) {
			document.addEventListener("DOMContentLoaded", fn, false);
		} else {
			IEContenLoaded(fn);
		}

		//IE下模拟DOMContentLoaded
		function IEContenLoaded(fn) {
			var done = false;
			//只执行一次用户的回调函数init
			var init = function() {
					if(!done) {
						done = true;
						fn();
					}
				}
				(function() {
					try {
						//DOM树未创建完之前调用doScroll会抛出错误
						window.document.documentElement.doScroll("left");
					} catch(error) {
						//延迟再执行，arguments.callee调用自己
						setTimeout(argument.callee, 1);
						return;
					}
					//没有错误表示DOM树创建完毕，执行用户回调
					init();
				})();

			//监听document的加载状态
			window.document.onreadystatechange = function() {
				//如果用户是在DOMReady之后调用的函数立即执行用户回调
				if(window.document.readyState == 'complete') {
					window.document.onreadystatechange = null;
					init();
				}
			}
		}
	},
	//补零函数
	 bu:function(num, n) {
    return (Array(n).join(0) + num).slice(-n);
	},
	//urL - json
	zhuan: function(obj) {
    arr = [];
    for(let i in obj) {
        a = i + '=' + obj[i]
        arr.push(a)
    }
    str = arr.join('&')
    return str
},
	//  json-*urL
    zhuan1:function(obj) {
    arr = [];
    for(let i in obj) {
        a = i + '=' + obj[i]
        arr.push(a)
    }
    str = arr.join('&')
    return str
}
}