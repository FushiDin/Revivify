import { useEffect } from 'react';
import styles from './MainThird.module.css';

function MainThird() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://maps.api.2gis.ru/2.0/loader.js?pkg=full';
    script.async = true;

    script.onload = () => {
      window.DG.then(function () {
        const map = window.DG.map('map', {
          center: [43.402806, 77.060976],
          zoom: 16,
        });

        window.DG.marker([43.402806, 77.060976])
          .addTo(map)
          .bindPopup('Алматы');
      });
    };

    document.body.appendChild(script);
  }, []);

  const handleClick = () => {
    window.open('https://wa.me/qr/FHTTX3GA3XUAM1', '_blank');
  };

  return (
    <div className={styles.mainThird}>
      <div className={styles.infoBlock}>
        <h2>Контакты</h2>
        <p><strong>Город:</strong> Алматы</p>
        <p><strong>Время работы:</strong> 24/7</p>
        <p><strong>Телефоны:</strong></p>
        <p>+7 (747) 548 08 06</p>
        <p>+7 (747) 548 08 06</p>
        <button onClick={handleClick} className={styles.buttons}>
          Написать нам
        </button>
      </div>

      <div id="map" className={styles.map}></div>
    </div>
  );
}

export default MainThird;