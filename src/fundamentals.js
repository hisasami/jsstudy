function showMessage(text){
    text = text || 'empty'; // return truthy value
    return text;
}

let age = 10;
let welcome = (age < 18) ?
    () => console.log('hello') :
    () => console.log('grert');
welcome();

let sum = function(a, b) {
    return a+b;
}

module.exports = { sum, showMessage };


let nums1 = [1,2,3,0,0,0]
let m = 3;
let nums2 = [2,5,6];
let n = 3;

let merge = function(nums1, m, nums2, n){
    nums1 = nums1.slice(0,nums1.length-m);
    for(let i=0; i<n; i++){
        nums1.push(nums2[i]);
    }
    nums1.sort((a,b)=>(a-b));
    console.log(nums1);
}

merge(nums1, m, nums2, n);