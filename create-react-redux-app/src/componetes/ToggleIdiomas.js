import React, { Component } from 'react';
import { Button, Toggle, Checkbox } from '@cathodevel/quantum';
import { Dropdown } from '@cathodevel/quantum';
import { Input, Textarea } from '@cathodevel/quantum';
import { Container, Row, Col } from '@cathodevel/quantum';
import DropIdiomas from "./DropIdiomas";

class ToggleIdiomas extends React.Component {

    state = { showing: false };

    render() {
        const { showing } = this.state;
        const children = this.props.children
        return (
            <div style={{ textAlign: "left" }}>
                <Toggle

                    label="Necessário conhecimento de outro idioma"

                    onBlur={() => { }}
                    onChange={() => { this.setState({ showing: !showing }) }}
                    onFocus={() => { }}
                />

                {showing
                    ? <div>
                        <DropIdiomas />
                    </div>
                    :
         
                    <div>
                         
                    </div>
                }
            </div>
        )
    }
}
export default ToggleIdiomas;
