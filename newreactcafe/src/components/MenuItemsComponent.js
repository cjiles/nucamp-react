import React from 'react';
import { Breadcrumb, BreadcrumbItem, Media } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderMenu({menu}){
    return(
        <React.Fragment>
             <Media object className="col-8 col-md-4 ml-5" src={menu.image} alt={menu.altimage} width="300px" height="400px"/>
               <Media body className="col-8 col-md-6 ml-5 mb-4">
                    <Media heading >
                        {menu.name}
                    </Media>
                    {menu.description}
                    <br />                
                 <RenderItems items={menu.items}></RenderItems>
              </Media>
            </React.Fragment>
    );
}

function RenderItems({items}){
    if(items){
        return(
            <div className="col-md-12 m-1">
                {items.map(item => {
                    return (<div key={item.menuid}> 
                        <h4>{item.title} </h4>
                        <p> {item.price}</p>
                        {item.description}
                        <hr />
                        </div>)}
                    )
                }
            </div>
        );
    };
    
    return(<div/>);
}

function MenuItems(props) {
    if(props.menu){
        return (
           props.menu.map(menu =>{
                    return(
                        <div className="container" key={menu.id}>
                            <div className="row">
                                <div className="col">
                                    <Breadcrumb>
                                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                                        <BreadcrumbItem active>{menu.name}</BreadcrumbItem>
                                    </Breadcrumb>
                                </div>
                            </div>
                            <div className="row"> 
                                <RenderMenu menu = {menu}  />
                        </div>
                    </div>
                );
            })
        );
    }

    return (<div/>);

}


export default MenuItems;
