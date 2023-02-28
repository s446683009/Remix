import React from 'react'
import PropTypes from 'prop-types'
import Slider from "react-slick";
import {Card,CardHeader,IconButton,CardContent,Paper,Avatar,Box,Stack} from '@mui/material'


var arr=[
    {
        id:1,
        avatar:'',
        userName:'William.li',
        date:'2022-01-01 10:00 pm',
        room:'A-1201',
        person:'2-4人',
        image:''
    },
    {
        id:2,
        avatar:'',
        userName:'Jacky Yang',
        date:'2022-01-01 10:00 pm',
        room:'A-1231',
        person:'2-4人',
        image:''
    },
    {
        id:3,
        avatar:'',
        userName:'Perter Lin',
        date:'2022-01-01 10:00 pm',
        room:'B-3004',
        person:'2-4人',
        image:''
    },
    {
        id:4,
        avatar:'',
        userName:'Chu San',
        date:'2022-01-01 10:00 pm',
        room:'C-1993',
        person:'2-4人',
        image:''
    },
    {
        id:5,
        avatar:'',
        userName:'Yit Kue',
        date:'2022-01-01 10:00 pm',
        room:'A-0675',
        person:'2-4人',
        image:''
    },
    {
        id:1,
        avatar:'',
        userName:'Goole Da',
        date:'2022-01-01 10:00 pm',
        room:'30001',
        person:'2-4人',
        image:''
    },

]

function Detail() {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        rtl: true
      };
  return (
    <>
        <Card sx={{mt:2}}>
        <CardHeader
       
        title="最新预定数据"
        subheader="新增预定12间"
      />
             <CardContent>
                <Slider {...settings}>
                    {
                        arr.map(t=>(
                            <Paper elevation={0} key={t.id} sx={{px:2}} >
                                <Box sx={{background:'#f4f6f8',borderRadius:'20px',padding:'5px'}}>
                                <CardHeader
                                avatar={<Avatar  src="https://avatars.githubusercontent.com/u/37138998?s=40&v=4" ></Avatar>}
                                title={t.userName}
                                subheader={t.date}
                                >
                                    
                                </CardHeader>
                                <Stack direction={"row"} justifyContent="space-around" sx={{px:3,color:'text.secondary',fontSize:'.85rem'}}>
                                    <Box><i className='iconfont icon-tongzhi1'></i>{t.room}</Box> <Box><i className='iconfont icon-dianzan'></i> {t.person}</Box>
                                </Stack>
                                <Box sx={{borderRadius:'10px',my:2}}>
                                   <img width="100%" src="https://minimals.cc/assets/images/rooms/room_1.jpg" />    
                                </Box>
                                </Box>
                            </Paper>
                            
                        ))
                    }
                </Slider>
             </CardContent>

        </Card>
    
    </>
    
  )
}

Detail.propTypes = {}

export default Detail
