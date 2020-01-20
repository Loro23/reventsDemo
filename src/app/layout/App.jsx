import React,{Component, Fragment} from 'react';
import {Container} from 'semantic-ui-react';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/navBar/NavBar';
import { Route } from 'react-router-dom';
import { eventDetailedPage } from '../../features/event/eventDetailed/eventDetailedPage';
import { HomePage } from '../../features/home/HomePage';
import { PeopleDashboard } from '../../features/user/PeopleDashboard/PeopleDashboard';
import { UserDetailedPage } from '../../features/UserDetailes/UserDetailedPage';
import { SettingsDashBoard } from '../../features/user/Settings/SettingsDashBoard';
import EventForm from '../../features/event/eventForm/EventForm';
import TestComponent from '../../features/testarea/TestComponent';


class App extends Component {
render(){
  return (
    <Fragment>
      <Route exact path='/'component={HomePage}/>
      <Route
      path='/(.+)'
      render={() => (
            <Fragment>
            <NavBar/>  
          <Container className="main">
            <Route path='/events'component={EventDashboard}/>
            <Route path='/events:id'component={eventDetailedPage}/>
            <Route path='/people'component={PeopleDashboard}/>
            <Route path='/profile:id'component={UserDetailedPage}/>
            <Route path='/settings'component={SettingsDashBoard}/>
            <Route path='/createEvent'component={EventForm}/>
            <Route path='/test' component={TestComponent}/>
          </Container>
        </Fragment>
      )}/>
    </Fragment>
  );
}
}


export default App;
