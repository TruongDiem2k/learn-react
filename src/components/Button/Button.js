import clsx from 'clsx';

import styles from './Button.module.scss';

function Button({ primary }) {
    const classes = clsx(styles.button,'global-styles', {
        [styles.primary]: primary,
    });

    return (
        <>
            <button className={classes}>Click me</button>
            <button className={styles.button}>Click me</button>
        </>
    );
}

export default Button;
