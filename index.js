const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let p1_el = document.getElementById("p1")
let p2_el = document.getElementById("p2")
function generate(){
    let pass1_index = []
    let pass2_index = []
    let pass1 = ""
    let pass2 = ""
    for(let i = 0;i<15;i++){
        pass1_index.push(Math.floor(Math.random()*characters.length))
    }
    for(let i = 0;i<15;i++){
        pass2_index.push(Math.floor(Math.random()*characters.length))
    }
    for(let i = 0;i<15;i++){
        pass1+=characters[pass1_index[i]]
        pass2+=characters[pass2_index[i]]
    }
    p1_el.textContent = pass1
    p2_el.textContent = pass2
    
}



