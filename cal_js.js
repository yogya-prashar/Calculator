var act = document.getElementsByTagName("button");
var opn1 = 0;
var opr = null;
for (var i = 0;i < act.length; i++) {
    
    act[i].addEventListener('click', function(){
        var j = this.getAttribute('data-act');
        if(ans.innerText == "Error"){
            opn1 = 0;
            ans.innerText = '0';
        }
        
        if(j == "ac"){
            ans.innerText = '0';
            opn1 = 0;
            opr = null;
        }
        else if(j == "*" || j == "/" || j == "%" || j == "+" || j == "-"){
            if(opr == null){
                opn1 = ans.innerText;
            }
            else opn1 = eval(opn1 + opr + ans.innerText);
            ans.innerText = "";
            opr = j;
        }
        else if(j == "up"){
            ans.innerText = eval(-ans.innerText);
        }
        else if(j == "="){
            opn1 = eval(opn1 + opr + ans.innerText);
            if(!isFinite(opn1))
            ans.innerText = "Error";
            else if(opr != null){
            ans.innerText = opn1;
            }
            opn1 = opr = null;
        }
        else if(j == "."){
            ans.innerText += j;
        }
        else{
            ans.innerText = eval(ans.innerText + j);
        }
    });
        

}

