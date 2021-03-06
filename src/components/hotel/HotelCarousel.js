import React from 'react'
import classNames from 'classnames'
import { Row, Col, Form, Button } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../css/hotel/HotelCarousel.css'
import UseAnimations from 'react-useanimations'
import { WiDayCloudy } from 'react-icons/wi'
import { IconContext } from 'react-icons'
import {
  RangeDatePicker,
  disableDay,
} from '../../../node_modules/@y0c/react-datepicker'
import '../../../node_modules/@y0c/react-datepicker/assets/styles/calendar.scss'
import Select from 'react-select'
import Ink from 'react-ink'
import { animateScroll as scroll, scroller } from 'react-scroll'

// 這裡是人數選單
const options_p = [
  { value: '1位成人', label: '1位成人' },
  { value: '2位成人', label: '2位成人' },
  { value: '3位成人', label: '3位成人' },
  { value: '4位成人', label: '4位成人' },
  { value: '4位成人', label: '4位成人' },
]
const options_c = [
  { value: '1位孩童', label: '1位孩童' },
  { value: '2位孩童', label: '2位孩童' },
  { value: '3位孩童', label: '3位孩童' },
  { value: '4位孩童', label: '4位孩童' },
  { value: '4位孩童', label: '4位孩童' },
]
const customStyles = {
  control: base => ({
    ...base,
    height: 35,
    minHeight: 60,
    border: 'none',
    whiteSpace: 'nowrap',
  }),
}
// 以上這裡是人數選單
const hotelDateSearchStyles = {
  hotelDateSearch: base => ({
    ...base,
    border: '3px',
  }),
}

export default class HotelCarousel extends React.Component {
  constructor(props) {
    super(props)

    this.IMAGE_PARTS = 4

    this.changeTO = null
    this.AUTOCHANGE_TIME = 5000

    this.state = {
      activeSlide: -1,
      prevSlide: -1,
      sliderReady: false,
      isToggleOn: false,
      display: 'none',
      selectedOption_p: null,
      selectedOption_c: null,
      windowHeight: false,
    }
  }
  // handleClick=()=> {
  //   this.setState(state => ({
  //     isToggleOn: !state.isToggleOn,
  //     display: state.isToggleOn ? 'none': 'block',
  //   }));
  // }
  handleClick = () => {
    this.setState({
      isToggleOn: !this.state.isToggleOn,
      display: this.state.isToggleOn ? 'none' : 'block',
      windowHeight: 0,
    })
  }
  onChange = date => {
    // Day.js object
    console.log(date)

    // to normal Date object
    console.log(date.toDate())
  }
  handleChange = (selectedOption_p, selectedOption_c) => {
    this.setState(
      { selectedOption_p },
      () => console.log(`Option selected:`, this.state.selectedOption_p),
      { selectedOption_c },
      () => console.log(`Option selected:`, this.state.selectedOption_c)
    )
  }
  handleScroll = () => {
    let scrollTop = window.pageYOffset,
      windowHeight = Math.round(scrollTop / 2)
    // console.log(windowHeight)
    if (windowHeight > 140) {
      this.setState({
        windowHeight: true,
      })
    } else {
      this.setState({
        windowHeight: false,
      })
    }
  }

