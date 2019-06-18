import React from 'react';
import './LandingMessageOrder.css'

const LandingMessageOrder = () => {
    return (
        <div className="landing">
            <section className="bg-dark last"><p>and you will read this last</p></section>
            <section className="first">
                <h1>You will read this first</h1>
            </section>
            <section className="bg-dark next">
                <h2>And then you will read this</h2>
                <h3>Then this one</h3>
            </section>
        </div>
    )
}

export default LandingMessageOrder
