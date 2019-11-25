import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Checkbox from 'rc-checkbox'
import '../../../node_modules/rc-checkbox/assets/index.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../css/hotel/HotelList.css'
import { FaThLarge, FaListUl } from 'react-icons/fa'
import { IconContext } from 'react-icons'
// import { TiStarFullOutline, TiStarHalfOutline, TiStarOutline } from "react-icons/ti";
// import UseAnimations from 'react-useanimations';

import HotelListCard from './HotelListCard'

class HotelList extends React.Component {
  constructor() {
    super()
    this.state = {
      disabled: false,
      isMouseMove1: false,
      isMouseMove2: false,
      isMouseMove3: false,
      isMouseMove4: false,
      isMouseMove5: false,
      isChangeOn: false,
      color: '#ccc',
    }
  }
  ChangeBox = e => {
    console.log('Checkbox checked:', e.target.checked)
  }

  toggle = () => {
    this.setState(state => ({
      disabled: !state.disabled,
    }))
  }
  iconChange = () => {
    this.setState({
      isChangeOn: !this.state.isChangeOn,
    })
  }

  //這方法太智障了啦啦啦啦啦啦啊啦啦啦啦啦啦>"<
  MouseMove1 = () => {
    this.setState(prevState => ({
      isMouseMove1: !prevState.isMouseMove1,
      isMouseMove2: false,
      isMouseMove3: false,
      isMouseMove4: false,
      isMouseMove5: false,
    }))
  }
  MouseMove2 = () => {
    this.setState(prevState => ({
      isMouseMove2: !prevState.isMouseMove2,
      isMouseMove1: false,
      isMouseMove3: false,
      isMouseMove4: false,
      isMouseMove5: false,
    }))
  }
  MouseMove3 = () => {
    this.setState(prevState => ({
      isMouseMove3: !prevState.isMouseMove,
      isMouseMove1: false,
      isMouseMove2: false,
      isMouseMove4: false,
      isMouseMove5: false,
    }))
  }
  MouseMove4 = () => {
    this.setState(prevState => ({
      isMouseMove4: !prevState.isMouseMove,
      isMouseMove1: false,
      isMouseMove2: false,
      isMouseMove3: false,
      isMouseMove5: false,
    }))
  }
  MouseMove5 = () => {
    this.setState(prevState => ({
      isMouseMove5: !prevState.isMouseMove,
      isMouseMove1: false,
      isMouseMove2: false,
      isMouseMove3: false,
      isMouseMove4: false,
    }))
  }

