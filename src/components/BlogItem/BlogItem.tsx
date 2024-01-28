import styles from './blogItem.module.scss';

export default function BlogItem() {

    return (
        <div className={styles.blogItem}>
            <div className={styles.blogItem__header}>
                <div className={styles.blogItem__headerItem}>date</div>
                <div className={styles.blogItem__headerItem}>category</div>
            </div>
            <div className={styles.blogItem__infoContainer}>
                <h3 className={styles.blogItem__title}>Heading</h3>
                <p className={styles.blogItem__message}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget metus blandit, pharetra nisi eu, aliquet leo. risus, id lobortis massa ultrices nec.
                </p>
            </div>
        </div>
    )
}