import { bignumber, e, identity, matrix } from 'mathjs';
var interpolationQuadratic_Poly_linear = require('interpolating-polynomial')
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

export function calLu(n, initialMatrix1, initialMatrix2) {

    let A = initialMatrix1
    let B = initialMatrix2

   
   
    let arr = []
    let U = []
    let L = []
    let Y = []
    let X = []
    
    for (let i = 0; i < n; i++) {
            U.push([])
            L.push([])
            Y.push(1)
            X.push(1)
        for (let j = 0; j < n; j++) {
            L[i][j]=0
            if(i == j){
                U[i][j]= 1
            }
            else{
                
                U[i][j]=0
            }
               
               
           
           
            

        }
    }
    //  console.log(L.toString())
    //  console.log(U.toString())
    //  console.log(Y.toString())
    //  console.log(X.toString())
    
    for (let i = 0; i < n; i++) {

        for (let j = 0; j < n; j++) {

            let sum = 0

            for (let k = 0; k < n; k++) {


                if (k != j || i < j) {
                    sum += L[i][k] * U[k][j]
                }


            }
            if (i >= j) {
                sum = A[i][j] - sum;
                L[i][j] = sum;
            }
            else {
                sum = A[i][j] - sum;
                U[i][j] = sum / L[i][i];
            }
        }
    }
   
    
    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = 0; j < n; j++) {

            sum += L[i][j] * Y[j];
        }
        sum = sum - L[i][i] * Y[i];

        Y[i] = ((B[i] - sum) / L[i][i])
        
    }
    for (let i = n-1; i >= 0; i--) {
        let sum = 0;
        for (let j = 0; j < n; j++) {

            sum += U[i][j] * X[j];
        }
        sum = sum - U[i][i] * X[i];

        X[i] = ((Y[i] - sum) / U[i][i])

    }
    
  
    X.map((x, i) => arr.push({ key: i, x: 'X' + (i + 1), valuex: x.toFixed(5) }))








    return arr
}

export function calJacobi(n, initialMatrix1, initialMatrix2,initialError) {

    let check = true;
    let matrix1=initialMatrix1
    let matrix2=initialMatrix2
    
    let error = initialError

  
    
    let arr = []
    
    let resultX = []
    let ansX = []
    
    let arr_Error = []
    for(let i = 0 ; i < n ;i++){
        resultX.push(0)
        
    }
    
    while(check){

       
        
        
        for(let i = 0;i <  n ;i++){
            let sum = matrix2[i]
            for(let j = 0;j < n;j++){
                if(i != j){
                    
                   
                    sum = (sum- (matrix1[i][j]*resultX[j]))
                    
                    
                    
                }
                
            }
            
            
            ansX[i] = sum/matrix1[i][i];
            
            
          
            arr_Error[i] = math.abs((ansX[i]-resultX[i])/ansX[i])
            
            console.log(arr_Error[i])
            
           
        }
        resultX = [...ansX]
        check = false
        for(let i = 0 ; i < n ; i++){
            if(arr_Error[i] > error){
               check = true
               break;
            }
          
            
        }
       
    
    }
    for(let i = 0 ; i < n ; i++){
        arr.push({key : i , x : 'X'+(i+1) , valuex : resultX[i].toFixed(5)})
    }
     

        
    return arr
}

export function calSeidel(n, initialMatrix1, initialMatrix2,initialError) {

    let check = true;
    let matrix1=initialMatrix1
    let matrix2=initialMatrix2
    
    let error = initialError

  
    
    let arr = []
    
    let resultX = []
    let ansX = []
    
    let arr_Error = []
    for(let i = 0 ; i < n ;i++){
        resultX.push(0)
        
    }
    
    while(check){

       
        
        
        for(let i = 0;i <  n ;i++){
            let sum = matrix2[i]
            for(let j = 0;j < n;j++){
                if(i != j){
                    
                   
                    sum = (sum- (matrix1[i][j]*resultX[j]))
                    
                    
                    
                }
                
            }
            
            
            ansX[i] = sum/matrix1[i][i];
            
            
          
            arr_Error[i] = math.abs((ansX[i]-resultX[i])/ansX[i])
            resultX[i] = ansX[i]
            console.log(arr_Error[i])
            
           
        }
        resultX = [...ansX]
        check = false
        for(let i = 0 ; i < n ; i++){
            if(arr_Error[i] > error){
               check = true
               break;
            }
          
            
        }
       
    
    }
    for(let i = 0 ; i < n ; i++){
        arr.push({key : i , x : 'X'+(i+1) , valuex : resultX[i].toFixed(5)})
    }
     

        
    return arr
}


