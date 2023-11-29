/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function(pref) {
    let arr = [];
    let n = pref.length;
    arr.push(pref[0]);
    if(n>0){
        for(let i=1; i<n; i++){
            arr.push(pref[i-1] ^ pref[i]);
        }
    }
    return arr;
};