function popup2(e) {
    window.confirm('是否要刪除卡片');
    if (confirm('刪除後就無法復原!') == true) {
        showtxt.innerHTML = 'Yes，測試成功';
    } else {
        showtxt.innerHTML = '您已取消確認';
    }

};
button.addEventListener('click', popup2);