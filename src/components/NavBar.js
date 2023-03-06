
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faSignOut } from '@fortawesome/free-solid-svg-icons'

import {
    Navbar,
    NavbarBrand,
    Nav,
    NavbarText,
} from 'reactstrap';

export function NavBar(props) {

    return (
        <div>
            <Navbar {...props}>
                <NavbarBrand href="/"> <FontAwesomeIcon icon={faAddressCard} /> Cloud Contact</NavbarBrand>
                <Nav className=" .navbar-light " navbar>
                    <NavbarText className='me-1' >Hello Sultan Dines</NavbarText>
                    <NavbarText > <FontAwesomeIcon icon={faSignOut} /> Logout</NavbarText>
                </Nav>
            </Navbar>
        </div>
    );
}