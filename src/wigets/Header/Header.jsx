import styles from './Header.module.css'

function Header() {
    return (
        <div>
            <header className={styles.header}>
                <div className={styles.left}>
                    <img src="/assets/logo.png" alt="logo" />
                    <div className={styles.leftSecond}>
                        <img src="/assets/gps.svg" alt="" />
                        <p>По всему </p>
                        <p>Алматы</p>
                    </div>
                </div>

                <div className={styles.mid}>
                    <img src="/assets/watch.svg" alt="time" />
                    <p>Время роботы</p>
                    <p>24/7</p>
                </div>

                <div className={styles.right}>
                    <img src="/assets/phone.svg" alt="phone" />
                    <p>+7 707 548 08 06</p>
                    <p>+7 707 548 08 06</p>
                </div>
                <div className={styles.rightGarant} >
                    <h4>Гарантия 2 года</h4>
                </div>
            </header>


        </div>
    )
}

export default Header;