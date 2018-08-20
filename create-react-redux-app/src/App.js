import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { clickButton } from './actions';
import { selectDrop } from './actions';
import './App.css';
import { connect } from 'react-redux'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'
import { Card } from '@cathodevel/quantum';
import { Input, Button, Textarea } from '@cathodevel/quantum';
import { Logo } from '@cathodevel/quantum';
import FieldArraysForm from './componetes/FieldArraysForm'
import ToggleIdiomas from './componetes/ToggleIdiomas'

import SampleComponent from './componetes/SampleComponent'
import ToggleBoxIdioma from './componetes/ToggleBoxIdioma';
import ToggleBoxDeficiente from './componetes/ToggleBoxDeficiente';
import { Toggle, Checkbox, Dropdown } from '@cathodevel/quantum';
import { Container, Row, Col } from '@cathodevel/quantum';
const showResults = values =>
  new Promise(resolve => {
    setTimeout(() => {
      // simulate server latency
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
      resolve()
    }, 500)
  })

class App extends Component {
  state = {
    inputValue: ''
  }
  inputChange = event => {
    this.setState({

      inputValue: event.target.value
    })
  }

  handleChange = (event) => {
    let drops = this.props.selectDrop(event);

  };


  render() {
    const {
      selectDrop,
      ret,
      clickButton,
      teste
    } = this.props;
    const { inputValue } = this.state;
    const { onChange } = this.state;
    return (

      <React.Fragment>

        <Container>


          <Row>




            <Logo.Candidate />

            <Col
              style={{
                textAlign: 'center',
                paddingTop: '20px',
                paddingBottom: '20px',
              }}
            >

            </Col>
          </Row>
          <Row>
            <Col
              style={{
                textAlign: 'left',

              }}
            >
              <h1>Anúncio de vaga</h1>
            </Col>
          </Row>
          <Row>

            <Col
              style={{
                textAlign: 'left',

              }}
            >


              <Card
                elevation={1}
                hoverElevation={5}>
                <Card.Container>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra porttitor placerat. Vivamus nec purus sit amet elit condimentum malesuada.
              </p>
                </Card.Container>
              </Card>
              <div />

              <Card
                elevation={1}

                hoverElevation={5}>
                <Card.Container>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra porttitor placerat. Vivamus nec purus sit amet elit condimentum malesuada.
              </p>
                </Card.Container>
              </Card>

              <div />

              <Card

                elevation={2}
                hoverElevation={5}>
                <Card.Container>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra porttitor placerat. Vivamus nec purus sit amet elit condimentum malesuada.
              </p>

                </Card.Container>
              </Card>


              <br />
              <br />

              <ToggleBoxDeficiente>


              </ToggleBoxDeficiente>
              <h2> Detalhe da Vaga</h2>
              <Textarea
                id="text-area"
                name="textarea"
                label="*Atividades a serem desenvolvidas"
                placeholder="Descreva as atribuições e responsabilidades do cargo."
                maxLength={1000}
                onBlur={() => { }}
                onFocus={() => { }}
                onChange={() => { }}
              />
              <Textarea
                id="text-area"
                name="textarea"
                label="Requisitos necessários / desejáveis"
                placeholder="Descreva a experiência, formação e/ou conhecimentos necessários ou desejáveis."
                maxLength={1000}
                onBlur={() => { }}
                onFocus={() => { }}
                onChange={() => { }}
              />
            </Col>
          </Row>
          <Row>

            <Col
              style={{
                textAlign: 'left',

              }}
            >




            </Col>
          </Row>
          <Row>

            <Col
              style={{
                textAlign: 'left',

              }}
            >



              <ToggleIdiomas />


              <h2 > Beneficios</h2>
              <fieldset style={{ border: "none" }}>
                <Row>
                  <Col tablet={3}>
                    <Checkbox
                      label="Vale Transporte"
                      onChange={() => { }}
                    />
                    <Checkbox
                      label="Tíquete Refeição"
                      onChange={() => { }}
                    />
                    <Checkbox
                      label="Mental"
                      onChange={() => { }}
                    />
                    <Checkbox
                      label="Vale Transporte"
                      onChange={() => { }}
                    />
                    <Checkbox
                      label="Tíquete Refeição"
                      onChange={() => { }}
                    />
                    <Checkbox
                      label="Seguro de Vida em Grupo"
                      onChange={() => { }}
                    />
                    <Checkbox
                      label="Restaurante na empresa"
                      onChange={() => { }}
                    />
                    <Checkbox
                      label="Participação nos lucros"
                      onChange={() => { }}
                    />
                    <Checkbox
                      label="Estacionamento"
                      onChange={() => { }}
                    />
                    <Checkbox
                      label="Auxílio Creche"
                      onChange={() => { }}
                    />
                    <Checkbox
                      label="Seguro Saúde"
                      onChange={() => { }}
                    />
                    <Checkbox
                      label="Transporte Fornecido pela empresa"
                      onChange={() => { }}
                    />
                  </Col>
                  <Col tablet={3}>

                    <Checkbox
                      label="Assistência Médica / Medicina em grupo"
                      onChange={() => { }}
                    />
                    <Checkbox
                      label="Assistência Odontológica"
                      onChange={() => { }}
                    />
                  </Col>
                </Row>
              </fieldset>
            </Col>
          </Row>
        </Container>
      </React.Fragment>


    );
  }
}
const mapStateToProps = store => ({
  teste: store.clickState.newValue,
  ret: store.dropState.newValue,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickButton, selectDrop }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(App);
