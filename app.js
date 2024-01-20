    let arr = [21,22,23,24,26,27,28,29,30];

    for(var i = 0; i < arr.length; i++){
        if(arr[i + 1] - arr[i] === 2){
            console.log(arr[i] + 1)
        }
    }

let aRR = [51,58,60];

for(i = 0; i < aRR.length; i++){
    var diff = aRR[i + 1] - aRR[i];
    if(diff !== 1){
        for(j = 0; j <= diff; j++){
            console.log(aRR[i] + j)
        }
    }
}