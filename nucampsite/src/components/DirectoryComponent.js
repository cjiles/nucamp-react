import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Directory extends Component {


    onCampsiteSelect(campsite){
        //sets the selectedCampsite to campsite. Updates the state of props. 
        this.setState({selectedCampsite: campsite});
    }


    render() {
        // map creates an array of the Campsite objects 
      const directory = this.props.campsites.map(campsite => {  
        return (
           <div key={campsite.id} className="col-md-5 m-1">
               <Card onClick={() => this.props.onClick(campsite.id)}>
                   <CardImg width="100%" src={campsite.image} alt={campsite.name} />
                   <CardImgOverlay>
                       <CardTitle>{campsite.name}</CardTitle>
                   </CardImgOverlay>
               </Card>
           </div>
            );
        });
       
        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
            </div>
        );
    }
}

export default Directory;