import React from 'react'
import {Card,Box,IconButton} from '@mui/material'
import PropTypes from 'prop-types'
import ArrowButton from './ArrowButton'
import Slider from "react-slick";
import Image from 'next/image'
import img1 from '../../public/images/home/feed_3.jpg'
import img2 from '../../public/images/home/feed_1.jpg'
import styled from './index.module.css'

function SlickCard(props) {
    const settings = {
        dots: true,
        dotsClass:`slick-dots ${styled.dotsClass}`,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 4000,
        cssEase: "linear",

        appendDots: dots => (
            <div
             
            >
              <ul style={{display:'flex', margin: "0px" }}> {dots} </ul>
            </div>
          ),
   
          // customPaging: i => (
          //   <div
          //     style={{
          //       width: "30px",
          //       color: "blue",
          //       border: "1px blue solid"
          //     }}
          //   >
          //     {i + 1}
          //   </div>
          // )
    };
    const slider=React.useRef();
    const handPre=()=>{
     
        slider.current.slickPrev();
    }
    const handNext=()=>{

        slider.current.slickNext();
    }

    return (
            <Card className={styled.slickWrap}>
                <Box className={styled.arrowWrap}>
                    <ArrowButton click={handPre}></ArrowButton>
                    <ArrowButton click={handNext} direction='right'></ArrowButton>
                </Box>
                
                <Slider ref={slider} {...settings} style={{height:'100%'}} >
                <Box className={styled.imageWrap}>
                    <Image src={img1} alt='' />
                </Box>


                <Box className={styled.imageWrap}>
                    <Image src={img2} alt='' />
                </Box>
            </Slider>


            </Card>
            

    
    )
}

SlickCard.propTypes = {}

export default SlickCard
