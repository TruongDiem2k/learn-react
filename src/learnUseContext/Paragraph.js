import { useContext } from 'react';
import { ExContext } from './ContextTheme';


function Paragraph() {
    const context = useContext(ExContext);
    return (
        <p className={context.theme}>
            Địt em Ngọc Linh loli vú hồng nhọn hoắt với cái lồn bé xinh đỏ hồng
            rỉ nước không lông
        </p>
    );
}

export default Paragraph;
