import { FacebookAuthProvider, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import swal from "sweetalert";

import initializeAuthentication from "../components/Login/Firebase/firebase.init";

initializeAuthentication()

const useFirebase = () => {

const [user, setUser] = useState([])
const auth = getAuth()

const handleGoogleLogIn =() => {
    const   googleProvider = new GoogleAuthProvider();
    return  signInWithPopup(auth, googleProvider)
    
    
}

const handleFacebookLogIn = () => {
    const   facebookProvider = new FacebookAuthProvider()
    return  signInWithPopup(auth, facebookProvider)
    
}


const handleLogOut = () => {
   signOut(auth)
   .then(()=> {
    swal("Log out successfully")
    setUser({})
   })
   .catch((error) => {
    swal(error.message)
   })
}

// observer
useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if(user){
            setUser(user)
           
        }
        
    })
}, [])







return{
    user,
    setUser,
    handleGoogleLogIn,
    handleLogOut,
    handleFacebookLogIn,
    
}


}

export default useFirebase;