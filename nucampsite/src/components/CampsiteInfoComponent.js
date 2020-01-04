import React, { Component } from 'react';

class CampsiteInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            campsite: null
        };
    }
    render () {
        if(!this.props.campsite){
            <div className="row">
            </div>
        }
        else{
            <div></div>
        }
        
        return;
    }
}
export default CampsiteInfo;