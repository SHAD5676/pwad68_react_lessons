import React from 'react'

function Fruits() {

    const Fruits = ["Mango", "Orange"];
    return (
        <>
        <table border={1}>
            <tr>
                <th>Fruit Name </th>
            </tr>
            {Fruits.map(fruit => {
                return (<tr><td>{fruit}</td></tr>)
            })
            }
        </table>
        </>
    )
}


export default Fruits
