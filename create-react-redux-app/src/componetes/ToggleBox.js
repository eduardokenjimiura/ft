import React, { Component } from 'react';
import { Button, Toggle, Checkbox } from '@cathodevel/quantum';
class ToggleBox extends React.Component {

  state = { showing: false };

  render() {
    const { showing } = this.state;
    const children = this.props.children
    return (
      <div style={{ textAlign: "left" }}>
        <Toggle

          label="Vaga exclusiva para PcD"

          onBlur={() => { }}
          onChange={() => { this.setState({ showing: !showing }) }}
          onFocus={() => { }}
        />

        {showing
          ? <div>
            {React.Children.map(children, (child, i) => {

              return <div>{child}</div>;

            })
            }
          </div>
          : null
        }
      </div>
    )
  }
}
export default ToggleBox;
