import React, { Component } from 'react';
import { Button, Toggle, Checkbox } from '@cathodevel/quantum';
import { Dropdown } from '@cathodevel/quantum';
import DropdownList from 'react-widgets/lib/DropdownList'
import { Input, Textarea } from '@cathodevel/quantum';
import { Container, Row, Col } from '@cathodevel/quantum';
class ToggleBoxDeficiente extends React.Component {
  constructor() {
    super();
    this.state = {
        
      items:[
        {
          value: 'MULTIPLA',
          item: 'Todos os tipos de deficiência'
        },
        {
          value: 'AUDITIVA',
          item: 'Auditiva'
        },
        {
          value: 'FISICA',
          item: 'Física'
        },
        {
          value: 'VISUAL',
          item: 'Visual'
        },
        {
          value: 'MENTAL',
          item: 'Mental'
        }
      ]
    };
}
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
            <DropdownList
              data ={this.state.items}
              placeholder="Todos os tipos de deficiência"
              label="Tipo de deficiência"
              name="Dropdown"
              id="dropdown"
              valueField="value"
              textField="item"
              selectedItem={{}}
              onChange={() => { }}
            />
            <br/>
            <Textarea
              id="text-area"
              name="textarea"
              label="Observações - PcD"
              placeholder="Ex.: É necessário que o candidato portador de deficiência auditiva conheça LIBRAS."
              maxLength={1000}
              onBlur={() => { }}
              onFocus={() => { }}
              onChange={() => { }}
            />
          </div>
          :
          ///mudar esse cara para redux!!!!!!!!!!!!! e transformar em conponentes 
          <div>
            <label > Deseja restringir algum tipo de deficiência? </label>
            <br />

            <fieldset style={{ border: "none" }}>
              <Row>
                <Col tablet={3}>
                  <Checkbox
                    label="Visual"
                    onChange={() => { }}
                  />
                  <Checkbox
                    label="Física"
                    onChange={() => { }}
                  />
                  <Checkbox
                    label="Mental"
                    onChange={() => { }}
                  />
                </Col>
                <Col tablet={3}><Checkbox
                  label="Auditiva"
                  onChange={() => { }}
                />
                  <Checkbox
                    label="Reabilitado"
                    onChange={() => { }}
                  /></Col>
              </Row>





            </fieldset>
          </div>
        }
      </div>
    )
  }
}
export default ToggleBoxDeficiente;
