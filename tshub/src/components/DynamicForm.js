import React, {useState} from 'react'

const DynamicForm = () => {
    const [fields, setFields] = useState([{value:''}]);
    const addField = () => {
        setFields([...fields, {value: ''}]);
    };

    const handleFieldChange = (index, value) => {
        const updatedFields = [...fields];
        updatedFields[index].value = value;
        setFields(updatedFields);
    }
    return (
        <div>
            {
                fields.map((field, index) =>(
                    <input 
                        key={index}
                        type = "text"
                        value = {field.value}
                        onChange={ (e) => handleFieldChange(index, e.target.value)} />
                ))
            }
            <button onClick={addField}>Add Field</button>
        </div>
    )
}

export default DynamicForm
