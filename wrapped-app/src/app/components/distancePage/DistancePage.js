import React, { useState } from "react";
import './distancePage.css';
import { Fade, Flip } from "react-awesome-reveal";
import { Button } from '@mui/material';
import { Bar } from "react-chartjs-2";
import { BarElement,  CategoryScale,Chart as ChartJS,Legend, LinearScale,Title, Tooltip } from "chart.js";
import Image from 'next/image';
import planeTicket from 'public/images/planeTicket.jpg';
import Footer from "../footer/Footer";

ChartJS.register(CategoryScale, LinearScale, BarElement,Title,Tooltip,Legend);

const DistancePageIntro = ({handleTap}) => {
    return (
        <div className={'distance-page-header'}>
            <Fade
                cascade
                duration={2000}
                damping={0.75}
                triggerOnce
            >
                <p>When talking wasn't enough, we went to visit each other</p>
                <p>And man, did we go far!</p>
                <Button onClick={() => {
                    handleTap();
                }}>
                    Continue
                </Button>
            </Fade>
        </div>
    )
}

const DistancePageGraph = () => {
    const option={
        indexAxis:'x',
        elements:{
            bar:{
                borderWidth:4,
            },
        },
        maintainAspectRatio: false,
        responsive: true,
        interaction:{
            mode:'index',
            intersect:false
        },
        scales:{
            x:{
                stacked:true
            },
            y:{
                stacked:true
            }
        },
        
        plugins:{
            legend:{
                position:'top',
                labels: {
                    font: {
                        size: 18,
                    },
                },
            },
            title:{
                display:true,
                text:'Distance Travelled'
            }
        },
    }
      
      
    const data = {
        labels: ["Devin", "Regina"],
        datasets: [
            {
            label: "Car",
            data: [29.6, 267.6],
            backgroundColor: "red",
            },
            {
            label:'Bus',
            data:[270, 135],
            backgroundColor:'yellow'
            },
            {
            label:'Train',
            data:[54.4, 0],
            backgroundColor:'blue'
            },
            {
            label:'Plane',
            data:[432, 0],
            backgroundColor:'white'
            },
        ],
    };
    return (<Bar options={option} data={data} width={300} height={400}/>)
}

const DistancePageIntroContent = ({currentPage, setPage, numPages}) => {
    const [showGraph, setShowGraph] = useState(true);
    const [showFact, setShowFact] = useState(false);

    return (
        <div className={'distance-page-stats'}>
            {!showFact && 
            <Fade
                cascade
                triggerOnce
                duration={2000}
                damping={0.75}
            >
                {showGraph &&
                    <div>
                        <DistancePageGraph/>
                    </div>
                }
                <p className={'distance-page-stats-text'}>In total, we've travelled over 1,110 miles to see each other.</p>
                <p className={'distance-page-stats-text'}>That's enough to travel from Hanoi to Ho Chi Minh City!</p>
                {!showFact && <Button onClick={() => setShowFact(true)}>Continue</Button>}
            </Fade>}
            {showFact &&
                <Fade
                    triggerOnce
                    duration={2000}
                    cascade
                    damping={0.75}
                    className={'distance-page-stats-fact'}
                >
                    <p>Fun Fact: I still have the boarding pass from my first trip to visit you!</p>
                    <Image
                        src={planeTicket}
                        className={'plane-ticket-image'}
                        alt="first plane ticket"
                    />
                    <Footer currentPage={currentPage} setPage={setPage} numPages={numPages}/>
                </Fade>
            }
        </div>
    )
}

const DistancePage = ({page, currentPage, setPage, numPages}) => {
    const [showStats, setShowStats] = useState(false);
    const handleTap =() => {
        setShowStats(true)
    }
    return (
        <div id={page} className={'distance-page-content'}>
            {!showStats && <DistancePageIntro handleTap={handleTap}/>}
            {showStats && <DistancePageIntroContent currentPage={currentPage} setPage={setPage} numPages={numPages}/>}
        </div>
    )
}

export default DistancePage;