function testchoice(form){
    var choice = form.username.value;
    if (choice = "admin"){
        window.location = "admin.html"
    }
    else{
        window.location = "user.html"
    }
}