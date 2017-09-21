export const SELECTIONS_LOADING = 'SELECTIONS_LOADING'
export const SELECTIONS_ERROR = 'SELECTIONS_ERROR'
export const SELECTIONS_POPULATE = 'SELECTIONS_POPULATE'
export const SELECTIONS_REMOVE = 'SELECTIONS_REMOVE'

export function selections_loading(bool) {
    return {
        type: SELECTIONS_LOADING,
        isLoading: bool
    }
}

export function selections_error(bool, error) {
    return {
        type: SELECTIONS_ERROR,
        hasError: bool,
        errorMessage: error.Message,
        stackTrace: error.stack
    }
}

export function selections_populateSelections(userSelectionList) {
    return {
        type: SELECTIONS_POPULATE,
        userSelectionList
    }
}

export function selections_removeSelection(selectionId) {
    return {
        type: SELECTIONS_REMOVE,
        selectionId
    }
}