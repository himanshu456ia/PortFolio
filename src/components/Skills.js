// import meter1 from "../assets/img/meter1.svg";
// import meter2 from "../assets/img/meter2.svg";
// import meter3 from "../assets/img/meter3.svg";
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 1024, min: 464 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container-skill">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I work with HTML, CSS, React, and Django, creating appealing front-end interfaces, dynamic web application</p>
                        {/* <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">


                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Brand Identity</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Logo Design</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>


                        </Carousel> */}

                        <li><h3>HTML</h3>
                          <span className="bar"> <span className="html"></span> </span>
                        </li>
                        <li><h3>CSS</h3>
                          <span className="bar"> <span className="css"></span> </span>
                        </li>
                        <li><h3>JAVASCRIPT</h3>
                          <span className="bar"> <span className="javascript"></span> </span>
                        </li>
                        <li><h3>REACT</h3>
                          <span className="bar"> <span className="react"></span> </span>
                        </li>
                        <li><h3>DJANGO</h3>
                          <span className="bar"> <span className="django"></span> </span>
                        </li>

                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-right" src={colorSharp} alt="Image" />
    </section>
  )
}
