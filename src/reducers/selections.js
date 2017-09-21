import initialState from './initialState';
import { SELECTIONS_LOADING, SELECTIONS_ERROR, SELECTIONS_POPULATE, SELECTIONS_REMOVE } from '../actions/selections'

export function selections_Loading(state = false, action) {
    switch (action.type) {
        case SELECTIONS_LOADING:
            return action.isLoading
        default:
            return state
    }
}

export function selections_Error(state = false, action) {
    switch (action.type) {
        case SELECTIONS_ERROR:
            return {
                errorExists: action.hasError,
                errorMessage: action.errorMessage,
                stackTrace: action.stackTrace
            }
        default:
            return state
    }
}

export function selections_Reducer(state = initialState.userSelectionList, action) {
    switch (action.type) {
        case SELECTIONS_POPULATE:
            return Object.assign({}, state, {
                userSelectionList: []
            })
        default:
            return state
    }
}

export function selections_RemoveSelection(state = initialState.userSelectionList, action) {
    switch (action.type) {
        case SELECTIONS_REMOVE:
            return [
                ...state.filter(selection => selection.id !== action.selectionId)
            ]
        default:
            return state
    }
}