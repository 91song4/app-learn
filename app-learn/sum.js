function get_sum(n){
    
    let sum = 0;
    for(let i=0; i<n; i++){
        sum += i;   // sum = sum + i;
    }
        
        return sum;

}

let result = get_sum(100)
console.log(result)