import styled, { keyframes } from "styled-components";

const Skeleton = ({w, h, styled}) => {
    return (
        <SkeletonBox w={w} h={h} style={styled}/>
    )
}

const shimmer = keyframes`
    100% {
        transform: translateX(100%);
    }
`;

const SkeletonBox = styled.span`
    display: inline-block;
    position: relative;
    overflow: hidden;
    background-color: #dddbdd;
    height: ${(props) => props.h ? props.h : '1rem'};
    width: ${(props) => props.w ? props.w : '100%'};

    &:after {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transform: translateX(-100%);
        background-image: linear-gradient(to right, #dddbdd 0%, rgba(0,0,0,0.05) 20%, #dddbdd 40%, #dddbdd 100%);
        animation: ${shimmer} 1.5s linear infinite;
        content: '';
    }
`;

export default Skeleton;