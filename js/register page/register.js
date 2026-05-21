function register(){

    let password =
    document.getElementById("pass").value;

    let confirm =
    document.getElementById("cpass").value;

    if(password == confirm){

        document.getElementById("result").innerHTML =
        "Registration Successful";

    }

    else{

        document.getElementById("result").innerHTML =
        "Password Does Not Match";

    }

}