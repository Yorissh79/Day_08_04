import React from 'react'
import style from './Header.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header() {
  return (
    <div className={style.header}>

        <div className={style.left}>
            
            <input type="text" placeholder='Search...' />

        </div>        

        <div className={style.center}>

            <h1>adalene.</h1>

        </div>

        <div className={style.right}>

            {/* <div className={style.icons}>

                <FontAwesomeIcon icon={faFacebookF} />

            </div> */}

            <p><a href="#">Log In</a></p>
            <p><a href="#">Cart(0)</a></p>

        </div>


    </div>
  )
}

export default Header
