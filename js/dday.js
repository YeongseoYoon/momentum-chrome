const clockTitle = document.querySelector(".dday-subtitle");
const ddaySubmitBtn= document.querySelector(".dday-submit");
const dTitle= document.querySelector(".dday-user-title");
const ddayDate= document.querySelector(".dday-date").value;
const nowDate = new Date();

function setClock() {
  const dDiff = eveDate.getTime() - nowDate.getTime();
  const dDate = Math.round(dDiff / (1000 * 60 * 60 * 24));
  clockTitle.innerText = `${dTitle}까지 ${dDate}일 남았습니다.`;
}

function handlerSubmitDday(event){
    event.preventDefault();
    console.log(ddayDate);
    console.log(nowDate);
    if(ddayDate>=nowDate){
        setClock();
        setInterval(setClock, 1000);
    }else{
        alert("D-Day는 현재보다 미래");
    }

}

ddaySubmitBtn.addEventListener("submit", handlerSubmitDday);


