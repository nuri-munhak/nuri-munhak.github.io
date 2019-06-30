function simplify(string){
  var arr = string.split("");
  var targets = [0, arr.length-2];
  targets.forEach(function(target){
    arr.splice(target, 1);
  });
  return arr.join('')
}
$().ready(function(){
	$.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?")
	.done(update1)
	.fail(handleErr);
	function update1(response) {
    $('#text').html(simplify(JSON.stringify(response.quoteText)));
	  $('#author').html('- '+simplify(JSON.stringify(response.quoteAuthor)));
	}
	function handleErr(jqxhr, textStatus, err) {
	  console.log("Request Failed: " + textStatus + ", " + err);
	}
});
