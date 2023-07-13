import Button from 'react-bootstrap/Button';

const FooterButton = ({link, text}) => <Button variant="outline-light" size="sm" href={link} target="_blank" 
rel="noopener noreferrer" className="footer-button">{text}</Button>

export default FooterButton