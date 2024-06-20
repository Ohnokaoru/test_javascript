

        function getRandomInt(start, end) {
            let r = Math.floor(Math.random() * end) + start;
            return r;

        }

        // 10組號碼

        // start = parseInt(prompt("請輸入起始值:"))
        // end = parseInt(prompt("請輸入終止值:"))
        // count = parseInt(prompt("請輸入要抽幾組數字:"))


      
        start = 1
        end = 49
        count = 10

        let nums = [];
        for (let j = 0; j < count; j++) {
            let num = [];

            while (true) {
                let x = getRandomInt(start, end)
                if (!num.includes(x)) {
                    num.push(x);
                }

                if (num.length == 6) {
                    break;
                }

            }
            // 做排序
            num.sort(compare);
            nums.push(num);
            
            // document.write(`<h1>第${j + 1}組，號碼:${num} </h1>`);

        }
        console.log(nums);
        // 升序
        function compare(a, b) {
            return a - b;
        }


        /** for i in range(len(nums)):
         * print(nums[i])
        */

  const lottroyEl=document.querySelector("#lottroy");
        console.log(lottroyEl.textContent);
        // 將測試內文先為空
        lottroyEl.innerHTML=""



        for (let i = 0; i < nums.length; i++) {
            console.log(nums[i].join(","));
            lottroyEl.innerHTML+=`<h1>第${i + 1}組，號碼:${nums[i].join(",")} </h1>`;
        
            // document.write(`<h1>第${i + 1}組，號碼:${nums[i].join(",")} </h1>`);

        }


        // obj=>json
        let user={
            name:"kaoru",
            weight:Number(52),
            height:Number(160.2)
        }
        console.log(user);
        console.log(typeof(user));
        console.log(user.name,user["weight"]);

        // BMI計算
        function getBmi(height,weight){ 
            let bmi=weight/((height/100)**2);

            if(isNaN(bmi)){
                return "數值錯誤"
            }
            return bmi.toFixed(2) 
        }

        let height=Number(prompt("請輸入身高(cm):"));
        let weight=Number(prompt("請輸入體重(kg):"));
        
        ans=getBmi(height,weight)
        console.log(ans);

        console.log(getBmi(user.height,user.weight));

       
       
       
        const h1=document.querySelector("h1");
        console.log(h1.textContent);

        // 更改內文
        h1.innerText="大樂透";
        console.log(h1.textContent);

        const h2=document.querySelector("h2");
        h2.innerHTML=`<u>${Date()}</u>`;
        // 做渲染
        h2.style.color="red";
        console.log(h2.textContent);

        
        
