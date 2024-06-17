// const names = [ "김준일", "김준이", "김준삼" ];
// join의 기본값이 ,
// console.log(names.join(""));

// inputMode = 1 > 추가
// inputMode = 2 > 수정
let inputMode = 1;

let userList = [];
loadUserList();

let emptyUser = {
    id: 0,
    name: "",
    username: "",
    password: ""
};

let user = {
    ...emptyUser
};

function randerTable() {
    const userTableBody = document.querySelector(".user-table-body");
    userTableBody.innerHTML = userList.map((user, index) => {
        return `
            <tr>
                <th><input type="checkbox" onclick="handleUserCheck(event)"></th>
                <td>${index + 1}</td>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.username}</td>
                <td>${user.password}</td>
                <td><button onclick="deleteUser(event)" value="${user.id}">삭제</button></td>
            </tr>
        `;
    }).join("");
};

// function randerTable() {
//     const userTableBody = document.querySelector(".user-talbe.body");
//     userTableBody.innerHTML = userList.map(({username, password}, index) => {
//         return `
//             <tr>
//                 <td>${index + 1}</td>
//                 <td>${username}</td>
//                 <td>${password}</td>
//             </tr>
//         `;
//     }); 
// }

function handleUserInputKeyDown(e) {
    user = {
        ...user,
        [e.target.name]: e.target.value
    };

    if(e.keyCode === 13) {
        const nameInput = document.querySelector(".name-input");
        const usernameInput = document.querySelector(".username-input");
        const passwordInput = document.querySelector(".password-input");
        
        if(e.target.name === "name") {
            usernameInput.focus();
        }
        if(e.target.name === "username") {
            passwordInput.focus();
        }
        if(e.target.name === "password") {
            userList = [ ...userList, { ...user, id: getNewId()} ];
            saveUserList();
            randerTable();
            
            // 어떤 변수가 들어가는 지, 초기값 설정 가능(emptyUser 사용)
            nameInput.value = emptyUser.name;
            usernameInput.value = emptyUser.username;
            passwordInput.value = emptyUser.password;

            nameInput.focus();
        }
    };

    console.log(e.target.name);
};

function saveUserList() {
    localStorage.setItem("userList", JSON.stringify(userList));
};

function loadUserList() {
    const lsUserList = localStorage.getItem("userList");
        userList = !lsUserList ? [] : JSON.parse(lsUserList);
        randerTable();
};

// Index로 필터링
// function deleteUser(e) {
//     userList = userList.filter((user, index) => index !== parseInt(e.target.value));
//     saveUserList();
//     randerTable();
// };

function deleteUser(e) {
    userList = userList.filter(({id}) => id !== parseInt(e.target.value));
    saveUserList();
    randerTable();
};

function getNewId() {
    const userIds = userList.map(user => user.id);
    const maxUserId = userIds.length === 0 ? 0 : Math.max.apply(null, userIds);
    return maxUserId + 1;
};

function handleUserCheck(e) {
    const checkBoxList = document.querySelectorAll("input[type = 'checkbox']");
    const nameInput = document.querySelector(".name-input");
    const usernameInput = document.querySelector(".username-input");
    const passwordInput = document.querySelector(".password-input");
    
    for(let i = 0; i < checkBoxList.length; i++) {
        const checkBock = checkBoxList[i];
        if(e.target === checkBock) {
            continue;
        }
        checkBock.checked = false;   
    }
    for(let i = 0; i < checkBoxList.length; i++) {
        const checkBock = checkBoxList[i];
        if(e.target === checkBock) {
            user = userList[i];
            const userInputBox = document.querySelector(".user-input-box");
            userInputBox.innerHTML = user.map
            
            

        }
         
    }
    
    
};