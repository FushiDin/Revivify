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
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '30px',
      padding: '30px',
      backgroundColor: '#f5f5f5'
    }}>
      
      <div style={{
        width: '350px',
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
      }}>
        <h2>Контакты</h2>
        <p><strong>Город:</strong> Алматы</p>
        <p><strong>Время работы:</strong> 24/7</p>
        <p><strong>Телефоны:</strong></p>
        <p>+7 (747) 588 08 06</p>
        <p>+7 (747) 588 08 06</p>
        <button onClick={handleClick} className={styles.buttons}>
          Написать нам
        </button>
      </div>

      <div id="map" style={{
        flex: 1,
        minWidth: '400px',
        height: '500px',
        borderRadius: '12px',
        overflow: 'hidden'
      }}></div>
    </div>
  );
}

export default MainThird;