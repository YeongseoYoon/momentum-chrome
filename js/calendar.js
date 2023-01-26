// Date 객체 생성
let date = new Date();


//renderCalendar 메소드
const renderCalendar = () => {
  const viewYear = date.getFullYear();
  const viewMonth = date.getMonth();

  // year-month 채우기
  document.querySelector('.year-month').textContent = `${viewYear}년 ${viewMonth + 1}월`;

  // 지난 달 마지막 Date, 이번 달 마지막 Date가져옴
  const prevLast = new Date(viewYear, viewMonth, 0);
  const thisLast = new Date(viewYear, viewMonth + 1, 0);

  const PLDate = prevLast.getDate();
  const PLDay = prevLast.getDay();

  const TLDate = thisLast.getDate();
  const TLDay = thisLast.getDay();

  // Dates 기본 배열들
  const prevDates = [];
  //TLDate+1만한 배열만들고 0~TLDate만큼의 배열 얻어낸뒤에 
  //slice로 첫번째 삭제
  const thisDates = [...Array(TLDate + 1).keys()].slice(1);
  const nextDates = [];

  // prevDates 계산
  //토요일이면 굳이 앞에 날짜들 표기할 필요 없음
  //지난달 날짜부터 1씩 줄은값을 unshift로 넣어줌
  if (PLDay !== 6) {
    for (let i = 0; i < PLDay + 1; i++) {
      prevDates.unshift(PLDate - i);
    }
  }

  // nextDates 계산
  //이번달 마지막 날짜부터 필요한만큼 채우기 위함
  for (let i = 1; i < 7 - TLDay; i++) {
    nextDates.push(i)
  }

  // Dates 합치기
  //concat으로도 배열 합치기 가능
  const dates = prevDates.concat(thisDates, nextDates);

  // Dates 정리
  //첫번째 날짜~마지막 날짜까지(현재 화면에 표시된)
  //이번달과 첫날과 마지막날 인덱스 알아 내기
  const firstDateIndex = dates.indexOf(1);
  const lastDateIndex = dates.lastIndexOf(TLDate);
  //첫번째 날짜 인덱스가 i보다 작거나 같고 마지막일이 i보다 크면 이번달이므로 this 클래스를
  //그렇지 않으면 other을 준다 -> 클래스 부여해 색칠해주기 위해
  dates.forEach((date, i) => {
    const condition = i >= firstDateIndex && i < lastDateIndex + 1
                      ? 'this'
                      : 'other';

    dates[i] = `<div class="date"><span class="${condition}">${date}</span></div>`;
  })
  // Dates 그리기
  document.querySelector('.dates').innerHTML = dates.join('');

  const today = new Date();
  //지금 보고 있는 달력이 오늘 날짜와 같다면(연도, 월)
  if (viewMonth === today.getMonth() && viewYear === today.getFullYear()) {
    //앞서 붙여준 .this를 가져다가 
    //date의 날짜가 오늘의 날짜와 같으면 today클래스를 붙여줌(표시 위함)
    for (let date of document.querySelectorAll('.this')) {
      if (+date.innerText === today.getDate()) {
        date.classList.add('today');
        break;
      }
    }
  }
}

renderCalendar();

const prevMonth = () => {
    date.setDate(1);
    //이전 달로 넘겨주려고 -1
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
}
  
  const nextMonth = () => {
    date.setDate(1);
    //다음달 +1
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
}

//오늘짜 해당 달력 그리기
const goToday = () => {
    date = new Date();
    renderCalendar();
}