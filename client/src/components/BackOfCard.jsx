import React, {Component} from 'react';

class BackOfCard extends Component{
    constructor(){
        super();
        this.state = {
            didMount: false,
        }
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
            deckNumber: this.props.card.deckNumber,
            didMount: true,
        })
    }



    handleInputChange = (e) => {
        const name=e.target.name;
        const value = e.target.value;
        this.setState({
            [name]:value,
        })
    }
    handleFormSubmit = (e) => {
        e.preventDefault();
        console.log('this is where we should put to /decks')
    }


    render(){
        if(this.state.didMount){
            return(
                <div className="cards-container">
                    
                    <div className="create-back">
                        <div className="create-back-side-card">
                            <p>Answer</p>
                            {/*http://fontawesome.io/icon/times-circle/*/}
                            {/*http://fontawesome.io/icon/check-circle-o/*/}
                        </div>
                    </div>

                    
                </div>
                
            )
        }
        return(
            <div>
                Loading...
            </div>    
        )
        
    }
}

export default BackOfCard;