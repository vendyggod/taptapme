import styled from "styled-components";

export const StyledCard = styled.li<{ $disabled: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #222;
    padding: 3px;
    border-radius: 12px;
    cursor: pointer;

    opacity: ${props => props.$disabled ? '0.5' : '1'};

    p {
        font-size: 1.2rem;
    }
`

export const CardTitle = styled.h3`
    font-size: 1.6rem;
    font-weight: 500;
    margin-bottom: 8px;
`

export const CardEmoji = styled.span`
    font-size: 4.8rem;`

export const ScorePerHourInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    padding: 0 8px;
    margin-bottom: 6px;

    h3 {
        font-size: 1.2rem;
        font-weight: normal;
        color: #c9c9c9;
    }
`

export const ScorePerHour = styled.span`
    font-size: 1.4rem;
    font-weight: bold;
`

export const LvlInfo = styled.div`
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #666;

    width: 100%;
    padding: 4px 8px;
`

export const CurrentLvl = styled.span`
    font-size: 1.4rem;`

export const PriceToLvlUp = styled.span`
    font-size: 1.4rem;
    color: lightgreen;
    font-weight: bold;
`