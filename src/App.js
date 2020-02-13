import React from 'react';
import './App.css';
import Header from './Header.js';
import Main from './Main';
import NewCard from './NewCard';
import Draft from './Draft';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      greenMark: [],
      newCards: [],

      addedCard: [
        {
          'id': 1,
          'name': 'text1',
          mark: false
        },

        {
          'id': 2,
          'name': 'text2',
          mark: false
        },

        {
          'id': 3,
          'name': 'text3',
          mark: false
        },

        {
          'id': 4,
          'name': 'text4',
          mark: false
        },

        {
          'id': 5,
          'name': 'text5',
          mark: false
        },

        {
          'id': 6,
          'name': 'text6',
          mark: false
        },

        {
          'id': 7,
          'name': 'text7',
          mark: false
        },

        {
          'id': 8,
          'name': 'text8',
          mark: false
        }
      ]
    }

    this.addCartToDraft = this.addCartToDraft.bind(this);
    this.saveCart = this.saveCart.bind(this);
    this.onChangeColor = this.onChangeColor.bind(this);
    this.moveToDraft = this.moveToDraft.bind(this);
    this.removeFromDraft = this.removeFromDraft.bind(this);
    this.saveFromDraft = this.saveFromDraft.bind(this);
    this.onHover = this.onHover.bind(this);
    this.changeText = this.changeText.bind(this);
    this.clickLisener = this.clickLisener.bind(this)
  }


  saveFromDraft(newCard) {
    let inputs = document.querySelectorAll('.changeTxtInput');
    inputs.forEach(input => {
      if (input.dataset.id == newCard.id) {
        let val = input.value;  
        console.log(val);
        if(val === '') {
          newCard.name  = input.placeholder;
        }else {
          newCard.name = val;
        }
      }
    })

    let card = {
      id: Math.floor(Math.random() * 98) + 2,
      name: newCard.name,
      mark: false
    }

    this.setState((prevState) => ({
      addedCard: [...prevState.addedCard, card]
    }));

    let index = this.state.newCards.findIndex(el => el.id === newCard.id);
    let deletedCard = this.state.newCards.splice(index, 1);

    this.setState({
      newCards: this.state.newCards
    });
  }



  removeFromDraft(newCard) {
    console.log(this.state.newCards);
    let index = this.state.newCards.findIndex(el => el.id === newCard.id);

    let deletedCard = this.state.newCards.splice(index, 1);

    this.setState({
      newCards: this.state.newCards
    });
  }



  moveToDraft(card) {
    let newCard = {
      id: card.id,
      name: card.name,
      mark: card.mark
    }
    this.setState((prevState) => ({
      newCards: [...prevState.newCards, newCard]
    }));

    let indexCard = this.state.addedCard.findIndex(el => el.id === card.id);
    let indexMark = this.state.greenMark.findIndex(el => el === card.id);
    let deletedCard = this.state.addedCard.splice(indexCard, 1);
    let deletelMark = this.state.greenMark.splice(indexMark, 1);
    this.setState({
      addedCard: this.state.addedCard,
      greenMark: this.state.greenMark
    });

    console.log(newCard, this.state);
  }



  onChangeColor(card, evt) {
    let marks = document.querySelectorAll('.mark');
    if (evt.target.innerText == 'Mark') {
      marks.forEach(mark => {
        if (mark.dataset.id == card.id) {
          mark.classList.add('mark_green');
          evt.target.innerText = 'Unmark';
        }
      })

      this.setState({ greenMark: [...this.state.greenMark, card.id] })


    } else {
      marks.forEach(mark => {
        if (mark.dataset.id == card.id) {
          mark.classList.remove('mark_green');
          evt.target.innerText = 'Mark';
        }
      })

      let index = this.state.greenMark.findIndex(el => el.id === card.id);
      let deletedMark = this.state.greenMark.splice(index, 1);
      this.setState({
        greenMark: this.state.greenMark
      });
    }

  }



  addCartToDraft() {
    let input = document.querySelector('.input_txt');
    let val = document.querySelector('.input_txt').value;

    if (val == '') {
      input.classList.add('alarmValue');
      input.placeholder = 'Введите текст!'

    } else {
      input.classList.remove('alarmValue');

      let newCard = {
        id: Math.floor(Math.random() * 98) + 2,
        name: val,
        mark: false
      }

      document.querySelector('.input_txt').value = '';

      this.setState((prevState) => ({
        newCards: [...prevState.newCards, newCard]
      }));
    }
  }



  saveCart() {
    let input = document.querySelector('.input_txt');
    let val = document.querySelector('.input_txt').value;
    if (val == '') {
      input.classList.add('alarmValue');
      input.placeholder = 'Введите текст!'
    } else {
      input.classList.remove('alarmValue');

      let newCard = {
        id: Math.floor(Math.random() * 98) + 2,
        name: val,
        mark: false
      }

      document.querySelector('.input_txt').value = '';
      input.placeholder = 'Enter text'

      this.setState((prevState) => ({
        addedCard: [...prevState.addedCard, newCard]
      }));
    }
  }



  onHover(evt) {
    evt.target.innerText = "Let`s add it!"
  }



  changeText(newCard, evt) {
    let inputs = document.querySelectorAll('.changeTxtInput');

    inputs.forEach(input => {
      if (input.dataset.id == newCard.id) {
        input.style.display = 'block';
        input.placeholder = newCard.name;
        evt.target.style.display = 'none';
      }
    })
  }

  clickLisener(evt) {
    let draftField = document.querySelector('.draft');
    let draft_cards_field = document.querySelectorAll('.draft_card_txt');
    let inputs = document.querySelectorAll('.changeTxtInput');
    if(evt.target == draftField) {
      draft_cards_field.forEach(card=>{
        card.style.display = "block"
      })
    }

    if(evt.target == draftField) {
      inputs.forEach(input=>{
        input.style.display = "none"
      })
    }

  }

  render() {
    return (
      <div className="App" onClick={(evt) => this.clickLisener(evt)}>
        <Header
          greenMark={this.state.greenMark}
        />
        <div className="main_content_wrapper">

          <div className="left_col">
            <NewCard
              addCartToDraft={this.addCartToDraft}
              saveCart={this.saveCart}
            />
            <Draft
              newCards={this.state.newCards}
              removeFromDraft={this.removeFromDraft}
              saveFromDraft={this.saveFromDraft}
              changeText={this.changeText}
            />
          </div>
          <div className="purple_wrapper">
            <Main
              mark={this.state.mark}
              addedCard={this.state.addedCard}
              onChangeColor={this.onChangeColor}
              moveToDraft={this.moveToDraft}
              onHover={this.onHover}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
