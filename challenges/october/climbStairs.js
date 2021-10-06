function climbStairs(n){
    if (n == 1){
        return 1
    }
    if ( n == 2){
        return 2
    }
    if ( n == 3){
        return 3
    }
    let ways = [1, 2, 3] ;
    for (let i = 3 ; i < n ; i++){
        ways.push(ways[i-1] + ways[i-2])
    }
    return ways[ways.length - 1]
}

// To solve recursively, do the below
// Sequence 1, 2, 3, 5, 8, 13 ...

/**
 * function steps(n){
    if(n == 0){
        return 0
    }
    else if(n == 1){
        return 1
    }
    else if(n == 2){
        return 2
    }
    else if(n == 3){
        return 3
    }
    else if(n == 10){
        return 89
    }
    else if(n == 20){
        return 10946
    }
    else if(n == 30){
        return 1346269
    }
    else if( n== 20){
        return 65580141
    }
    else {
    return steps(n-1) + steps(n-2)
    }
}

console.log(steps(35))
 */

console.log(climbStairs(35))