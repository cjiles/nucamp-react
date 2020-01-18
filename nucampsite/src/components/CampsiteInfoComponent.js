import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem, Button,
    Modal, ModalHeader, ModalBody, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form'

function RenderCampsite({campsite}){
    return(
        <div className= "col-md-5 m-1">
            <Card>
                <CardImg top src={campsite.image} alt={campsite.name} />
                <CardBody>
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
                <CommentForm />
            </div>
        );
    };
    
    return(<div/>);
}

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);

class CommentForm extends Component{
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen:false,
            author:"",
            touched: {
                author:false,
            }
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.Submit = this.handleSubmit.bind(this);
    }
    
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        console.log('Current state is: ' + JSON.stringify(values));
        alert('Current state is: ' + JSON.stringify(values));
    }
    
    render(){
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Button outline onClick={this.toggleModal}>
                                <i className="fa fa-pencil" /> Submit Comment
                            </Button>
                        </div>
                    </div>
            </div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={values => this.handleSubmit(values)}>
                            <div className="form-group">
                                <Label htmlFor="rating"> Rating </Label>
                                <Control.select model=".rating" id="rating" name="rating"
                                    className="form-control">
                                    <option>Choose...</option>
                                    <option> 1 </option>
                                    <option> 2 </option>
                                    <option> 3 </option>
                                    <option> 4 </option>
                                    <option> 5 </option>
                                </Control.select>
                            </div>
                            <div className="form-group">
                                <Label htmlFor="author"> Your Name </Label>
                                <Control.text model=".author" id="author" name="author"
                                    placeholder="Your Name"
                                    className="form-control" 
                                    validators={{
                                        required,
                                        minLength: minLength(2),
                                        maxLength: maxLength(15)
                                    }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".author"
                                    show="touched"
                                    component="div"
                                    messages={{
                                        required:"Your name is required",
                                        minLength:"Must be at least 2 characters",
                                        maxLength: "Must be 15 characters or less"
                                    }}
                                />    
                            </div>
                            <div className="form-group">
                                <Label htmlFor="text"> Comment </Label>
                                <Control.textarea model=".text" id="text" name="text" 
                                    rows= "6"
                                    className="form-control"
                                    
                                />
                            </div>
                            <div className="form-group>">
                                <Button type="submit" color="primary">
                                    Submit
                                </Button>
                            </div>
                        </LocalForm>
                    </ModalBody>
                    
                </Modal>
            </React.Fragment>
        );
    }
}

function CampsiteInfo(props) {
    if(props.campsite){
        return(
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.campsite.name}</h2>
                        <hr />
                    </div>
                </div>
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