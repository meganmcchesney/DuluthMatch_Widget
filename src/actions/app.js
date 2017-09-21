import axios from 'axios'

export const CHOICES_LOADING = 'CHOICES_LOADING'
export const CHOICES_ERROR = 'CHOICES_ERROR'
export const CHOICES_POPULATE = 'CHOICES_POPULATE'
export const CHOICES_ADD = 'CHOICES_ADD'
export const CHOICES_REMOVE = 'CHOICES_REMOVE'
export const CHOICES_MATCH = 'CHOICES_MATCH'

export function choices_loading(bool) {
    return {
        type: CHOICES_LOADING,
        isLoading: bool
    }
}

export function choices_error(bool, error) {
    return {
        type: CHOICES_ERROR,
        hasError: bool,
        errorMessage: error.Message,
        stackTrace: error.stack
    }
}

export default function choices_fetchUserChoices(url) {
    return (dispatch) => {
        dispatch(choices_loading(true))

        axios.get(url)
            .then((response) => {
                if (response.status !== 200) {
                    throw Error(response.statusText)
                }
                dispatch(choices_loading(false))
                return response
            })
            .then((response) => response.data)
            .then((choices) => dispatch(choices_populateUserChoices(choices)))
            .catch((error) => {
                dispatch(choices_loading(false))
                dispatch(choices_error(true, error))
            })
    }
}

export function choices_populateUserChoices(choiceData) {
    return {
        type: CHOICES_POPULATE,
        choiceData
    }
}

export function choices_addSelected(choice) {
    return {
        type: CHOICES_ADD,
        choice
    }
}

export function choices_removeSelected(choice) {
    return {
        type: CHOICES_REMOVE,
        choice
    }
}
