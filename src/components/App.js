import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';

class App extends React.Component {

    state = {
        fishes: {},
        order: {}
    };

    componentDidMount() {
        const store = this.props.match.params.storeId;

        // using local storage API
        const data = localStorage.getItem(store);
        
        if (data) {
            this.setState({ order: JSON.parse(data) });
        }

        this.ref = base.syncState(`${store}/fishes`, {
            context: this,
            state: 'fishes'
        });
    };

    componentDidUpdate() {
        localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
    };

    componentWillUnmount() {
        // prevent memory links by closing db connection
        base.removeBinding(this.ref);
    };

    addFish = (fish) => {
        // ... is an object spread which is like
        // clone in php
        const fishes = {...this.state.fishes};

        fishes[`fish${Date.now()}`] = fish;

        this.setState({
            fishes: fishes
        });
    };

    updateFish = (key, updatedFish) => {
        // 1. copy existing state
        const fishes = {...this.state.fishes};

        // 2. update copied state
        fishes[key] = updatedFish;

        // 3. update real state
        this.setState({
            fishes: fishes
        })
    };

    addToOrder = (key) => {
        // creats a shallow copy of the order obj
        const order = {...this.state.order};

        order[key] = order[key] + 1 || 1;

        this.setState({ 'order': order })
    };

    removeFish = (key) => {
        const fishes = {...this.state.fishes};

        // we could use this in most cases: 
        // delete fishes[key];
        // but since we're using re-base we need to set the key to null 
        // so re-base will properly handle the change
        
        fishes[key] = null;

        this.setState({ fishes: fishes });
    }

    loadSampleFishes = () => {
        this.setState({
            fishes: sampleFishes
        })
    };

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" />
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => 
                            <Fish 
                                addToOrder={this.addToOrder}
                                key={key} 
                                details={this.state.fishes[key]} 
                                index={key}
                            />
                        )}
                    </ul>
                </div>
                <Order fishes={this.state.fishes} 
                       order={this.state.order} 
                />
                <Inventory
                    updateFish={this.updateFish} 
                    addFish={this.addFish} 
                    loadSampleFishes={this.loadSampleFishes} 
                    fishes={this.state.fishes}
                    removeFish={this.removeFish}
                />
            </div>
        );
    }


}

export default App;


