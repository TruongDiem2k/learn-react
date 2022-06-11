import React from 'react';
import { useState } from 'react';

function ReceiveGift() {
    const gifts = ['Ngọc Linh', 'Kim Phụng', 'Ngọc Ánh'];
    const initGift = 'Chưa có phần thưởng';

    const [gift, setGift] = useState(initGift);

    const handleReceiveGift = () => {
        const randomGiftIndex = Math.floor(Math.random() * 3);

        setGift(gifts[randomGiftIndex]);
    };

    return (
        <div>
            <h1>{gift}</h1>
            <button onClick={handleReceiveGift}>Lấy thưởng</button>
        </div>
    );
}

export { ReceiveGift };
