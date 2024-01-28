import {useRecoilValue} from "recoil";
import {getCategoriesState} from "../../store";
import styles from './blogForm.module.scss';
import {ChangeEvent, FormEvent, useState} from "react";

export default function BlogForm() {
    const categories = useRecoilValue(getCategoriesState);

    const [formData, setFormData] = useState({
        name: '',
        category: 'Tech',
        //TODO not sure how to handle file upload so far
        file: '',
        message: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        //TODO: handle submit
        console.log(formData);
    };

    return (
        <form name="blogForm" className={styles.blogForm} onSubmit={handleSubmit}>
            <h2 className={styles.blogForm__title}>Plaats een blog bericht</h2>
            <div className={styles.blogForm__row}>
                <label className={styles.blogForm__label} htmlFor="title">Berichtnaam</label>
                <input type="text"
                       name="name"
                       className={styles.blogForm__input}
                       value={formData.name}
                       onChange={handleChange}
                       placeholder="Geen title"/>
            </div>
            <div className={styles.blogForm__row}>
                <label className={styles.blogForm__label} htmlFor="category">Categorie</label>
                <select name="category"
                        className={styles.blogForm__select}
                        value={formData.category}
                        onChange={handleChange}
                >
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
                <textarea className={styles.blogForm__input}
                          name="message"
                          rows={12}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Bericht"
                />
            </div>
            <div className={`${styles.blogForm__row} ${styles.centered}`}>
                <button type="submit" className={styles.blogForm__button}>Bericht aanmaken</button>
            </div>
        </form>
    )
}