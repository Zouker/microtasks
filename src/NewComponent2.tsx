import React from 'react';

type NewComponent2Type = {
    topCars: Array<TopCarsType>
}

type TopCarsType = {
    manufacturer: string
    model: string
}


const NewComponent2 = (props: NewComponent2Type) => {

    return (
        <table>
            <tbody>
            {props.topCars.map((objectFromTopCarsArray, index) => {
                return (
                    <tr key={index}>
                        <td>{objectFromTopCarsArray.manufacturer}</td>
                        <td>{objectFromTopCarsArray.model}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}

export default NewComponent2;