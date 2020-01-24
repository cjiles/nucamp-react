import React from 'react';
import { Card, CardImg, CardTitle, CardBody , CardText,} from 'reactstrap';


function RenderProduct({ cafeitem }) {
    return (
        <Card >
            <CardImg width="150" src={cafeitem.image} alt={cafeitem.name} />      
            <CardBody>
               
                <CardTitle><h5>{cafeitem.name}</h5></CardTitle><br></br>
                <CardText>{cafeitem.description}</CardText>
                <CardTitle><h5>Price:  ${cafeitem.price}</h5></CardTitle>
            </CardBody>

        </Card>
    )
} 

function Product(props) {

    const product = props.cafeitems.map(cafeitem => {
        return (
            <div key={cafeitem.id} className="col-md m-1">
                <RenderProduct cafeitem={cafeitem} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
            <div className="col">                
                    <h1 align="center">Cafe Items</h1>
                    <hr />
                </div>
            </div>
            <div className="row">
                {product}
            </div>
        </div>
    );
}

export default Product;