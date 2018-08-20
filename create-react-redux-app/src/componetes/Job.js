import React, { Component } from 'react';
import AddFruitForm from '../componetes/AddFruitForm'
import FruitList from '../componetes/FruitList';
var count = 0;
class Job extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fruits: {
                'fruit-1': 'orange',
                'fruit-11': 'orange',
                'fruit-12': 'orange',
                'fruit-2': 'apple'
            }
        }
    }
   
    addFruit(fruit) {
        var timestamp = (new Date()).getTime();
        // update the state object
        this.state.fruits['fruit-' + timestamp] = fruit;
        // set the state
        this.setState({ fruits: this.state.fruits });
    }

    render() {
        return (
            <div className="component-wrapper">
                <FruitList fruits={this.state.fruits} />
                <AddFruitForm addFruit={this.addFruit} />
            </div>
        );
    }


}
export default Job;