  render() {
    const btnAddClass1 = this.state.isMouseMove1
      ? 'pulse filter_area_btn_active badge-pill'
      : ' '
    const btnAddClass2 = this.state.isMouseMove2
      ? 'pulse filter_area_btn_active badge-pill'
      : ' '
    const btnAddClass3 = this.state.isMouseMove3
      ? 'pulse filter_area_btn_active badge-pill'
      : ' '
    const btnAddClass4 = this.state.isMouseMove4
      ? 'pulse filter_area_btn_active badge-pill'
      : ' '
    const btnAddClass5 = this.state.isMouseMove5
      ? 'pulse filter_area_btn_active badge-pill'
      : ' '

    return (
      <div className="hotel_list_page_wrapper">
        <div class="container">
          <Row>
            <Col md={2} className="left_list mr-5">
              <div className="hotel_checkbox_a">
                <ul className="list-unstyled">
                  <li>
                    <h5 className="font-weightbold text-light">飯店類型</h5>
                  </li>
                  <li>
                    <label>
                      <Checkbox
                        onChange={this.ChangeBox}
                        disabled={this.state.disabled}
                        value="Resort"
                      />
                      &nbsp; 渡假村 Resort
                    </label>
                  </li>
                  <li>
                    <label>
                      <Checkbox
                        onChange={this.ChangeBox}
                        disabled={this.state.disabled}
                        value="gardenHotels"
                      />
                      &nbsp; 花園飯店 garden hotels
                    </label>
                  </li>
                  <li>
                    <label>
                      <Checkbox
                        onChange={this.ChangeBox}
                        disabled={this.state.disabled}
                        value="Villa"
                      />
                      &nbsp; 別墅 Villa
                    </label>
                  </li>
                  <li>
                    <label>
                      <Checkbox
                        onChange={this.ChangeBox}
                        disabled={this.state.disabled}
                        value="ApartmentHotel"
                      />
                      &nbsp; 公寓旅館 Apartment Hotel
                    </label>
                  </li>
                  <li>
                    <label>
                      <Checkbox
                        onChange={this.ChangeBox}
                        disabled={this.state.disabled}
                        value="Cabin"
                      />
                      &nbsp; 小木屋 Cabin
                    </label>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="list-unstyled">
                  <li>
                    <h5 className="font-weightbold text-light">飯店特色</h5>
                  </li>
                  <li>
                    <label>
                      <Checkbox
                        onChange={this.ChangeBox}
                        disabled={this.state.disabled}
                        value="Resort"
                      />
                      &nbsp; 初學者雪道豐富
                    </label>
                  </li>
                  <li>
                    <label>
                      <Checkbox
                        onChange={this.ChangeBox}
                        disabled={this.state.disabled}
                        value="gardenHotels"
                      />
                      &nbsp; 溫泉
                    </label>
                  </li>
                  <li>
                    <label>
                      <Checkbox
                        onChange={this.ChangeBox}
                        disabled={this.state.disabled}
                        value="Villa"
                      />
                      &nbsp; 親子同樂
                    </label>
                  </li>
                  <li>
                    <label>
                      <Checkbox
                        onChange={this.ChangeBox}
                        disabled={this.state.disabled}
                        value="ApartmentHotel"
                      />
                      &nbsp; 購物
                    </label>
                  </li>
                  <li>
                    <label>
                      <Checkbox
                        onChange={this.ChangeBox}
                        disabled={this.state.disabled}
                        value="Cabin"
                      />
                      &nbsp; 粉雪
                    </label>
                  </li>
                  <li>
                    <label>
                      <Checkbox
                        onChange={this.ChangeBox}
                        disabled={this.state.disabled}
                        value="Cabin"
                      />
                      &nbsp; 外語滑雪課程
                    </label>
                  </li>
                  <li>
                    <label>
                      <Checkbox
                        onChange={this.ChangeBox}
                        disabled={this.state.disabled}
                        value="Cabin"
                      />
                      &nbsp; 有夜間/晨間滑雪
                    </label>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={9} className="">
              <div></div>
              <div className="d-flex justify-content-center">
                <h1>飯店搜尋結果</h1>
              </div>
              <Row className="filter_area">
                <Col className="d-flex justify-content-between">
                  <ul className="list-unstyled d-flex text-center filter_area_btn">
                    <li className="">
                      <span>排序:</span>
                    </li>
                    <li onMouseEnter={this.MouseMove1}>
                      <p
                        className={btnAddClass1}
                        style={{ color: this.state.isMouseMove1 ? '#fff' : '' }}
                        value="推薦"
                      >
                        <span>推薦</span>
                      </p>
                    </li>
                    <li onMouseEnter={this.MouseMove2}>
                      <p
                        className={btnAddClass2}
                        style={{ color: this.state.isMouseMove2 ? '#fff' : '' }}
                        value="由低到高"
                      >
                        <span>價格:由低到高</span>
                      </p>
                    </li>
                    <li onMouseEnter={this.MouseMove3}>
                      <p
                        className={btnAddClass3}
                        style={{ color: this.state.isMouseMove3 ? '#fff' : '' }}
                        value="由高到低"
                      >
                        <span>價格:由高到低</span>
                      </p>
                    </li>
                    <li onMouseEnter={this.MouseMove4}>
                      <p
                        className={btnAddClass4}
                        style={{ color: this.state.isMouseMove4 ? '#fff' : '' }}
                        value="熱門程度"
                      >
                        <span>熱門程度</span>
                      </p>
                    </li>
                    <li onMouseEnter={this.MouseMove5}>
                      <p
                        className={btnAddClass5}
                        style={{ color: this.state.isMouseMove5 ? '#fff' : '' }}
                        value="評價"
                      >
                        <span>評價</span>
                      </p>
                    </li>
                  </ul>
                  <ul className="list-unstyled d-flex text-center mt-2 filter_change">
                    <li
                      className="px-2 "
                      style={{
                        cursor: 'pointer',
                        color: this.state.isChangeOn ? '#ccc' : '#8DAEC1',
                      }}
                      onClick={this.iconChange}
                    >
                      <IconContext.Provider value={{ size: '1.2rem' }}>
                        <div>
                          <FaThLarge />
                        </div>
                      </IconContext.Provider>
                    </li>
                    <li
                      className="px-2"
                      style={{
                        cursor: 'pointer',
                        color: this.state.isChangeOn ? '#8DAEC1' : '#ccc',
                      }}
                      onClick={this.iconChange}
                    >
                      <IconContext.Provider value={{ size: '1.2rem' }}>
                        <div>
                          <FaListUl />
                        </div>
                      </IconContext.Provider>
                    </li>
                  </ul>
                </Col>
              </Row>
              <Row className="d-flex">
                <HotelListCard />
                <HotelListCard />
                <HotelListCard />
                <HotelListCard />
                <HotelListCard />
                <HotelListCard />
                <HotelListCard />
                <HotelListCard />
                <HotelListCard />
                <HotelListCard />
                <HotelListCard />
                <HotelListCard />
                <HotelListCard />
                <HotelListCard />
                <HotelListCard />
                <HotelListCard />
                <HotelListCard />
                <HotelListCard />
                <HotelListCard />
                <HotelListCard />
                {/* <Card className="hotel_list_card" style={{border:'none'}}>
                <Card.Img variant="top" src={require('../../image/hotel/hotel_slider/hotel_4.jpg')} alt="..." className="hotel_slider_img"/>
                <Card.Body>
                    <Card.Title><h6>【鉑爾曼倫】敦聖潘克拉斯飯店(鉑爾曼)</h6></Card.Title>
                    <Card.Text className="hotel_list_card_text">
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <div className="d-flex justify-content-between">
                        <ul class="list-unstyled d-flex hotel_list_card_star">
                            <li><TiStarFullOutline /></li>
                            <li><TiStarFullOutline /></li>
                            <li><TiStarFullOutline /></li>
                            <li><TiStarHalfOutline /></li>
                            <li><TiStarOutline /></li>
                        </ul>
                        <span class="hotel_card_heart"><UseAnimations animationKey="heart" size={15} style={{color:"red"}}/></span>
                    </div>
                    <span class="hotel_card_money">約 $<span>2,400</span>TWD / 晚</span>
                    <Button variant="light" className="badge-pill hotel_list_card_btn">more</Button>
                </Card.Body>
            </Card> */}
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default HotelList