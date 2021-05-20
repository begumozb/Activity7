var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var average;
var total = 0;
var highestScore = 0;
var name = "";

var $ = function (id) {
    return document.getElementById(id);
};

var addScore = function () {
    
    if($("name").value==""){
        alert("You must enter a name and a valid score");
        return false;
    }
    else
	    names.push($("name").value);
        if($("score").value==""){
            alert("You must enter a name and a valid score");
            return false;
        }
        else if(100<$("score").value || 0>$("score").value ){
            alert("You must enter a name and a valid score");
            return false;
        }
   else
	  scores.push($("score").value);
	   
};

var displayResults = function () {

    $("results");

    var sum = 0;
    var high=0;
    var name;
    var j;

    for( var i = 0; i < scores.length; i++ ){
        j = parseInt(scores[i],10);
        sum += j;
        if (j>high) high=j; 
        if(scores[i]==high) name=names[i];
    };
    var avg = sum/scores.length;
    
    //average = parseInt(sum/scores.length);
    $("results_header").innerHTML = ("Results");
    $("results_text").innerHTML = ("\nAverage score is " + avg + "<br>" + "\nHigh score = " + name + " with a score of " + high);
};


var displayScores = function() {

    $("scores_header").innerHTML = ("Scores");
    $("names").innerHTML = ("Names");
    $("scores").innerHTML = ("Scores");
    var table = $("scores_table");
    for(var i=0; i < names.length;i++) {
      var row = table.insertRow(table.rows.length);
      var cell = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell.innerHTML = names[i];
      cell2.innerHTML = scores[i];
    }
  };

window.onload = function () {
    $("add").onclick = addScore;
    $("display_results").onclick = displayResults;
    $("display_scores").onclick = displayScores;
};