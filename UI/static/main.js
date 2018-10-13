function testchoice(form){
    var choice = form.username.value;
    if (choice == "admin"){
        window.location = "admin.html"
    }
    else if (choice == "user"){
        window.location = "user.html"
    }
    else{
        alert('unknown user. please try again',1200)
        window.location = "index.html"
    }
}