export function calConjugate(n, initialMatrix1, initialMatrix2,initialError) {

    
    let A = initialMatrix1

    let B = initialMatrix2
    
    let error = initialError

  
    
    let arr = []
    
    let X = []
    
    let K = 0;
    
    let checkError = 9999

    for(let i = 0 ; i < n ;i++){
       X.push(0)
        
    }
    
    let R = math.multiply(A,X);
    R = math.subtract(R,B);
    let D = math.multiply(R,-1);
    
    let lambda = null;

    let alpha = null; 

    while(checkError > error){

        lambda = math.transpose(D);
        let temp = lambda;
        lambda = math.multiply(lambda, R);
        temp = math.multiply(temp, A);
        temp = math.multiply(temp, D);

        lambda = lambda / temp;

        lambda = math.multiply(lambda, -1);

        temp = math.multiply(lambda, D);
        X = math.add(X, temp);

        temp = math.multiply(A, X);
        R = math.subtract(temp, B);

        temp = math.transpose(R);
        temp = math.multiply(temp, R);

        checkError = math.sqrt(temp);

        alpha = math.transpose(R);
        alpha = math.multiply(alpha, A);
        alpha = math.multiply(alpha, D);

        temp = math.transpose(D);
        temp = math.multiply(temp, A);
        temp = math.multiply(temp, D);

        alpha = alpha / temp;

        temp = math.multiply(alpha, D);
        D = math.multiply(R, -1);
        D = math.add(D, temp);

       K++;
         
        
        
        
      
    for(let i = 0 ; i < n ; i++){
        arr.push({key : i , x : 'X'+(i+1) , valuex : X[i].toFixed(5)})
    }
     

        
    return arr
}
}

export function calNewtonInterpolation( initialMatrix1, initialPoint,initialX) {
    let A = initialMatrix1

    let P = initialPoint
   
    let X = initialX

    

    let arr = []
    let ans = []

   
   for(let i = 0 ; i < P.length ; i++){
           arr.push(A[parseInt(P[i])-1])
   }
  
   console.log(arr.toString())
   let findX = interpolationQuadratic_Poly_linear(arr)

   

    ans.push({key :  1 ,fx : 'f('+X+')' , valuex : findX(X) })

   return ans
}

export function calLagrange(initialMatrix1,initialPoint,initialX){
    

    let A = initialMatrix1

    let P = initialPoint
   
    let X = initialX

    

    let arr = []
    let ans = []

   
   for(let i = 0 ; i < P.length ; i++){
           arr.push(A[parseInt(P[i])-1])
   }
   console.log(arr)

   //-----------------------------------------------------------//
   let xs = []
   let ys = []

	for(let i = 0 ; i < arr.length ; i++){

		for(let j = 0 ; j < arr.length ; j++){
				if(j == 0){
					xs.push(arr[i][j])
				}
				else if(j == 1){
					ys.push(arr[i][j])
				}
		}
			
	}
    console.log(xs.length)
    console.log(ys.length)
    //--------------------------------------------------------//
    let ws = [];
	let k = xs.length;
	let w;
	
	for (let j = 0; j < k; ++j) {
		w = 1;
		for (var i = 0; i < k; ++i) {
			if (i != j) {
				w *= xs[j] - xs[i];
			}
		}
		ws[j] = 1/w;
	}
 //-----------------------------------------------------------//
    let a = 0;
	let b = 0;
	let c = 0;

	for (let j = 0; j < xs.length; ++j) {
		
		if (X != xs[j]) {
			
			a = ws[j] / (X - xs[j]);
			b += a * ys[j];
			c += a;
		} else {
            ans.push({key :  1 ,fx : 'f('+X+')' , valuex : ys[j] })
			return ans;
            
			
		}
	}
	


    ans.push({key :  1 ,fx : 'f('+X+')' , valuex : (b/c).toFixed(5) })
	

    return ans

}