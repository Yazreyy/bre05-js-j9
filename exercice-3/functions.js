
export function computeAverage(numbers){
    let somme = 0
    for(let i = 0 ; i < numbers.length ; i++){
        somme += numbers[i]
    }
    return somme / numbers.length
};