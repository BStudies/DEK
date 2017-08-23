import React, {Component} from 'react';

class Card extends Component{
    constructor(){
        super();
    }
    componentDidMount(){
        this.setState({
            user_id: this.props.card.user_id, 
            question: this.props.card.question, 
            answer: this.props.card.answer, 
            correct: this.props.card.correct, 
            setTime: this.props.card.setTime, 
            timesRight: this.props.card.timesRight, 
            timesWrong: this.props.card.timesWrong, 
            deckNumber: this.props.card.deckNumber
        })
    }
    render(){
        return(
            <div className="card">
                <div className="edit-front-card">
                <div className="show-front">
                <p>Front of card to be edited... </p>
                </div>

                <div className="edit-delete">
                <button className="edit-card-button">Edit</button>
                <button className="delete-card-button">Delete</button>
                </div>
            </div>

            <div className="edit-back-card">

                <div className="show-back">
                <p>Back of card to be edited...</p>
                </div>

                <div className="next-card-arrow">
                <p>Arrow goes here</p>
                </div>

                <div className="edit-delete">
                <button className="edit-card">Edit</button>
                <button className="delete-card">Delete</button>
                </div>

            </div>
            </div>
        )
        
    }
}

export default Card;