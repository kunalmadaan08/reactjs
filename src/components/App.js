import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import AllContacts from './Contacts/list-contacts';

class App extends React.Component{
    render(){
        return(
        	<Router>
        		<Switch>
				  	<Route path="/" component={AllContacts} />
	            </Switch>
			</Router>
        );
    }
}

export default App;