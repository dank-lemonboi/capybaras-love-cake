import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class MyFirstRoute extends Component {
    constructor(props) {
        super(props);

        this.state = {
            foodItems: ['apple', 'cake']
        }
    }

    render() {
        let food = this.state.foodItems.map((item, i) => {
            return (

                // the key should always be on the outermost element

                <Link to={`/third/${item}`} key={i}>
                    <p>{item}</p>
                </Link>
            )
        })

        return (
            <div>
                <h1>My Store</h1>
                {food}
            </div>
        )
    }
}

// export default function MyFirstRoute() {
//     return <h1>First Route MFKA!!!!</h1>
// }