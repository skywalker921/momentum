//2
const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

//5 상수 설정
const USER_LS = "currentUser",
  SHOWING_CN = "showing";

//11
function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

//10 전에 만들어둔 이벤트와 같이 실행될거기 때문에 파라미터를 이벤트로?
function handleSubmit(event) {
  event.preventDefault(); //이벤트의 디폴트 상태를 막는 것. 버블처럼 위로 올라감. 여기선 폼에 이름 적고 제출하면 데이터가 새로고침 된 것 처럼 사라지는 걸 막는 것.
  const currentValue = input.value;
  //console.log(currentValue);
  //cf) input.placeholder 또는 value = "" (이렇게 뭔가를 바꾸거나 추가할 수 있음. 근데 플레이스홀더 안되는디?)
  paintGreeting(currentValue);
  saveName(currentValue);
}

//8
function askForName() {
  form.classList.add(SHOWING_CN);
  //9 폼에 뭔가를 제출하면 이것을 다루겠다는..? 10번으로.
  form.addEventListener("submit", handleSubmit);
}

//7
function paintGreeting(text) {
  //글자 새로 나타나게 하고, 폼은 일단 안보이게 할 거임.
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

//3 함수 만들고 아래 init안에 이름 적기
function loadName() {
  //4 상수 설정
  const currentUser = localStorage.getItem(USER_LS);
  //6 테스트 ~ 알아보기위해 form과 h4를 일단 display none으로 바꿈.
  if (currentUser === null) {
    //null과 같은 경우니까 유저가 없는 경우. 이 경우 유저의 이름을 요청할 것. 8번.
    askForName();
  } else {
    //유저가 있는 경우
    paintGreeting(currentUser);
  }
}

//1
function init() {
  loadName();
}
init();
