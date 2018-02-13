import React from 'react';

export default function Third(props) {
    console.log(props)
    return (
        <div className="third_container">
            <h2>This is the Details route</h2>

            {/* We passed details with PROPS and access it below */}
            
            You clicked on {props.match.params.foodItem}
            <h1>The Majestic Capybara Loves {props.match.params.foodItem}</h1>
            <img src="https://media1.britannica.com/eb-media/77/191677-004-7445B21F.jpg" alt="" />
        </div>
    )
}