import { CHOICES_LOADING, CHOICES_ERROR, CHOICES_POPULATE, CHOICES_ADD, CHOICES_REMOVE } from '../actions/app'

export function choices_Loading(state = false, action) {
    switch (action.type) {
        case CHOICES_LOADING:
            return action.isLoading
        default:
            return state
    }
}

export function choices_Error(state = false, action) {
    switch (action.type) {
        case CHOICES_ERROR:
            return {
                errorExists: action.hasError,
                errorMessage: action.errorMessage,
                stackTrace: action.stackTrace
            }
        default:
            return state
    }
}

export function choices(state = [], action) {
    switch (action.type) {
        case CHOICES_POPULATE:
            return  action.choiceData
        case CHOICES_ADD:
            state.find(choice => choice.id === action.choice.id).selected = true
            return [
                ...state
            ]
        case CHOICES_REMOVE:
            state.find(choice => choice.id === action.choice.id).selected = false
            return [
                ...state
            ]
        default:
            return state
    }
}