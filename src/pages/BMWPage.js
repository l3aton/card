import '../css/BMWPage.css'
import BMWVideo from '../videos/BMWe36V.MP4'
import BMWLogo from '../photos/bmwlogo.png'
import bmwe36cabrio from '../photos/bmwe36cabrio.jpg'
import bmwe36compact from '../photos/bmwe36compact.jpg'
import bmwe36coupe from '../photos/bmwe36coupe.jpg'
import bmwe36m3 from '../photos/bmwe36m3.jpeg'
import bmwe36sedan from '../photos/bmwe36sedan.jpeg'
import bmwe36touring from '../photos/bmwe36touring.jpg'
import { useState } from 'react'
import { useEffect } from 'react';

const BMWPage = () => {

    useEffect(() => {
        alert('На сторінці містяться фото та відео, будь ласка зачекайте поки вони завантажаться');
    }, []);

    const [current, setCurrent] = useState(0);

    const nextSlide = () => setCurrent((current + 1) % carTypes.length);
    const prevSlide = () => setCurrent((current - 1 + carTypes.length) % carTypes.length);

      const specs = [
    { title: 'Тип двигуна', base: 'Бензиновий, 4-циліндровий', m3: 'Бензиновий, 6-циліндровий' },
    { title: 'Об’єм двигуна', base: '1.6 л', m3: '3.0–3.2 л' },
    { title: 'Потужність', base: '~100 к.с.', m3: '286–321 к.с.' },
    { title: 'Привід', base: 'Задній', m3: 'Задній' },
    { title: 'Коробка передач', base: '5-ступенева механіка', m3: '5/6-ступенева механіка' },
    { title: 'Розгін 0–100 км/год', base: '~12.9 с', m3: '~5.5 с' },
    { title: 'Максимальна швидкість', base: '~190 км/год', m3: 'до 250 км/год' },
    { title: 'Витрата пального', base: '~7.5 л/100 км', m3: '~10.5 л/100 км' },
    { title: 'Маса', base: '~1200 кг', m3: '~1450 кг' },
    { title: 'Роки виробництва', base: '1990–2000', m3: '1992–1999' },
    ];

    const carTypes = [bmwe36cabrio, bmwe36compact, bmwe36coupe, bmwe36m3, bmwe36sedan, bmwe36touring]
    return(
        <div>
            <div className='video-container-bmw'>
                <video src={BMWVideo} className="video-bmw" autoPlay muted loop playsInline />
                <div className='top-nav-bmw'>
                    <a href="https://www.bmw.ua/uk/index.html">
                        <img src={BMWLogo} alt="bmw logo" className='bmw-logo'/>
                    </a>
                    <h2 className='bmw-short-description'>BMW E36 — це культовий спортивний седан 90-х років</h2>
                </div>

                <div className='content-over-bmw'>
                    <div className='line'></div>
                    <h1 className='bmw-h1'>BMW e36</h1>
                </div>
            </div>
            
            <div>
                <h2 className='bmw-description'>BMW E36 — це третє покоління легендарної 3-ї серії, яке випускалося з 1990 по 2000 рік. Модель стала революційною для свого часу завдяки сучасному дизайну, покращеній аеродинаміці та новим технологіям. E36 доступна в кількох варіантах кузова: седан, купе, кабріолет, універсал (Touring) та компакт. <br/>Автомобіль отримав широку лінійку бензинових і дизельних двигунів об'ємом від 1.6 до 3.2 літра, а спортивна версія M3 E36 стала справжньою іконою серед поціновувачів драйву. Вона поєднувала високу продуктивність, баланс шасі та класичний задній привід, за що досі цінується в автоспільноті.<br/>BMW E36 — це поєднання надійності, динаміки та стилю, яке залишає слід у серці кожного автолюбителя.</h2>
            </div>
            <div className="specs-container">
            <h2>Технічні характеристики</h2>
            <table className="specs-table">
                <thead>
                <tr>
                    <th>Характеристика</th>
                    <th>BMW E36 (316i)</th>
                    <th>BMW M3 E36</th>
                </tr>
                </thead>
                <tbody>
                {specs.map((row, i) => (
                    <tr key={i}>
                    <td>{row.title}</td>
                    <td>{row.base}</td>
                    <td>{row.m3}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
            <div className="slider-container">
                <button className="slider-btn left" onClick={prevSlide}>‹</button>
                <img src={carTypes[current]} alt="slide" className="slider-image" />
                <button className="slider-btn right" onClick={nextSlide}>›</button>
            </div>

        </div>
    )
}

export default BMWPage;