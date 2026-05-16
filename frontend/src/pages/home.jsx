import React, { useContext, useState } from 'react'
import withAuth from '../utils/withAuth'
import { useNavigate } from 'react-router-dom'
import "../App.css";
import { Button, IconButton, TextField } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import { AuthContext } from '../contexts/AuthContext';

function HomeComponent() {


    let navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState("");


    const {addToUserHistory} = useContext(AuthContext);
    let handleJoinVideoCall = async () => {
        await addToUserHistory(meetingCode)
        navigate(`/${meetingCode}`)
    }

    return (
    <>
        <div
        style={{
            minHeight: "100vh",
            background: "#f5f7fb",
            fontFamily: "Arial, sans-serif",
        }}
        >
        {/* Navbar */}
        <div
            className="navBar"
            style={{
            height: "70px",
            background: "#0f172a",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 40px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
        >
            <div style={{ display: "flex", alignItems: "center" }}>
            <h2 style={{ margin: 0, fontSize: "28px" }}>Apna Video Call</h2>
            </div>

            <div
            style={{
                display: "flex",
                alignItems: "center",
                gap: "25px",
            }}
            >
            <div
                style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                }}
            >
                <IconButton
                onClick={() => {
                    navigate("/history");
                }}
                style={{ color: "white" }}
                >
                <RestoreIcon />
                </IconButton>

                <p style={{ margin: 0 }}>History</p>
            </div>

            <Button
                onClick={() => {
                localStorage.removeItem("token");
                navigate("/auth");
                }}
                variant="contained"
                style={{
                background: "#2563eb",
                borderRadius: "10px",
                textTransform: "none",
                padding: "8px 18px",
                }}
            >
                Logout
            </Button>
            </div>
        </div>

        {/* Main Section */}
        <div
            className="meetContainer"
            style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "60px 80px",
            minHeight: "calc(100vh - 70px)",
            gap: "50px",
            }}
        >
            {/* Left Side */}
            <div
            className="leftPanel"
            style={{
                flex: 1,
            }}
            >
            <h1
                style={{
                fontSize: "52px",
                lineHeight: "1.2",
                color: "#0f172a",
                marginBottom: "25px",
                maxWidth: "650px",
                }}
            >
                Providing Quality Video Call Just Like Quality Education
            </h1>

            <p
                style={{
                fontSize: "18px",
                color: "#475569",
                marginBottom: "35px",
                }}
            >
                Connect instantly with secure and high quality meetings.
            </p>

            <div
                style={{
                display: "flex",
                gap: "15px",
                alignItems: "center",
                }}
            >
                <TextField
                onChange={(e) => setMeetingCode(e.target.value)}
                id="outlined-basic"
                label="Meeting Code"
                variant="outlined"
                style={{
                    background: "white",
                    borderRadius: "10px",
                    width: "320px",
                }}
                />

                <Button
                onClick={handleJoinVideoCall}
                variant="contained"
                style={{
                    height: "56px",
                    padding: "0 30px",
                    borderRadius: "10px",
                    fontSize: "16px",
                    textTransform: "none",
                    background: "#2563eb",
                }}
                >
                Join
                </Button>
            </div>
            </div>

            {/* Right Side */}
            <div
            className="rightPanel"
            style={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
            >
            <img
                srcSet="/logo3.png"
                alt=""
                style={{
                width: "100%",
                maxWidth: "550px",
                objectFit: "contain",
                }}
            />
            </div>
        </div>
        </div>
    </>
    )
}


export default withAuth(HomeComponent)


