
function getMyLottroy(count,start,end){
let lottroy=[];
for(let j=0; j<count;j++){
let number=[];
while(true){
    let r=Math.floor(Math.random()*end)+start;
    
    if (!number.includes(r)){
    number.push(r);
}
if (number.length==6){
    // 數字填滿後再排序
    number.sort(compare);
    break;
}}
lottroy.push(number);
}
return lottroy
}


let count=Number(prompt("請輸入欲抽多少組號碼:"));
let start=Number(prompt("請輸起始號碼:"));
let end=Number(prompt("請輸終止號碼:"));
lottroy=getMyLottroy(count,start,end)




// 抓取 <div id="test">
let testEl=document.querySelector("#test");
// 看內文
console.log(testEl.textContent);

// 內文更改開頭
testEl.innerHTML=`<ol>`

for (let b=0;b<lottroy.length;b++){
    lottroy[b].join(",")
console.log(lottroy[b].join(","));
// 累加內文中獎號碼
testEl.innerHTML+=`<li>第${b+1}組，號碼:${lottroy[b].join(",")}</li>`
  }
    
// 內文結尾
testEl.innerHTML+=`</ol>`

// 排序函式
function compare(a,b){
    return a-b
}