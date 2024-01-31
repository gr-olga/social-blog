import styles from './blogItem.module.scss';
import {BlogState} from "../../types";
import {API_URL} from "../../services/blog-service";

export default function BlogItem(props: BlogState) {
    const {title, content, img_url, category, created_at} = props;
    const date = new Date(created_at).toLocaleDateString();

    return (
        <div className={styles.blogItem}>
            <div className={styles.blogItem__header}  style={{background: `no-repeat, url('${API_URL}/storage/${img_url}')`}}>
                <div className={styles.blogItem__headerItem}>{date}</div>
                <div className={styles.blogItem__headerItem}>{category.name}</div>
            </div>
            <div className={styles.blogItem__infoContainer}>
                <h3 className={styles.blogItem__title}>{title}</h3>
                <p className={styles.blogItem__message}>
                    {content}
                </p>
            </div>
        </div>
    )
}