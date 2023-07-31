import React from 'react'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

// import Particles from 'react-particles-js';
import htmlIcon from '../images/icons8-html-5.png'
import cssIcon from '../images/icons8-css3.png'
import bootstrapIcon from '../images/icons8-bootstrap.png'
import javascriptIcon from '../images/icons8-javascript.png'
import reactIcon from '../images/icons8-react.png'
import vueIcon from '../images/icons8-vue-js.png'
import nodejsIcon from '../images/icons8-node-js.png'
import tailwindIcon from '../images/icons8-tailwind-css.png'
import pythonIcon from '../images/icons8-python.png'
import mysqlIcon from '../images/icons8-mysql.png'
import mongoIcon from '../images/icons8-mongodb.png'
import vscodeIcon from '../images/icons8-visual-studio-code.png'

function Main() {
    const particlesInit = async (main) => {
      console.log(main);
      await loadFull(main);
    };
  return (
        <>
          <div className='particaljs-container'>
               <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                  fullScreen: {
                    enable: true,
                    zIndex: 1
                  },
                  detectRetina: true,
                  fpsLimit: 60,
                  interactivity: {
                    events: {
                      onClick: {
                        enable: true,
                        mode: "bubble"
                      },
                      onDiv: {
                        elementId: "repulse-div",
                        enable: false,
                        mode: "repulse"
                      },
                      onHover: {
                        enable: true,
                        mode: "repulse",
                        parallax: {
                          enable: false,
                          force: 60,
                          smooth: 10
                        }
                      },
                      resize: true
                    },
                    modes: {
                      bubble: {
                        distance: 400,
                        duration: 2,
                        opacity: 0.8,
                        size: 2
                      },
                      connect: {
                        distance: 80,
                        lineLinked: {
                          opacity: 0.5
                        },
                        radius: 60
                      },
                      grab: {
                        distance: 400,
                        lineLinked: {
                          opacity: 1
                        }
                      },
                      push: {
                        quantity: 2
                      },
                      remove: {
                        quantity: 2
                      },
                      repulse: {
                        distance: 200,
                        duration: 0.4
                      }
                    }
                  },
                  particles: {
                    color: {
                      value: "#ffffff"
                    },
                    lineLinked: {
                      blink: false,
                      color: "#ffffff",
                      consent: false,
                      distance: 150,
                      enable: false,
                      opacity: 0.4,
                      width: 1
                    },
                    move: {
                      attract: {
                        enable: false,
                        rotate: {
                          x: 600,
                          y: 1200
                        }
                      },
                      bounce: false,
                      direction: "none",
                      enable: true,
                      outMode: "out",
                      random: false,
                      speed: 2,
                      straight: false
                    },
                    number: {
                      density: {
                        enable:false,
                        area: 800
                      },
                      limit: 20,
                      value: 15
                    },
                    opacity: {
                      animation: {
                        enable: true,
                        minimumValue: 0.2,
                        speed: 1,
                        sync: false
                      },
                      random: true,
                      value: 1
                    },
                    rotate: {
                      animation: {
                        enable: true,
                        speed: 5,
                        sync: false
                      },
                      direction: "random",
                      random: true,
                      value: 0
                    },
                    shape: {
                      character: {
                        fill: false,
                        font: "Verdana",
                        style: "",
                        value: "*",
                        weight: "400"
                      },
                      image: [
                        {
                          src: bootstrapIcon,
                          width: 40,
                          height: 50
                        },
                        {
                          src: cssIcon,
                          width: 40,
                          height: 50
                        },
                        {
                          src: javascriptIcon,
                          width: 40,
                          height: 50
                        },
                        {
                          src: vscodeIcon,
                          width: 40,
                          height: 50
                        },
                        {
                          src: htmlIcon,
                          width: 40,
                          height: 50
                        },
                        {
                          src: mongoIcon,
                          width: 40,
                          height: 50
                        },
                        {
                          src: mysqlIcon,
                          width: 40,
                          height: 50
                        },
                        {
                          src: nodejsIcon,
                          width: 40,
                          height: 50
                        },
                        {
                          src: reactIcon,
                          width: 40,
                          height: 50
                        },
                        {
                          src: tailwindIcon,
                          width: 40,
                          height: 50
                        },
                        {
                          src: pythonIcon,
                          width: 40,
                          height: 50
                        },
                        {
                          src: vueIcon,
                          width: 40,
                          height: 50
                        }
                      ],
                      polygon: {
                        sides: 5
                      },
                      stroke: {
                        color: "#000000",
                        width: 0
                      },
                      type: "image"
                    },
                    size: {
                      animation: {
                        enable: false,
                        minimumValue: 0.1,
                        speed: 40,
                        sync: false
                      },
                      random: false,
                      value: 16
                    }
                  },
                  polygon: {
                    draw: {
                      enable: false,
                      lineColor: "#ffffff",
                      lineWidth: 0.5
                    },
                    move: {
                      radius: 10
                    },
                    scale: 1,
                    url: ""
                  },
                  background: {
                    image: "",
                    position: "50% 50%",
                    repeat: "no-repeat",
                    size: "cover"
                  }
                }}
            /> 
        </div>
      </>
  )
}

export default Main
