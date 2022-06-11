import React from 'react';
import { useState } from 'react';

function TodoList() {
    const initialJobs = () => {
        const storageJobs = JSON.parse(localStorage.getItem('job'));
        return storageJobs ?? [];
    };
    const [textJob, setTextJob] = useState('');
    const [jobs, setJobs] = useState(initialJobs);

    const handleAdd = () => {
        setJobs((prev) => {
            const newJob = [...prev, textJob];

            const jsonJob = JSON.stringify(newJob);
            localStorage.setItem('job', jsonJob);

            return newJob;
        });
        setTextJob('');
    };

    return (
        <div style={{ margin: '50px' }}>
            <input
                value={textJob}
                onChange={(event) => setTextJob(event.target.value)}
            />
            <button onClick={() => handleAdd()}>add</button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>{job}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
