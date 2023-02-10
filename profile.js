let loginUserData = JSON.parse(localStorage.getItem('login'));

let dp = document.getElementsByClassName('profileimg');
let dpName = document.getElementsByClassName('loginName');

const profileDetails = () => {
    for (let i of dp) {
        i.src = loginUserData.img;
    }
    for(let j of dpName){
        j.innerHTML = loginUserData.name;
    }
}
profileDetails();