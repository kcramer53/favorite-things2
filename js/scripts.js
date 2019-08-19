// back end

// front end
$(document).ready(function() {
  $("#some-form").submit(function(event) {
    event.preventDefault();
    var userInput1 = $("#userInput1").val();
    var userInput2 = $("#userInput2").val();
    var userInput3 = $("#userInput3").val();
    var userInput4 = $("#userInput4").val();
    var favoriteThings = function(item1, item2, item3, item4) {
      return "Your favorite stuff is " + item1 + ", " + item2 + ", " + item3 + ", " + item4 + ".";
    }
    var userOutput = favoriteThings (userInput1, userInput2, userInput3, userInput4);
    console.log(userOutput);

  });
});
