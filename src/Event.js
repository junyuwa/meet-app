import React, { Component } from "react";

class Event extends Component {
    state = {
        hide: true,
    };

    handleItemClick = () => {
        this.setState((prevState) => ({
            hide: !prevState.hide,
        }));
    };

    render() {
        const { event } = this.props;
        const { hide } = this.state;
        return (
            <div className="event">
                <h2 className="eventSummary">{event.summary}</h2>
                <div className="eventTime">
                    {new Date(event.start.dateTime).toISOString()}
                </div>
                <br />
                <div className="eventLocation">{event.location}</div>
                <br />
                {!hide && (
                    <div className="eventDetail">
                        <a className="link" href={event.htmlLink}>
                            See details on Google Calendar
                        </a>
                        <p>Description: {event.description}</p>
                    </div>
                )}
                <button className="detailsButton" onClick={this.handleItemClick}>
                    {hide ? "Details" : "Hide Details"}
                </button>
            </div>
        );
    }
}

export default Event;
