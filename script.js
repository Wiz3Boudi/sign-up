const namee = document.getElementById('name');
const gmail = document.getElementById('gmail');
const age = document.getElementById('age');
const PhoneNumber = document.getElementById('PhoneNumber');
const reset = document.getElementById('reset');
const Submit = document.getElementById('Submit');
const button = document.querySelectorAll('button');
const hiddenClass = document.getElementById('main-id');
const popupMainClass = document.getElementById('popupMainClass');
const popupParagraphId = document.getElementById('popup-paragraph-id"');
const closePopUp = document.getElementById('close');
const popupOkButtonId = document.getElementById('popup-ok-button-id');
const changedText  = document.getElementById('changed-Text');
const App = document.getElementById('app');


reset.addEventListener('click',deleteAll);
Submit.addEventListener('click',checkValues);
closePopUp.addEventListener('click',hiddenPopup);
closePopUp.addEventListener('mouseout',showContents);
window.addEventListener('load',focuss);
popupOkButtonId.addEventListener('click',logToApp);

function hiddenPopup(){
     popupMainClass.style.display = 'none';
};
function deleteAll(){
     namee.value = '';
          gmail.value = '';
               age.value = '';
                    PhoneNumber.value = '';
};
function displayPopUp(){
    return  popupMainClass.style.display='block'
};
function hiddenContentDisplay(){
      hiddenClass.style.display = 'none';
     document.body.style.backgroundColor = 'white';
};
function checkValues(){
    if(namee.value && gmail.value && age.value && PhoneNumber.value !== ''){
          // ageLimit();
          displayPopUp();
          deleteAll();
          hiddenContentDisplay();
     }else{
          displayPopUp();
          okInnerText();
          setTimeout(() => {
               hiddenPopup();
          }, 1200);
     };
};
function showContents(){
  return window.location.reload();
};
function focuss(){
     namee.focus()
};
function okInnerText(){
     popupMainClass.innerText = 'please fill out the form !';
     popupMainClass.style.backgroundColor = 'palevioletred';
     popupMainClass.style.color ='white';
     popupMainClass.style.alignContent = 'center';
     popupMainClass.style.fontSize = '30px';     
};
function logToApp(){
     App.click();
     showContents();
}
// function ageLimit(){
//      if(age.length <=2){
//           return console.log('yes just 2 digits');
//      }
//      else{
//           return console.log('age more than Expected');
//      }
// }
