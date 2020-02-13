import './css/main.css';
import './scss/main.scss';
import {addToList} from './js/addToList'
import {write} from "./js/writeNewEl";
import ChangeBar from "./js/ChengeBar";
import SelectSort from "./js/SelectSecrh";
import {popupBtnChange} from "./js/popupBtnChange";

const createBtn = document.getElementById('createBtn'),
    textPopup = document.getElementById('textPopup'),
    TextDiscription = document.getElementById('TextDiscription'),
    popupPriority = document.getElementById('popupPriority'),
    createPopupBtn = document.getElementById('createPopupBtn'),
    createPopupBtnChange = document.getElementById('createPopupBtnChange'),
    container = document.getElementById('container'),
    menu = document.querySelector('.menu');

let state = {
    list: []
};
let idElement = 0;

// open popUP
export const openPopUpWindow = () => {
    document.getElementById('popupWindow').style.display = 'block';
    document.getElementById('fonts').style.display = 'block';
};
// close popUp
export const closePopUpWindow = () => {
    document.getElementById('popupWindow').style.display = 'none';
    document.getElementById('fonts').style.display = 'none';
};
// close PopUp Change
export const closePopUpChangeWindow = () => {
    document.getElementById('popupChange').style.display = 'none';
    document.getElementById('fontsChange').style.display = 'none';

    for (let i = 0; i < state.list.length; i++) {
        if (state.list[i][5] === true) state.list[i][5] = false;
        let a = document.getElementsByClassName(`DivId${state.list[i][0]}`);
        a[1].value = '';
    }
};
// open PopUp Change
export const openPopUpChangeWindow = () => {
    document.getElementById('popupChange').style.display = 'block';
    document.getElementById('fontsChange').style.display = 'block';
};
// when click create in nuv menu
createBtn.addEventListener('click', openPopUpWindow);
// when click close popUp button
document.getElementById('cancelPopupBtn').addEventListener('click', closePopUpWindow);
document.getElementById('cancelPopupBtnChange').addEventListener('click', closePopUpChangeWindow);
//add to list
createPopupBtn.addEventListener('click', () => {
    addToList(state, textPopup.value, TextDiscription.value, popupPriority.value, idElement);
    write(state, textPopup.value, TextDiscription.value, popupPriority.value, idElement);
    closePopUpWindow();
    textPopup.value = TextDiscription.value = '';
    popupPriority.value = 'hight';
    idElement += 1;
    console.log(state);
});
// when change container select
container.addEventListener('change', event => {
    if (event.target.matches('select')) {
        ChangeBar(state, event.target.value, event.target.className);
    } else return null;
});
// when change menu select or input
menu.addEventListener('change', event => {
    if (event.target.matches('select')) {
        SelectSort(state, event.target.value);
    } else if (event.target.matches('input')) {
        SelectSort(state, event.target.id);
    }
});
//when click on PopupBtnChange
createPopupBtnChange.addEventListener('click', () => {
    popupBtnChange(state,);
});