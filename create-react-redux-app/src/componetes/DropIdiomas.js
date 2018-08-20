import React from 'react';
import DropdownList from 'react-widgets/lib/DropdownList'
import 'react-widgets/dist/css/react-widgets.css'
import { Input, Textarea, Radio, RadioGroup } from '@cathodevel/quantum';
import { Container, Row, Col } from '@cathodevel/quantum';
import { Button } from '@cathodevel/quantum';
class DropIdiomas extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            shareholders: [],
            selectedValue: null,
            selectOptions: [
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
            ]
        };
    }

    // ...

    handleShareholderNameChange = (idx) => (evt) => {

        var idioma = evt.target.value
        var arr = this.state.selectOptions

        var value = idioma

        arr = arr.filter(function (item) {
            return item.item !== value
        })
        this.setState({ selectOptions: arr });

        const newShareholders = this.state.shareholders.map((shareholder, sidx) => {

            if (idx !== sidx) return shareholder;
            return { ...shareholder, name: evt.target.value };
        });

        this.setState({ shareholders: newShareholders });
    }
    handleShareholderNameChange_new = () => (evt) => {

        var idioma = evt.value
        var arr = this.state.selectOptions

        var value = idioma
        this.setState({ selectedValue: idioma });
        arr = arr.filter(function (item) {
            return item.item !== value
        })
        this.setState({ selectOptions: arr });
        var idx = this.state.shareholders.length - 1


    }
    handleSubmit = (evt) => {
        const { name, shareholders } = this.state;

    }
    check = (evt) => {
       console.log(evt)

    }

    handleAddShareholder = () => {
        var idx = this.state.shareholders.length - 1
        const newShareholders = this.state.shareholders.map((shareholder, sidx) => {

            if (idx !== sidx) return shareholder;
            return { ...shareholder, name: this.state.selectedValue };
        });

        this.setState({ shareholders: newShareholders });

        this.setState({
            shareholders: this.state.shareholders.concat([{ name: this.state.selectedValue }])
        });
    }

    handleRemoveShareholder = (idx) => () => {
        console.log(this.state.selectOptions)
        this.state.selectOptions.push({ item: this.state.shareholders[idx].name, value: this.state.shareholders[idx].name });

        this.setState({
            shareholders: this.state.shareholders.filter((s, sidx) => idx !== sidx)
        });
        console.log(this.state.selectOptions)
    }





    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {}
                <div>
                    <DropdownList
                        valueField="value"
                        textField="item"
                        data={this.state.selectOptions}
                        onChange={this.handleShareholderNameChange_new()}  >

                    </DropdownList>
                    <br />
                    <Button full type="button" onClick={this.handleAddShareholder} className="small">Adicionar Idioma</Button>

                </div>
                {}
       
                {this.state.shareholders.map((shareholder, idx) => (
                    <div style={{'alignItems': 'center'}}>
                        <Row>
                            <Col tablet={8}
                                style={{
                                    textAlign: 'left',

                                }}
                            >
                                <Input
                                    type="text"
                                    disabled
                                    value={shareholder.name}
                                    onChange={this.handleShareholderNameChange(idx)}
                                />
                            </Col>
                            <Col tablet={4}>
                            <br/>
                                <RadioGroup
                                    boxed
                                    inline>
                                    <Radio
                                        id="radioBoxed"
                                        value="Básico"
                                        name="radioInline"
                                        label="Básico"
                                        onChange={this.check( )}
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
                        <div />

                        <Button
                            full
                            skin="secondary"
                            type="button"
                            onClick={this.handleRemoveShareholder(idx)}
                            className="small">Remover</Button>
                    </div>
                ))} <div />

                <div />
                <br />
                <div />

            </form>
        )
    }
}

export default DropIdiomas;