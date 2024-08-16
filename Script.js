//code is made by joyel thomas
function buttonclick(val)
{
   
    document.getElementById("screen").value+=val
}
function clears(){
    document.getElementById("screen").value=""
}
function equalClick(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
}
