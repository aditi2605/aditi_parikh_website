import React from 'react'
import socialing from '../images/socialing.png'
import cook from '../images/cooking.png'
import chill from '../images/chilling.png'
import travel from '../images/travelling.png'
import badmintion from '../images/badmintion.png'
import Hiking from '../images/hiking.png'

function Hobby() {
  return (
    <>
    <h4 className="hobby__title">What I Like </h4>
        <section className="hobby-carousel">
            
            <div className="carousel__container">
                <div className="carousel-item">
                    <img
                        className="carousel-item__img"
                        src={socialing}
                        alt="people"
                    />
                    <div className="carousel-item__details">
                        <div className="controls">
                        <span className="fas fa-play-circle"></span>
                        <span className="fas fa-plus-circle"></span>
                        </div>
                        <h4 className="carousel-item__details--title">Socializing</h4>
                    </div>
                </div>
                <div className="carousel-item">
                    <img
                        className="carousel-item__img"
                        src={cook}
                        alt="people"
                    />
                    <div className="carousel-item__details">
                        <div className="controls">
                        <span className="fas fa-play-circle"></span>
                        <span className="fas fa-plus-circle"></span>
                        </div>
                        <h4 className="carousel-item__details--title">Cooking</h4>
                    </div>
                </div>
                <div className="carousel-item">
                    <img
                        className="carousel-item__img"
                        src={travel}
                        alt="people"
                    />
                    <div className="carousel-item__details">
                        <div className="controls">
                        <span className="fas fa-play-circle"></span>
                        <span className="fas fa-plus-circle"></span>
                        </div>
                        <h4 className="carousel-item__details--title">Traveling</h4>
 
                    </div>
                </div>
                <div className="carousel-item">
                    <img
                        className="carousel-item__img"
                        src={chill}
                        alt="people"
                    />
                    <div className="carousel-item__details">
                        <div className="controls">
                        <span className="fas fa-play-circle"></span>
                        <span className="fas fa-plus-circle"></span>
                        </div>
                        <h4 className="carousel-item__details--title">Watching TV</h4>
                    </div>
                </div>
                <div className="carousel-item">
                    <img
                        className="carousel-item__img"
                        src={badmintion}
                        alt="people"
                    />
                    <div className="carousel-item__details">
                        <div className="controls">
                        <span className="fas fa-play-circle"></span>
                        <span className="fas fa-plus-circle"></span>
                        </div>
                        <h4 className="carousel-item__details--title">Playing Badminton</h4>
                    </div>
                    <div className="carousel-item">
                        <img
                        className="carousel-item__img"
                        src={Hiking}
                        alt="people"
                        />
                        <div className="carousel-item__details">
                            <div className="controls">
                                <span className="fas fa-play-circle"></span>
                                <span className="fas fa-plus-circle"></span>
                            </div>
                                <h4 className="carousel-item__details--title">Hiking</h4>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
 
    </>
  )
}

export default Hobby

