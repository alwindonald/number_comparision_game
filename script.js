document.getElementById('check').addEventListener('click',function(){
    const userinput = parseInt(document.getElementById('userinput').value);
    const randomnum = Math.floor(Math.random()*10)+1;
    const result = document.getElementById('result');
    const finalscore=0;

    let score = parseInt(document.getElementById('score').textContent);
    
    if(userinput != randomnum){
        result.textContent = "'you are survived'";
        score = score+10;
    }
    
    else if(userinput == randomnum){
        result.textContent = "'you are captured'"
        score = score-10;
    }
    else{
        if(score <= finalscore){
            result.textContent = "'you are losed'"
        }
    }
    document.getElementById('score').textContent = score;
    document.getElementById('randomnumber').textContent = randomnum;
    
})