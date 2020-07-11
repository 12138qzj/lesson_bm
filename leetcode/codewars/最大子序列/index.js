let a = [-2, -1, 6, 5, 4, -8, 9];

function k(arr) {
    // let L=0,R=0;
    // let leng=arr.length;
    // let sum=0,max=0;
    // if(arr[L]<=0){
    //     L++;
    //     R++;
    // }else{
    //     sum+=arr[L];

    //     while(R<leng){
    //         sum+=arr[R]
    //         if(sum>max) max=sum;
    //         else if(sum<=0) {
    //             L=R
    //         }
    //         R++;
    //     }
    //     if(sum)

    // }
    let R = 0,
        sum = 0;
    let leng = arr.length;
    while (R < leng) {
        sum += arr[R];
        if (sum > max) max = sum;
        if (sum < 0) sum = 0;
        R++;
    }
    return max;

}