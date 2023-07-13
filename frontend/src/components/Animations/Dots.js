import './Dot.css'

const Dot = ({name}) => <span className={name}>.</span>

const Dots = () => <span><Dot name='dot dot-1'/> <Dot name='dot dot-2'/> <Dot name='dot dot-3'/></span>





export default Dots