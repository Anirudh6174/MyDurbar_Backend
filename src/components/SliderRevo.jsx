import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Bounce from "react-reveal/Bounce";
import { Rotate } from "react-reveal";

export default function SliderRevo() {
  return (
    <Carousel>
      <Carousel.Item>
        <div
          className="sr-fixedheight sr-sliderhard"
          style={{
            background: "url('https://i.postimg.cc/3R8R9p11/slide1-bg.jpg')",
          }}
        >
          <Container>
            {/* Background Images */}
            <Bounce left>
              <div className="sr-smallbannerimages slide1-item1 ">
                <img
                  src="https://i.postimg.cc/HkXfxNmc/20220720-081220-0000-724x1024.png"
                  alt=""
                  className="sr-imgBox bounce-2 slide1-img1"
                ></img>
              </div>
            </Bounce>

            <Bounce left>
              <div className="sr-smallbannerimages slide1-item2">
                <img
                  src="https://i.postimg.cc/y6fB4267/20220720-081311-0000-724x1024.png"
                  alt=""
                  className="sr-imgBox bounce-2 slide1-img2"
                ></img>
              </div>
            </Bounce>

            <Bounce left>
              <div className="sr-smallbannerimages slide1-item3">
                <img
                  src="https://i.postimg.cc/PqNfNyqJ/png-20220720-081050-0000-724x1024.png"
                  alt=""
                  className="sr-imgBox bounce-3 slide1-img3"
                ></img>
              </div>
            </Bounce>

            <Bounce left>
              <div className="sr-smallbannerimages slide1-item4">
                <img
                  src="https://i.postimg.cc/C52WBTdD/object-guitar-1-25.png"
                  alt=""
                  className="sr-imgBox bounce-3 slide1-img4"
                ></img>
              </div>
            </Bounce>

            {/* Main content */}
            <div className="sr-leftcomp">
              <div>
                <Bounce right>
                  <div className="sr-leftCol">
                    <h2 className="sr-leftcomp-sub-legendText">
                      <em>EASILY BOOK AN EXCLUSIVE</em>
                    </h2>
                    <h1 className="sr-legendText">
                      <em>
                        Live Music <br /> Performer
                      </em>
                    </h1>

                    <Button
                      className="sr-bookBtn"
                      variant="light"
                      href="/bookartist"
                    >
                      <b>BOOK YOUR MUSICAL SHOW</b>
                    </Button>
                  </div>
                </Bounce>
              </div>
              <div className="sr-rightCol">
                <Bounce left>
                  <img
                    className="slide1-hero"
                    src="https://i.postimg.cc/XvrvBcg2/png-20220720-080903-0000-768x1086.png"
                    alt=""
                  ></img>
                </Bounce>
              </div>
            </div>
          </Container>
        </div>
      </Carousel.Item>

      {/* Second ITEM of Carousel ------------------------2-------------------------- */}

      <Carousel.Item>
        <div
          className="sr-fixedheight sr-sliderhard"
          style={{
            background: "url('https://i.postimg.cc/GpQ3BtRy/slide2-bg.jpg')",
          }}
        >
          <Container>
            {/* Background Images */}
            <Bounce left>
              <div className="sr-smallbannerimages slide2-item1">
                <img
                  src="https://i.postimg.cc/268J08Zh/20220720-082731-0000-724x1024.png"
                  alt=""
                  className="sr-imgBox bounce-2 slide2-img1"
                ></img>
              </div>
            </Bounce>

            <Bounce left>
              <div className="sr-smallbannerimages slide2-item2">
                <img
                  src="https://i.postimg.cc/VvzNGtF4/20220720-082236-0000-212x300.png"
                  alt=""
                  className="sr-imgBox bounce-2 slide2-img2"
                ></img>
              </div>
            </Bounce>

            <Bounce left>
              <div className="sr-smallbannerimages slide2-item4">
                <img
                  src="https://i.postimg.cc/sgQ5SYx6/20220720-081639-0000-212x300.png"
                  alt=""
                  className="sr-imgBox bounce-3 slide2-img4"
                ></img>
              </div>
            </Bounce>

            <Bounce left>
              <div className="sr-smallbannerimages slide2-item5">
                <img
                  src="https://i.postimg.cc/xdZRV256/20220720-082949-0000-724x1024.png"
                  alt=""
                  className="sr-imgBox bounce-2 slide2-img5"
                ></img>
              </div>
            </Bounce>

            <Bounce left>
              <div className="sr-smallbannerimages slide2-item6">
                <img
                  src="https://i.postimg.cc/BQshpvf6/png-20220720-082830-0000-724x1024.png"
                  alt=""
                  className="sr-imgBox bounce-3 slide2-img6"
                ></img>
              </div>
            </Bounce>

            {/* Main content */}
            <div className="sr-leftcomp">
              <div>
                <Bounce right>
                  <div className="sr-leftCol">
                    <h2 className="sr-leftcomp-sub-legendText">
                      <em>Get your party exciting with</em>
                    </h2>
                    <h1 className="sr-legendText">
                      <em>
                        LIVE STANDUP <br /> COMEDY
                      </em>
                    </h1>
                    <Button
                      className="sr-bookBtn"
                      variant="light"
                      href="/bookartist"
                    >
                      <b>BOOK YOUR COMEDIAN</b>
                    </Button>
                  </div>
                </Bounce>
              </div>
              <div className="sr-rightCol">
                <Bounce left>
                  <img
                    className="slide2-hero"
                    src="https://i.postimg.cc/wvx0kM7b/11111.png"
                    alt=""
                    style={
                      {
                        // height: "30%",
                      }
                    }
                  ></img>
                </Bounce>
              </div>
            </div>
          </Container>
        </div>
      </Carousel.Item>

      {/* Third ITEM of Carousel ------------------------3-------------------------- */}

      <Carousel.Item>
        <div
          className="sr-fixedheight sr-sliderhard"
          style={{
            background: "url('https://i.postimg.cc/4d2J50m4/slide3-bg.jpg')",
          }}
        >
          <Container>
            {/* Background Images */}
            <Bounce left>
              <div className="sr-smallbannerimages slide3-item1">
                <img
                  src="https://i.postimg.cc/dVCL0JD2/png-20220720-083732-0000-768x1086.png"
                  alt=""
                  className="sr-imgBox bounce-2 slide3-img1"
                ></img>
              </div>
            </Bounce>

            <Bounce left>
              <div className="sr-smallbannerimages slide3-item2">
                <img
                  src="https://i.postimg.cc/wxDfDmPZ/png-20220720-083327-0000-212x300.png"
                  alt=""
                  className="sr-imgBox bounce-3 slide3-img2"
                ></img>
              </div>
            </Bounce>

            <Bounce left>
              <div className="sr-smallbannerimages slide3-item3">
                <img
                  src="https://i.postimg.cc/7LCXhG0B/png-20220720-083401-0000-212x300.png"
                  alt=""
                  className="sr-imgBox bounce-3 slide3-img3"
                ></img>
              </div>
            </Bounce>

            {/* Main content */}
            <div className="sr-leftcomp">
              <div>
                <Bounce right>
                  <div className="sr-leftCol">
                    <h2 className="sr-leftcomp-sub-legendText">
                      <em>Add Mystery & Spice with your</em>
                    </h2>
                    <h1 className="sr-legendText">
                      <em>
                        MAGIC
                        <br /> SHOW
                      </em>
                    </h1>

                    <Button
                      className="sr-bookBtn"
                      variant="light"
                      href="/bookartist"
                    >
                      <b>GET YOUR MAGIC SHOW</b>
                    </Button>
                  </div>
                </Bounce>
              </div>
              <div className="sr-rightCol">
                <Bounce left>
                  <img
                    className="slide3-hero"
                    src="https://i.postimg.cc/bwY8KBp5/png-20220720-083216-0000-1086x1536.png"
                    alt=""
                  ></img>
                </Bounce>
              </div>
            </div>
          </Container>
        </div>
      </Carousel.Item>

      {/* Fourth ITEM of Carousel ------------------------4-------------------------- */}

      <Carousel.Item>
        <div
          className="sr-fixedheight sr-sliderhard"
          style={{
            background: "url('https://i.postimg.cc/L5qm0V1t/slide4-bg.jpg')",
          }}
        >
          <Container>
            {/* Background Images */}
            <Bounce left>
              <div className="sr-smallbannerimages slide4-item1">
                <img
                  src="https://i.postimg.cc/brnKtVnB/png-20220720-082327-0000-724x1024.png"
                  alt=""
                  className="sr-imgBox bounce-2 slide4-img1"
                ></img>
              </div>
            </Bounce>

            <Bounce left>
              <div className="sr-smallbannerimages slide4-item2">
                <img
                  src="https://i.postimg.cc/59ZJ2Lzr/object-turntable-1-50.png"
                  alt=""
                  className="sr-imgBox bounce-2 slide4-img2"
                ></img>
              </div>
            </Bounce>

            <Bounce left>
              <div className="sr-smallbannerimages slide4-item3">
                <img
                  src="https://i.postimg.cc/HLtR07VT/object-vinyl-1-25.png"
                  alt=""
                  className="sr-imgBox bounce-2 slide4-img3"
                ></img>
              </div>
            </Bounce>

            {/* Main content */}
            <div className="sr-leftcomp">
              <div>
                <Bounce right>
                  <div className="sr-leftCol">
                    <h2 className="sr-leftcomp-sub-legendText">
                      <em>AND</em>
                    </h2>
                    <h1 className="sr-legendText">
                      <em>
                        MUCH MUCH <br /> MORE
                      </em>
                    </h1>

                    <Button
                      className="sr-bookBtn"
                      variant="light"
                      href="/bookartist"
                    >
                      <b>CHECK OUR TOP CATEGORIES</b>
                    </Button>
                  </div>
                </Bounce>
              </div>
              <div className="sr-rightCol-image3">
                <Bounce left>
                  <img
                    className="slide4-hero1"
                    src="https://i.postimg.cc/FRVSKVpY/New-DJ.png"
                    alt=""
                    style={
                      {
                        // height: "30%",
                      }
                    }
                  ></img>
                </Bounce>
              </div>

              {/* <div className="sr-rightCol sr-imgBox bounce-3">
                <Bounce left>
                  <img
                    className="slide4-hero2"
                    src="https://i.postimg.cc/FRHr0vFn/png-20220720-084852-0000-768x1086.png"
                    alt=""
                    style={
                      {
                        // height: "30%",
                      }
                    }
                  ></img>
                </Bounce>
              </div> */}

              {/* <div className="sr-rightCol sr-imgBox bounce-3">
                <Bounce left>
                  <img
                    className="slide4-hero3"
                    src="https://i.postimg.cc/Y21JRGnb/20220805-102449-0000.png"
                    alt=""
                    style={
                      {
                        // height: "30%",
                      }
                    }
                  ></img>
                </Bounce>
              </div> */}
            </div>
          </Container>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}
