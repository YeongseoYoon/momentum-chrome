const clockTitle = document.querySelector(".dday-subtitle");
const ddaySubmitBtn= document.querySelector(".dday-submit");
const ddayDate = document.getElementById("dday-date");
const ddayForm = document.querySelector(".dday-form");
const editBtn = document.querySelector(".edit-btn");
const dTitle= document.querySelector(".dday-user-title");
const nowDate = new Date();

const DDAY_KEY = "dday";
const DDAY_TITLE_KEY = "ddaytitle";

/* 유효성검사 */
function changeDate(e){
    let selectDate = e.target.value;
    if(new Date(selectDate)<=nowDate){
        alert("현재 이후의 날짜를 입력해주세요!");
    }
}

function setDday(event){
    event.preventDefault();
    ddayForm.classList.add("hidden");
    localStorage.setItem(DDAY_TITLE_KEY,dTitle.value);
    localStorage.setItem(DDAY_KEY,ddayDate.value);
    paintingDday();
}

function paintingDday(){
    const toDate = localStorage.getItem(DDAY_KEY);
    const toTitle = localStorage.getItem(DDAY_TITLE_KEY);
    const dDiff = new Date(toDate).getTime() - nowDate.getTime();
    const dDate = Math.round(dDiff / (1000 * 60 * 60 * 24));
    clockTitle.innerText = `${toTitle}까지 ${dDate}일 남았습니다.`;
    editBtn.classList.remove("hidden");
    editBtn.addEventListener("click",removeDday);
}

function removeDday(){
    ddayForm.classList.remove("hidden");
    localStorage.removeItem(DDAY_TITLE_KEY);
    localStorage.removeItem(DDAY_KEY);    
    clockTitle.innerText = "";
    editBtn.classList.add("hidden");
}
  

const ddayTitle = localStorage.getItem(DDAY_TITLE_KEY);

if(ddayTitle === null){   
    ddayDate.addEventListener("change", changeDate);
    ddayForm.addEventListener("submit",setDday);
}else{
    ddayForm.classList.add("hidden");
    editBtn.classList.remove("hidden");
    paintingDday();
    editBtn.addEventListener("click",removeDday);
}







