function auth(){
    var email=document.getElementById('email').value;
    var password=document.getElementById('password').value;
    if(email=='dysaka@1gmail.com' && password=='1234'){
        window.location.assign('random.html');
        alert("login successfully");
    }
    else{
        alert("invalid details");
        return;
    }
}