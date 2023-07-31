const inputSlider = document.getElementById('inputSlider');
const sliderValue = document.getElementById('sliderValue');

const lowercase = document.getElementById('lowercase');
const uppercase = document.getElementById('uppercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');

const genBtn = document.getElementById('genBtn');
const passBox = document.getElementById('passBox');

const copyIcon = document.getElementById('copyIcon');

sliderValue.innerText = inputSlider.value;
inputSlider.addEventListener('input',()=>{
    sliderValue.innerText = inputSlider.value;
})

const upperchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerchars = "abcdefghijklmnopqrstuvwxyz";
const nums = "1234567890";
const symbolChars = "!@#$%^&*()";

function generatePassword(){
    if (!uppercase.checked && !lowercase.checked && !numbers.checked && !symbols.checked)
        return "";

        
    let password = "";
    let len = inputSlider.value;  
    while(len>0){
        if(uppercase.checked && len>0){
            password += upperchars.charAt(Math.floor(Math.random()*upperchars.length));
            len--;
        }
        if(lowercase.checked && len>0){
            password += lowerchars.charAt(Math.floor(Math.random()*lowerchars.length));
            len--;
        }
        if(numbers.checked && len>0){
            password += nums.charAt(Math.floor(Math.random()*nums.length));
            len--;
        }
        if(symbols.checked && len>0){
            password += symbolChars.charAt(Math.floor(Math.random()*symbolChars.length));
            len--;
        }
    }
    return password;
}

genBtn.addEventListener('click',()=>{
    passBox.value=generatePassword();
    
})


copyIcon.addEventListener('click',()=>{
    if(passBox.value != ""){
        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerText="check";
        copyIcon.title="Password Copied";
        setTimeout(()=>{
            copyIcon.innerText="content_copy";
            copyIcon.title="";
        },3000)
    }
})