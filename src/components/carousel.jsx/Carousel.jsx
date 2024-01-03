import React, { useRef } from "react";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from "../lazyLoadImage/Img";
import PosterFallback from "../../assets/no-poster.png";
import CircleRating from "../circleRating/CircleRating";
import Genres from "../genres/Genres";
import "./style.scss";

const Carousel = ({data , loading , endpoint , title}) => {
    const carauselContainer = useRef();
    const {url} = useSelector((state) =>state.home);
    const navigate = useNavigate();

    const navigation = (direction) =>{
        const container  = carauselContainer.current;
        const scrollAmt = direction === "left" ? container.scrollLeft - (container.offsetWidth + 20) :container.scrollLeft + (container.offsetWidth + 20)
// container.scrollLeft: Represents the number of pixels that the content of a container is scrolled horizontally.
// container.offsetWidth: Represents the width of the container's content, including padding and borders.
        container.scrollTo({
            left : scrollAmt , 
            behaviour :"smooth",
        })
// container.scrollTo: Scrolls the container to a particular set of coordinates, in this case, horizontally to the specified left position.
        // console.log(container.scrollLeft);
        // console.log(container.offsetWidth);
    };

    const skItem =() =>{
        return (
            <div className="skeletonItem">
                <div className="posterBlock skeleton">

                </div>
                <div className="textBlock">
                    <div className="title skeleton"></div>
                    <div className="date skeleton"></div>
                </div>
                
            </div>
        )
    }

    return(
        <div className="carousel">
            <ContentWrapper>
                {title && <div className="carouselTitle">{title}</div>}
                <BsFillArrowLeftCircleFill
                className="carouselLeftNav arrow"
                onClick={() => navigation("left")}
                />
                <BsFillArrowRightCircleFill
                className="carouselRighttNav arrow"
                onClick={() => navigation("right")}
                />
                {!loading ? (
                <div className="carouselItems" ref={carauselContainer}>
                    
                    {data?.map((item) => {
                        const posterUrl = item.poster_path ? url.poster + item.poster_path : PosterFallback;
                        return (
                            <div key={item.id} className="carouselItem" onClick={() =>{navigate(`/${item.media_type ? item.media_type :endpoint }/${item.id}`)}}>
                                <div className="posterBlock">
                                    <Img src={posterUrl} />
                                    <CircleRating rating={item.vote_average.toFixed(1)}/>
                                    <Genres data={item.genre_ids.slice(0,2)}/>
                                </div>
                                <div className="textBlock">
                                    <span className="title">
                                        {item.title || item.name}
                                    </span>
                                    <span className="data">
                                        {dayjs(item.first_air_date || item.release_date).format("MMM D, YYYY")}
                                        {/* {console.log(item)} */}
                                    </span>

                                </div>
                            </div>
                        )
                    })}

                </div>) :(
                    <div className="loadingSkeleton">
                        {skItem()}
                        {skItem()}
                        {skItem()}
                        {skItem()}
                        {skItem()}
                    </div>
                )}
            </ContentWrapper>
        </div>
    );
};
export default Carousel;
