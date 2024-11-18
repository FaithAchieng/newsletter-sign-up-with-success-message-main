const email=document.getElementById('email');
const form=document.getElementById('form');
const error=document.getElementById('error');
const submit=document.getElementById('submit');
const updates=document.getElementById('updates');
const subscribe=document.getElementById('subscribe');
const dismiss=document.getElementById('dismiss');
submit.addEventListener('click',(e) => {
    let messages=[];

    if(email.value==="ash#loremcompany.com" || email.value===""){
        messages.push('Enter valid email address');
        email.style.backgroundColor='red';
    }
    if(messages.length>0){
        e.preventDefault();
        error.innerText=messages.join(' ,');
    }
    if(messages.length==0){
        e.preventDefault();
        updates.style.display="none";
        subscribe.style.display="block";
    }
});
dismiss.addEventListener("click", (e)=>{
        e.preventDefault();
        updates.style.display="block";
        subscribe.style.display="none";
        error.innerText='';
    
});



// document.addEventListener('DOMContentLoaded', function() {

//     const  UpdateForm = document.querySelectorAll('.update.hide');
//     const  SuccessForm = document.querySelectorAll('.subscribe');
//     const SubscribeButton = document.getElementById('sub');
//     const DismissButton = document.getElementById('dismiss');
//     const InputField = document.getElementById('email');

//     InputField.addEventListener('input', function(value){

//         const EmailInput = this.value;
//         const EmailArray = EmailInput.split(/[@]/);
//         console.log(EmailArray);
//         console.log(EmailArray.length);

//     })


//     SubscribeButton.addEventListener('click', (e)=>{
//         e.preventDefault();
//         function toggleUpdateForm (){
//             UpdateForm.forEach(form => form.style.display = 'none');
//         }

//         if(UpdateForm && EmailArray.length!= 0){
//             toggleUpdateForm();

//             SuccessForm[0].style.display = 'block';
//             console.log(UpdateForm)
//         }
        
//     });
  
//     DismissButton.addEventListener('click',  (e)=>{
//      e.preventDefault();
//      function showUpdateForm(){
//         UpdateForm.forEach(form => form.style.display = 'block');
//      }
//      showUpdateForm();
//      SuccessForm[0].style.display = 'none';

//     })
// });