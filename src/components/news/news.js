/** @jsx jsx */
import styled from '@emotion/styled';
import { Fragment } from 'react';
import format from 'date-fns/format';
import isSameDay from 'date-fns/isSameDay';
import sr from 'date-fns/locale/sr-Latn';
import toDate from 'date-fns/toDate';
import { graphql, useStaticQuery } from 'gatsby';
import { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { jsx } from 'theme-ui';
import { SectionContainer } from '../sectionContainer';
registerLocale('sr', sr);

export const News = () => {
  const [date, setDate] = useState(new Date());
  const [event, setEvent] = useState({});
  const [showEvent, setShowEvent] = useState(false);

  const { events } = useStaticQuery(graphql`
    {
      events: allContentfulEvent {
        edges {
          event: node {
            id
            eventDate
            title
            eventDescription
            eventContent {
              eventContent
            }
          }
        }
      }
    }
  `);

  const highlightDates = events.edges.map(({ event }) =>
    toDate(new Date(event.eventDate))
  );

  const highlightWithRanges = [
    {
      'react-datepicker__day--highlighted-custom-1': [...highlightDates],
    },
  ];

  const handleDateSelect = date => {
    setDate(date);
    events.edges.forEach(({ event }) => {
      setEvent(event);
      setShowEvent(isSameDay(date, new Date(event.eventDate)));
    });
  };

  return (
    <SectionContainer sectionTitle="aktuelnosti ksap">
      <NewsContainer>
        <DatePicker
          inline
          openToDate={date}
          onSelect={handleDateSelect}
          dateFormat="MMMM d."
          highlightDates={highlightWithRanges}
          locale="sr"
          calendarClassName="ksap-datepicker"
        />
        <NewsContent sx={{ fontFamily: 'body' }}>
          <EventDate sx={{ color: 'secondary', fontWeight: 'medium' }}>
            {format(date, 'MMMM d.', { locale: sr })}
          </EventDate>
          {showEvent ? (
            <Fragment>
              <EventTitle sx={{ color: 'heading', fontWeight: 'body' }}>
                {event.title}
                <span>{event.eventDescription}</span>
              </EventTitle>
              <EventDetails sx={{ color: 'heading' }}>
                {event.eventContent && event.eventContent.eventContent}
              </EventDetails>
            </Fragment>
          ) : (
            <NoEvent
              sx={{ color: 'heading', fontFamily: 'body', fontWeight: 'body' }}
            >
              Ne postoje događaji za izabrani datum.
            </NoEvent>
          )}
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
  .ksap-datepicker {
    margin-bottom: 2rem;
    font-family: 'Roboto';
    border-radius: 0;
    .react-datepicker {
      &__navigation {
        border: 0.65rem solid transparent;
        height: 15px;
        width: 15px;
        &--previous:hover {
          border-right-color: #0d153e;
        }
        &--previous {
          left: 10px;
          border-right-color: #0d153e;
        }
        &--next {
          border-left-color: #0d153e;
        }
      }
      &__month-container {
        background: #f2f2f2;
        width: 300px;
        padding-bottom: 4rem;
        @media (min-width: 992px) {
          width: 480px;
          padding-bottom: 8rem;
        }
      }
      &__header {
        border-radius: 0;
        background: #f2f2f2;
        border-bottom: none;
        padding-top: 3.5rem;
        text-transform: capitalize;
        font-size: 1rem;
        @media (min-width: 992px) {
          padding-top: 5.5rem;
        }
      }
      &__month {
        margin: 2rem 0;
      }
      &__current-month {
        color: #0d153e;
        font-size: 1.5rem;
        margin-bottom: 2rem;
        @media (min-width: 992px) {
          font-size: 2.5rem;
          margin-bottom: 4rem;
        }
      }
      &__day-names {
        display: flex;
        justify-content: space-around;
        text-transform: uppercase;
      }
      &__day-name {
        color: #0d153e;
        font-weight: 700;
        font-size: 1.1rem;
        @media (min-width: 992px) {
          font-size: 1.6rem;
          margin-bottom: 3rem;
        }
      }
      &__day {
        font-size: 1.1rem;
        width: 2rem;
        height: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        @media (min-width: 992px) {
          font-size: 1.8rem;
          width: 3.5rem;
          height: 3.5rem;
        }
        &:hover {
          color: #fff;
          background: #0d153e;
          border-radius: 0;
        }
        &--highlighted-custom-1 {
          color: #fff;
          background: #0d153e96;
        }
        &--selected {
          border-radius: 0;
          color: #fff;
          background: #0d153e;
        }
        &--today {
          font-weight: 400;
        }
      }
      &__week {
        display: flex;
        justify-content: space-around;
        margin-bottom: 1.1rem;
        @media (min-width: 992px) {
          margin-bottom: 2rem;
        }
      }
    }
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
  margin-bottom: 5rem;
  text-transform: uppercase;
`;

const EventTitle = styled.h5`
  font-size: 3.6rem;
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

const NoEvent = styled.p`
  font-size: 3rem;
`;
