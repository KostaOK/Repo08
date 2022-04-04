var sum = 0;
function addThree() {
    sum = sum + 3;
    console.log("sum from addThree: " + sum);
}

var sum =5;
function addFive() {
    sum = sum + 5;
    console.log("sum from addFive: " + (sum));

}

addThree();
addFive();

module.exports = {
    addThree,
    addFive
};