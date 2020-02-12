import React from 'react';

export default props => (
    <div className="draft">
        <h2>Draft</h2>
        {  props.newCards.length > 0 ? props.newCards.map(newCard => (
            <div className="draft_card" key={newCard.id}>
               <input className="changeTxtInput" type="text" placeholder="Enter text" data-id={newCard.id}></input>
                <span className="draft_card_txt" onClick={(evt) => props.changeText(newCard, evt)}> {newCard.name}</span>
                <div className="btn_draft_wrapper">
                    <button className="draft_btn btn_remove crt_btn" data-id={newCard.id} onClick={(evt) => props.removeFromDraft(newCard)}>Remove</button>
                    <button className="draft_btn btn_save crt_btn" onClick={(evt) => props.saveFromDraft(newCard)}>Save</button>
                </div>
            </div>)) : null}

    </div>
)