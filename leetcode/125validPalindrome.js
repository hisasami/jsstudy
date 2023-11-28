/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str = s.toLowerCase();
    let str2 = str.replace(/[^a-z0-9]/gmi, "");
    for(let i=0; i<str2.length/2; i++){
        if(str2[i]!=str2[str2.length-1-i]) return false;
    }
    return true;
};