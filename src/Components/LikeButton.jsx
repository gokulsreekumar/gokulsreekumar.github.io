import React from 'react';


class LikeButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {numberOfLikes: props.numberOfLikes, isToggleOn: false};
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    
    }

    handleClick() {
        this.setState(({numberOfLikes, isToggleOn}) => {
            if(isToggleOn === false) {
                return {
                    numberOfLikes: numberOfLikes + 1, 
                    isToggleOn: true
                }
            } else {
                return {
                    numberOfLikes: numberOfLikes - 1, 
                    isToggleOn: false
                }
            }
        });
    }
    
    render() {
       return (
           <div>
            <button class="like_btn" onClick={this.handleClick}>
                {
                    this.state.isToggleOn ? <i class="fas fa-heart"></i> 
                                          : <i class="far fa-heart"></i> 
                }    
                <p class="number_of_likes"> {this.state.numberOfLikes} </p>
            </button>
           </div>
       );
    }
}

export default LikeButton;