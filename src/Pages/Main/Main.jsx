import styles from './Main.module.css';

function Main() {
    const handleClick = () => {
        window.open('https://wa.me/qr/FHTTX3GA3XUAM1', '_blank');
    };

    return (
        <main className={styles.main}>
            <div className={styles.up}>
                <h4>Сервисный центр</h4>
                <h4><span className={styles.colorBlue}>Revivfy</span> в Алматы</h4>
                <p>Обходитесь без лишних затрат</p>
                <div className={styles.upDown}>
                    <button onClick={handleClick} className={styles.button}>
                        Связаться с менеджером
                    </button>
                    <p>* Выезд и диагностика бесплатно при условии ремонта</p>
                </div>
            </div>
            <div className={styles.downRow}>
                <div className={styles.downItem}>
                    <div className={styles.leftRight}>
                        <h3>0</h3>
                        <div className={styles.textRight}>
                            <p className={styles.top}>₸</p>
                            <p>диагностика</p>
                        </div>
                    </div>
                </div>

                <div className={styles.downItem}>
                    <div className={styles.leftRight}>
                        <h3>3</h3>
                        <div className={styles.textRight}>
                            <p className={styles.top}>дней</p>
                            <p>ремонта</p>
                        </div>
                    </div>
                </div>

                <div className={styles.downItem}>
                    <div className={styles.leftRight}>
                        <h3>100%</h3>
                        <div className={styles.textRight}>
                            <p className={styles.top}>гарантия</p>
                            <p>на ремонт</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.RightBackground}>
                <img src="/assets/BlueBackground.svg" alt="background" />
                <img src="/assets/Technology.png" alt="" />
            </div>
        </main>
    );
}

export default Main;