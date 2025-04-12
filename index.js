


let formNumber = 1;

const personalInfo = {};
const contactDetails ={};
const additionalInformation ={}
const preferences={}


let userData = {}

let fullname = document.getElementById("fullName");
 let Email = document.getElementById("email")
  let Password = document.getElementById("password")
 let Confirmpassword =  document.getElementById("confirmPassword")
 let Age = document.getElementById("age")
 let Phone = document.getElementById("phone");
 let Address = document.getElementById("address")
 let City = document.getElementById("city")
 let Country = document.getElementById("country")
 let Zip = document.getElementById("zip")
 let profile = document.getElementById("profileBio")
 let Website = document.getElementById("website")
 let Image = document.getElementById("profileImage")
 let Terms = document.getElementById("terms")
 let frequency = document.getElementById("notificationFrequency")
 const bioRegex = /^.{0,500}$/;
    const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- ./?%&=]*)?$/i;
    const imageRegex = /\.(jpg|jpeg|png)$/i;



 const fullnameregex = /^[A-Za-z]{3,50}$/;
 fullname.addEventListener('blur', () => {
 
     if (formNumber == 1) {
         if (fullname.value === "" || !fullnameregex.test(fullname.value)) {
             document.querySelector(".fullnameError").style.display = "block";
             fullname.classList.add("error");
             
         } else {
             document.querySelector(".fullnameError").style.display = "none";
             fullname.classList.remove("error");
         }
     }
 });
 
 const emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
 Email.addEventListener('blur', () => {

 if(Email.value==""|| !emailregex.test(Email.value)){
    document.querySelector(".emailerror").style.display ="block"
    Email.classList.add("error")
    // alert("enter email")
    return;
}
else{
    document.querySelector(".emailerror").style.display ="none"
    Email.classList.remove("error")
}
 })



 const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

