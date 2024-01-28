import styles from './header.module.scss';
import {NavLink} from "react-router-dom";

export default function Header() {

    return (
        <div className={styles.header_main}
             style={{background: `no-repeat, url('${process.env.PUBLIC_URL}/HeaderBack.png')`}}>
            <div className={styles.header_main__conteiner}>
                <div className={styles.header_main__logo}>
                    <img src={`${process.env.PUBLIC_URL}/logo.svg`} alt="logo"/>
                </div>
                <div className={styles.header_main__navigaiton}>
                    <NavLink className={styles.header_main__link} to={'./'}
                             style={({isActive, isPending, isTransitioning}) => {
                                 return {
                                     color: isActive ? "#E95E30" : "#FFFFFF",
                                     viewTransitionName: isTransitioning ? "slide" : "",
                                 };
                             }}
                    >Home</NavLink>
                    <NavLink className={styles.header_main__link} to={'./blog'}
                             style={({isActive, isPending, isTransitioning}) => {
                                 return {
                                     color: isActive ? "#E95E30" : "#FFFFFF",
                                     viewTransitionName: isTransitioning ? "slide" : "",
                                 };
                             }}
                    >Blog</NavLink>
                </div>
            </div>
        </div>
    )
}