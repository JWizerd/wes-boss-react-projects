import React from 'react';
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';

class Inventory extends React.Component {

    render() {
        const fishes = this.props.fishes;
        return (
            <div className="inventory">
                <h2>Inventory</h2>
                {Object.keys(fishes).map(fish => 
                    <EditFishForm 
                        updateFish={this.props.updateFish} 
                        key={fish} 
                        index={fish} 
                        fish={fishes[fish]}
                        removeFish={this.props.removeFish}
                        removeOrder={this.props.removeOrder}
                    />
                )}
                <AddFishForm addFish={this.props.addFish} />
                <button onClick={this.props.loadSampleFishes}>
                    Load Sample Fishes 
                </button>
            </div>
        )
    }

}

export default Inventory;