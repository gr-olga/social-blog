import styles from './header.module.scss';

export default function Header() {

    return (
        <div className={styles.header_main}
             style={{background:`no-repeat, url('${process.env.PUBLIC_URL}/HeaderBack.png')`}}>
            <div>Current</div>
            <div>
                <h2>Home</h2>
                <h2>Blog</h2>
            </div>
        </div>
    )
}