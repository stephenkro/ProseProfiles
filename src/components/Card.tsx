import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionCard(props: any) {
    const handleClick = () => {
        console.log("CLICK FUNCTION HERE");
    };
    return (
        <CardActionArea onClick={handleClick}>
            <Card
                sx={{
                    minHeight: 500,
                    maxHeight: 700,
                    maxWidth: 700,
                    minWidth: 300,
                    margin: "10px",
                    overflow: "auto",
                    color: "#009AF0",
                    transition: "transform 0.15s ease-in-out",
                    "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
                }}
            >
                <CardMedia
                    component="img"
                    height="200"
                    image={props.imageUrl}
                    alt="pic"
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        fontWeight={700}
                    >
                        {props.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.description}
                    </Typography>
                </CardContent>
            </Card>
        </CardActionArea>
    );
}
