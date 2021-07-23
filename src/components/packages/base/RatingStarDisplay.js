import styled from "styled-components";

const RatingStarDisplay = ({ score }) => {
    return (
        <div>
            <StarContainer score={score}>
                ★★★★★
            </StarContainer>
        </div>
    )
}

const StarContainer = styled.span`
    display: inline-block;
    position: relative;
    color: transparent;
    font-size: 30px;

    &:before {
        position: absolute;
        top: 0;
        left: 0;
        content:  '★★★★★';
        color: #f0f2f5;
        font-size: 30px;
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
        font-size: 30px;
    }
`

export default RatingStarDisplay;