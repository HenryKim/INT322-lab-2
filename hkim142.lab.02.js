/*
Hyungi Kim
025 741 125
INT222B
*/
function User(username, registrationdate){
    var original_username = username;// ser variable origal_name as username

    this.get_original_username = function(){
        return original_username; // returns value of original_username
    };

    this.get_username = function
        return this.user_name;//returns value of user than reference to this obj
    };

    this.get_registration_date = function(){
        return this.registration_date;//returns value of registration date reference to this obj
    };

    this.set_username = function(username){
        this.user_name = username;// set current obj's user_name as given input
    };

    this.set_registration_date = function(registrationdate){
        if(typeof(registrationdate) === "string"){//if registrationdate type is string
            this.registration_date = new Date(registrationdate);//creates new obj
                console.log("String date coverted to obj's date");//leaves log on consoloe
        } else {
            this.registration_date = registrationdate;//other wise current obj's registration date is changed to given registration date
        }
    };


    this.set_username(username);
    this.set_registration_date(registrationdate);
//call functions

}

var Saul = new User("Saul", "Mon Sep 16 2013 10:58:09");

Saul.set_username("Paul");
console.log(Saul.get_username());

Saul.set_username(Saul.get_original_username());
console.log(Saul.get_username());