import { useState, useEffect } from "react";
//in order to know what the current user is, import onAuthStateChanged from firebase Auth package
import { getAuth, onAuthStateChanged } from "firebase/auth";

const useUser = () =>{
    const[user, setUser] =useState(null);
    const [isLoading,setIsLoading] = useState(true);

    useEffect(()=> {
        //user is either going to be a firebase user object or its going to be null
        //if its a firebase user object that mean the user is logged in
        //if null the user is not logged in.
        const unsubscribe = onAuthStateChanged(getAuth(),user => {
            setUser(user);
            setIsLoading(false);
        });
        return unsubscribe;
    },[]);
    return {user, isLoading}
}
export default useUser;