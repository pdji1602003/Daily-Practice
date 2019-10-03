const name = document.getElementById('name');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

//監聽submit事件的發生
form.addEventListener('submit', e => {
    //  為何message是array？因為我們想要使用push方法將字串塞進去
    let message = [];
    
    //當name的值為空字串或空值時，表示使用者沒有輸入資訊，往message變量塞入警示訊息
    if(name.value == null){
        message.push('錯誤為空值！')
    }

    if(name.value === ''){
        message.push('錯誤為空字串！')
    }

    //當password值的長度小於六位數時，往message變量塞入警示訊息
    if(password.value.length < 6){
        message.push('密碼長度必須至少六位數!')
    }
    if(password.value.length >= 20){
        message.push('密碼長度以20字為限!')
    }
    if(password.value === 'password'){
        message.push('密碼不能設為密碼')
    }

    //當錯誤訊息長度大於0時，表示使用者有發生上述錯誤狀況。
    if(message.length > 0){

        // 使用preventDefault阻止使用者將資訊提交
        e.preventDefault();

        //將message array變成字串，使用innerText塞進去error元素裡
        errorElement.innerText = message.join(',');
    }
    
})