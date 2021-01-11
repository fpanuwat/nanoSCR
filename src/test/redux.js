

const initialState = {
    students: [
        {id:1, name:'JeepWart', score: 99},
        {id:2, name:'submition', score: 77},
    ]
}
const reducer = (state = initialState, action) => {
    //const all_list = [...state.students];
    switch(action.type){
        case 'GET_STUDENT_LIST':
            const all_list= {
                ...state,
                students:action.payload
            }

            return all_list;
        
        case 'DELETE':
            const del= {
                ...state,
                students: 
                    state.students.filter(items => items.id !== action.payload)}
            return del;
       /*case 'ADD':
            //add
            const addedState = state;
            return addedState;
        case 'DEL':
            //del
            const delState =state;
            return delState;*/
        default:
            break;
    }
    return state;
}
export default reducer;