// styles
import './Footer.css'

export default function Footer() {
  return (
    <footer>
      <p className="copyright">SpanishFood.jp © 2022 Tokyo</p>
      <p className="madeby">Site created by:</p>
      <div className="tirsop">
        <a href="https://tirsop.com" target="_blank" rel="noreferrer">
          <img className="avatar" src="/img/TirsoPascual.jpeg" alt="Tirso Pascual" />
        </a>
      </div>
    </footer>
  )
}
