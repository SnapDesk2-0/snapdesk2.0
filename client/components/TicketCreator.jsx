/**
 * ************************************
 * @module  TicketCreator
 * @author
 * @date
 * @description presentation component that creates a Mentee post with message, topics, and expected stars
 *
 *
 * ************************************
 */

import React from "react";
import { Form, Button } from "react-bootstrap";

const TicketCreator = props => (
  <div>
    <Form
      onSubmit={e => {
        e.preventDefault();
        props.postTicket();
      }}
    >
      <Form.Group
        className="inputReq"
        controlId="exampleForm.ControlTextarea1"
        onChange={props.updateMessage}
      >
        <Form.Label className="prompt">What do you need help with?</Form.Label>
        <Form.Control
          className="inputText"
          as="textarea"
          rows="3"
          value={props.messageInput}
        />
      </Form.Group>
      <Form.Group className="rating" onChange={props.updateRating}>
        <Form.Check
          className="snap"
          inline
          label="1"
          type="radio"
          id="snap-1"
          name="snap-form"
          value={1}
        />
        <Form.Check
          className="snap"
          inline
          label="2"
          type="radio"
          id="snap-2"
          name="snap-form"
          value={2}
        />
        <Form.Check
          className="snap"
          inline
          label="3"
          type="radio"
          id="snap-3"
          name="snap-form"
          value={3}
        />
        <Form.Check
          className="snap"
          inline
          label="4"
          type="radio"
          id="snap-4"
          name="snap-form"
          value={4}
        />
        <Form.Check
          className="snap"
          inline
          label="5"
          type="radio"
          id="snap-5"
          name="snap-form"
          value={5}
        />
      </Form.Group>
      <Button
        id="postButton"
        className="btn btn-secondary btn-md"
        type="submit"
      >
        Post
      </Button>
    </Form>
  </div>
);

export default TicketCreator;
