import React, { Component } from "react";

class NumberOfEvents extends Component {
    state = {
        query: 32,
    };

    handleInputChanged = (event) => {
        const value = event.target.value;
        if (value >= 1 || value <= 32) {
            this.setState({
                query: value,
            });
            this.props.updateEvents(null, value);
        } else {
            alert("Please enter a number bewteen 1 and 32")
        }
    };

    render() {
        return (
            <div>
                <input
                    type='number'
                    className='numberOfEvents'
                    min={1}
                    max={32}
                    value={this.state.query}
                    onChange={this.handleInputChanged}
                />
            </div>
        );
    }
}

export default NumberOfEvents;
