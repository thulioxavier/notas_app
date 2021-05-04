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
    
    switch(action.type){
        case 'ADD_NOTE':
            
        break;
    }

    return state;
}