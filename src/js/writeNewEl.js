const container = document.getElementById('container');

export const write = (state, title, description, priority, idElement) => {
    let mainDiv = document.createElement('div');
    mainDiv.classList.add('openList', `DivId${idElement}`);
    // Title
    let HTitle = document.createElement('h3');
    HTitle.textContent = title;
    mainDiv.appendChild(HTitle);
    // Description
    let descriptionText = document.createElement('p');
    descriptionText.textContent = description;
    mainDiv.appendChild(descriptionText);
    // priority div
    let secondDiv = document.createElement('div');
    secondDiv.textContent = priority;
    secondDiv.classList.add('secondDivClass');
    mainDiv.appendChild(secondDiv);
    // Select Bar
    let selectBtnBar = document.createElement('select');
    selectBtnBar.setAttribute('class', 'selectBtnBarStyle');
    selectBtnBar.setAttribute('class', `DivId${idElement}`);
    // empty option
    let emptySelectBar = document.createElement('option');
    emptySelectBar.setAttribute('value', '');
    emptySelectBar.textContent = '...';
    // dell
    let selectDellBtnBar = document.createElement('option');
    selectDellBtnBar.setAttribute('value', 'Dell');
    // selectBtnBar.setAttribute('onchange', 'ChangeBar(this.value,this.classList)');
    selectDellBtnBar.textContent = 'Dell';
    // done
    let selectDoneBtnBar = document.createElement('option');
    selectDoneBtnBar.setAttribute('value', 'Done');
    selectDoneBtnBar.textContent = 'Done';
    // edit
    let selectEditBtnBar = document.createElement('option');
    selectEditBtnBar.setAttribute('value', 'Edit');
    selectEditBtnBar.textContent = 'Edit';

    selectBtnBar.prepend(emptySelectBar);
    selectBtnBar.appendChild(selectDellBtnBar);
    selectBtnBar.appendChild(selectDoneBtnBar);
    selectBtnBar.appendChild(selectEditBtnBar);
    mainDiv.appendChild(selectBtnBar);
    container.prepend(mainDiv);
};

