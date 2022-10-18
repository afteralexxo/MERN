
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <header>

            <nav>
                <h1>Sicario</h1>
                <ul>
                    <li>
                        <Link to='/'>HOME</Link>
                    </li>
                    <li>
                        <Link to='/get'>MOVIES</Link>
                    </li>
                    <li>
                        <Link to='/post'>POST MOVIE</Link>
                    </li>
                </ul>

            </nav>
        </header>
    )
}
export default Nav