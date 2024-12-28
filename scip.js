let numbers = [ 2, 3, 4, 6];
numbers.forEach(display);
function display(element, index, array) {
    array[index]= element*2;
    console.log(array[index])
    console.log(element)
}
let mat=Math.random(1,4)*10
console.log(mat)
let mats= Math.round(mat)
console.log(mats)




