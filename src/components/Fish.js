import React from 'react';
import { formatPrice } from '../helpers';
import PropTypes from 'prop-types';

class Fish extends React.Component {
    static propTypes = {
        details: PropTypes.shape({
          image: PropTypes.string, 
          name: PropTypes.string, 
          desc: PropTypes.string, 
          status: PropTypes.string,  
          price: PropTypes.number
        }),
        addToOrder: PropTypes.func
    };

    render() {
        const { image, name, price, desc, status } = this.props.details;
        const isAvailable = status === "available";

        return (
            <li className="menu-fish">
                <img src={image} alt={name} />
                <h3>
                    <span ref={this.name}>{name}</span>
                    <span className="price"> {formatPrice(price)}</span>
                </h3>
                <p>{desc}</p>

                <button 
                    onClick={() => this.props.addToOrder(this.props.index)} 
                    disabled={!isAvailable}>
                        {isAvailable ? 'Add to Cart' : 'Sold Out'}
                </button>
            </li>
        )
    }
}

export default Fish;