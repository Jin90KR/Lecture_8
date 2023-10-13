const araaay = [];


function isEmptyObj(obj) {
    if(typeof obj !== "object") {
        return false;
    }
    const objjj = Object.keys(obj)

    // console.log(Array.isArray([4, 5, 6, 7]))

    if(Array.isArray(obj) === true) {
        if(obj.length === 0) {
            return true;
        } else {
            return false;
        }
    };
    
    if(objjj.length === 0) {
        return true;
    } else {
        return false;
    };
};


// console.log(isEmptyObj({})); //true
// console.log(isEmptyObj({name: "kim"})); //false
console.log(isEmptyObj([])); //true
console.log(isEmptyObj([1, 2, 3, 4])); //false
