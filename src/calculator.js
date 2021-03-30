import { bignumber, identity } from 'mathjs';

const math = require('mathjs');
function checkEquation (equation){
    equation = equation.replaceAll('X','x')

    return equation
}
export function calBisection  (initialEquation ,initialXL,initialXR,initialError) {
    let equation = checkEquation(initialEquation)
        equation = math.parse(equation).compile()
    let  xl = math.bignumber(initialXL)
    let xr = math.bignumber(initialXR)
    let error = math.bignumber(initialError)


    let arr = []


    let xm = math.divide(math.add(xl,xr),2)

    let fx = math.multiply(equation.evaluate({x :xm}),equation.evaluate({x :xr}))

    if(fx < 0){
        xl = xm;
    }
    else{
        xr = xm;
    }

    let checkError = 9999;

    let oldXm = xm;

    let i = 0;
    while(checkError > error){

        xm = math.divide(math.add(xl,xr),2)

        fx = math.multiply(equation.evaluate({x :xm}),equation.evaluate({x :xr}))

        if(fx < 0){
            xl = xm;
        }
        else{
            xr = xm;
        }
        checkError = Math.abs((xm-oldXm)/xm);

        oldXm = xm;

      
        arr.push({key : i , iteration : i.toString() ,xm : xm.toFixed(15).toString() ,error : checkError.toFixed(15).toString()})
        
        i++;
    
    }
    return(arr);
}

export function calFalse(initialEquation ,initialXL,initialXR,initialError){

    let equation = checkEquation(initialEquation)

     equation = math.parse(equation).compile()

     let xl = math.bignumber(initialXL)
     let xr = math.bignumber(initialXR)
     let error = math.bignumber(initialError)
     
     let arr = []

     let i = 1;
     
     
     let oldX1 = 0;

     let checkError = 9999

     while(checkError > error){

        // console.log('first  '+i)
        let fXL  = equation.evaluate({x : xl})

        let fXR  = equation.evaluate({x : xr})
        
        let x1 = math.divide(math.subtract(math.multiply(xl , fXR) , math.multiply(xr , fXL)) , math.subtract(fXR , fXL))

        
        // console.log('middle   ' + i)
        let fx1 = equation.evaluate({x : x1})

        let check = math.multiply(fXL,fXR)
       
        if( check >= 0){
            xr = x1
        }
        else{
            xl =x1
        }

        checkError =  math.abs((x1 - oldX1)/x1);

        oldX1 = x1

        arr.push({key : i , iteration : i.toString() ,x1 : x1.toFixed(15).toString() ,error : checkError.toFixed(15).toString()})
        console.log(i.toString())
        console.log(x1.toString())
        console.log(checkError.toString())
        i++
        
     }
     return arr
}

export function calOnepoint(initialEquation ,initialX,initialError){

    let equation = checkEquation(initialEquation)

     equation = math.parse(equation).compile()
     
     let X = math.bignumber(initialX)
     console.log('aaa')
     let error = math.bignumber(initialError)
     
     let arr = []

     let i = 1;
     
     
     let oldX = 0;

     let checkError = 9999
     let oldcheckError = 9999;
     while(checkError > error){

        
         X  = equation.evaluate({x : X})

         checkError =  math.abs((X - oldX)/X);
         if(checkError > oldcheckError){
            arr.push({key : i , iteration : "ลู่ออก" ,x : "ลู่ออก" ,error : "ลู่ออก"})
            break;
        }
          oldcheckError = checkError;
        
         oldX = X
         
       
        arr.push({key : i , iteration : i.toString() ,x : X.toFixed(15).toString() ,error : checkError.toFixed(15).toString()})
        console.log(i.toString())
        console.log(X.toString())
        console.log(checkError.toString())
        i++
        
     }
     return arr
}