import { Outlet } from 'react-router-dom'
function Content() {
    return (
        <div className='content'>

            <div className='navigation'></div>

            <div className='main'>
                <Outlet />
            </div>

        </div>
    )
}

export default Content;