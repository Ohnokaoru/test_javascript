
let testEl=document.querySelector("#test");
console.log(testEl.textContent);
testEl.innerHTML=`<ol>`

let count=Number(prompt("請輸入欲抽多少組號碼:"));
let lottroy=[];

for(let j=0; j<count;j++){
let number=[];
while(true){
    let r=Math.floor(Math.random()*49)+1;
    
    if (!number.includes(r)){
    number.push(r);
}
if (number.length==6){
    break;
}
number.sort(compare);
}
testEl.innerHTML+=`<li>第${j+1}組，號碼:${number}</li>`
lottroy.push(number);
}
testEl.innerHTML+=`</ol>`
console.log(lottroy);












function compare(a,b){
    return a-b
}