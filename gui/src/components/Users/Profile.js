import { useAuth0 } from "@auth0/auth0-react";

export const Profile = ({user,isAuthenticated,isLoading}) => {   
    if(isLoading){
        return <div>Cargando...</div>
    }
    return (
        isAuthenticated && (
            <div>
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </div>
        )
    );

}