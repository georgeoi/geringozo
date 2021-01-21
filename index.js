const geringozo = function(str){

     var strArray = []
     var newWord = []
     var letter = ""
     strArray= str.split("")

     for (i=0;i<strArray.length;i++){
         letter= strArray[i]
         if (letter=="a"||letter=="e"||letter=="i"||letter=="o"){
            letter= letter + "p" + letter
         } else if (letter=="u"){
             if (newWord[newWord.length-1]!="g" && newWord[newWord.length-1]!="q"){
                letter= letter + "p" + letter 
             }
         }
         newWord.push(letter)
     }

     result= newWord.join("")
     return result

}

module.exports = geringozo
