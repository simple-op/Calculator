let equal=document.getElementById('equal');
let text=document.getElementById('text');
let keys=document.getElementsByClassName('key');
console.log(keys);



let value='';
let operand1=0;
let operand2=0;
let operater='+';


for ( let i=0;i<keys.length;i++) {
    
    // else if()
    
    keys[i].addEventListener('click',function(){
        if(keys[i].innerText==='AC'){
           operand1=0;
           operand2=0;
            value='';
            text.value=value;
   
       }
       else if(keys[i].innerText==='+'){
         operand1=text.value;   
        value='';
        text.value=value;
        operater='+';
        
            
       }
       else if(keys[i].innerText==='/'){
         operand1=text.value;   

        value='';
        text.value=value;
        operater='/';


       }
       else if(keys[i].innerText==='-'){
        if(text.value===''|text.value==='0'){
            value="-";
            text.value=value;
         }
         else{
         operand1=text.value;   
        operater='-';


        value='';
        text.value=value;}

       }
       else if(keys[i].innerText==='*'){
         operand1=text.value;   
        operater='*';


        value='';
        text.value=value;

       }
       else if(keys[i].innerText==='%'){
        operand1=text.value;   
       operater='%';
        


       value='';
       text.value=value;

      }
       else if(keys[i].innerText==='='){
           
        if(text.value===''){
           alert("put some value");
           
        }
        
        else{
         
         operand2=text.value;

         value='';
         text.value=eval(operand1+" "+operater+" "+operand2);
         operand1=0;
         operand2=0;
         
         
        }
         

       }


           else{ 
            value=value+keys[i].innerText;
            text.value=value;
            console.log(value);
           }
    })
    }





// phone power off





equal.addEventListener('click',function(){








})