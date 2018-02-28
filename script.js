const response=prompt('Назовите себя');
alert(`Здравствуй, ${response}`);
while(true){
    let number1=Math.floor(Math.random()*(21)-10);
    let number2=Math.floor(Math.random()*(21)-10);
    let operation=Math.floor(Math.random()*(4));
    let result;
    switch(operation)
    {
        case 0 : {
            result=number1+number2; 
            alert(`${number1} + ${number2}`);break;       
        }
        case 1 : {
            result=number1-number2;
            alert(`${number1} - ${number2}`);break;
        }
        case 2 : {
            result=number1*number2;
            alert(`${number1} * ${number2}`);break;
        }
        case 3 : {
            result=number1/number2;
            alert(`${number1} * ${number2}`);break;
        }
    }
        let resultUser=prompt('Ответ:');

        if(resultUser==result){
            alert(`Наливай еще по одной`);
        }
        else{
            alert(`Пора завязывать`);
        }
    }