import React from 'react'
import Main from '../features/Main'
import NavBar from '../features/NavBar'
import SideBar from '../features/SideBar'
import AddPassword from './AddPassword'

function HomePage() {
  return (
    <div>
        <div>
            <SideBar />
        </div>
        <div>
            <NavBar />
            <div>
                <Main />
                <AddPassword />
            </div>
        </div>
    </div>
  )
}

export default HomePage