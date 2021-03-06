import React from 'react';
import { formatPrice } from '../helpers';

class Order extends React.Component {

    renderOrder = (key) => {
        const fish = this.props.fishes[key];
        const count = this.props.order[key];

        // due to time delay of re-base we need to 
        // break out of loop until fishes are loaded
        if (!fish) return null;
        const isAvailable = fish.status === 'available'

        if (!isAvailable) {
            return (
                <li>
                    Sorry {fish ? fish.name : 'fish'} is no longer available.
                </li>
            )
        }

        return (
            <li key={key} className="order">
                {count} lbs {fish.name}
                {formatPrice(count * fish.price)}
            </li>
        )
    }

    render() {
        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((prevTotal, key) => {
            const fish = this.props.fishes[key];
            const count = this.props.order[key];
            const isAvailable = fish && fish.status === 'available'

            if (isAvailable) {
                return prevTotal + (count * fish.price);
            }

            return prevTotal;
        }, 0);

        return (
            <div className="order-wrap">  
                <h2>Order</h2>  
                <ul className="order">
                    {orderIds.map(this.renderOrder)}
                </ul>

                <div className="total">
                    <strong>{formatPrice(total)}</strong>
                </div>
            </div>
        )
    }

}

export default Order;