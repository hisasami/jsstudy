async function f(){
    promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20));
    promise2 = new Promise(resolve => setTimeout(() => resolve(5), 20));

    let a = await Promise.resolve(promise1);
    console.log(a);
}

let arr = [1, 2, 3, 4];
console.log(arr.length);
console.log(arr[0]);
arr.shift();
console.log(arr.length);
console.log(arr[0]);