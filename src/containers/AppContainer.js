import { connect } from 'react-redux';
import { choices_addSelected } from '../actions/app'
import App from '../components/App'

const mapStateToProps = (state) => ({
    loading: state.choices_Loading,
    error: state.choices_Error,
    userChoices: state.choices.filter(function (choice) {
        return choice.selected === false
    }),
    userSelections: state.choices__MarkAsSelected
})

const mapDispatchToProps = (dispatch) => ({
    addChoice: (choice) => dispatch(choices_addSelected(choice))
})

var AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps)(App)

export default AppContainer