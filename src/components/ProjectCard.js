import React from "react"
import styled from "styled-components"

// ------------------------------------------ //
//               Main Component               //
// ------------------------------------------ //

export const ProjectCard = ({title, description, liveUrl, codeUrl, imgUrl}) => (
    <CardContainer>
        <CardImg src={imgUrl}/>
        <CardBody>
            <CardHeader>{title}</CardHeader>
            <CardLinkContainer>
                {liveUrl && <CardLink href={liveUrl} target="_blank">
                    Live Site <Icon className="icon fa-external-link"/>
                </CardLink>}
                {codeUrl && <CardLink href={codeUrl} target="_blank">
                    View Code <Icon className="icon fa-code"/>
                </CardLink>}
            </CardLinkContainer>
            {description}
        </CardBody>
    </CardContainer>
)

// ------------------------------------------ //
//               Styled Components            //
// ------------------------------------------ //

const Icon = styled.span`
    margin-left: 7px;
`

const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #fff;
    box-shadow: 0 50px 100px rgba(50, 50, 93, 0.05), 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.1);
    margin-bottom: 50px;
`

const CardImg = styled.img`
    object-fit: cover;
    max-width: 40%;
    @media (max-width: 800px) {
        display: none;
    }
`

const CardBody = styled.div`
    justify-content: space-between;
    margin: 0 0 2em 0;
    padding: 25px;
    width: 100%;
`

const CardHeader = styled.div`
    text-align: center;
    color: #262727;
    margin-bottom: 16px;
    font-size: 18px;
    @media (min-width: 400px) {
        margin-bottom: 13px;
        font-size: 18px;
    }
`

const CardLinkContainer = styled.div`
    text-align: center;
    width: 100%;
    margin-bottom: 15px;
`

const CardLink = styled.a`
    font-size: 14px;
    cursor: pointer;
    padding: 0.4rem;
    margin-left: 0.6rem;
    border-bottom: none;
`




