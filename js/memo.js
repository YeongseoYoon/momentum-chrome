const memoArea = document.querySelector("#memo-area");
const saveBtn = document.querySelector(".save-btn");
const memoBtn = document.querySelector(".memo-btn");

const MEMO_KEY = "memo";
const MEMO_STATE = "memostate";

function onMemoSaved(event){
  event.preventDefault();
  localStorage.setItem(MEMO_KEY, memoArea.value);
  memoArea.readOnly=true; 
  localStorage.setItem(MEMO_STATE, memoArea.readOnly);
}

function onMemoUpdate(event){
  event.preventDefault();
  memoArea.readOnly=false; 
  localStorage.setItem(MEMO_STATE, memoArea.readOnly);
  console.log(memoArea.readOnly);
}


function paintMemo(){
  const memoValue = localStorage.getItem(MEMO_KEY);
  const memoState = localStorage.getItem(MEMO_STATE);
  memoArea.value = `${memoValue}`;
  memoArea.readOnly = memoState;
  console.log(memoArea.readOnly);
}


paintMemo();

saveBtn.addEventListener("click", onMemoSaved);
memoBtn.addEventListener("click", onMemoUpdate);

