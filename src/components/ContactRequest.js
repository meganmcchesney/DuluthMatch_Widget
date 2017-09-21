import React, { PropTypes }  from 'react'

const ContactRequest = ({ requestContactBool, submitContactRequest }) => {
    if (requestContactBool) {
        return (
            <div className='container'>
                <h3>Request Contact</h3>
                <form id='contactRequestForm' className="appForm">
                    <input type="text" placeholder="Name" className="appFormInput" required /><br />
                    <div className="appFlexBox">
                        <input type="radio" name="contactMethod" value="email" /><label htmlFor="email" className="radioLabel">Email</label>
                        <input type="radio" name="contactMethod" value="text" defaultChecked /><label htmlFor="text" className="radioLabel">Text</label>
                        <input type="radio" name="contactMethod" value="call" /><label htmlFor="call" className="radioLabel">Call</label>
                    </div>
                    <input type="text" placeholder="Contact Information" className="appFormInput" required /><br />
                    <input type="textarea" placeholder="Comment" className="appFormInput" />
                </form>
                <button className="btn shadowEffect" onClick={() => { submitContactRequest() }} >Submit</button>
                <div className="bottomContainerLink"><a>Cancel</a></div>
            </div>
        )
    } else {
        return (null)
    }
}

ContactRequest.PropTypes = {
    requestContactBool: PropTypes.bool.isRequired,
    submitContactRequest: PropTypes.func.isRequired
}

export default ContactRequest