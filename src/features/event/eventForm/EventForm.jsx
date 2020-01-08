import React, { Component } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'

class EventForm extends Component {

state= {
  title: "",
  date: "",
  city:"",
  venue:"",
  hostedBy:"",
}

  handleFormsubmit = (evt) => {
    evt.preventDefault()
    console.log(this.state)
  }

  handlChange= (evt) =>{
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }


    render() {
      const {cancleFormOpen} = this.props;
      const {title, date, city, venue, hostedBy} = this.state;
        return (
                  <Segment>
                    <Form onSubmit={this.handleFormsubmit} autoComplete="off">
                      <Form.Field>
                        <label>Event Title</label>
                        <input 
                        name="title"
                        onChange={this.handlChange}
                        value={title}
                        placeholder="Eventname"/>
                      </Form.Field>
                      <Form.Field>
                        <label>Event Date</label>
                        <input
                        name="date"
                        onChange={this.handlChange}
                        type="date"
                        value={date}
                        placeholder="Date"/>
                      </Form.Field>
                      <Form.Field>
                        <label>City</label>
                        <input
                        name="city"
                        onChange={this.handlChange}
                        value={city}
                        placeholder="City"/>
                      </Form.Field>
                      <Form.Field>
                        <label>Venue</label>
                        <input  
                        name="venue"
                        onChange={this.handlChange}
                        value={venue}
                        placeholder="Venue"/>
                      </Form.Field>
                      <Form.Field>
                        <label>Hosted By</label>
                        <input
                        name="hostedBy"
                        onChange={this.handlChange}
                        value={hostedBy}
                        placeholder="hosted by" />
                      </Form.Field>
                      <Button positive type="submit">
                        Submit
                      </Button>
                      <Button type="button" onClick={cancleFormOpen}>Cancel</Button>
                    </Form>
                  </Segment>
        )
    }
}

export default EventForm