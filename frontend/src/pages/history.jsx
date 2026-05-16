import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';

import { IconButton } from '@mui/material';


export default function History() {


    const { getHistoryOfUser } = useContext(AuthContext);

    const [meetings, setMeetings] = useState([])


    const routeTo = useNavigate();

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const history = await getHistoryOfUser();
                setMeetings(history);
            } catch {

            }
        }

        fetchHistory();
    }, [])

    let formatDate = (dateString) => {

        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0")
        const year = date.getFullYear();

        return `${day}/${month}/${year}`

    }

    return (
    <Box
        sx={{
        minHeight: "100vh",
        background:
            "linear-gradient(135deg, #0f172a 0%, #111827 50%, #1e293b 100%)",
        padding: "30px",
        }}
    >
        <IconButton
        onClick={() => {
            routeTo("/home");
        }}
        sx={{
            background: "rgba(255,255,255,0.12)",
            color: "#fff",
            mb: 4,
            "&:hover": {
            background: "rgba(255,255,255,0.2)",
            },
        }}
        >
        <HomeIcon />
        </IconButton>

        <Typography
        variant="h4"
        sx={{
            color: "#fff",
            fontWeight: 700,
            mb: 4,
            textAlign: "center",
            letterSpacing: 1,
        }}
        >
        Meeting History
        </Typography>

        <Box
        sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
            justifyContent: "center",
        }}
        >
        {meetings.length !== 0 ? (
            meetings.map((e, i) => {
            return (
                <Card
                key={i}
                sx={{
                    width: 320,
                    borderRadius: "20px",
                    background: "rgba(255,255,255,0.08)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "#fff",
                    transition: "0.3s ease",
                    "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
                    },
                }}
                >
                <CardContent sx={{ padding: "24px" }}>
                    <Typography
                    sx={{
                        fontSize: 14,
                        color: "#94a3b8",
                        mb: 1,
                        letterSpacing: 1,
                    }}
                    >
                    Meeting Code
                    </Typography>

                    <Typography
                    sx={{
                        fontSize: 22,
                        fontWeight: 700,
                        color: "#fff",
                        mb: 3,
                        wordBreak: "break-word",
                    }}
                    >
                    {e.meetingCode}
                    </Typography>

                    <Typography
                    sx={{
                        fontSize: 14,
                        color: "#94a3b8",
                        mb: 1,
                        letterSpacing: 1,
                    }}
                    >
                    Date
                    </Typography>

                    <Typography
                    sx={{
                        fontSize: 18,
                        fontWeight: 500,
                        color: "#e2e8f0",
                    }}
                    >
                    {formatDate(e.date)}
                    </Typography>
                </CardContent>
                </Card>
            );
            })
        ) : (
            <Typography
            sx={{
                color: "#cbd5e1",
                fontSize: 22,
                fontWeight: 500,
                mt: 10,
            }}
            >
            No Meeting History Found
            </Typography>
        )}
        </Box>
    </Box>
    )
}


