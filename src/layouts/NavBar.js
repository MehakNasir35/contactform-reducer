
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faSignOut } from '@fortawesome/free-solid-svg-icons'

import {
    Navbar,
    NavbarBrand,
    Nav,
    NavbarText,
} from 'reactstrap';

import {
    Link,
} from "react-router-dom";

export function NavBar(props) {

    return (

        <div>
            <Navbar {...props}>
                <Link to="/"> <NavbarBrand > <FontAwesomeIcon icon={faAddressCard} /> Cloud Contact</NavbarBrand></Link>
                <Nav className=" .navbar-light " navbar>
                    <NavbarText className='me-1' >Hello Sultan Dines</NavbarText>
                    <Link to="/login">  <NavbarText  > <FontAwesomeIcon icon={faSignOut} /> Login</NavbarText></Link>
                </Nav>
            </Navbar>
        </div>




    );
}