import { bignumber, identity, matrix } from 'mathjs';

const math = require('mathjs');
function checkEquation (equation){
    equation = equation.replaceAll('X','x')

    return equation
}
function copyArray(n,matrix1){
   let arr = []
    for(let i = 0;i < n ; i++){
        arr.push([])
        arr[i] = [].concat(matrix1[i])
    }
    return arr;

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

        let check = math.multiply(fx1,fXR)
       
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
          if(checkError > oldcheckError && i > 3){
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


export function calNewton(initialEquation, initialX, initialError) {

    let equation = checkEquation(initialEquation)

    equation = math.parse(equation)
    let X = math.bignumber(initialX)

    let fXprime = math.derivative(equation,'x').compile()
    
    // console.log('aaa')
    let error = math.bignumber(initialError)

    

    let arr = []

    let i = 1;


    let oldX = X;

    let checkError = 9999
    let oldcheckError = 9999;
    while (checkError > error) {

        let fXdiff = fXprime.evaluate({x : X})
        let fX = equation.evaluate({ x: X })
        X = math.subtract(X, math.divide(fX, fXdiff))



        checkError = math.abs((X - oldX) / X);
        if (checkError > oldcheckError) {
            arr.push({ key: i, iteration: "ลู่ออก", x: "ลู่ออก", error: "ลู่ออก" })
            break;
        }
        oldcheckError = checkError;

        oldX = X


        arr.push({key : i, iteration: i.toString(), x: X.toFixed(15).toString(), error: checkError.toFixed(15).toString() })
        console.log(i.toString())
        console.log(X.toString())
        console.log(checkError.toString())
        i++

    }
    return arr
}
export function calSecant(initialEquation, initialX0,initialX1, initialError) {

    let equation = checkEquation(initialEquation)

    equation = math.parse(equation).compile()
    let x0 = math.bignumber(initialX0)
    let x1 = math.bignumber(initialX1)


   let fx0 = equation.evaluate({x:x0})
   let fx1 = equation.evaluate({x:x1})
    
    // console.log('aaa')
    let error = math.bignumber(initialError)

    

    let arr = []

    let i = 1;


    let oldX = 0;

    let checkError = 9999
    let oldcheckError = 9999;
    while (checkError > error) {

    let    x = math.subtract(x1 , math.divide(math.multiply(fx1,math.subtract(x0 , x1) ), math.subtract(fx0 , fx1)));
            
            checkError = Math.abs((x - x1)/x);
            
            fx0 = fx1;
            x0 = x1;
            x1 = x;
            fx1 = equation.evaluate({x : x1})


       
        if (checkError > oldcheckError) {
            arr.push({ key: i, iteration: "ลู่ออก", x: "ลู่ออก", error: "ลู่ออก" })
            break;
        }
        oldcheckError = checkError;

        oldX = x


        arr.push({key : i, iteration: i.toString(), x: x.toFixed(15).toString(), error: checkError.toFixed(15).toString() })
      
        i++

    }
    return arr
}

export function calCramer(n, initialMatrix1, initialMatrix2) {

    let matrix1=math.bignumber(initialMatrix1)
    let matrix2=math.bignumber(initialMatrix2)
    let det_matrixA = math.det(matrix1)
    
    let temp_matrix1 = copyArray(n,matrix1)

    let arr = []

    let X = [];
    
    


        for (let i = 0; i < n; i++) { 

            for (let j = 0; j < n; j++) { 
                temp_matrix1[j][i] = matrix2[j]  
            }
            X[i] = math.divide(math.det(temp_matrix1) , det_matrixA).toFixed(15).toString()
            
            arr.push({key : i , x : 'X'+(i+1) ,valuex : X[i]})
            
            temp_matrix1 = copyArray(n,matrix1);
        }
        
    return arr
}



export function calElimination(n, initialMatrix1, initialMatrix2) {

    let matrix1=initialMatrix1
    let matrix2=initialMatrix2
    
    
    
    let arr = []
    let X = []
    
    for(let i = 0 ; i < n ; i++){
        matrix1[i].push(matrix2[i]) 
        X.push(1)
    }
    console.log(matrix1)
   
    for(let i = 1;i < n ; i++){
        for(let j = i ;j < n ; j++){

            let divide = matrix1[i-1][i-1]
            let multi = matrix1[j][i-1]

            for(let k = i-1 ; k < n+1;k++){
                matrix1[j][k] = matrix1[j][k] - ((matrix1[i-1][k]/divide)*multi)
                
            }
    
        }
         
    }

    for(let i = n-1 ;i >= 0 ; i--){
        let sum = 0;
        for(let j = 0 ; j < n ;j++){
            sum = sum + matrix1[i][j]*X[j];
        }
        sum = sum - matrix1[i][i]
        X[i] = ((matrix1[i][n] - sum)/matrix1[i][i])
        
    }
    X.map((x,i) => arr.push({key : i , x : 'X'+(i+1) , valuex : x.toFixed(5)}))

        
    return arr
}


export function calJordan(n, initialMatrix1, initialMatrix2) {

    let matrix1=initialMatrix1
    let matrix2=initialMatrix2
    
    
    
    let arr = []
    let X = []
    
    for(let i = 0 ; i < n ; i++){
        matrix1[i].push(matrix2[i]) 
        X.push(1)
    }
    console.log(matrix1)
   
    for(let i = 1;i < n ; i++){
        for(let j = i ;j < n ; j++){

            let divide = matrix1[i-1][i-1]
            let multi = matrix1[j][i-1]

            for(let k = i-1 ; k < n+1;k++){
                matrix1[j][k] = matrix1[j][k] - ((matrix1[i-1][k]/divide)*multi)
              
            }
    
        }
         
    }
    for(let i = n-2;i >= 0 ; i--){
        for(let j = i ;j >= 0 ; j--){

            let divide = matrix1[i+1][i+1]
            let multi = matrix1[j][i+1]

            for(let k = n ; k >= i;k--){
                matrix1[j][k] = matrix1[j][k] - ((matrix1[i+1][k]/divide)*multi)
              
            }
    
        }
         
    }

    for(let i = 0 ;i < n ; i++){
        X[i] = ((matrix1[i][n] )/matrix1[i][i])
    }
       
      
        
    
    X.map((x,i) => arr.push({key : i , x : 'X'+(i+1) , valuex : x.toFixed(5)}))

        
    return arr
}