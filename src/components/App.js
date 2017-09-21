import React from 'react'
import loadingImage from '../images/ajax-loader.gif'
import SelectionsContainer from '../containers/SelectionsContainer'
import MatchContainer from '../containers/MatchContainer'
import ContactRequestContainer from '../containers/ContactRequestContainer'

const App = function ({ loading, error, userChoices = [], addChoice }) {
    if (loading) {
        return (
            <div className="container shadowEffect">
                <img src={loadingImage} className="loading" alt="loading" />
            </div>
        )
    }

    if (error.errorExists) {
        return (
            <div className="error">Error occured: {error.errorMessage}
                <p>Stack trace: {error.stackTrace}</p>
            </div>
        )
    }
    return (
        <div>
            <div className="container">
                <h3>Choices</h3>
                <ul>
                    {userChoices.map(choice =>
                        <li className="shadowEffect" key={choice.id} onClick={() => addChoice(choice)}>{choice.text}</li>)}
                </ul>
            </div>
            <SelectionsContainer />
            <MatchContainer />
            <ContactRequestContainer />
        </div>
    )
}

export default App