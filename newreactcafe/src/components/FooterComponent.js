import React from 'react';
import { Link } from 'react-router-dom'
function Footer(props) {
    return(
        <footer className="site-footer">
            <div className="container">
                <div className="row ">
                    <div className="col md-3 mt-3">
                        <Link to='/home'>Home</Link>
                    </div>
                    <div className="col md-3 mt-3">
                        <Link to='/menu'>Menu</Link>
                    </div>
                    <div className="col md-3 mt-3">
                        <Link to='/locations'>Locations</Link>
                    </div>
                    <div className="col md-3 mt-3">
                        <Link to='/products'>Products</Link>
                    </div>       
                </div>
                <div className="row">
                <div className="col-12 text-center mt-3 mb-2">
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}  
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '} 
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;