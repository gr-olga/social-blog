import {useRecoilValue} from "recoil";
import {getCategoriesState} from "../../store";
import styles from './blogForm.module.scss';

export default function BlogForm() {
    const categories = useRecoilValue(getCategoriesState);
    return (
        <div className={styles.blogForm}>
            <h2 className={styles.blogForm__title}>Plaats een blog bericht</h2>
            <div className={styles.blogForm__row}>
                <label className={styles.blogForm__label} htmlFor="title">Berichtnaam</label>
                <input className={styles.blogForm__input} type="text" placeholder="Geen title"/>
            </div>
            <div className={styles.blogForm__row}>
                <label className={styles.blogForm__label} htmlFor="category">Categorie</label>
                <select className={styles.blogForm__select}>
                    {categories.map((category: string, index: number) => (
                        <option key={index} value={category}>{category}</option>
                    ))}
                </select>
            </div>
            <div className={styles.blogForm__row}>
                <label className={styles.blogForm__label} htmlFor="file">Header afbeelding</label>
                <input className={styles.blogForm__input} type="file"/>
            </div>
            <div className={styles.blogForm__row}>
                <textarea className={styles.blogForm__input} rows={12} placeholder="Bericht"/>
            </div>
            <div className={`${styles.blogForm__row} ${styles.centered}`}>
                <button className={styles.blogForm__button}>Bericht aanmaken</button>
            </div>
        </div>
    )
}