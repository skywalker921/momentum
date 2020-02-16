const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");
//더 깔끔하게 쓰고싶으면 const = ~~ , ~~ 이렇게 나열해도 됨. 콤마로 구분. 마지막만 세미콜론.

function getTime() {
  const date = new Date(); //여기서 Date는 클래스? 객체라고 생각해라.
  const minutes = date.getMinutes(); //데이트는 년월일시간 다 나와서 거기서 가져오는듯..
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
  //innerText : 객체 안에 텍스트를 넣기 위해.
}

//${hours < 12 ? `AM ${hours}` : `PM ${hours}`}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
// 질문 : init함수는 왜 만드는건가?
// 답 : We use the init function to kickstart the app.
