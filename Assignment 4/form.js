/* Part 8 */

function formValidation() {
    let name = document.forms["taxForm"]["name"].value;
    let birthday = new Date(document.forms["taxForm"]["birthdate"].value);

    function checkName(name){
        for(let letter of name){
            if(!(letter >= "a" && letter <= "z") &&
            !(letter >= "A" && letter <= "Z") &&
            letter !== ' '){
                alert("Please enter a valid name")
                return false;
            }
        }
        return true;
    } 
    
    function checkBirthday(birthday) {
        let validYear = 1988;
        if(birthday.getFullYear() > validYear){
            alert("Please enter a valid birthday");
            return false;
        }
        return true;
    }

    if(!checkName(name) || !checkBirthday(birthday)){
        return false;
    }
    return true;
}    
