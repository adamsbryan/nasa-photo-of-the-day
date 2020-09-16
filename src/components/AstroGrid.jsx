import React, {useState, useEffect} from "react";
import axios from "axios";
import AstroCard from "./AstroCard";

export default function AstroGrid()
{
    const [info, setInfo] = useState([]);

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=vkIM0yNz35oNC1yk7CemjBRPpYTXEJJvVF3lb52V`)
            .then(response => {
                setInfo(response.data);
            })
            .catch(error => {
                console.log("no pics", error);
            });
    }, []);
    console.log(info);
    return(
        <div className = "container">
            <AstroCard 
                image={info.hdurl}
                title={info.title}
                date={info.date} 
                desc={info.explanation} 
            />
        </div>
    );
}