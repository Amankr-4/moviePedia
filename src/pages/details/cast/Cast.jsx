import React from "react";
import { useSelector } from "react-redux";

import "./style.scss";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import Img from "../../../components/lazyLoadImage/Img";
import avatar from "../../../assets/avatar.png";

const Cast = ({ data, loading }) => {
    const { url } = useSelector((state) => state.home);

    const skeleton = () => {
        return (
            <div className="skItem">
                <div className="circle skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row2 skeleton"></div>
            </div>
        );
    };
    return (
        <div className="castSection">
            <ContentWrapper>
                <div className="sectionHeading">Top Cast</div>
                {!loading ? (
                    <div className="listItems">
                        {data?.length>0 && data?.map((d, i) => (
                            <div key={i} className="listItem">
                                <div className="profileImg">
                                    {d?.profile_path ? (<Img src={url?.profile + d?.profile_path} />):(<Img src={avatar}/>)}
                                    {/* {console.log(url?.profile + d?.profile_path)} */}
                                </div>
                                <div className="name">
                                    {d?.name}
                                </div>
                                <div className="character">
                                    {d?.character}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="castSkeleton">
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                    </div>
                )}
            </ContentWrapper>
        </div>
    );
};

export default Cast;