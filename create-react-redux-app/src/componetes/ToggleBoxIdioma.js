import React, { Component } from 'react';
import { Button, Toggle, Checkbox } from '@cathodevel/quantum';
import { Dropdown } from '@cathodevel/quantum';
import { Input, Textarea, Radio, RadioGroup } from '@cathodevel/quantum';
import { Container, Row, Col } from '@cathodevel/quantum';
class ToggleBoxIdioma extends React.Component {

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
            <Row>
              <Col tablet={6}
                style={{
                  textAlign: 'left',

                }}
              >
                <Dropdown
                  items={[
                    {
                      value: 'Português',
                      item: 'Português'
                    },
                    {
                      value: 'Espanhol',
                      item: 'Espanhol'
                    },
                    {
                      value: 'Francês',
                      item: 'Francês'
                    },
                    {
                      value: 'Russo',
                      item: 'Russo'
                    },
                    {
                      value: 'Japonês',
                      item: 'Japonês'
                    }
                  ]}
                  placeholder="Inglês"
                  label=""
                  name="Dropdown"
                  id="dropdown"
                  selectedItem={{}}
                  onChange={() => { }}
                />
              </Col>
              <Col tablet={3}>
                <RadioGroup
                  boxed
                  inline>
                  <Radio
                    id="radioBoxed"
                    value="Básico"
                    name="radioInline"
                    label="Básico"
                    onChange={() => { }}
                  />
                  <Radio
                    id="radioTwoBoxed"
                    value="Intermediário"
                    name="radioInline"
                    label="Intermediário"
                    onChange={() => { }}
                  />
                  <Radio
                    id="radioThreeBoxed"
                    value="Avançado"
                    name="radioInline"
                    label="Avançado"
                    onChange={() => { }}
                  />
                </RadioGroup>
              </Col>


            </Row>

            <div>
              <Button full skin="secondary"  onClick={() => { this.setState({ showing: !showing }) }}  >
                Remover
            </Button>
              <br />
              <br />
              <Button full skin="secondary" size="big" >
                Adicionar
             </Button>
            </div>
          </div>
          :
          null
        }
      </div>
    )
  }
}
export default ToggleBoxIdioma;
