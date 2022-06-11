import React from 'react';
import { useState, useEffect } from 'react';

function PreviewAvatar() {
    const [avatar, setAvatar] = useState();

    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar);
        };
    }, [avatar]);

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0];

        file.preview = URL.createObjectURL(file);
        setAvatar(file);
    };
    return (
        <div style={{ margin: '50px' }}>
            <input type="file" onChange={handlePreviewAvatar} />
            {avatar && <img multiple alt="" src={avatar.preview} width="200px" />}
        </div>
    );
}

export default PreviewAvatar;
