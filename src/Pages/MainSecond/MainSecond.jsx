import styles from './MainSecond.module.css'

function MainSecond() {

    return (
        <div className={styles.mainSecond}>
            <div className={styles.Step}>
                <img src="/assets/WorkStep.svg" alt="Step" />
                <img src="/assets/White.jpg" alt="" />
                <p style={{ lineHeight: '1' }}>Осуществим диагностику за наш счет,<br /><br /> при условии ремонта<br /><br /> диагностика без ремонта 2000тг</p>
            </div>
        </div>
    )
}

export default MainSecond;