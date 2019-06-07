var p = localStorage.getItem('vhod');
if (p==1)
$("#login").hide();
else if(p==0)
$("#logout").hide();
else {
    $("#logout").hide();
    $("#login").show();
}
window.onload = function () {
    
    document.getElementById('vvod').onclick = function vhod() { //обрабатываем вход
        localStorage.setItem('name', 'Liza'); //в локалсторидж хранится логин "Лиза" и пароль "1234"
        localStorage.setItem('pwd', '1234');
        var name = document.getElementById('uname').value; //получаем из инпута имя
        //console.log(name);
        var pwd = document.getElementById('pwd').value;  //получаем из инпута пароль
        //console.log(pwd);
        var name1 = localStorage.getItem('name'); //достаем имя из локалсторидж
        // if (name === name1)
        //     console.log("right");
        // else console.log("wrong");
        var pwd1 = localStorage.getItem('pwd');  //достаем пароль из локалсторидж
        // if (pwd1 === pwd)
        //     console.log("right");
        // else console.log("wrong");
        if (name === name1 && pwd1 === pwd){//если это наш пользователь, то выводим успешное сообщение, иначе неудачу
            alert("Поздравлем, вы успешно вошли!");
            $("#login").hide();
            $("#logout").show();
            $("#abc").hide();
            localStorage.setItem('vhod', '1');
        }
        else alert("Ой, введенные данные неверные...");
        return;
    };
    document.getElementById('logout').onclick = function vhod() {
        window.location.reload();
        localStorage.setItem('vhod', '0');
    };
};