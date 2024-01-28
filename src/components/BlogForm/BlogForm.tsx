import {useRecoilValue} from "recoil";
import {getCategoriesState} from "../../store";
import styles from './blogForm.module.scss';

export default function BlogForm() {
    const categories = useRecoilValue(getCategoriesState);
    return (
        <div className={styles.blogForm}>
            <div className={styles.blogForm__row}>
                <label htmlFor="title">Berichtnaam</label>
                <input type="text" placeholder="Geen title"/>
            </div>
            <div className={styles.blogForm__row}>
                <label htmlFor="category">Categorie</label>
                <select>
                    {categories.map((category: string, index: number) => (
                        <option key={index} value={category}>{category}</option>
                    ))}
                </select>
            </div>
            <div className={styles.blogForm__row}>
                <label htmlFor="file">Header afbeelding</label>
                <input type="file"/>
            </div>
            <div className={styles.blogForm__row}>
                <input type="text" maxLength={5000} placeholder="Bericht"/>
            </div>
            <button>Bericht aanmaken</button>
        </div>
    )
}