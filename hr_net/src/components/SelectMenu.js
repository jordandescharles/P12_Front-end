import { useEffect } from 'react';
import states from '../datas/states';

function SelectMenu(props) {

useEffect(() => {
        
        const stateSelect = document.getElementById('state');
        //check if stateSelect has child to fill it with states
        if (!stateSelect.hasChildNodes()) {
            
            const option = document.createElement('option');
            option.value = "stateSelect";
            option.text = "Select State";
            stateSelect.appendChild(option);

            states.forEach(function (state) {
                const option = document.createElement('option');
                option.value = state.abbreviation;
                option.text = state.name;
                stateSelect.appendChild(option);
            })
        }
    });
    return (
        <select name="state" id="state" defaultValue={"stateSelect"} onChange={props.onChange} ></select>
    )
}

export default SelectMenu;