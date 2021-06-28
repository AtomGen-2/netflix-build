import React from 'react';
import "./ProfileScreen.css";
import Navbar from "../Navbar";
import { selectUser } from "../features/userSlice";
import { useSelector } from 'react-redux';
import { auth } from '../firebase';

function ProfileScreen() {
    const user = useSelector(selectUser);
    return (
        <div className="profileScreen">
            <Navbar />
            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img 
                        scr="https://i.redd.it/vkqvh4we5mj21.jpg"
                        alt="image1"
                    />
                    <div className="profileScreen__details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen__plans">
                            <h3>Plans</h3>
                        </div>
                        <button 
                        onClick={() => auth.signOut() }
                        className="profileScreen__signOut"
                        >Sign Out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
