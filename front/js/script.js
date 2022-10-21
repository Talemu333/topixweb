const userName = document.getElementById('name')
const userEmail = document.getElementById('email')
const userPhone = document.getElementById('num')
const userLocation = document.getElementById('location')
const userProd = document.getElementById('prod')
const userComment = document.getElementById('comment')
const reply = document.getElementById('reply')
const button = document.getElementById('button')
// const name_error = document.getElementById('name-error')
// const email_error = document.getElementById('email-error')
// const num_error = document.getElementById('num-error')

button.addEventListener('click', (e) => {
    // e.preventDefault()
    const name = userName.value
    const email = userEmail.value
    const phone = userPhone.value
    const location = userLocation.value
    const product = userProd.value
    const comment = userComment.value
   
    // const nameVerify = () => {
    //     if(name == ""){
    //         userName.style.border = "1px solid red"
    //         name_error.style.color = "red"
    //         name_error.innerHTML = "name is required"
    //         e.preventDefault()
    //         return false
    //     }else{
    //         name_error.innerHTML = ""
    //         return true
    //     }
    // }
    // const emailVerify = () => {
    //     if(email === ""){
    //         userEmail.style.border = "1px solid red"
    //         email_error.style.color = "red"
    //         email_error.innerHTML = "email is required"
            
    //     }      
    // }
    // const phoneVerify = () => {
    //     if(phone.length !== 11 || phone.length > 11){
    //         userPhone.style.border = "1px solid red"
    //         num_error.style.color = "red"
    //         num_error.innerHTML = "invalid phone number"
            
    //     }
    // }
    // nameVerify()
    // emailVerify()
    // phoneVerify()
   
    const url = '/bookonline?name=' + name + '&email=' + email + '&phone=' + phone + '&location=' + location + '&product=' + product + '&comment=' + comment

    fetch(url)
    .then((response) => {
        if(!response){
           console.log(response.json().error)
        }
        else{return response.json()}
         
    })
    .then((data) => {
        if(!data){
            console.log("network error")
        }else{console.log(data)}
    })
    .catch((e) => {
        console.log(e)
    })
    

})



// const endpoint = 'http://example.com/php/phpGetPost.php';


