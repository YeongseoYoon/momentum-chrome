const clockTitle = document.querySelector(".dday-subtitle");
const ddaySubmitBtn= document.querySelector(".dday-submit");
const ddayDate = document.getElementById("dday-date");
const ddayForm = document.querySelector(".dday-form");
const dTitle= document.querySelector(".dday-user-title");
const nowDate = new Date();

const DDAY_KEY = "dday";
const DDAY_TITLE = "ddaytitle";

function changeDate(e){
    let selectDate = e.target.value;
    if(new Date(selectDate)<=nowDate){
        alert("현재 이후의 날짜를 입력해주세요!");
    }
}

function setDday(event){
    event.preventDefault();
    ddayForm.classList.add("hidden");
    localStorage.setItem(DDAY_TITLE,dTitle.value);
    localStorage.setItem(DDAY_KEY,ddayDate.value);
    paintingDday();
    setInterval(paintingDday,1000);
}

function paintingDday(){
    const toDate = localStorage.getItem(DDAY_KEY);
    const toTitle = localStorage.getItem(DDAY_TITLE);
    const dDiff = toDate.getTime() - nowDate.getTime();
    const dDate = Math.round(dDiff / (1000 * 60 * 60 * 24));
    clockTitle.innerText = `${toTitle}까지 ${dDate}일 남았습니다.`;
}
  

const ddayTitle = localStorage.getItem(DDAY_TITLE);

if(ddayTitle === null){   
    ddayDate.addEventListener("change", changeDate);
    ddaySubmitBtn.addEventListener("submit",setDday);
}else{
    paintingDday();
    setInterval(paintingDday,1000);
}





