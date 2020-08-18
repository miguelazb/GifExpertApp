import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

const AddCategory = ({ setCategorias }) => {

    const [inputValue, setInputValue] = useState('');

    const handleChanges = (evt) => {
        setInputValue(evt.target.value);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();

        if( inputValue.trim().length > 2 ) {

            setCategorias((cats) => [ inputValue, ...cats ]);
            setInputValue('');
        }

    }

    return (
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                value={ inputValue }
                onChange={ handleChanges }
            />
            <input
                type="submit"
                value="Agregar"
            />
        </form>
    )
};

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
}

export default AddCategory;
