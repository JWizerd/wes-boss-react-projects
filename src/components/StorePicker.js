import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    myInput = React.createRef();

    // properties are bound to the instance of the class
    // which allows us to more easily bind methods in our 
    // component to the StorePicker's context
    goToStore = (event) => {
        event.preventDefault();
        const storeName = this.myInput.value.value;
        this.props.history.push(`/store/${storeName}`);
    }

    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please enter a Store Name!</h2>
                <input ref={this.myInput} type="text" required placeholder="enter" defaultValue={getFunName()} />
                <button type="submit">Visitor Store</button>
            </form>
        )
    }

}

export default StorePicker;