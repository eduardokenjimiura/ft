import React, { Component } from 'react';
var count = 0;
class FruitList extends React.Component {
    render() {
        return (
            <div className="container">
                <ul className="list-group text-center">
                    {
                        Object.keys(this.props.fruits).map(function (key) {
                            count = count + 1;
                            return <li className="list-group-item list-group-item-info">{this.props.fruits[key] + count}</li>
                        }.bind(this))
                    }
                </ul>
            </div>
        );
    };
}
export default FruitList;