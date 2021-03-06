const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validUser = false;
let validEmail = false;
let validPhone = false;
$('#failure').hide();
$('#success').hide();
 
//console.log(name,email,phone);
name.addEventListener(('blur'),function(){
    console.log("name is blurred");
    let  regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}/; 
    let str = name.value;
    console.log(regex,str);
    if(regex.test(str)){
       console.log(`Your name is valid`);
       name.classList.remove('is-invalid');
       validUser = true;
    }
    else{
        console.log(`Your name is not  valid`);
        name.classList.add('is-invalid');
         validUser = false;
    
    }
})

email.addEventListener(('blur'),function(){
    
    let  regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.9a-zA-Z]+)\.([a-zA-Z]){2,7}$/; 
    let str = email.value;
    console.log(regex,str);
    if(regex.test(str)){
        console.log(`Your email is valid`);
    email.classList.remove('is-invalid');
    validEmail = true;
 }
 else{
     console.log(`Your email is not  valid`);
     email.classList.add('is-invalid');
     validEmail = false;
 }

})
phone.addEventListener(('blur'),function(){

    let  regex = /^([0-9]){10}$/; 
    let str = phone.value;
    console.log(regex,str);
    if(regex.test(str)){
        console.log(`Your phone is valid`);
    phone.classList.remove('is-invalid');
    validPhone = true;
 }
 else{
     console.log(`Your phone is not  valid`);
     phone.classList.add('is-invalid');
     validPhone = false;
 }

})
let submit =document.getElementById('submit');
submit.addEventListener('click',function(e){
    e.preventDefault();
    console.log("you clicked on submit");
    console.log(validUser,validEmail,validPhone);
    if(validUser && validPhone && validEmail){
        let failure = document.getElementById('failure');
        console.log('You have entered the valid credentials');
        let success = document.getElementById('success');
        success.classList.add('show');
        //$('#failure').alert('close');
        $('#failure').hide();
        $('#success').show();
    
}
    else{
        console.log('Wrong credentials');
    let failure = document.getElementById('failure');
    //failure.classList.add('show');
    //$('success').alert('hide');
    $('#success').hide();
    $('#failure').show();

}
})

