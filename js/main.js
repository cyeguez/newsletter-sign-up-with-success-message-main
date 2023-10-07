const button = document.getElementById('btn-submit');
const fieldEmail = document.getElementById('fieldEmail');
const expreg= /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
const errorMassage = document.getElementById('error-massage');
const newSletter = document.querySelector('.newsletter');
const success = document.querySelector('.success');
const btnDismiss = document.getElementById('bnt-dismiss');


console.log(newSletter)
function validation(e){
  e.preventDefault();
  let valueEmail= fieldEmail.value;
  if(!expreg.test(valueEmail)){
    fieldEmail.classList.add('error');
    errorMassage.classList.remove('hidden');
  }else{
    fieldEmail.classList.remove('error');
    errorMassage.classList.add('hidden');
    newSletter.classList.add('hidden');
    success.classList.remove('hidden');


  }
}




button.addEventListener('click', validation);
btnDismiss.addEventListener('click',()=>{

  success.classList.add('hidden');
  location.reload();


});
