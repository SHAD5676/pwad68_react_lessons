import React from 'react'

function Vehicles() {
    const vehicles = ["Rickshaw", "Toyota", "Plane"];
    const [x, y, z] = vehicles; //Destructuring
    return (
        <div>
            <h1>Vehicles</h1>
            Our first vehicles is {x} <br />
            Our second vehicles is {y} <br />
            Our third vehicles is {z} <br />

        </div>
    )
}

export default Vehicles
