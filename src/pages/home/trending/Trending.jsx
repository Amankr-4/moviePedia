import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import "../style.scss"
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import useFetch from "../../../hooks/useFetch"
import Carousel from '../../../components/carousel.jsx/Carousel'
const Trending = () => {

    const [endpoint,setEndpoint] =useState("day");

    const {data , loading} = useFetch(`/trending/all/${endpoint}`)

    const onTabChange =(tab) =>{
        setEndpoint(tab === "Day" ? "day" : "week");
    };
  return (
    <div className='carauselSection'>
        <ContentWrapper>
            <span className="carauselTitle">
                Trending
            </span>
            <SwitchTabs data={["Day" , "Week"]} onTabChange = {onTabChange}/>
        </ContentWrapper>
        <Carousel data ={data?.results} loading ={loading}/>
    </div>
  )
}

export default Trending