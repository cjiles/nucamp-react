import React from 'react';
import { Card, CardImg, CardBody, CardHeader, Breadcrumb, BreadcrumbItem, Button, CardFooter } from 'reactstrap';
import { Link } from 'react-router-dom';

//destructuring the props parameter
function RenderMenu({menu}){
    return (
        <Card>
            {/* <Link to={`/menu/${menu.id}`}> */}
            <CardHeader>
                <h3>{menu.name}</h3>
            </CardHeader>
            <CardBody>
                <CardImg src={menu.image} alt={menu.name} width="300px" height="400px" />
                {menu.description} <br />
            </CardBody>
            <CardFooter>
            <Button outline><Link to={`/menu/${menu.id}`}>{`VIEW ALL ${menu.name}`}</Link></Button>
            </CardFooter>
            {/* </Link> */}
        </Card> 
    );
}

function Menu(props) {

    const menu = props.menu.map(menu => {  
        return (
           <div key={menu.id} className="col-md-8 col-xl-5 m-1">
               <RenderMenu menu={menu} />
           </div>
        );
    });
       
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                </div>
            </div>
            <div className="row ml-md-5 mb-3">
                {menu}
            </div>
        </div>
    );
}

export default Menu;