const btn = document.getElementById("nextBtn")
btn.addEventListener("click",()=>{

if(formNumber==1){
 
if(fullname.value==""|| !fullnameregex.test(fullname.value)){
    document.querySelector(".fullnameError").style.display ="block"
    fullname.classList.add("error")
    

    // alert("enter full name")
    return;

}
else{
 document.querySelector(".fullnameError").style.display ="none"
 fullname.classList.remove("error")
}

if(Email.value==""|| !emailregex.test(Email.value)){
    document.querySelector(".emailerror").style.display ="block"
    Email.classList.add("error")
    // alert("enter email")
    return;
}
else{
    document.querySelector(".emailerror").style.display ="none"
    Email.classList.remove("error")
}


if(Password.value==""|| !passwordRegex.test(Password.value)){

    document.querySelector(".passwordError").style.display ="block"
    Password.classList.add("error")
    // alert("enter valid password")
    return;
}
else{
      document.querySelector(".passwordError").style.display ="none"
      Password.classList.remove("error")
}


if( Password.value!==Confirmpassword.value){
    document.querySelector(".confirmError").style.display ="block"
    Confirmpassword.classList.add("error")

    // alert("enter valid  confirmpassword")
    return;
}
else{
    document.querySelector(".confirmError").style.display ="none"
    Confirmpassword.classList.remove("error")
}

if ( parseInt(Age.value)<18 || parseInt(Age.value) > 120 || (Age.value === "") ) {
    document.querySelector(".ageError").style.display ="block"
    Age.classList.add("error")

    // alert("Please enter a valid age between 18 and 120");
    return;
  }
  else{
    document.querySelector(".ageError").style.display ="none"
    Age.classList.remove("error")
  }
  personalInfo.fullName = fullname.value
  personalInfo.password = Password.value
  personalInfo.email = Email.value
  personalInfo.ConfirmPassword = Confirmpassword.value
  personalInfo.age = Age.value

  userData.personalInfo = personalInfo
   
  console.log(userData)
  
}

// form 1 ends here


 
// for 2 starts
const phoneRegex = /^[6-9]\d{9}$/;
const addressRegex = /^.{1,200}$/;
const cityRegex = /^[A-Za-z\s]+$/;
const zipPatterns = {
    "India": /^\d{6}$/,
    "USA": /^\d{5}(-\d{4})?$/,
    "Canada": /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/,
    "UK": /^[A-Za-z]{1,2}\d[A-Za-z\d]?\s*\d[A-Za-z]{2}$/
    };
    
if (formNumber == 2) {
    // Phone
    if (Phone.value === "" || !phoneRegex.test(Phone.value)) {
        document.querySelector(".phoneError").style.display = "block";
        Phone.classList.add("error");
        return;
    } else {
        document.querySelector(".phoneError").style.display = "none";
        Phone.classList.remove("error");
    }

    // Address
    if (Address.value === "" || !addressRegex.test(Address.value)) {
        document.querySelector(".addressError").style.display = "block";
        Address.classList.add("error");
        return;
    } else {
        document.querySelector(".addressError").style.display = "none";
        Address.classList.remove("error");
    }

    // City
    if (City.value === "" || !cityRegex.test(City.value)) {
        document.querySelector(".cityError").style.display = "block";
        City.classList.add("error");
        return;
    } else {
        document.querySelector(".cityError").style.display = "none";
        City.classList.remove("error");
    }
    if (Country.value === "" || Country.value === "Select Country") {
        document.querySelector(".countryError").style.display = "block";
        Country.classList.add("error");
        return;
    } else {
        document.querySelector(".countryError").style.display = "none";
        Country.classList.remove("error");
    }
const selectedCountry = Country.value;
const zipRegex = zipPatterns[selectedCountry];
// zipPatterns.selectedCountry gives error bcoz  it is already a variable
// if selectedCountry == india, zippatterns[india]

if (!zipRegex.test(Zip.value)) {
    document.querySelector(".zipError").style.display = "block";
    Zip.classList.add("error");
    return;
} else {
    document.querySelector(".zipError").style.display = "none";
    Zip.classList.remove("error");
}
 // for contact details
 contactDetails.PhoneNumber = Phone.value;
 contactDetails.address = Address.value;
 contactDetails.city = City.value;
 contactDetails.country = Country.value;
 contactDetails.zip = Zip.value;


   userData.contactDetails = contactDetails
 console.log(userData)
}


// form 2 ends here

if (formNumber === 3) {
    let selectedContactMethod = document.querySelector('input[name="contactMethod"]:checked');

preferences.contactMethod = selectedContactMethod ? selectedContactMethod.value : "";
console.log(preferences)

const selectedPlan = document.querySelector('input[name="subscriptionPlan"]:checked');
preferences.subscriptionPlan = selectedPlan ? selectedPlan.value : "";

console.log(preferences);

preferences.interests = [];
    if (!selectedContactMethod) {
        document.querySelector(".contactMethodError").style.display = "block";
        return;
    } else {
        document.querySelector(".contactMethodError").style.display = "none";
    }
  
    let isChecked = false;
    const interests = document.querySelectorAll('input[name="interests"]')
    interests.forEach((checkbox) => {
        console.log(checkbox)
      if (checkbox.checked) {
        isChecked = true;
        preferences.interests.push(checkbox.value);
      }
    });
    console.log(interests)
    console.log(preferences);
    
    if (!isChecked) {
        document.querySelector(".interestError").style.display = "block";
        return;
    } else {
        document.querySelector(".interestError").style.display = "none";
    }
    
   



// Only required for Basic or Premium
if (selectedPlan)
    // slected plan is checked 
     {
        // frequency not selected
    if (frequency.value === "") {
        document.querySelector(".frequencyError").style.display = "block";
        frequency.classList.add("error");
        return;
    } else {
        document.querySelector(".frequencyError").style.display = "none";
        frequency.classList.remove("error");
        
    }
} 
preferences.notificationsFrequency = frequency.value;
console.log(preferences);

userData.preferences = preferences
console.log(userData)
}


    // Additional Information
    additionalInformation.bio = profile.value;
    additionalInformation.website = Website.value;
    additionalInformation.profileImage = Image.value;
    additionalInformation.termsAccepted = Terms.value;

    userData.additionalInformation = additionalInformation
    console.log(userData)
    console.log(additionalInformation)
    

    
    if(formNumber==4){
        if(profile.value==""|| !bioRegex.test(profile.value)){
            document.querySelector(".profileError").style.display ="block"
            profile.classList.add("error")
            
        
         
            return;
        
        }
        else{
         document.querySelector(".profileError").style.display ="none"
         profile.classList.remove("error")
        }
        if(Website.value==""|| !urlRegex.test(Website.value)){
            document.querySelector(".websiteError").style.display ="block"
            Website.classList.add("error")
            
              
            return;
        
        }
        else{
         document.querySelector(".websiteError").style.display ="none"
         Website.classList.remove("error")
        }


        const maxSize = 2 * 1024 * 1024;
        const file = Image.files[0];
        if (file) {
            const isValidType = imageRegex.test(file.name);
            const isValidSize = file.size <= maxSize;
    
            if (!isValidType || !isValidSize) {
                document.querySelector(".imageError").style.display = "block";
                Image.classList.add("error");
            } else {
                document.querySelector(".imageError").style.display = "none";
                Image.classList.remove("error");
            }
        }
    
        if (!Terms.checked) {
            document.querySelector(".termsError").style.display = "block";
            Terms.classList.add("error");
            return;
          } else {
            document.querySelector(".termsError").style.display = "none";
            Terms.classList.remove("error");
          }



    }




    document.getElementById(`step${formNumber}`).style.display = "none";
    if (formNumber === 3 ) {
        btn.disabled = true;
        btn.textContent = "Submit"; 
    }
    if(formNumber<4){
        formNumber++

    }
    else{
getData(userData)

    }
  
    
    
    document.getElementById(`step${formNumber}`).style.display = "block";
  

})
const backbtn = document.getElementById("backBtn")
backbtn.addEventListener("click",()=>{
document.getElementById(`step${formNumber}`).style.display ="none"
if(formNumber>1){
    formNumber--;
}
if (formNumber < 4) {
    btn.textContent = "Next";
}
if(btn.disabled== true){
    btn.disabled = false
}

document.getElementById(`step${formNumber}`).style.display ="block"

})


