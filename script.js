var my_move;
var computer_move;
var result;
var mecount=0;
var compcount=0;
var lose_audio = new Audio("Audio/lose.mp3");
var click_audio = new Audio("Audio/click.mpeg");
var draw_audio = new Audio("Audio/Draw.mpeg");
var win_audio = new Audio("Audio/win.m4a");
var a = ["stone", "paper", "scissor"];
function set_stone() {
    my_move = "stone";
    random();
    document.getElementById("stone").src="Images/stonetexton.png";
    document.getElementById("paper").src="Images/papertext.png";
    document.getElementById("scissor").src="Images/scissortext.png";
    click_audio.play();
}
function set_paper() {
    my_move = "paper";
    random();
    document.getElementById("paper").src="Images/papertexton.png";
    document.getElementById("stone").src="Images/stonetext.png";
    document.getElementById("scissor").src="Images/scissortext.png";
    click_audio.play();
}
function set_scissor() {
    my_move = "scissor";
    random();
    document.getElementById("scissor").src="Images/scissortexton.png";
    document.getElementById("stone").src="Images/stonetext.png";
    document.getElementById("paper").src="Images/papertext.png";
    click_audio.play();
}
function random() {
    
    var b = Math.floor((Math.random() * 3));
    computer_move = a[b];
    decision();
    printer();
}

function printer()
{
    if(computer_move == "stone")
    {
        document.getElementById("cmove").src="Images/Stone.png";
    }

    else if(computer_move == "paper")
    {
        document.getElementById("cmove").src="Images/Paper.png";
    }

    else
    {
        document.getElementById("cmove").src="Images/Scissor.png";
    }
}
function decision() {
    if (my_move == computer_move)
        result = "draw";
    else 
    {
        if(my_move == "stone")
        {
            if(computer_move == "paper")
            {
                result = "lost";
            }
            else
            {
                result = "win";
            }
        }
        else if(my_move == "paper")
        {
            if(computer_move == "scissor")
            {
                result = "lost";
            }
            else
            {
                result = "win";
            }
        }
        else 
        {
            if(computer_move == "stone")
            {
                result = "lost";
            }
            else
            {
                result = "win";
            }
        }
    }
    if(result=="lost")
    {
        compcount++;
        document.getElementById("my").innerHTML = mecount;
        document.getElementById("comp").innerHTML = compcount;
        document.getElementById("result").src="Images/You Lose.png";
        lose_audio.play();
    }
    else if(result=="win")
    {
        mecount++;
        document.getElementById("my").innerHTML = mecount;
        document.getElementById("comp").innerHTML = compcount;
        document.getElementById("result").src="Images/You Win.png";
        win_audio.play();

    }
    else
    {
        document.getElementById("result").src="Images/Draw.png";
        draw_audio.play();
    }
}
function stone_hover()
{
    document.getElementById("a").src="Images/Stone on hover.png";
}
function stone_back()
{
    document.getElementById("a").src="Images/Stone.png";
}
function paper_hover()
{
    document.getElementById("b").src="Images/Paper on hover.png";
}
function paper_back()
{
    document.getElementById("b").src="Images/Paper.png";
}
function scissor_hover()
{
    document.getElementById("c").src="Images/Scissor on hover.png";
}
function scissor_back()
{
    document.getElementById("c").src="Images/Scissor.png";
}