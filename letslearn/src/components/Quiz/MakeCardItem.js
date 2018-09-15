import React, { Component } from 'react';

class MakeCardItem extends Component {
    constructor(props) {
        super(props);
        this.state =  {
            isActive: false,
        }
    }

    activateItem() {
        const { toggleOn, diff, name } = this.props;
        toggleOn(diff, name);
        this.setState({isActive: !this.state.isActive})
    }

    render() {
        return (
            <div style={{
                background: this.state.isActive ? 'orange' : null, height: '100%', width: '100%', display: 'flex',
                justifyContent: 'center', alignItems: 'center'}} className="card" key={this.props.name} onClick={() => this.activateItem()}>
                <div className="front">
                    {this.props.name}
                </div>
                <div className="back">

                </div>
            </div>
        )
    }
}

export default MakeCardItem;