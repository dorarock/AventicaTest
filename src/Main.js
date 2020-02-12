import React from 'react';

export default props => (
    <div className="card_wrapper">
        {props.addedCard.length > 0 ? props.addedCard.map(card => (
            <div className="card" key={card.id}>
                <div className="card_name_wrapper">
                <span className="card_name">{card.name}</span>
                <div className="mark" data-id={card.id}></div>
                </div>
                <div className="btn_wrapper">
                    <button className="card_draft_btn crt_btn" data-id={card.id} onClick={(evt) => props.moveToDraft(card, evt)}>Draft</button>
                    <button className="card_mark_btn crt_btn" data-id={card.id} onClick={(evt) => props.onChangeColor(card, evt)}>Mark</button>
                </div>
            </div>
         ) ) : <div className="noCards" onMouseOver={(evt) => props.onHover(evt)}> No cards in here :( </div>}

    </div>
)
