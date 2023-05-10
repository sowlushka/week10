const startYear=1582;//Год введения Григорианского календаря
const finishYear=500000;//Ограничение сверху

checkLeap.onclick=()=>{
  if (checkYearCorrect(year.value))
  {
    if(isLeap(year.value)){
      setMessage('Год является високосным');
    }
    else{
      setMessage('Год не високосный');
    }
  }
  
}

year.onkeydown=function(e){

  if(e.keyCode==13)  checkLeap.onclick(e);

  if(e.keyCode!=8 && e.keyCode!=0 && !((e.keyCode>=0x30 && e.keyCode<=0x39) || (e.keyCode>=0x60 && e.keyCode<=0x69))){
			e.preventDefault();
		}
}

year.oninput=function (e){
  if(e.data==".")e.preventDefault();
  this.value=this.value.replace(/[^0-9]/g, '');
}


function checkYearCorrect(year)
//Проверка года на корректность
{
  if(!year){
    setMessage("");
    return false;
  }
  else if(year<startYear)
  {
    setMessage("В данном году Григорианский стиль не применялся");
    return false;
  }
  else if(year>finishYear)
  {
    setMessage("Накопленная ошибка в датах не позволяет применять Григорианский стиль");
    return false;
  }  
  return true;
}


function setMessage(message)
//Функция отображения сообщений
{
  if (!message.length){
    result1.style="";
  }
  else
  {
    result1.style="background-color: var(--bg-mess-color)";
  }
  result1.innerHTML=message;
}

function isLeap(nYear)
//Проверка на високосный год
{
  return !(nYear%400) || (nYear%100 && !(nYear%4));
}