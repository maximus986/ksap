/** @jsx jsx */
import styled from '@emotion/styled';
import { jsx, useThemeUI } from 'theme-ui';
import { SectionContainer } from './sectionContainer';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

export const News = () => {
  const { calendarImg } = useStaticQuery(graphql`
    {
      calendarImg: file(relativePath: { eq: "calendar.png" }) {
        name
        childImageSharp {
          fluid(maxWidth: 4160, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const {
    theme: { colors },
  } = useThemeUI();
  return (
    <SectionContainer sectionTitle="aktuelnosti ksap">
      <NewsContainer>
        <ImgContainer>
          <Img
            fluid={calendarImg.childImageSharp.fluid}
            alt={calendarImg.name}
          />
        </ImgContainer>
        <NewsContent sx={{ fontFamily: 'body' }}>
          <EventDate sx={{ color: 'secondary' }}>april 2.</EventDate>
          <EventTitle sx={{ color: 'heading' }}>
            Konferencija KSAP
            <span>Deklaracija o strateškom partnerstvu između RS i SAD</span>
          </EventTitle>
          <EventDetails sx={{ color: 'heading' }}>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Sed ut perspiciatis
            unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </EventDetails>
        </NewsContent>
      </NewsContainer>
    </SectionContainer>
  );
};

const NewsContainer = styled.div`
  @media (min-width: 992px) {
    padding: 0 1.6rem;
    display: flex;
    align-items: start;
    justify-content: space-between;
  }
  @media (min-width: 1200px) {
    padding: 0 6rem;
  }
  @media (min-width: 1600px) {
    padding: 0 30rem;
  }
`;

const ImgContainer = styled.figure`
  margin-bottom: 3rem;
  @media (min-width: 992px) {
    margin-bottom: 0;
    flex-basis: 50%;
  }
  @media (min-width: 1600px) {
    margin-bottom: 0;
    margin-right: 12rem;
  }
`;
const NewsContent = styled.div`
  padding: 0 1.6rem;
  @media (min-width: 992px) {
    flex-basis: 45%;
    text-align: left;
    padding: 0;
  }
`;
const EventDate = styled.h4`
  font-size: 4.8rem;
  font-weight: 500;
  margin-bottom: 5rem;
  text-transform: uppercase;
`;

const EventTitle = styled.h5`
  font-size: 3.6rem;
  font-weight: 300;
  letter-spacing: 3px;
  margin-bottom: 5rem;
  span {
    font-style: italic;
    display: block;
    font-size: 3rem;
  }
`;

const EventDetails = styled.p`
  font-size: 2.6rem;
  font-weight: 300;
  line-height: 4rem;
`;
