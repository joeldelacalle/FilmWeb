import { useAuth0 } from "@auth0/auth0-react";
import Button from 'react-bootstrap/Button';

export const LogoutButton = () => {
    const { logout } = useAuth0();
    return <Button  onClick={ () => logout({ returnTo: window.location.origin})}>LogOut</Button>

}