import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function ReactCarousel(props) {
  return (
    <div style={{
      border: '1px solid red',
    }}>
      <Carousel
        showArrows={false}//显示左右箭头
        autoPlay //自动播放
        showThumbs
        showIndicators={false}
        showStatus={false}
        emulateTouch={true}
        infiniteLoop={true}
        stopOnHover={true}
        centerSlidePercentage={50}
        centerMode
        dynamicHeight
      >
        {
          [
            "https://images.chinatimes.com/newsphoto/2017-04-18/656/20170418006017.jpg",
            "https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/377adab44aed2e738bb3bdb58501a18b86d6fad4.jpg",
            "https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/377adab44aed2e738bb3bdb58501a18b86d6fad4.jpg",
            "https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/377adab44aed2e738bb3bdb58501a18b86d6fad4.jpg",
            "https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/377adab44aed2e738bb3bdb58501a18b86d6fad4.jpg",
            "https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/377adab44aed2e738bb3bdb58501a18b86d6fad4.jpg",
            "https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/377adab44aed2e738bb3bdb58501a18b86d6fad4.jpg",
            "https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/377adab44aed2e738bb3bdb58501a18b86d6fad4.jpg",
            "https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/377adab44aed2e738bb3bdb58501a18b86d6fad4.jpg",
            "https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/377adab44aed2e738bb3bdb58501a18b86d6fad4.jpg",
            "https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/377adab44aed2e738bb3bdb58501a18b86d6fad4.jpg",
            "https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/377adab44aed2e738bb3bdb58501a18b86d6fad4.jpg"
          ].map((item, index) => (
            <div key={index}>
              <img alt='' src={item} />
            </div>
          ))
        }
      </Carousel>
    </div>
  )
}

export default ReactCarousel;