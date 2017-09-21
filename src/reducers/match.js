import { MATCH_LOADING, MATCH_ERROR, MATCH, MATCH_GET_CONTACTFORM, MATCH_POST_CONTACTFORM } from '../actions/match'

export function match_Loading(state = false, action) {
    switch (action.type) {
        case MATCH_LOADING:
            return action.isLoading
        default:
            return state
    }
}

export function match_Error(state = false, action) {
    switch (action.type) {
        case MATCH_ERROR:
            return {
                errorExists: action.hasError,
                errorMessage: action.errorMessage,
                stackTrace: action.stackTrace
            }
        default:
            return state
    }
}

export function match(state = {}, action) {
    switch (action.type) {
        case MATCH:
            return action.matchData
        case MATCH_GET_CONTACTFORM:
            return {
                ...state, 
                contactRequested: action.contactRequested
                
            }
        case MATCH_POST_CONTACTFORM:
            return {
                ...state
            }
        default:
            return state
    }
}