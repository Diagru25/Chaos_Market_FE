import styled from "styled-components";

const RatingStarDisplay = ({ score, fontSize, ...rest}) => {
    return (
        <div {...rest}>
            <StarContainer score={score} fontSize={fontSize}>
                ★★★★★
            </StarContainer>
        </div>
    )
}

const StarContainer = styled.div`
    display: inline-block;
    position: relative;
    color: transparent;
    font-size: ${props => props.fontSize ? props.fontSize : '30px'};

    &:before {
        position: absolute;
        top: 0;
        left: 0;
        content:  '★★★★★';
        color: #f0f2f5;
        font-size: ${props => props.fontSize ? props.fontSize : '30px'};
    }

    &:after {
        position: absolute;
        top: 0;
        left: 0;
        content: '★★★★★';
        color: #ffab00;
        overflow: hidden;
        width: ${(props) => {
            const calScore = props.score*2*10;

            return `${calScore}%`
        }};
        font-size: ${props => props.fontSize ? props.fontSize : '30px'};
    }
`

export default RatingStarDisplay;