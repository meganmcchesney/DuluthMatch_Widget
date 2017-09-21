import { combineReducers } from 'redux';
import { choices_Loading, choices_Error, choices } from './app';
import { match_Loading, match_Error,  match } from './match'

export default combineReducers({
    choices_Loading,
    choices_Error,
    choices,
    match_Loading,
    match_Error,
    match
});