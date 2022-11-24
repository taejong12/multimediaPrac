const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const logoutBtn = document.querySelector("#logout");



console.log(localStorage.getItem('key')!==null);
console.log(localStorage.getItem('key'));

if (localStorage.getItem('key')!==null) {
    loginForm.classList.add('hidden');
    greeting.classList.remove('hidden');
    greeting.innerHTML = localStorage.getItem('key');
} else {
    loginForm.classList.remove('hidden');
    logoutBtn.classList.add('hidden');
}

let btn = loginInput.nextElementSibling;

console.log(btn);

btn.onclick = function (e) {
    e.preventDefault();
    localStorage.setItem('key', '안녕하세요' + loginInput.value);
    console.log(localStorage.getItem('key'));
    
    greeting.innerHTML = localStorage.getItem('key');
    
    greeting.classList.remove('hidden');
    console.log(greeting);
    
    loginForm.classList.add('hidden');
    console.log(loginForm);
    
    logoutBtn.classList.remove('hidden');
}

logoutBtn.addEventListener('click', function (){
    localStorage.clear();
    loginForm.classList.remove('hidden');
    greeting.classList.add('hidden');
    logoutBtn.classList.add('hidden');
});


// function loginremove() {
    //     loginForm.classList.remove('hidden');
    // }
// console.log(loginremove);
// loginremove();




// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");
// const greeting = document.querySelector("#greeting");

// const btn=document.querySelector('[type=submit]');

// greeting.innerHTML=localStorage.getItem('key');
// greeting.classList.remove(localStorage.getItem('key2'));
// loginForm.classList.remove("hidden");
// loginForm.classList.add(localStorage.getItem('key2'));



// btn.addEventListener('click',function(event){
//     event.preventDefault();
//     localStorage.setItem('key',`안녕하세요.${loginInput.value}`);
//     localStorage.setItem('key2','hidden');
//     greeting.innerHTML=localStorage.getItem('key');

//     greeting.classList.remove("hidden")
//     loginForm.classList.add('hidden');

// });

// input form에서 입력 받은 값을 기본으로
// 안녕하세요. {입력받은 이름}
// 을 출력하는 형태