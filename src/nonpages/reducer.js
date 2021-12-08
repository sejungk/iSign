




 export function reducer(state, action) {
    switch (action.type) {
        case 'start':
            return {...state, inProgress:true}
        case'set_lettersKey':
        return {...state , lettersKey:action.payload }
        case 'set_picture_index':
            return {...state, pictureIndex: action.payload}
        default:
            return state
    }
    }
