document.addEventListener('DOMContentLoaded', function() {

    const  UpdateForm = document.querySelectorAll('.update.hide');
    const  SuccessForm = document.querySelectorAll('.subscribe');
    const SubscribeButton = document.getElementById('sub');
    const DismissButton = document.getElementById('dismiss');
    const InputField = document.getElementById('email');

    InputField.addEventListener('input', function(value){

        const EmailInput = this.value;
        const EmailArray = EmailInput.split(/[@]/);
        console.log(EmailArray);
        console.log(EmailArray.length);

    })


    SubscribeButton.addEventListener('click', (e)=>{
        e.preventDefault();
        function toggleUpdateForm (){
            UpdateForm.forEach(form => form.style.display = 'none');
        }

        if(UpdateForm && EmailArray.length!= 0){
            toggleUpdateForm();

            SuccessForm[0].style.display = 'block';
            console.log(UpdateForm)
        }
        
    });
  
    DismissButton.addEventListener('click',  (e)=>{
     e.preventDefault();
     function showUpdateForm(){
        UpdateForm.forEach(form => form.style.display = 'block');
     }
     showUpdateForm();
     SuccessForm[0].style.display = 'none';

    })
});