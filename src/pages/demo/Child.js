import React, { Component } from 'react';

export default class Child extends Component {
    render(){
        return(
            <div>
                <p>Child组件</p>
            <p>{this.props.count}</p>
            </div>
        )
    }
}