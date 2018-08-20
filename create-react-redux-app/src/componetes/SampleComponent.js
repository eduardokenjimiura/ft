import React, { Component } from 'react';
import { Input, Button, Textarea } from '@cathodevel/quantum';
const initialState = {
    newValue: ["Saab", "Volvo", "BMW"]
};
class SampleComponent extends React.Component {

    constructor(props) {
        super();
        this.state = { displayComponent: Button }
    }

    buildComponent = () => {
        // create element takes additional params for props and children
        return React.createElement(this.state.displayComponent)
    }

    render() {
        var type = Button;  // just an example
        return (
            <div>
                {this.buildComponent()}
            </div>
        )
    }
}
export default SampleComponent;