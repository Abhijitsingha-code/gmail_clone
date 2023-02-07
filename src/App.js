import React, { useEffect } from "react";
import "./App.css";
import { Header, Sidebar, Mail, MailList, Compose } from "./components/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectMail } from "./features/mailSlice";
import { login, selectUser } from "./features/userSlice";
import {Login} from "./components/index";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const sendMessageIsOpen = useSelector(selectMail);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(()=>{
    onAuthStateChanged(auth, (currentUser)=>{
      if(currentUser){
        dispatch(login({
          email: currentUser.email,
          photoUrl: currentUser.photoURL,
          name: currentUser.displayName
        }))
      }
    })  
  },[])

  return (

    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />
          <div className="app_body">
            <Sidebar />

            <Routes>
              <Route path="/mail" element={<Mail />} />
              <Route path="/" element={<MailList />} />
            </Routes>
          </div>

          {sendMessageIsOpen && <Compose />}
        </div>
      )}
    </Router>
  );
}

export default App;
