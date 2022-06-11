import { useMemo, useState, useRef } from 'react';

function UseMemo() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [product, setProduct] = useState([]);
    const inputName = useRef();
    const productObj = {
        name,
        price: +price,
    };

    const total = useMemo(() => {
        return product.reduce((result, curr) => result + curr.price, 0);
    }, [product]);

    const handleSubmit = () => {
        setProduct([...product, productObj]);
        setName('');
        setPrice('');
        inputName.current.focus();
    };

    return (
        <div style={{ margin: '50px' }}>
            <input
                ref={inputName}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <br />
            <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <div>Total: {total}</div>
            <button onClick={handleSubmit}>ADD</button>
            <ul>
                {product.map((item, index) => {
                    return (
                        <li key={index}>
                            {item.name} - {item.price}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default UseMemo;
