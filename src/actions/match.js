import axios from 'axios'

export const MATCH_LOADING = 'MATCH_LOADING'
export const MATCH_ERROR = 'MATCH_ERROR'
export const MATCH = 'MATCH'
export const MATCH_GET_CONTACTFORM = 'MATCH_GET_CONTACTFORM'
export const MATCH_POST_CONTACTFORM = 'MATCH_POST_CONTACTFORM'

export function match_loading(bool) {
    return {
        type: MATCH_LOADING,
        isLoading: bool
    }
}

export function match_error(bool, error) {
    return {
        type: MATCH_ERROR,
        hasError: bool,
        errorMessage: error.Message,
        stackTrace: error.stack
    }
}

export function match_Post(selectionList) {
    return (dispatch) => {
        dispatch(match_loading)
        axios.get('http://demo8867352.mockable.io/ambassadorData')
            .then((response) => dispatch(match(response.data)))
            .catch((error) => match_error(true, error))
    }
}

export function match(matchData) {
    return {
        type: MATCH,
        matchData
    }
}

export function match_requestContact_Get(contactRequested) {
    return {
        type: MATCH_GET_CONTACTFORM,
        contactRequested
    }
}

export function match_requestContact_Post(formData) {
    return {
        type: MATCH_POST_CONTACTFORM
    }
}