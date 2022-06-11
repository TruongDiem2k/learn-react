import React from 'react';
import { useState } from 'react';

function CheckBox() {
    const courses = [
        {
            id: 1,
            name: 'HTML',
        },
        {
            id: 2,
            name: 'CSS',
        },
        {
            id: 3,
            name: 'JS',
        },
    ];
    const [check, setCheck] = useState([]);
    const handleSubmit = () => {
        console.log(check);
    };
    const handleCheck = (id) => {
        setCheck((prev) => {
            if (check.includes(id)) {
                console.log(check.filter((item) => item !== id));
                return check.filter((item) => item !== id);
            } else return [...prev, id];
        });
    };
    return (
        <div style={{ padding: '50px' }}>
            {courses.map((course) => (
                <div key={course.id}>
                    <input
                        checked={check.includes(course.id)}
                        type="checkbox"
                        onChange={() => handleCheck(course.id)}
                    />
                    {course.name}
                </div>
            ))}
            <button onClick={() => handleSubmit()}>submit</button>
        </div>
    );
}

export default CheckBox;
