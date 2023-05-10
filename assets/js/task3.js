checkLeap.onclick=()=>{
    let leap=false;
    let nYear=year.value;
    checkYearCorrect(nYear);
  }
  
  year.onkeyup=function(){
    /*Почему когда нажимаю на input точку приходит value=""??, хотя в input эта точка стоит.
    
    */
    let inputData=this.value;
    inputData=inputData.replace(/[^0-9]/g, '');
    this.value=inputData;
    setMessage(inputData);
    
    return true;
  }
  
  
  function checkYearCorrect(year)
  //Проверка года на корректность
  {
    const startYear=1582;
    const finishYear=5000;
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