const initialState = {
    list: [
        
        {
            title: 'Primeira nota',
            body: 'Corpo da primeira nota',
            color: '#EB2D2D',
            date_end: '12-05-2021',
            type: 'Alert'

        }
    ]
};

export default (state = initialState, action) => {
    let newList = [ ...state.list];

    switch(action.type){
        case 'ADD_NOTE':
            newList.push({
                title: action.payload.title,
                body: action.payload.body,
                color: action.payload.color,
                type: action.payload.type,
                date_end: action.payload.date_end,
            })
        break;
        case 'EDIT_NOTE':
            if(newList[action.payload.key]){
                newList[action.payload.key] = {
                    title: action.payload.title,
                    body: action.payload.body,
                    color: action.payload.color,
                    type: action.payload.type,
                    date_end: action.payload.date_end,
                }
            }
        break;
        case 'DEL_NOTE':
            newList = newList.filter((item, index)=> index != action.payload.key);
        break;
    }

    return {...state, list: newList};
}