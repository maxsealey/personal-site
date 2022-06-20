import './nav.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

 export default function Nav() {
    return (
        <div className='nav'>
            <div className='wrapper'>
                <div className='left'>
                    <a href="#home" className='name'>Max Sealey</a>
                </div>
                <div className='right'>
                </div>
            </div>
        </div>
    )
}