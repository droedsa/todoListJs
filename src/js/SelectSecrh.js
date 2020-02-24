const processed = document.getElementById('processed');
const priority = document.getElementById('priority');
const searchBar = document.getElementById('searchBar');

const SelectSort = (state, e) => {
    if (e === 'all' && processed.value !== 'all') e = processed.value;
    if (e === 'all' && priority.value !== 'all') e = priority.value;
    let searchBarValue = searchBar.value;
    switch (e) {
        case 'all':
            for (let i = 0; i < state.list.length; i++) {
                if ((processed.value === 'all' && priority.value === 'all') && state.list[i][1].includes(searchBarValue)) {
                    document.querySelector(`.DivId${state.list[i][0]}`).style.display = 'block';
                } else document.querySelector(`.DivId${state.list[i][0]}`).style.display = 'none';
            }
            break;
        case 'open':
        case 'done':
            for (let i = 0; i < state.list.length; i++) {
                if ((e === state.list[i][4] && (priority.value === state.list[i][3] || priority.value === 'all'))
                    && state.list[i][1].includes(searchBarValue)) {
                    document.querySelector(`.DivId${state.list[i][0]}`).style.display = 'block';
                } else {
                    document.querySelector(`.DivId${state.list[i][0]}`).style.display = 'none';
                }
            }
            break;
        case 'normal':
        case 'low':
        case 'hight':
            for (let i = 0; i < state.list.length; i++) {
                if ((e === state.list[i][3] && (processed.value === state.list[i][4] || processed.value === 'all'))
                    && state.list[i][1].includes(searchBarValue)) {
                    document.querySelector(`.DivId${state.list[i][0]}`).style.display = 'block';
                } else {
                    document.querySelector(`.DivId${state.list[i][0]}`).style.display = 'none';
                }
            }
            break;
        case 'searchBar':
            for (let i = 0; i < state.list.length; i++) {
                if (searchBarValue === '') {
                    document.querySelector(`.DivId${state.list[i][0]}`).style.display = 'block';
                } else if (state.list[i][1].includes(searchBarValue) &&
                    ((processed.value === state.list[i][4] && (priority.value === state.list[i][3] || priority.value === 'all'))
                        || (priority.value === state.list[i][3] && (processed.value === state.list[i][4] || processed.value === 'all')))) {
                    document.querySelector(`.DivId${state.list[i][0]}`).style.display = 'block';
                } else if ((processed.value === 'all' && priority.value === 'all') && state.list[i][1].includes(searchBarValue)) {
                    document.querySelector(`.DivId${state.list[i][0]}`).style.display = 'block';
                } else document.querySelector(`.DivId${state.list[i][0]}`).style.display = 'none';
            }
            break;
        default:
            break;
    }
};

export default SelectSort;