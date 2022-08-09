const form=document.getElementById('form');
const name1=document.getElementById('name1');
const email=document.getElementById('email');
const text=document.getElementById('text-area');

let flag;
let flag1;
let flag2;

form.addEventListener('submit',(e) => {
    

    checkInputs();
    if(flag1==true&& flag==true && flag2==true){
        return true;
       }
       else{
        e.preventDefault();
         }
    
   
    

});




function checkInputs(){
    // GETTING VALUES FROM THE INPUTS


    
   const emailValue= email.value.trim();
    const selectValue=name1.value.trim();
    const textValue=text.value;



    if(emailValue==''){
        //show error
        // add error class
        setErrorFor(email);
        
        flag=false;

    }
    else if(!isEmail(emailValue)){
        setErrorFor(email);
        flag=false;


    }
    else{

        // show success
        //add success class

        setSuccessFor(email);
        flag=true;
    }

    
    if(selectValue==''){
       
        setErrorFor(name1);
        flag1=false;


    }
    else{

        setSuccessFor(name1);
        flag1=true;
      
    }


  if(textValue==''){
        setErrorFor(text);
        flag2=false;
    }
    else{
        setSuccessFor(text);
        flag2=true;
    }
  

}


function setErrorFor(input){

    

input.className='form-control red';


}




function setSuccessFor(input){

    input.className='form-control green';
}



function isEmail(email){
    return  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);


}
