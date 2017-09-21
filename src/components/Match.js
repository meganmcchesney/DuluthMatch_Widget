import React, { PropTypes }  from 'react'
import loadingImage from '../images/ajax-loader.gif'

const Match = ({  matchData, requestContact }) => {
    if (matchData.fullName != null) {
        return (
            <div className="container">
                    <h3>Match</h3>
                    <div id='matchObject'>
                        <span>{matchData.fullName}</span><br />
                        <p>"{matchData.statement}"</p>
                        <img src={matchData.image} alt="Matched contact"/>
                        <div className="matchListDiv">
                            <p> {matchData.fullName}'s interests include:</p>
                            <ul className="matchList">{matchData.interests.map(interest => <li className="shadowEffect smallListItem" key={interest.id}>{interest.text}</li>)}</ul>
                        </div>
                        <button className="btn" onClick={() => { requestContact() }}>Request Contact</button>
                        <div className="bottomContainerLink"><a>Match me with someone else</a></div>
                    </div>
            </div>
        )
    }
    else {
        return null;
    }
}

Match.propTypes = {
    matchData: PropTypes.object.isRequired,
    requestContact: PropTypes.func.isRequired
};

export default Match