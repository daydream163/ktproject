// gestione degli eventi generati dal webSocket
//
// event da webSocket
$("body").on("ws-wakeUp", function (e, data) {
  $("img.face[resId=" + data.resId + "]").removeClass("away").addClass("active")

}).on("ws-sleep", function (e, data) {
  $("img.face[resId=" + data.resId + "]").removeClass("active").addClass("away")

}).on("ws-disconnect", function (e, data) {
  $("img.face[resId=" + data.person.id + "]").removeClass("active").removeClass("away");

}).on("ws-connect", function (e, data) {
  $("img.face[resId=" + data.person.id + "]").removeClass("away").addClass("active");
});

