import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.left}>
                <img src="/assets/logo.png" alt="logo" />

            </div>
            <div className={styles.right}>
                <p>Ремонт бытовой техники в Алматы.<br /> Качественно-быстро</p>
            </div>
        </footer>

    )
}

export default Footer;