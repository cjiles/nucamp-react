import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

// CampsiteInfo is a child of Directory Component
class CampsiteInfo extends Component {
    
    renderCampsite(campsite){
        return(
        <div className= "col-md-5 m-1">
            <Card>
                <CardImg top src={campsite.image} alt={campsite.name} />
                <CardBody>
                    <CardTitle>{campsite.name}</CardTitle>
                    <CardText>{campsite.description}</CardText>
                </CardBody>
            </Card>
        </div>            
        )
    }

    //the parameter can be named anything.  The parameter is defined below in Render
    renderComments(comments){
        if(comments){
            return(
                <div className="col-md-5 m-1">
                    <h4> Comments </h4>
                    {comments.map(comment => {
                        //return statement is not always needed.  It is implicit in the arrow function, but may be needed for more complex code because if not included it returns the first value
                        return (<div key={comment.id}> 
                            {comment.text} <br /> 
                            Author: {comment.author}  Date: {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} 
                            </div>  )}
                        )
                    }
                </div>
            );
        };
        return(<div/>);
    }

    render () {
        if(this.props.campsite){
           return(
               <div className="container">
                    <div className="row">
                    {/* calls the renderCampsite method and passes the campsite.js objects */}
                    {this.renderCampsite(this.props.campsite)}
                    {/* calls the renderComments method and passes the Comments array from the campsite.js file  */}
                    {this.renderComments(this.props.campsite.comments)}
                     </div>  
               </div>
           ); 
        }
        return (<div/>);
    }
}
export default CampsiteInfo;