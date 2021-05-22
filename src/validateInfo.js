export default function validateInfo(values) {
    let errors = {};

    if(!values.name) {
        errors.name = "Name  required"
    }
    
    if(!values.rollno) {
        errors.rollno = "Roll Number required"
    }else if (!/^[A-Z]+[0-9]+[A-Z]+[0-9]+$/i.test(values.rollno)){
        errors.rollno = 'IITM Roll No. is invalid'
    }else if (values.rollno.length !==8){
        errors.rollno = 'IITM Roll No. is invalid'}
    
    if(!values.phone) {
        errors.phone = "Contact No. required"
    } else if (values.phone.length !==10){
        errors.phone = 'Contact Number is invalid'
    }else if (!/^[0-9]+$/i.test(values.phone)){
        errors.phone = 'Contact Number is invalid'
    }

    if(!values.email) {
        errors.email = "Email required"
    } 
    // else if(!/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i.test(values.email)){
    //     errors.email = "Email address is invalid"
    // }
    else if(!/^[A-Z0-9a-z._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email = "Email address is invalid"
    }

    if(!values.password) {
        errors.password = "Password required"
    } else if (values.password.length < 6){
        errors.password = 'Password needs to be 6 characters or more'
    }
    

    if(!values.password2) {
        errors.password2 = "Password required"
    } else if (values.password2 !== values.password){
        errors.password2 = 'Passwords do not match'
    }

    return errors;
}