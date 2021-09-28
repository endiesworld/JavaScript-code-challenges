var calPoints = function(ops){
    var result = 0
    let copy = [...ops]
    let score = [Number(ops[0])]
    let len = ops.length
    if(len === 1){
        return Number(ops[0])
    }
    for(let i = 1 ; i<len ; i++){
        if(!Object.is(NaN, Number(ops[i]))){
        score.push(Number(ops[i]))
        }
        else if(ops[i] === 'C' ){
        score.pop()
        }
        else if(ops[i] === 'D' && score.length >=2 ){
        score.push( 2 * score[score.length -1] )
        }
        else if(ops[i] === '+' && score.length >=2 ){
        score.push( score[score.length - 1] + score[score.length - 2] )
        }
    }
    
    score.forEach(e => result += e)
    return result ;
}

calPoints(['5', '-2','4', 'C', 'D', '9', '+', '+'])