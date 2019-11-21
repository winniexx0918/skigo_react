import React, { Component } from 'react'
import { Col } from 'react-bootstrap'

const text = {
  borderBottom: '1px solid #dfdede',
  margin: '0.5rem 0',
  paddingBottom: '1rem',
}
const photoStyle = {
  width: '6rem',
  height: '6rem',
}
class OrderDetailProductContent extends Component {
  render() {
    return (
      <>
        <div className="shop-item shop-box my-4">
          <div className="shop-vendor-title ml-2">
            <span className="fw-700">訂單內容(品牌)</span>
          </div>
          <div className="ml-2" style={text}>
            <div className="d-flex justify-content-between p-2">
              <div style={photoStyle}>
                <a href="" className="">
                  <img
                    className=""
                    src="/images/coach/coach2.jpg"
                    alt="商品照片"
                    style={{ width: '100%', height: '100%' }}
                  />
                </a>
              </div>
              <div className="d-flex flex-column">
                <a href="" className="text-decoration-none text-dark">
                  這裡放商品名稱
                </a>
                <span>品項內容</span>
              </div>
              <div>X 1</div>
              <div>NT$價格</div>
            </div>
          </div>
          <div>
            <Col md={6} className="pl-5 d-flex ml-auto">
              <p className="mr-auto"></p>
              <span className="mr-auto">小計</span>
              <span className="">$$</span>
            </Col>
            <Col style={text} md={6} className="pl-5 d-flex ml-auto">
              <p className="mr-auto"></p>
              <span className="mr-auto">運費</span>
              <span>$$</span>
            </Col>
            <Col md={6} className="pl-5 d-flex ml-auto">
              <p className="mr-auto"></p>
              <span className="mr-auto fw-700">總計</span>
              <span className="fw-700">$$</span>
            </Col>
          </div>
        </div>
      </>
    )
  }
}

export default OrderDetailProductContent