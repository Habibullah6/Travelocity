import { FacebookAuthProvider, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import swal from "sweetalert";

import initializeAuthentication from "../components/Login/Firebase/firebase.init";

initializeAuthentication()

const useFirebase = () => {

const [user, setUser] = useState([])
const [isLoading, setIsLoading] = useState(true)
const auth = getAuth()

const handleGoogleLogIn =() => {
    setIsLoading(true)
    const   googleProvider = new GoogleAuthProvider();
    return  signInWithPopup(auth, googleProvider)
    
    
}

const handleFacebookLogIn = () => {
    setIsLoading(true)
    const   facebookProvider = new FacebookAuthProvider()
    return  signInWithPopup(auth, facebookProvider)
    
}


const handleLogOut = () => {
    setIsLoading(true)
   signOut(auth)
   .then(()=> {
    swal("Log out successfully")
    setUser({})
   })
   .catch((error) => {
    swal(error.message)
   })
   .finally(() => {
    setIsLoading(false)
   })
}

// observer
useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if(user){
            setUser(user)
           
        }
        else{
            setUser({})
        }
        setIsLoading(false)
        
    })
}, [])







return{
    user,
    setUser,
    handleGoogleLogIn,
    handleLogOut,
    handleFacebookLogIn,
    isLoading,
    setIsLoading
    
}


}

export default useFirebase;