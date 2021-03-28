const math = require('mathjs');

export function calBisection  (initialEquation ,initialXL,initialXR,initialError) {
    
    let equation = math.parse(initialEquation).compile()
    let  xl = math.bignumber(initialXL)
    let xr = math.bignumber(initialXR)
    let error = math.bignumber(initialError)


    let arr = []
    console.log('aaa')

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

        // console.log(xm.toString());
        arr.push({key : i , iteration : i.toString() ,xm : xm.toString() ,error : checkError.toString()})
        
        i++;
    
    }
    return(arr);
}