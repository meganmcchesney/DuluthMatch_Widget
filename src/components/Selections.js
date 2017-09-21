import React, { PropTypes } from 'react';

const Selections = ({ userSelectionList = [], removeSelection, matchSelections }) => {
    if (userSelectionList.length === 0) {
        return (
            <div className="container">
                <h3>Please make selections</h3>
            </div>
        )
    } else {
        return (
            <div className="container">
                <h3>Selections</h3>
                <ul>
                    {userSelectionList.map(selection => <li className="shadowEffect" key={selection.id} onClick={() => removeSelection(selection)}>{selection.text}</li>)}
                </ul>
                <button className="btn shadowEffect" onClick={() => matchSelections(userSelectionList)}>Match</button>
            </div>
        )
    }
}

Selections.propTypes = {
    userSelectionList: PropTypes.array.isRequired,
    removeSelection: PropTypes.func.isRequired,
    matchSelections: PropTypes.func.isRequired
};

export default Selections