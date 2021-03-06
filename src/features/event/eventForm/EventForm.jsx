import React, { Component } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import {createEvent, updateEvent} from '../eventActions'
import cuid from 'cuid'

const mapState =(state, ownProps) => {
  const eventId = ownProps.match.params.id
  let event ={
    title: "",
    date: "",
    city:"",
    venue:"",
    hostedBy:"",
  }

  if (eventId && state.events.length > 0){
    event = state.events.filter(event => event.id === eventId)[0]
  }
return {
  event
}

}

const actions = {
  createEvent,
  updateEvent
}


class EventForm extends Component {

state = {...this.props.event}

  componentDidMount(){
    if(this.props.selectedEvent !== null ){
      this.setState({
        ...this.props.selectedEvent
      })
    }
  }


  handleFormSubmit = (evt) => {
    evt.preventDefault()
    if(this.state.id){
      this.props.updateEvent(this.state)
      this.props.history.push(`/events/${this.state.id}`)
    }else {
      const newEvent = {
        ...this.state,
        id: cuid(),
        hostPhotoURL: "/assets/user.png"

      }
      this.props.createEvent(newEvent)
      this.props.history.push(`/events/`)
    }
    
  }

  handlChange= ({target:{name, value}}) =>{
    this.setState({
      [name]: value
    })
  }



    render() {
      const {title, date, city, venue, hostedBy} = this.state;
        return (
                  <Segment>
                    <Form onSubmit={this.handleFormSubmit} autoComplete="off">
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
                      <Button type="button" onClick={this.props.history.goBack}>Cancel</Button>
                    </Form>
                  </Segment>
        )
    }
}

export default connect(mapState, actions)(EventForm)