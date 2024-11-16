
const dismiss=document.getElementById("dismiss");
const subscribe=document.getElementById("subscribe");
const submit=document.getElementById("sub");
const update=document.getElementById("update");
function validateForm() {
    let x=document.forms["form"]["email"].value;
    if(x=="ash#loremcompany.com"){
        alert("Invalid email address");
        return false;
    }else{
        if(update.style.display=="none"){
            subscribe.style.display="block";
            update.style.display="none";
        }
    }
}