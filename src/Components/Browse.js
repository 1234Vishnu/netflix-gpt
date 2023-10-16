import { useNavigate } from "react-router-dom";
import { auth } from "../Utils/Firebase";
import Header from "./Header"
import { signOut } from "firebase/auth";

const Browse = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/")
      })
      .catch((error) => {
        // An error happened.
      });
  }
  return (
    <div>
      <div className="flex justify-between">
      <Header></Header>
      <button className="px-2 m-2 h-9 bg-red-600 rounded-md text-white" onClick={handleSignOut}>Sign Out</button>
      </div>
    </div>
    
  )
}

export default Browse