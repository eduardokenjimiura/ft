import React, { Component } from 'react';
var count = 0;
class AddFruitForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fruits: {
                'fruit-1': 'orange',
                'fruit-2': 'apple'
            }
        }
    }
    createFruit(e) {
        e.preventDefault();
        //get the fruit object name from the form
        var fruit = "sadasdasdasdsa";

        if (typeof fruit === 'string' && fruit.length > 0) {
            var timestamp = (new Date()).getTime();
            // update the state object
            this.state.fruits['fruit-' + timestamp] = fruit;
            // set the state
            this.setState({ fruits: this.state.fruits });

            this.refs.fruitForm.reset();
        }
    }
 
 

    render() {
        return (
            <form className="form-inline" ref="fruitForm" onSubmit={this.createFruit}>
                <div className="form-group">
                    <label for="fruitItem">
                        Fruit Name
                <input type="text" id="fruitItem" placeholder="e.x.lemmon" ref="fruitName" className="form-control" />
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">Add Fruit</button>
            </form>
        )
    }
}


export default AddFruitForm;