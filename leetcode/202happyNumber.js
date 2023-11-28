/**
 * @param {number} n
 * @return {boolean}
 */
let isHappy = function(n) {
    let loop = function(m){
        let m2s = String(m).split('');
        let sum_m = 0;
        for(let j=0; j<m2s.length; j++){
            sum_m += Number(m2s[j])*Number(m2s[j]);
        }
        return sum_m;
    }
    let a = loop(n);
    for(let i=0; i<20; i++){
        a = loop(n);
        if(a==1) return true;
    }
    return false;
};

console.log(isHappy(121));