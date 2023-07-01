import './footer.scss'
import {HiChevronUp, HiOutlineGlobeAlt} from 'react-icons/hi'

const Footer = () => {
  return (
    <footer className='footer-container'>
        <div className='info-side'>
            <ul className='info-list'>
                <li className='info-element'><a>2023 AirbnbClone, Inc.</a></li>
                <li className='info-separator'><span>·</span></li>
                <li className='info-element'><a>Prywatność</a></li>
                <li className='info-separator'><span>·</span></li>
                <li className='info-element'><a>Warunki</a></li>
                <li className='info-separator'><span>·</span></li>
                <li className='info-element'><a>Mapa witryny</a></li>
                <li className='info-separator'><span>·</span></li>
                <li className='info-element'><a>Informacje o firmie</a></li>
            </ul>
        </div>
        <div className='settings-side'>
          <button className='span-btn'>
              <span style={{'margin-right': '8px'}}><HiOutlineGlobeAlt className='btn-globe'/></span>
              <span className='span-highlight'>Polski (PL)</span>
          </button>
          <button className='span-btn'>
            <span style={{'margin-right': '8px'}}>zł</span>
            <span className='span-highlight'>PLN</span>
          </button>
          <button className='span-btn'>
            <span className='span-highlight'>Pomoc i materiały </span>
            <span><HiChevronUp className='btn-globe'/></span>
          </button>
        </div>
    </footer>
  )
}

export default Footer