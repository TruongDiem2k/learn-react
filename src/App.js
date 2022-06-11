import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/Home';
import NewsPage from './pages/News';
import ContactPage from './pages/Contact';

function App() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/news">News</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </div>
    );
}

export default App;

// function App() {
//     const [count, setCount] = useState(0);
//     const handleClick = useCallback(() => {
//         setCount((prev) => prev + 1);
//     }, []);
//     return (
//         <>
//             <MemoAndUseCallback onClick={handleClick} />;<h1>{count}</h1>
//         </>
//     );
// }

// {function emitComment(id) {
//     setInterval(() => {
//         window.dispatchEvent(
//             new CustomEvent(`lesson-${id}`, {
//                 detail: `Ngọc Linh cute của Trường ${id}`,
//             })
//         );
//     },2000);
// }

// emitComment(1)
// emitComment(2)
// emitComment(3)
// }
