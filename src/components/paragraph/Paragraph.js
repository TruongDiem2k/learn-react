import styles from './Paragraph.module.css';

console.log(styles);

function Paragraph() {
    return (
        <p className={styles.ngoc_linh}>
            Em Ngọc Linh siuu cute có đôi ti hồng nhỏ nhắn.
        </p>
    );
}

export default Paragraph;
