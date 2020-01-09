import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'

function RenderCampsite({campsite}){
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
function RenderComments({comments}){
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

function CampsiteInfo(props) {
        if(props.campsite){
           return(
               <div className="container">
                    <div className="row">
                    {/* calls the renderCampsite method and passes the campsite.js objects */}
                    <RenderCampsite campsite = {props.campsite} />
                    {/* calls the renderComments method and passes the Comments array from the campsite.js file  */}
                    <RenderComments comments = {props.comments} />
                     </div>  
               </div>
           ); 
        }
        return (<div/>);
    }

export default CampsiteInfo;