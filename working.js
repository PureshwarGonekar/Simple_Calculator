var operands = document.querySelectorAll('.operand');
var operators = document.querySelectorAll('.operator');
var input_var = document.getElementById('display');

operands.forEach(element => {
    element.addEventListener('click',function(){
        console.log('operand key is pressed',element);
        var prevalue= input_var.value;
        input_var.setAttribute("value", prevalue+element.innerText); 
    });
    
});
operators.forEach(element => {
    element.addEventListener('click',function(){
        console.log('operator key is pressed',element);
        var prevalue= input_var.value;
        input_var.setAttribute("value", prevalue+element.innerText); 
    });
    
});

//Calculating the ans 
var ans = document.getElementById('equalBtn');
function f_ans(){
    var prevalue= input_var.value;
    console.log(prevalue)
    var finalans= eval(prevalue);
    if(typeof finalans === 'undefined' || finalans === null) {
        input_var.setAttribute("value", "Error");
    } else{
        input_var.setAttribute("value", finalans);
    }
    // this.stopImmediatePropagation();
    /* Here is a bug when key event happening after the mouse event happened, the enter(equal) generats ans but also press the key where mouse pointer previously positioned */
}
ans.addEventListener('click',f_ans);

// All clear button

var ac = document.getElementById('Allclear');
function f_clearall(){
    input_var.setAttribute("value",''); 
}
ac.addEventListener('click',f_clearall);

// Delete button
var del = document.getElementById('Delete');
function f_del(){
    var prevalue = input_var.value.slice(0,-1);
    input_var.setAttribute("value",prevalue); 
}
del.addEventListener('click',f_del);



// -------------------code keyboard calculator-----------------------------
document.addEventListener('keydown', function (keyboard){
    var code=keyboard.keyCode;
    console.log(code);
    if (code >= 48 && code <= 57) { // number bar in keyboard
        var text = String.fromCharCode(code);
        var prevalue= input_var.value;
        input_var.setAttribute("value", prevalue+text);
    }
    else if(code >=96 && code <=105){ // for numpad no in keyboard
        newcode=code-48; 
        var text = String.fromCharCode(newcode);
        var prevalue= input_var.value;
        input_var.setAttribute("value", prevalue+text);
    }
    else if(code >=106 && code <=111){ // numpad operators * + - . /
        newcode=code-64; 
        var text = String.fromCharCode(newcode);
        var prevalue= input_var.value;
        input_var.setAttribute("value", prevalue+text);
    }
    else if(code==46){ // delete --> clear all
        f_clearall();
    }
    else if(code==8){  //backspace --> delete
        f_del();
    }
    else if(code==13){ //enter --> ans
        f_ans();
        
    }
});

