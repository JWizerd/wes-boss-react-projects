import React from 'react';

class EditFishForm extends React.Component {

    handleChange = (event) => {

        const inputName = event.currentTarget.name;
        const inputValue = event.currentTarget.value;

        const fishCopy = {
            ...this.props.fish,
            [inputName]: inputValue
        };

        this.props.updateFish(this.props.index, fishCopy);
    }

    removeFish = (event) => {
        event.preventDefault();
        if(window.confirm(`Are you sure you want to remove ${this.props.fish.name}?`)) {
            this.props.removeFish(this.props.index)
            this.props.removeOrder(this.props.index)
        }
    }

    render() {
        const fish = this.props.fish;
        return (
            <form className="fish-edit">
                <input type="text" name="name" value={fish.name} onChange={this.handleChange} />
                <input type="text" name="price" value={fish.price} onChange={this.handleChange} />
                <select type="text" name="status" value={fish.status} onChange={this.handleChange}>
                    <option value="available">available</option>
                    <option value="unavailable">unavailable</option>
                </select>
                <textarea type="desc" name="desc" value={fish.desc} onChange={this.handleChange} />
                <input type="text" name="image" value={fish.image} onChange={this.handleChange} />
                <button onClick={this.removeFish}>
                    Delete Fish from Inventory 
                </button>
            </form>
        )
    }

}

export default EditFishForm;