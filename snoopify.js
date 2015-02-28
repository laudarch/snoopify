var snoop;
chrome.storage.sync.get("snoop", function(data) {
    snoop = data.snoop;
});

var snoop_square = "http://i.imgur.com/HVex5Ec.gif";
var snoop_slim = "http://i.imgur.com/jcIK7fy.gif";

setTimeout(function(){
    if (snoop == 1) {
        snoopify();
    }
}, 3420);

function snoopify () {
        var images = document.getElementsByTagName("img");
        for (var i = 0; i < images.length; ++i) {
            images[i].src = snoop_square;
        }
}