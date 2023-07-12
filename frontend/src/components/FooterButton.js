import Button from 'react-bootstrap/Button';

const FooterButton = ({link, text}) => <Button variant="outline-dark" size="sm" href={link}>{text}</Button>

export default FooterButton