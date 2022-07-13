// styles
import './Footer.css'

export default function Footer() {
  return (
    <footer>
      <p className="copyright">Spanish Restaurant Tokyo © 2022</p>
      <p className="madeby">Site designed by:</p>
      <div className="tirsop">
        <a href="https://tirsop.com" target="_blank" rel="noreferrer">
          <img className="avatar" src="/img/TirsoPascual.jpeg" alt="Tirso Pascual" />
        </a>
      </div>
    </footer>
  )
}
