import {write} from "./writeNewEl";
import {closePopUpChangeWindow} from "../index";

const textPopupChange = document.getElementById('textPopupChange'),
    TextDescriptionChange = document.getElementById('TextDescriptionChange'),
    popupPriorityChange = document.getElementById('popupPriorityChange');

export const popupBtnChange = (state) => {
    for (let i = 0; i < state.list.length; i++) {
        if (state.list[i][5] === true) {
            state.list[i][1] = textPopupChange.value;
            state.list[i][2] = TextDescriptionChange.value;
            state.list[i][3] = popupPriorityChange.value;
            state.list[i][4] = 'open';
            let a = document.getElementsByClassName(`DivId${state.list[i][0]}`);
            a[0].remove();
            write(state, state.list[i][1], state.list[i][2], state.list[i][3], state.list[i][0]);
            closePopUpChangeWindow();
            return state.list[i][5] = false;
        }
    }
    return state;
};