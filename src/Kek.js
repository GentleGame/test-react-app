import React, { Component } from 'react'

export default class Kek extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                This is {this.props.match.params.number} kek!
            </div>
        )
    }
}
