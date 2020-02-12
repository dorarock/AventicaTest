import React from 'react';

class NewCard extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="newCard">
                <input className="input_txt" type="text" placeholder="Enter text"></input>
                <div className="btn_newCard_wrapper">
                    <button className="newCard_btn draft_btn" onClick={this.props.addCartToDraft}>Draft</button>
                    <button className="newCard_btn save_btn" onClick={this.props.saveCart}>Save</button>
                </div>
            </div>
        )
    }
}

export default NewCard;