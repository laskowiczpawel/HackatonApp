import React, { Component } from 'react'

export default class Quiz extends Component {



    render() {
        return (
            <div>
                {this.props.match.params.country}
            </div>
        )
    }
}