function test(){
    let isprofile = false
    let iswebsite = false
    let isImage = false
    let isTerms = false
    if(profile.value==""|| !bioRegex.test(profile.value)){
       
        isprofile = false
        
    
    
        
    
    }
    else{
     
    isprofile = true
    }
    if(Website.value==""|| !urlRegex.test(Website.value)){
       
     iswebsite = false
    
       
      
    
    }
    else{
    
     iswebsite = true
    }
    const maxSize = 2 * 1024 * 1024;
    const file = Image.files[0];
    if (file) {
        const isValidType = imageRegex.test(file.name);
        const isValidSize = file.size <= maxSize;

        if (!isValidType || !isValidSize) {
           
           isImage = false
        } else {
           
            isImage = true
        }
        
    }
    if (!Terms.checked) {
        
        isTerms = false
        
      } else {
        
        isTerms = true
      }
    if(isprofile && iswebsite && isImage && isTerms){
btn.disabled  = false
    }
    else{
      btn.disabled=  true
    }
}
profile.addEventListener("blur",()=>{
   test()
})
Website.addEventListener("blur",()=>{
   test()
})
Image.addEventListener("change",()=>{
   test()
})
Terms.addEventListener("change",()=>{
    test()
    
    })
  
       
        



function getData(data){

    fetch(' https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(
           {"userData":data, metadata: {
            submissionDate: "", 
            formVersion: "1.0"
          }} 
        ) 
      })
      .then(response => {
        
        return response.json(); 
       
      })
      .then(data => {
        console.log('Success:', data);
       open()
       
      })
      .catch(error => {
        console.error('Error:', error);
      });

}


  





function open(){
    const div = document.querySelector(".popup-main");
    div.style.display = "flex";
    const bg = document.querySelector(".bg");
bg.style.display = "block"
}



const closeButton = document.querySelector(".image");
closeButton.addEventListener("click",close);
function close(){
    const divs = document.querySelector(".popup-main");
    divs.style.display ="none"
    const bg = document.querySelector(".bg");
bg.style.display = "none"
window.location.reload()
}


  







