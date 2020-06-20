import React from 'react';
import './titleHeader.css';
export default function TitleHeader() {
    return (
        <div className="flexColumn">
            <div className="flexCenter">
                <img src="assets/main.jpg" alt="titleImage" className='image' />
            </div>
            <h1 >Keith Franklin Jathanna</h1>
            <h2>
            Hi there! I am Keith Franklin. I am a full stack web-developer; basically a guy who makes websites. I live in the beautiful garden city - Bangalore, India. Most of my websites are developed with NodeJS on the back-end and with React or Angular as the front-end framework.
I try to compose programs with the simple idea that "Writing code is also art". The notion of programs being art may come off as a stretch for someone who doesn't write programs but I believe there is a beauty, joy and wonder to it. I'm exploring the short but intersting history of computers and the different ideas that were incepted from them.
            </h2>
        </div>
    );
}


