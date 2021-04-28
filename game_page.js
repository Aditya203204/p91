player_1=localStorage.getItem("player1");
player_2=localStorage.getItem("player2");
player1Score=0;
player2Score=0;
document.getElementById("player1_name").innerHTML=player_1+" :";
document.getElementById("player2_name").innerHTML=player_2+" :";
document.getElementById("player1_score").innerHTML=player1Score;
document.getElementById("player2_score").innerHTML=player2Score;
document.getElementById("player_question").innerHTML=player_1;
document.getElementById("player_answer").innerHTML=player_2;
function send()
{
number1=document.getElementById("number1").value;
number2=document.getElementById("number2").value;
actual_answer=phaseInt(number1)*(number2);

question_number="<h4 id='word_display'>Q. "+number1+"X"+number2+"</h4>";
inputBox="<br>Answer: <input type='text' id='input_check_box'>";
check_button="<br><br><button class='btn bin-info' onclick='check()'>Check</button>";
row=question_number+inputBox+check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("number").value="";
}