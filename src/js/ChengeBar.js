import {openPopUpChangeWindow} from "../index";

const textPopupChange = document.getElementById('textPopupChange');
const TextDescriptionChange = document.getElementById('TextDescriptionChange');
const popupPriorityChange = document.getElementById('popupPriorityChange');
const container = document.getElementById('container');

const ChangeBar = (state, e, elementId) => {
    switch (e) {
        case 'Dell':
            for (let i = 0; i < state.list.length; i++) {
                if (elementId === ('DivId' + state.list[i][0])) {
                    let elementInDom = document.getElementsByClassName(elementId);
                    elementInDom[0].remove();
                    return state.list.splice(i, 1);
                }
            }
            break;
        case 'Edit' :
            for (let i = 0; i < state.list.length; i++) {
                if (elementId === (`DivId${state.list[i][0]}`)) {
                    openPopUpChangeWindow();
                    textPopupChange.value = state.list[i][1];
                    TextDescriptionChange.value = state.list[i][2];
                    popupPriorityChange.value = state.list[i][3];
                    state.list[i][5] = true;
                }
            }
            break;
        case 'Done':
            for (let i = 0; i < state.list.length; i++) {
                if (elementId === ('DivId' + state.list[i][0])) {
                    let elementInDom = document.getElementsByClassName(elementId);
                    elementInDom[0].classList.add('doneList');
                    elementInDom[1].value = '';
                    container.appendChild(elementInDom[0]);
                    return state.list[i][4] = 'done';
                }
            }
            break;
        default:
            break;
    }
};

export default ChangeBar;