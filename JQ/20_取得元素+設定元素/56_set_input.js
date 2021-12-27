$(function() {


    // 10. 練習設定初始值
    btnSet.onclick = function() {
        // 20. 將地址預設為台中
        // $('#address').val('Miaoli');
        // $('#address').prop('value', 'Taichung');
        // $('select option[value="Hsinchu"]').prop('selected', true)

        // 30. 將職業預設為其他
        $('input[value="other"][name="job"]').prop('checked', true);

        // 40. 將交通工具預設為機車
        $('input[value="motorcycle"][name="vehicle"]').prop('checked', true);

    }
})