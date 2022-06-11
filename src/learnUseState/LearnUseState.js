import React from 'react';
import { useState } from 'react';

function LearnUseState() {
    // const cost = [100, 200, 300];
    // const initial = 1;
    const infoUser = {
        name: 'Ngọc Linh',
        description: 'cute',
        dob: '23/3/2000',
    };
    const [info, setInfo] = useState(infoUser);

    const handleChange = () => {
        setInfo({ ...infoUser, pussy: 'Khít hồng' });
    };

    return (
        <div>
            <h1>{JSON.stringify(info)}</h1>
            <button onClick={handleChange}>Change</button>
        </div>
    );
}

export default LearnUseState;
