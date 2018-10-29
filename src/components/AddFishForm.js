import React from 'react';

class AddFishForm extends React.Component {
    name = React.createRef();
    price = React.createRef();
    status = React.createRef();
    desc = React.createRef();
    image = React.createRef();


    createFish = (e) => {
        e.preventDefault();

        const fish = {
            name: this.name.value.value,
            price: parseFloat(this.price.value.value),
            status: this.status.value.value,
            desc: this.desc.value.value,
            image: this.image.value.value
        };

        this.props.addFish(fish);
    }

    render() {
        return (
            <form className="fish-edit" onSubmit={this.createFish}>
                <input type="name" ref={this.name} placeholder="name" />
                <input type="price" ref={this.price} placeholder="price" />
                <select type="status" ref={this.status} placeholder="status">
                    <option value="available">available</option>
                    <option value="unavailable">unavailable</option>
                </select>
                <textarea type="desc" ref={this.desc} placeholder="desc" />
                <input type="text" ref={this.image} placeholder="image" />
                <button type="submit">+ Add Fish</button>
            </form>
        )
    }

}

export default AddFishForm;