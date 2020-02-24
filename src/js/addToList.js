export let addToList = (state, title, description, priority, idElement) => {
    let arr = [idElement, title, description, priority, 'open', false];
    return state.list.push(arr);
};