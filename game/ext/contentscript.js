var results = document.querySelectorAll(".search-results .result");

var div = document.createElement("div");
div.id = "kittycat";
div.innerHTML = 
	'<p>Message to:</p><span class="user"></span><textarea>Hello there, we are reaching out to contact you about this position</textarea>'+
	'<button class="send">Send</button> <button class="next">Next</button>';
div.style['width'] = "600px";
div.style['height'] = "300px";
div.style['position'] = "absolute";
div.style['top'] = "100px";
div.style['left'] = "200px";
div.style['background-color'] = "white";
div.style['border'] = "2px solid #113";
div.style['opacity'] = "0.9";
document.getElementsByTagName("body")[0].appendChild(div);
//

var nameSpan = div.querySelector(".user");
var sendBtn = div.querySelector(".send");
var i = 0;
var connectBtn;
var name;
var title;
sendBtn.onclick = function() {
	i++;
	if(title) {
		var href = title.href;
		console.log("Clicking "+href);
		title.click();
	}
	//console.log("Loading next: "+i+" ", results[i]);

	next();
};

var connect = function() {
	console.log("Connecting with name: "+name);
}

var next = function() {
	//get name
	title = results[i].querySelector(".title");
	name = title.innerHTML;
	// connectBtn = results[i].querySelector(".primary-action-button");
	// connectBtn.onclick = function(e) {
	// 	e.preventDefault();
	// 	connect();
	// };
	nameSpan.innerHTML = name;
};
next();

