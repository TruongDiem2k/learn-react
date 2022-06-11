import { useState } from 'react';

function ExUseState() {
    const [cars, setCars] = useState(['Bugatti', 'Roll-Royce', 'Maybach']);

    const handleUpdate = () => {
        setCars((prevState) => {
            console.log(prevState);
            return [...prevState, 'Lamborghini'];
        });
    };

    console.log(cars); // Output: ?

    return (
        <div>
            <h1>ReactJS</h1>
            <button onClick={handleUpdate}>Update</button>
        </div>
    );
}

export default ExUseState;
