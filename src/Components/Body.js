import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { auth } from "../Utils/Firebase";
import Browse from "./Browse";
import Sigin from "./Signin";
import { useDispatch } from "react-redux";
import { adduser, removeuser } from "../Utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Sigin></Sigin>,
    },
    {
      path: "/browse",
      element: <Browse></Browse>,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, displayName, email } = user;
        dispatch(adduser({ uid: uid, displayName: displayName, email: email }));

        // ...
      } else {
        // User is signed out
        dispatch(removeuser());
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
};

export default Body;
