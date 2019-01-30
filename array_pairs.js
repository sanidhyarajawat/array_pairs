function findPairsFromArray(ArrElements, k){
    var result = [];
    var a,b;
    for(var i=0; i<ArrElements.length;i++){
        a = ArrElements[i];
        for(var j=0; j<ArrElements.length;j++){
            var inner_res = [];
            b = ArrElements[j];
            if(b-a==k){
                inner_res.push(b,a);
                result.push(inner_res);
            }
        }
    }
    console.log("result", result);
}

var arr = [1, 2, 3, 4];
var k = 1;
findPairsFromArray(arr,k)