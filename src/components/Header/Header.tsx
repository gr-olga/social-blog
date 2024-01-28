import styles from './header.module.scss';
import {NavLink} from "react-router-dom";

export default function Header() {

    return (
        <div className={styles.header_main}
             style={{background: `no-repeat, url('${process.env.PUBLIC_URL}/HeaderBack.png')`}}>
            <div>
                <img src={`${process.env.PUBLIC_URL}/logo.svg`} alt="logo"/>
            </div>
            <div>
                <NavLink to={'./'}>Home</NavLink>
                <NavLink to={'./blog'}>Blog</NavLink>
            </div>
        </div>
    )
}