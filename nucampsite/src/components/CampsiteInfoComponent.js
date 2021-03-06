import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem, Button,
    Modal, ModalHeader, ModalBody, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form'
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

function RenderCampsite({campsite}){
    return(
        <div className= "col-md-5 m-1">
            <FadeTransform
                in  
                transformProps={{
                    exitTransform: 'scale(0.5) translateX(-100%)'
                }}>
                <Card>
                    <CardImg top src={baseUrl + campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
        </div>            
    )
}

    //the parameter can be named anything.  The parameter is defined below in Render
function RenderComments({comments, postComment, campsiteId}){
    if(comments){
        return(
            <div className="col-md-5 m-1">
                <h4> Comments </h4>
                <Stagger in>
                    {comments.map(comment => {
                    //return statement is not always needed.  It is implicit in the arrow function, but may be needed for more complex code because if not included it returns the first value
                        return (
                            <Fade in key={comment.id}>
                                <div> 
                                   <p>{comment.text} <br /> 
                                        -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} <br />
                                    </p>
                                </div> 
                            </Fade>
                        );
                    })}
                </Stagger>
                <CommentForm campsiteId={campsiteId} postComment={postComment} />
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
            isModalOpen:false
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        this.toggleModal();
        this.props.postComment(this.props.campsiteId, values.rating, values.author, values.text);
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
    
    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }

    if (props.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
    
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
                <RenderComments 
                    comments = {props.comments}
                    postComment = {props.postComment}
                    campsiteId = {props.campsite.id}
                />
                </div>  
            </div>
        ); 
    }
    return (<div/>);
}

export default CampsiteInfo;