var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) {
    return document.getElementById(id);
};


// addScore Function
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

// displayResults Function
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
    
    $("results_header").innerHTML = ("Results");
    $("results_text").innerHTML = ("\nAverage score is " + avg + "<br>" + "\nHigh score = " + name + " with a score of " + high);
};

// displayScores Function
  var  displayScores = function() {

    $("scores_header").innerHTML = ("Scores");
    var str = "<table>";
    str += "<tr align='left'><th>Name</th><th>Score</th></tr>";
    
    for (var i = 0; i < scores.length; i++) {
        str += "<tr><td>" + names[i] + "</td><td>" + scores[i] + "</td></tr>";
    }
    
    str += "</table>";
    $("scores_table").innerHTML = str;
    
}

window.onload = function () {
    $("add").onclick = addScore;
    $("display_results").onclick = displayResults;
    $("display_scores").onclick = displayScores;
};