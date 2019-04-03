export default (min = 0, max = 4) => { // 4 being a good random max number
    return Math.floor(Math.random() * (max - min)) + min;
}