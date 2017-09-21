import { connect } from 'react-redux';
import { choices_removeSelected } from '../actions/app'
import { match_Post} from'../actions/match'
import Selections from '../components/Selections'

const mapStateToProps = (state) => ({
    loading: state.choices_Loading,
    error: state.choices_Error,
    userSelectionList: state.choices.filter(function(choice){
        return choice.selected === true})
})

const mapDispatchToProps = (dispatch, action) => ({
    removeSelection: (selection) => dispatch(choices_removeSelected(selection)),
    matchSelections: (selectionList) => dispatch(match_Post(selectionList))
})

var SelectionsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Selections)

export default SelectionsContainer