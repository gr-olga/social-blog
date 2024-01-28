import {useRecoilValue} from "recoil";
import {getCategoriesState} from "../../store";

export default function BlogForm() {
    const categories = useRecoilValue(getCategoriesState);
    return (
        <div>
            <div>
                <label htmlFor="title">Berichtnaam</label>
                <input type="text" placeholder="Geen title"/>
            </div>
            <div>
                <label htmlFor="category">Categorie</label>
                <select>
                    {categories.map((category: string, index: number) => (
                        <option key={index} value={category}>{category}</option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="file">Header afbeelding</label>
                <input type="file"/>
            </div>
            <div>
                <input type="text" maxLength={5000} placeholder="Bericht"/>
            </div>
            <button>Bericht aanmaken</button>
        </div>
    )
}