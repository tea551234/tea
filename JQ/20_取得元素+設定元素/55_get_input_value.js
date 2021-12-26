// 11. 畫面準備好以後才開始執行
$(function () {
    btnGet.onclick = function () {

        // // 20. 取得 姓名欄位 (使用 JavaScript 的方式)
        // // 21. 取得 姓名欄位 (使用 jQuery 的方式)
        // var js = document.getElementById('userName').value;
        // var jq = $('#userName').prop('value');
        // var jq2 = $('#userName').val();
        // console.log(js);
        // console.log(jq);
        // console.log(jq2);


        // // 30. 取得 地址欄位 (使用 JavaScript 的方式)
        // // 31. 取得 地址欄位 (使用 jQuery 的方式)
        // var js = document.getElementById('address').value;
        // var jq = $('#address').prop('value');
        // var jq2 = $('#address').val();
        // console.log(js);
        // console.log(jq);
        // console.log(jq2);

        // 40. 取得 年紀欄位 (使用 JavaScript 的方式)
        // 41. 取得 年紀欄位 (使用 jQuery 的方式)

        //     目標: 取得使用者輸入的年紀 
        // 測試步驟: 等一下使用者選擇 20-30歲，點選按鈕，log 會出現 g2030

        // 該怎麼達到目標????? 我要怎麼知道使用者選到哪一個????
        // //  JavaScript
        // //      1. 先取得 name="age" 這些元素 (目前有4個)
        // //      2. 在步驟1找到的4個裡面被選擇的那一個 for 
        // //      3. 判斷 當元素是否有被選擇 (checked==true) 
        // //      4. 抓那個元素的 value 顯示到 log
        // var apple = document.getElementsByName('age');
        // for (var i = 0; i < apple.length; i++) {
        //     if(apple[i].checked == true){
        //         console.log(apple[i].value);
        //     }
        // }

        // JavaScript v2
        var js3 = document.querySelector('input[name="age"]:checked').value;
        console.log(js3);

        var jq3 = $('input[name="age"]:checked').val();
        console.log(jq3);
    }
})
