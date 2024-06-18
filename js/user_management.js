// const names = [ "김준일", "김준이", "김준삼" ];
// join의 기본값이 ,
// console.log(names.join(""));

// inputMode = 1 > 추가
// inputMode = 2 > 수정
let inputMode = 1;

let userList = [];
// 함수 호출
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
    // 해당 클래스의 태그 담기
    const userTableBody = document.querySelector(".user-table-body");
    // innerHTML을 사용해서 return안의 태그를 생성
    // 태그 안의 값을 userList에서 map을 통해서 담기
    userTableBody.innerHTML = userList.map((user, index) => {
        return `
            <tr>
                <th><input type="checkbox" onclick="handleUserCheck(event)" value="${user.id}"></th>
                <td>${index + 1}</td>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.username}</td>
                <td>${user.password}</td>
                <td><button onclick="deleteUser(event)" value="${user.id}">삭제</button></td>
            </tr>
        `;
        // join을 통해 해당 데이터 묶음을 구별하는 , 삭제
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
    // event값을 user객체에 담기(덮기)
    user = {
        ...user,
        [e.target.name]: e.target.value
    };

    // event가 엔터가 눌릴때
    if(e.keyCode === 13) {
        // 해당 클래스의 태그 담기
        const nameInput = document.querySelector(".name-input");
        const usernameInput = document.querySelector(".username-input");
        const passwordInput = document.querySelector(".password-input");
        
        // event 발생하는 name에 따라 코드 작성
        if(e.target.name === "name") {
            // 포커스 이동
            usernameInput.focus();
        }
        if(e.target.name === "username") {
            // 포커스 이동
            passwordInput.focus();
        }
        if(e.target.name === "password") {
            if(inputMode === 1) {
                // 추가
                userList = [ ...userList, { ...user, id: getNewId()} ];
            }
            
            if(inputMode === 2) {
                // 수정
                let findIndex = -1;
                // 선택된 데이터의 인덱스값을 담기
                for(let i = 0; i < userList.length; i++) {
                    if(userList[i].id === user.id) {
                        findIndex = i;
                    }
                }
                // 인덱스값이 존재 X
                if(findIndex === -1) {
                    alert("사용자 정보 수정 중 오류 발생, 관리자에게 문의하세요");
                    return;
                }
                // 해당 인덱스의 데이터값에 수정된 데이터값 대입
                userList[findIndex] = user;
            }
            saveUserList();
            randerTable();
            clearInputValue();
            nameInput.focus();
        }
    };

    console.log(e.target.name);
};

function saveUserList() {
    // 로컬스토리지에 배열을 JSON타입으로 바꿔서 저장(key값은 무조건 문자열)
    localStorage.setItem("userList", JSON.stringify(userList));
};

function loadUserList() {
    // 로컬스토리지에 담은 userList의 값을  lsUserList에 담기
    const lsUserList = localStorage.getItem("userList");
        // JSON타입의 데이터를 JS타입으로 변경 후
        userList = !lsUserList ? [] : JSON.parse(lsUserList);
        // randerTable 호출
        randerTable();
};

// Index로 필터링
// function deleteUser(e) {
//     userList = userList.filter((user, index) => index !== parseInt(e.target.value));
//     saveUserList();
//     randerTable();
// };

function deleteUser(e) {
    // userList의 아이디값을 호출하여 event값과 다른 값들만 userList에 다시 리턴
    userList = userList.filter(({id}) => id !== parseInt(e.target.value));
    saveUserList();
    randerTable();
};

function getNewId() {
    // id값만 담은 배열 생성
    const userIds = userList.map(user => user.id);
    // 배열의 길이가 0이면 0 / 0이 아니면 해당 배열의 길이값 리턴
    const maxUserId = userIds.length === 0 ? 0 : Math.max.apply(null, userIds);
    // id값이 1부터 시작하기 때문에 + 1;
    return maxUserId + 1;
};

function handleUserCheck(e) {
    // 체크 박스 인풋값만을 모아둔 배열 생성
    const checkBoxList = document.querySelectorAll("input[type = 'checkbox']");
    
    // for문 돌리기
    for(let checkBox of checkBoxList ) {
        // 해당 체크박스에 체크가 일어 나면
        if(e.target === checkBox) {
            // 코드 진행
            continue;
        }
        // 나머지 체크박스들은 체크 해제
        checkBox.checked = false;   
    }

    // 해당 event에 체크가 되었을 때
    if(e.target.checked) {
        // mode =2 - 수정
        inputMode = 2;
        // 해당 체크박스가 checked되면 id값 리턴, 해당 리턴값과 user의 리턴값이 같으면 
        const [ findUser ] = userList.filter(user => user.id === parseInt(e.target.value));
        // setInputValue 호출
        setInputValue(findUser);
        // user에 findUser데이터를 대입하여 리턴
        user = {
            ...findUser
        }
        return;
    }
    clearInputValue(); 
};
// 해당 유저의 데이터값을 변수로 받음
function setInputValue(user) {
    const nameInput = document.querySelector(".name-input");
    const userNameInput = document.querySelector(".username-input");
    const passwordInput = document.querySelector(".password-input");

    // 체크된 데이터값을 인풋 태그에 담기
    nameInput.value = user.name;
    userNameInput.value = user.username;
    passwordInput.value = user.password;
};
// 수정 후 인풋에 담겨있는 데이터 값 초기화
function clearInputValue() {  
    const nameInput = document.querySelector(".name-input");
    const userNameInput = document.querySelector(".username-input");
    const passwordInput = document.querySelector(".password-input");
    nameInput.value = emptyUser.name;
    userNameInput.value = emptyUser.username;
    passwordInput.value = emptyUser.password;

    // 2로 변경되어있는 Mode 1로 다시 변경
    inputMode = 1;
    // user에 담았던 값을 초기화
    user = {
        ...emptyUser
    }
            
    // 어떤 변수가 들어가는 지, 초기값 설정 가능(emptyUser 사용)
    // nameInput.value = emptyUser.name;
    // usernameInput.value = emptyUser.username;
    // passwordInput.value = emptyUser.password;
};