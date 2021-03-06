/**
 * ************************************
 *
 * @module  MenteeTicketBox
 * @author
 * @date
 * @description  component that renders a single ticketbox for each mentee
 *
 * ************************************
 */

import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
let buttons;
class MenteeTicketBox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    //if (this.props.activeTickets[i].status === 'active') {
    //   //has not been picked up yet
    //   //Delete button is active but Resolve is not
    // } this.props.activeTickets[i].status === 'pending') {
    //   //your ticket has been picked up.
    //   //Resolve is active but Delete is not
    // }
    // console.log(this.props.ticket)
    if (this.props.ticket.status === "active") {
      buttons = (
        <span>
          <Button
            onClick={() => {
              this.props.resolveTicket(this.props.ticket.messageId);
            }}
            type="button"
            className="resolve"
          >
            Resolve
          </Button>
          {/* <Button disabled={true} type="button" className="btn btn-secondary">Resolve</Button> */}
          <Button
            onClick={() => this.props.deleteTicket(this.props.ticket.messageId)}
            type="button"
            className="delete"
          >
            Delete
          </Button>
        </span>
      );
    } else {
      buttons = (
        <span>
          <Button
            onClick={() =>
              this.props.resolveTicket(this.props.ticket.messageId)
            }
            type="button"
            className="resolve"
          >
            Resolve
          </Button>
          <Button disabled={true} type="button" className="delete">
            Delete
          </Button>
        </span>
      );
    }
    return (
      <div className="ticketbox">
        <p className="myrequest">
          Request: <span className="req">{this.props.messageInput}</span>
        </p>
        <p className="expected">
          Expected Snaps:{" "}
          <span className="req">{this.props.messageRating}</span>
        </p>
        {buttons}
      </div>
    );
  }
}

export default MenteeTicketBox;
