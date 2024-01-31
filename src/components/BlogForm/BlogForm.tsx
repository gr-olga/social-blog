import {useRecoilValue} from "recoil";
import {getCategoriesState} from "../../store";
import styles from './blogForm.module.scss';
import {ChangeEvent, FormEvent, useState} from "react";
import {postBlogs} from "../../services/blog-service";
import {Category} from "../../types";

export default function BlogForm() {
    const categories = useRecoilValue(getCategoriesState);
    const formInitialState = {
        title: '',
        content: '',
        category_id: 1,
        image: ''
    }

    const [formData, setFormData] = useState(formInitialState);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
        const isFile: boolean = e.target.name === 'image';
        setFormData({...formData, [e.target.name]: isFile ? (e.target as any).files[0] : e.target.value});
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const data = new FormData();
        data.append('image', formData.image);
        data.append('title', formData.title);
        data.append('category_id', String(formData.category_id));
        data.append('content', formData.content);
        void postBlogs(data as any);
        setFormData(formInitialState);
    };

    return (
        <form name="blogForm" className={styles.blogForm} onSubmit={handleSubmit}>
            <h2 className={styles.blogForm__title}>Plaats een blog bericht</h2>
            <div className={styles.blogForm__row}>
                <label className={styles.blogForm__label} htmlFor="title">Berichtnaam</label>
                <input type="text"
                       name="title"
                       className={styles.blogForm__input}
                       value={formData.title}
                       onChange={handleChange}
                       placeholder="Geen title"
                       required/>
            </div>
            <div className={styles.blogForm__row}>
                <label className={styles.blogForm__label} htmlFor="category">Categorie</label>
                <select name="category_id"
                        className={styles.blogForm__select}
                        value={formData.category_id}
                        onChange={handleChange}
                        required
                >
                    {categories.map((category: Category, index: number) => (
                        <option key={index} value={category.id}>{category.name}</option>
                    ))}
                </select>
            </div>
            <div className={styles.blogForm__row}>
                <label className={styles.blogForm__label} htmlFor="file">Header afbeelding</label>
                <input className={styles.blogForm__input}
                       type="file"
                       name="image"
                       onChange={handleChange}
                       required
                />
            </div>
            <div className={styles.blogForm__row}>
                <textarea className={styles.blogForm__input}
                          name="content"
                          rows={12}
                          value={formData.content}
                          onChange={handleChange}
                          placeholder="Bericht"
                          required
                />
            </div>
            <div className={`${styles.blogForm__row} ${styles.centered}`}>
                <button type="submit" className={styles.blogForm__button}>Bericht aanmaken</button>
            </div>
        </form>
    )
}