  changePage = () => {
    setTimeout(() => {
      window.location.href = '/HotelList?region=北海道'
    }, 380)
  }
  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuint',
    })
  }
  componentWillUnmount() {
    window.clearTimeout(this.changeTO)
    window.removeEventListener('scroll', this.handleScroll)
  }

  componentDidMount() {
    this.runAutochangeTO()
    setTimeout(() => {
      this.setState({ activeSlide: 0, sliderReady: true })
    }, 0)
    console.log(this.props.slides)
    window.addEventListener('scroll', this.handleScroll, true)
  }

  componentDidUpdate() {
    this._input.focus()
  }

  runAutochangeTO() {
    this.changeTO = setTimeout(() => {
      this.changeSlides(1)
      this.runAutochangeTO()
    }, this.AUTOCHANGE_TIME)
  }

  changeSlides(change) {
    window.clearTimeout(this.changeTO)
    const { length } = this.props.slides
    const prevSlide = this.state.activeSlide
    let activeSlide = prevSlide + change
    if (activeSlide < 0) activeSlide = length - 1
    if (activeSlide >= length) activeSlide = 0
    this.setState({ activeSlide, prevSlide })
  }

  render() {
    const { activeSlide, prevSlide, sliderReady, selectedOption } = this.state
    return (
      <div className="" onScroll={this.handleScroll}>
        <div
          className={classNames('carousel_area', 'slider', {
            's--ready': sliderReady,
          })}
        >
          {/* <p className="slider__top-heading">Travelers</p> */}
          <div className="slider__slides">
            {this.props.slides.map((slide, index) => (
              <div
                className={classNames('slider__slide', {
                  's--active': activeSlide === index,
                  's--prev': prevSlide === index,
                })}
                key={slide.city}
              >
                <div
                  className="slider__slide-content"
                  style={{ display: this.state.windowHeight ? 'none' : 'flex' }}
                  // style={{display: this.state.isShow ? 'none': 'flex'}}
                >
                  <h2
                    className="slider__slide-subheading"
                    style={{ display: this.state.isToggleOn ? 'none' : 'flex' }}
                  >
                    {slide.country || slide.city}
                  </h2>
                  <h1
                    className="slider__slide-heading"
                    style={{ display: this.state.isToggleOn ? 'none' : 'flex' }}
                  >
                    {slide.city.split('').map(l => (
                      <span>{l}</span>
                    ))}
                  </h1>
                  {/* <p className="slider__slide-readmore">read more</p> */}
                </div>
                <div className="slider__slide-parts">
                  {[...Array(this.IMAGE_PARTS).fill()].map((x, i) => (
                    <div className="slider__slide-part" key={i}>
                      <div
                        className="slider__slide-part-inner"
                        style={{ backgroundImage: `url(${slide.img})` }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="container container_area">
            <Row className="h-100">
              <Col className="d-flex justify-content-center align-self-center">
                <Form
                  action=""
                  method="get"
                  className="search_area text-center pb-4 "
                  style={{ display: this.state.display }}
                  // style={{display: this.state.windowHeight ? 'none': 'block'}}
                >
                  <div>
                    <label
                      for="hotel_keywords"
                      className={this.state.focused ? 'focused' : ''}
                      style={{
                        display: this.state.windowHeight ? 'none' : 'block',
                      }}
                    >
                      <input
                        type="search"
                        id="hotel_keywords"
                        placeholder="搜尋 Behance..."
                        contenteditable="true"
                        name="search"
                        autocomplete="off"
                        maxlength="20"
                        class="hotel_keywords_search "
                        autofocus="true"
                        onBlur={this.handleClick}
                        ref={c => (this._input = c)}
                      />
                    </label>
                  </div>
                </Form>
                {/* ///// 地區 人數 日期搜尋 start///// */}
                <Form
                  action=""
                  method="get"
                  className="hotel_search_date_form align-self-center animated bounce fast"
                  style={{ display: this.state.display }}
                  // eslint-disable-next-line react/jsx-no-duplicate-props
                  style={{
                    display: this.state.windowHeight ? 'block' : 'none',
                  }}
                  // style={{display: this.state.isToggleOn ? 'none': 'block'}}
                >
                  <div className="d-flex">
                    <div className="search_date_area_input search_setting_bg">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="搜尋地區..."
                      />
                    </div>
                    <div className="hotel_date_search_carousel">
                      <RangeDatePicker
                        styles={hotelDateSearchStyles}
                        dateFormat="YYYY/MM/DD"
                        startPlaceholder="入住日期..."
                        endPlaceholder="退房日期..."
                        disableDay={disableDay}
                      />
                    </div>
                    <Select
                      className="Hotel_home_search_select ml-2"
                      styles={customStyles}
                      value={selectedOption}
                      onChange={this.handleChange}
                      options={options_p}
                      placeholder="1位成人"
                    />
                    <Select
                      className="Hotel_home_search_select"
                      styles={customStyles}
                      value={selectedOption}
                      onChange={this.handleChange}
                      options={options_c}
                      placeholder="0位孩童"
                    />
                    <Button
                      variant="none"
                      onClick={this.changePage}
                      style={{
                        position: 'relative',
                        backgroundColor: '#fd702d',
                        color: '#fff',
                      }}
                    >
                      <Ink key="__ink" />
                      搜出好飯店 GO
                    </Button>
                  </div>
                </Form>
                {/* /////日期搜尋 end///// */}
              </Col>
            </Row>
            <div className="search_btn" onClick={this.handleClick}>
              <UseAnimations animationKey="searchToX" size={25} />
            </div>
            <p className="year">2019</p>
            <div className="carousel_number">
              <ul className="list-unstyled d-flex">
                <li>
                  <span>0{activeSlide + 1}</span>
                </li>
                <li>/</li>
                <li>
                  <span>05</span>
                </li>
              </ul>
            </div>
            <div className="temperature">
              <IconContext.Provider value={{ size: '3rem' }}>
                <div>
                  <WiDayCloudy />
                </div>
              </IconContext.Provider>
              <p>
                -10<span>。C</span>
              </p>
              <div className="scroll_down">
                <ul className="list-unstyled text-nowrap text-right">
                  <li>scroll down </li>
                </ul>
              </div>
            </div>
            <div className="text-center hotel_scroll_down_btn">
              {/* <UseAnimations animationKey="scrollDown" size={50} style={{cursor: "pointer"}}/> */}
              <span onClick={() => scroll.scrollTo(1110)}></span>
            </div>
          </div>
          <div
            className="slider__control"
            onClick={() => this.changeSlides(-1)}
          />
          <div
            className="slider__control slider__control--right"
            onClick={() => this.changeSlides(1)}
          />
        </div>
      </div>
    )
  }
}
