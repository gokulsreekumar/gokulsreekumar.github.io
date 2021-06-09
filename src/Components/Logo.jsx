import React from "react";

class Logo extends React.Component {
    render() {
        return (
            <div className="logo">
                <img className="log__img__expanded" src={this.props.srcLarge} alt="" />
                <img className="log__img__short" src={this.props.srcSmall} alt="" />
            </div>
        );
    }
}

export default Logo;
