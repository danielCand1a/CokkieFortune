const getRandomElemArray = (arr)=>{
    let indexRandom= Math.floor(Math.random() * arr.length)
    return arr[indexRandom]

}
export default getRandomElemArray