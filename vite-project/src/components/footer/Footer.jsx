import React from 'react'
import style from './Footer.module.scss'

function Footer() {
  return (
    <div className={style.footer}>
        
        <div className={style.icon}>

            <p><a href="#">adalene.</a></p>

        </div>

        <div className={style.center}>

            <div className={style.first}>

                <p><a href="#">Shop All</a></p>
                <p><a href="#">Our Story</a></p>
                <p><a href="#">Our Craft</a></p>
                <p><a href="#">Gift Card</a></p>
                <p><a href="#">Contact</a></p>

            </div>

            <div className={style.first}>

                <p><a href="#">Shop All</a></p>
                <p><a href="#">Our Story</a></p>
                <p><a href="#">Our Craft</a></p>
                <p><a href="#">Gift Card</a></p>
                <p><a href="#">Contact</a></p>


            </div>

            <div className={style.first}>

                <p><a href="#">Shop All</a></p>
                <p><a href="#">Our Story</a></p>
                <p><a href="#">Our Craft</a></p>
                <p><a href="#">Gift Card</a></p>

            </div>

        </div>

        <div className={style.end}>

            <h1>JOIN US!</h1>

            <p className={style.email}>Email *</p>

            <input type="text" className={style.inp}/>

            <div>
                <input type="checkbox"/>
                <p>Yes, subscribe me</p>
            </div>

            <button>Send</button>

        </div>

    </div>
  )
}

export default Footer
