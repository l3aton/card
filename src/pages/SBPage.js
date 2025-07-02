import '../css/SBPage.css'
import videosb from '../videos/$UICIDEBOY$ - ANTARCTICA.mp4'
import sbphoto from '../photos/sb-duo.jpg'
import SBDrakeP from '../photos/SBDrake.jpg'
import SDSelfieP from '../photos/SBSelfie.jpg'
import thOrStTammany from '../photos/7thOrStTammany.jpg'
import DarkSideOfTheClouds from '../photos/DarkSideOfTheClouds.png'
import EtermalGray from '../photos/EtermalGray.png'
import GrayGrey from '../photos/GrayGrey.png'
import HighTideInTheSnakesNest from '../photos/HighTideInTheSnakesNest.png'
import IWantToDieInNewOrleans from '../photos/IWantToDieInNewOrleans.png'
import LongTermEffects from '../photos/LongTermEffects.png'
import MyLiverWill from '../photos/MyLiverWill.png'
import NewWorldDepression from '../photos/NewWorldDepression.png'
import NowTheMoonsRising from '../photos/NowTheMoonsRising.jpg'
import SingMeLullaby from '../photos/SingMeLullaby.png'
import StopStaringAtShadows from '../photos/StopStaringAtShadows.png'
import AppleMusic from '../photos/AppleMusic.png'
import YTMusic from '../photos/YTMusic.png'


