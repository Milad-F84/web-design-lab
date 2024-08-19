function prime(n){
    for(var i=2; i<n; i++){
        if(n%i===0){
            return false;
        }
    }
    return true;
}
function primeNumbers(){
    for(var i=2; i<=100; i++){
        if(prime(i)){
            console.log(i);
        }
    }
}