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
}


function paintMemo(){
  const memoValue = localStorage.getItem(MEMO_KEY);
  const memoState = Boolean(localStorage.getItem(MEMO_STATE)=="true" ? true:"" );
  memoArea.value = `${memoValue}`;
  memoArea.readOnly = memoState;
}

paintMemo();

saveBtn.addEventListener("click", onMemoSaved);
memoBtn.addEventListener("click", onMemoUpdate);

