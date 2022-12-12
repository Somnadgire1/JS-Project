// -------Text Content change-first-----
function getselectedvalue(){

    var selectedvaluefrm = document.getElementById("from-input").value;

    const heading =document.querySelector(".heading");


if(selectedvaluefrm==="Octal"){
      heading.textContent="Octal";
}
else if(selectedvaluefrm==="Decimal"){
    heading.textContent="Decimal";
}
else if(selectedvaluefrm==="Hexadecimal"){
    heading.textContent="Hexadecimal";
}
else{
    heading.textContent="Binary";
}
}
//  ------Text Content change-second------
function toselectedvalue(){

    var selectedvalueto = document.getElementById("to-input").value;

    const sheading =document.querySelector(".sheading");

if(selectedvalueto==="Octal"){
    sheading.textContent="Octal";
}
else if(selectedvalueto==="Decimal"){
  sheading.textContent="Decimal";
}   
else if(selectedvalueto==="Hexadecimal"){
  sheading.textContent="Hexadecimal";
}
else{
  sheading.textContent="Binary";
}
}

// --------convert------
    const submit=document.querySelector(".submit");
    submit.addEventListener("click", donextstep);

    function donextstep(){
    var selectedvaluefrm = document.getElementById("from-input").value;
    var selectedvalueto = document.getElementById("to-input").value;

    if(selectedvaluefrm==="Decimal" && selectedvalueto==="Binary"){
    const input =Number(document.getElementById("number").value);
    var bin = input.toString(2);
    document.getElementById("output").value=bin;
    }

    else if(selectedvaluefrm==="Decimal" && selectedvalueto==="Octal"){
    const input =Number(document.getElementById("number").value);
    var bin = input.toString(8);
    document.getElementById("output").value=bin;
    }
    else if(selectedvaluefrm==="Decimal" && selectedvalueto==="Hexadecimal"){
    const input =Number(document.getElementById("number").value);
    var bin = input.toString(16);
    document.getElementById("output").value=bin;
    }
    else if(selectedvaluefrm==="Decimal" && selectedvalueto==="Decimal"){
    const input =Number(document.getElementById("number").value);
    var bin = input;
    document.getElementById("output").value=bin;
    }
    else if(selectedvaluefrm==="Binary" && selectedvalueto==="Binary"){
        const input =Number(document.getElementById("number").value);
        var bin = input;
        document.getElementById("output").value=bin;
        }
    else if(selectedvaluefrm==="Binary" && selectedvalueto==="Octal"){
        const input =Number(document.getElementById("number").value);
        var bin = parseInt(input, 2).toString(8);
        document.getElementById("output").value=bin;    
        }
    else if(selectedvaluefrm==="Binary" && selectedvalueto==="Decimal"){
        const input =Number(document.getElementById("number").value);
        var bin =parseInt(input, 2);
        document.getElementById("output").value=bin;    
        }
    else if(selectedvaluefrm==="Binary" && selectedvalueto==="Hexadecimal"){
        const input =Number(document.getElementById("number").value);
        var bin =parseInt(input, 2).toString(16);
        document.getElementById("output").value=bin;    
        }
        else if(selectedvaluefrm==="Octal" && selectedvalueto==="Octal"){
        const input =Number(document.getElementById("number").value);
        var bin =input;
        document.getElementById("output").value=bin;    
        }
        else if(selectedvaluefrm==="Octal" && selectedvalueto==="Decimal"){
        const input =Number(document.getElementById("number").value);
        var bin =(parseInt(input,8));
        document.getElementById("output").value=bin;    
        }   
        else if(selectedvaluefrm==="Octal" && selectedvalueto==="Binary"){
            const input =Number(document.getElementById("number").value);
            var bin =(parseInt(input,8));
            const inputt =bin;
            var binn = inputt.toString(2);
        document.getElementById("output").value=binn;    
        }   
        else if(selectedvaluefrm==="Octal" && selectedvalueto==="Hexadecimal"){
            const input =Number(document.getElementById("number").value);
            var bin =(parseInt(input,8));
            const inputt =bin
            var binn = inputt.toString(16);
        document.getElementById("output").value=binn;    
        }   
        else if(selectedvaluefrm==="Hexadecimal" && selectedvalueto==="Hexadecimal"){
            const input =Number(document.getElementById("number").value);
            var bin =input;
            document.getElementById("output").value=bin;    
            }  
        else if(selectedvaluefrm==="Hexadecimal" && selectedvalueto==="Octal"){
            const input =document.getElementById("number").value;
            var din =parseInt(input,16);
            var bin = din.toString(8);
            document.getElementById("output").value=bin;  
            }  
        else if(selectedvaluefrm==="Hexadecimal" && selectedvalueto==="Decimal"){
            const input =document.getElementById("number").value;
            var din =parseInt(input,16);
            document.getElementById("output").value=din;  
            } 
        else if(selectedvaluefrm==="Hexadecimal" && selectedvalueto==="binary"){
            const input =document.getElementById("number").value;
            var din =parseInt(input,16);
            var bin = din.toString(2);
            document.getElementById("output").value=bin;  
             }  else {
                error.style.display = "inherit";
                error.innerText = "Invalid " + initialBase + " Number";
                to.value = "";
            }
        }   

// ----------reset---------
const reset=document.querySelector(".reset");
reset.addEventListener("click", clearall);

function clearall(){
    const input = document.getElementById("number");
    const output = document.getElementById("output");
   input.value = '';
   output.value = '';

}

// --------Swapping------
const swap=document.querySelector(".swap");
swap.addEventListener("click",swapfunc);

function swapfunc(){
    var selectedvaluefrm = document.getElementById("from-input").value;
    var selectedvalueto = document.getElementById("to-input").value;

var fse=document.getElementById("from-input");
var sse=document.getElementById("to-input");

fse.value=selectedvalueto;
sse.value=selectedvaluefrm;

getselectedvalue();
toselectedvalue();

}