const SBPage = () => {

  const Albums = [
    {
      img: thOrStTammany,
      linkA: 'https://music.apple.com/ua/album/7th-or-st-tammany/1549305054',
      linkY: 'https://music.youtube.com/playlist?list=OLAK5uy_lDVPXRfOqQu6K8V-uPD1OQiAF9LLJ0Zzw&si=VQ0C9aQNH4FY8GQ9',
      fullName: '7th or St. Tammany'
    },
    {
      img: DarkSideOfTheClouds,
      linkA: 'https://music.apple.com/ua/album/dark-side-of-the-clouds/1549340206',
      linkY: 'https://music.youtube.com/playlist?list=OLAK5uy_mmBxsvzt3Hsy80O9l-1xvl6EW0CS8W5c4&si=OsYtjIlq_YtSWn9p',
      fullName: 'Dark Side of the Clouds'
    },
    {
      img: EtermalGray,
      linkA: 'https://music.apple.com/ua/album/eternal-grey/1549299116',
      linkY: 'https://music.youtube.com/playlist?list=OLAK5uy_m8EX17Mzz0vXDQtLRdswu5upQ2iKgzzXg&si=_uZAn4R4prPttTd1',
      fullName: 'Eternal Grey'
    },
    {
      img: GrayGrey,
      linkA: 'https://music.apple.com/ua/album/gray-grey/1549338006',
      linkY: 'https://music.youtube.com/playlist?list=OLAK5uy_l5QJef7utV0qrmOYchEseVLSAnx-fTYQQ&si=ahbG6ioWiBEbBB6n',
      fullName: 'Gray/Grey'
    },
    {
      img: HighTideInTheSnakesNest,
      linkA: 'https://music.apple.com/ua/album/high-tide-in-the-snakes-nest/1549303182',
      linkY: 'https://music.youtube.com/playlist?list=OLAK5uy_l2HCfVS4nvYsGZ5TL6bUvtiMTK4d85dh4&si=IdDQ5xDN4hxLqqdN',
      fullName: 'High Hide in the Snake`s Nest'
    },
    {
      img: IWantToDieInNewOrleans,
      linkA: 'https://music.apple.com/ua/album/i-want-to-die-in-new-orleans/1549337069',
      linkY: 'https://music.youtube.com/playlist?list=OLAK5uy_mG4l64hZm6--KiE2lvUwISrUw5OtglK_w&si=xbPnyheyF1LYYYAF',
      fullName: 'I Want to Die in New Orleans'
    },
    {
      img: LongTermEffects,
      linkA: 'https://music.apple.com/ua/album/long-term-effects-of-suffering/1574358949',
      linkY: 'https://music.youtube.com/playlist?list=OLAK5uy_k-cfT147SC1VFt_7veBvqF67_AzCwHuxg&si=43zvfQ87uUjzEhY3',
      fullName: 'Long Term Effects of Suffering'
    },
    {
      img: MyLiverWill,
      linkA: 'https://music.apple.com/ua/album/my-liver-will-handle-what-my-heart-cant/1549299811',
      linkY: 'https://music.youtube.com/playlist?list=OLAK5uy_nARtE9JUV9wKEgVGFLkWm-PSkbuZUoBtg&si=hM8yAaheISJoESkU',
      fullName: 'My Liver Will Handle What My Heart Can`t'
    },
    {
      img: NewWorldDepression,
      linkA: 'https://music.apple.com/ua/album/new-world-depression/1737042669',
      linkY: 'https://music.youtube.com/playlist?list=OLAK5uy_nYJKDJLKmcONULNV_zCvJ4UT9S_kn3tkQ&si=qLjds7gn8jsIXGKF',
      fullName: 'New World Depression'
    },
    {
      img: NowTheMoonsRising,
      linkA: 'https://music.apple.com/ua/album/now-the-moons-rising/1549335827',
      linkY: 'https://music.youtube.com/playlist?list=OLAK5uy_kfwZV9VdLEpzt8ZKoYVzgxQshRSBRvv6M&si=rKsSr0kJLmaeETts',
      fullName: 'Now the Moons Rising'
    },
    {
      img: SingMeLullaby,
      linkA: 'https://music.apple.com/ua/album/sing-me-a-lullaby-my-sweet-temptation/1632152994',
      linkY: 'https://music.youtube.com/playlist?list=OLAK5uy_nS-c_mv9_GcNHR4xDO0JNnlgVNrI8GRM4&si=nBI45WTR5Yb2arZY',
      fullName: 'Sing Me a Lullaby My Sweet  Temptation'
    },
    {
      img: StopStaringAtShadows,
      linkA: 'https://music.apple.com/ua/album/stop-staring-at-the-shadows/1551171660',
      linkY: 'https://music.youtube.com/playlist?list=OLAK5uy_m_YN4jRxFY1FrpJtDBF6kOewAz6G9tTqY&si=2p-1UlpjjvfP3ceQ',
      fullName: 'Stop Staring at the Shadows'
    }
  ]


    return(
    <div className="sb-page">
      <h1 className='error-text'>Сторінка ще не адаптована прошу зайти з пк та ознайомитись з нею :)</h1>
      {/* Первый блок с видео и контентом поверх */}
      <div className="video-section">
        <video src={videosb} className="video-normal" autoPlay muted loop playsInline />
        <div className="content-over">
          <div className='h1-container'>
            <img src={sbphoto} alt="sb" className='sb-photo'/>
          <h1>
            Suicideboys (стилізовано як $uicideboy$) — американський хіп-хоп дует з Нового Орлеана, штат Луїзіана, заснований у 2014 двоюрідними братами Ruby da Cherry та $crim. На SoundCloud дует набув популярності власноруч зробленими бітами та жорсткими темами текстів, наприклад залежність від наркотиків та суїцидальні думки. Вони створили власний лейбл G*59 Records, під яким вся їхня музика розповсюджується Virgin Music Label & Artist Services.
          </h1>
          </div>
          <h2>
          Дует вважається культовим на андерграунд реп-сцені. 7 вересня 2018 вони випустили дебютний студійний альбом під назвою «I Want to Die in New Orleans», який потрапив у топ-10 US Billboard 200. У травні 2019, разом з барабанщиком Blink-182 Тревісом Баркером та гітаристом Korn Джеймсом Шаффером випустили мікстейп «Live Fast, Die Whenever»
          </h2>
          <div className='add-photos-container'>
            <img src={SBDrakeP} alt="SuicideBoys + Drake" className='add-photos'/>
            <img src={SDSelfieP} alt="SuicideBoys Selfie" className='add-photos'/>
          </div>
        </div>
      </div>

      {/* Второй блок с таким же видео и другим контентом */}
      <div className="video-section">
        <video src={videosb} className="video-normal" autoPlay muted loop playsInline />
        <div className="content-over" style={{'marginTop': '0px'}}>
          <h1 style={{'marginLeft': 'auto', 'marginRight': 'auto'}}>Найпопулярніші альбоми</h1>
          <div className='album-container'>
          {
            Albums.map((item, i) => (
              <div key={i} className="album-card">
                  <img src={item.img} alt={item.fullName} className='album-photo'/>
                  <p className='album-name'>{item.fullName}</p>
                  <div className='hidden-content'>
                      <a href={item.linkA}>
                        <img src={AppleMusic} alt="AppleMusic"  className='music-link'/>
                      </a>
                      <a href={item.linkY}>
                        <img src={YTMusic} alt="YTMusic" className='music-link'/>
                      </a>
                  </div>
              </div>
            ))
          }
          </div>
          <h2>$uicideboy$ випустили низку знакових альбомів, що сформували їхній унікальний стиль. Дебютний альбом I Want to Die in New Orleans (2018) приніс їм широку популярність завдяки похмурій атмосфері та темам депресії, залежностей і смерті. У 2021 вийшов Long Term Effects of Suffering — глибоко особистий альбом із ще більшим зануренням у внутрішній світ артистів. У 2022 році дует випустив Sing Me a Lullaby, My Sweet Temptation, який поєднує меланхолію з важким звучанням. У 2023 — DIRTIESTNASTIEST$UICIDE у колаборації з Germ, де звучання стало ще агресивнішим. Їхній останній реліз NEW WORLD DEPRESSION (2024) продовжує традицію сумної лірики на тлі експериментального продакшну.</h2>
          
        </div>
      </div>

    </div>
    )
}

export default SBPage;