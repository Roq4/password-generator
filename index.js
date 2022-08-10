let allChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0","!","@","#","$","%","^","&","*","(",")","-","_","=","+","{","}","[","]","|",";",":",".","<",">","/","?"]

let passwordEl1 = document.getElementById("password1")
let passwordEl2 = document.getElementById("password2")
let passwordEl3 = document.getElementById("password3")
let passwordEl4 = document.getElementById("password4")



function password() {
    let pw = "" 
    
    
    let passwordLengthEl = document.getElementById("pw-length-declare").value


    for (let i = 0; i < passwordLengthEl; i++ ) {
    
        let charSel = allChars[Math.floor(Math.random()*allChars.length)]
        pw += charSel 
    }
    return pw
    
     
}

function generatePassword() {
    
    passwordEl1.textContent = password()
    passwordEl2.textContent = password()
    passwordEl3.textContent = password()
    passwordEl4.textContent = password()
}

