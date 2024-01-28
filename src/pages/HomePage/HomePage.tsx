import {useRecoilValue} from "recoil";
import {getCategoriesState} from "../../store";
import BlogForm from "../../components/BlogForm/BlogForm";

export default function HomePage() {

    return (
        <div>
            <h1>Home Page</h1>
            <BlogForm/>
        </div>
    )
}