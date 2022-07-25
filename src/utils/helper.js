

const getBalance = (number) => {
        let lastdigit = parseInt(number.substr(-1))
        if(lastdigit === 5 || lastdigit === 2){
            return getSumOfDigits(number)
        }else{
            return "0"
        }
    }

const getSumOfDigits = (num) => {
        let sum = 0;
        for (var i = 0; i < 12; i++) {
            console.log('in for loop ', num[i])
            sum += parseInt(num[i])
        }
        return sum.toString();
    }

    const getLastDigits = (num) =>{
        return num.slice(-4)
    }


module.exports = {getBalance, getLastDigits };