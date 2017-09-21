import { connect } from 'react-redux'

import ContactRequest from '../components/ContactRequest'

const mapStateToProps = (state) => ({
    requestContactBool: state.match.contactRequested
})

const mapDispatchToProp = (dispatch, actions) => ({
    submitContactRequest : () => { dispatch()}
})

const ContactRequestContainer = connect(
    mapStateToProps,
    mapDispatchToProp
)(ContactRequest)

export default ContactRequestContainer