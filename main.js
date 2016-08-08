$(document).ready(function(){

  var input = [];

  var buttonValue = "";

  $('button').click(function(){
    var keyNum = $('#calcInput').val();
    if (keyNum === "+" || keyNum === '-' || keyNum === '*' || keyNum === '/') {
      pushArray();
    }
    if ($(this).attr("value") === "AC"){
      $('#calcInput').val("");
      input = [];
      buttonValue = "";
    } else if ($(this).attr("value") === keyNum) {
      $('#calcInput').val($(this).attr("value"));  
    } else if ($(this).attr("value") === "+" || $(this).attr("value") === '-' || $(this).attr("value") === '*' || $(this).attr("value") === '/') {
      pushArray();
      $('#calcInput').val($(this).attr("value"));
      buttonValue = "";
    } else if ($(this).attr("value") === "=") {
      pushArray();
      total();
    } else {
      buttonValue += $(this).attr("value");
      $('#calcInput').val(buttonValue);
    }
  });

  $('#calcInput').keypress(function keyPressed(e) {
    var keyNum = $('#calcInput').val();
    if (keyNum === "+" || keyNum === '-' || keyNum === '*' || keyNum === '/') {
      pushArray();
    } else if (e.charCode == "42") {
      pushArray();
    } else if (e.charCode == "43") {
      pushArray();
    } else if (e.charCode == "45") {
      pushArray();
    } else if (e.charCode == "47") {
      pushArray();
    } else if (e.charCode == "13") {
      pushArray();
      total();
    }
  });



  function total () {
    var expression = input.join('');
    input = [];
    var total = math.eval(expression);
    $('#calcInput').val(total);
  }

  function pushArray(){
    input.push($('#calcInput').val());
    $('#calcInput').val('');
  }

});
