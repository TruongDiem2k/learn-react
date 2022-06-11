import React from 'react';
import { useState, useEffect } from 'react';

function FakeChat() {
    const lesson = [
        {
            id: 1,
            message: 'Hello',
        },
        {
            id: 2,
            message: 'How are you?',
        },
        {
            id: 3,
            message: 'I am fine',
        },
    ];
    const [lessonId, setLessonId] = useState(1);

    useEffect(() => {
        const handleComment = (e) => {
            console.log(e.detail);
        };

        window.addEventListener(`lesson-${lessonId}`, handleComment);

        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment);
        };
    }, [lessonId]);

    return (
        <div style={{ margin: '50px' }}>
            <ul>
                {lesson.map((item) => (
                    <li
                        style={item.id === lessonId ? { color: ' red' } : {}}
                        key={item.id}
                        onClick={() => setLessonId(item.id)}
                    >
                        {item.message}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FakeChat;
