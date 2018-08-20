import React from 'react';
import { Field, FieldArray, reduxForm, formValueSelector } from 'redux-form';
import validate from './validate';
import { Input, Button } from '@cathodevel/quantum';
import DropdownList from 'react-widgets/lib/DropdownList'
import 'react-widgets/dist/css/react-widgets.css'
const idiomas =
    [
        { Idioma: 'Inglês', value: 'ING' },
        { Idioma: 'Português', value: 'POR' },
        { Idioma: 'Japonês', value: 'JPN' }
    ]

// const renderMembers = ({ fields }) => (
//     <ul>
//         <li>
//             <button type="button" onClick={() => fields.push({})}>Add Member</button>
//         </li>
//         {fields.map((member, index) =>
//             <li key={index}>
//                 <button
//                     type="button"
//                     title="Remove Member"
//                     onClick={() => fields.remove(index)} />
//                 <h4>Member #{index + 1}</h4>
//                 <Field name="favoriteColor"
//                     component={DropdownList}
//                     data={idiomas}
//                     valueField="value"
//                     textField="Idioma" />


//             </li>
//         )}
//     </ul>
// )


const renderMembers = ({ fields, meta: { touched, error, submitFailed } }) => (
    <div>
        <div>


            <Button full size="big" type="button" onClick={() => fields.push( )}>adicionar  idioma</Button>
            {(touched || submitFailed) && error && <span>{error}</span>}

        </div>

        {fields.map((member, index) => (
            <div key={index}>
            <br />    
            <Field name="favoriteColor"
                    component={DropdownList}
                    data={idiomas}
                    valueField="value"
                    textField="Idioma" />
                

                <Button
                    type="button"
                    full
                    skin="secondary"
                    onClick={() => fields.remove(index)}

                > remover idioma
            </Button>

            </div>
        ))}
    </div>
);



let ReactWidgetsForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props;

    return (

        <form onSubmit={handleSubmit}>


            <Field name="favoriteColor"
                component={DropdownList}
                data={idiomas}
                valueField="value"
                textField="Idioma" />

            <br />
            <FieldArray name="members" component={renderMembers} />
            <button type="submit" disabled={pristine || submitting}>Submit</button>
            <br />


        </form>
    );
};

// export default reduxForm({
//     form: 'fieldArrays', // a unique identifier for this form
//     validate,
// })(FieldArraysForm);
ReactWidgetsForm = reduxForm({
    form: 'reactWidgets'  // a unique identifier for this form
})(ReactWidgetsForm)

export default ReactWidgetsForm