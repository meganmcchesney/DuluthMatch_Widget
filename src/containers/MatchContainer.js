import { connect } from 'react-redux'

import Match from '../components/Match'
import {match_requestContact_Get} from '../actions/match'

const mapStateToProps = (state, actions) => ({
    matchData: state.match
})

const mapDispatchToProp = (dispatch, actions) => ({
    requestContact: () => { dispatch(match_requestContact_Get(true)) }
})

var MatchContainer = connect(
    mapStateToProps,
    mapDispatchToProp
)(Match)

export default MatchContainer