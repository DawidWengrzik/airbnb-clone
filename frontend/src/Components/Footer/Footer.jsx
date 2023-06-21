import './footer.scss'

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
    </footer>
  )
}

export default Footer