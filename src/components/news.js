/** @jsx jsx */
import styled from '@emotion/styled';
import format from 'date-fns/format';
import isSameDay from 'date-fns/isSameDay';
import sr from 'date-fns/locale/sr-Latn';
import toDate from 'date-fns/toDate';
import { graphql, useStaticQuery } from 'gatsby';
import { Fragment, useState, useEffect } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { jsx } from 'theme-ui';
import { SectionContainer } from './sectionContainer';
registerLocale('sr', sr);

export const News = () => {
  // NOTE: At the moment there is no event with eventContent and because of this eventContent {eventContent} is removed from query bellow
  const { events } = useStaticQuery(graphql`
    {
      events: allContentfulEvent {
        edges {
          event: node {
            eventDate
            title
            eventDescription
          }
        }
      }
    }
  `);

  const [date, setDate] = useState(new Date());
  const [shownEvent, setShownEvent] = useState(null);

  const highlightDates = events.edges.map(({ event }) =>
    toDate(new Date(event.eventDate))
  );

  useEffect(() => {
    let selectedEvent = null;
    events.edges.forEach(({ event }) => {
      if (isSameDay(date, new Date(event.eventDate))) {
        selectedEvent = event;
      }
      setShownEvent(selectedEvent);
    });
  }, [date, events.edges]);
  const highlightWithRanges = [
    {
      'react-datepicker__day--highlighted-custom-1': [...highlightDates],
    },
  ];

  const handleDateSelect = date => {
    setDate(date);
    let selectedEvent = null;
    events.edges.forEach(({ event }) => {
      if (isSameDay(date, new Date(event.eventDate))) {
        selectedEvent = event;
      }
      setShownEvent(selectedEvent);
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
          {shownEvent ? (
            <Fragment>
              <EventTitle sx={{ color: 'heading', fontWeight: 'body' }}>
                <span sx={{ mb: 3, display: 'block' }}>{shownEvent.title}</span>
                <span
                  sx={{
                    fontStyle: 'italic',
                    display: 'block',
                    fontSize: '3rem',
                  }}
                >
                  {shownEvent && shownEvent.eventDescription}
                </span>
              </EventTitle>
              <EventDetails sx={{ color: 'heading' }}>
                {shownEvent.eventContent &&
                  shownEvent.eventContent.eventContent}
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
    justify-content: flex-start;
  }
  @media (min-width: 1200px) {
    padding: 0 6rem;
  }
  @media (min-width: 1600px) {
    padding: 0 29rem;
  }
  .ksap-datepicker {
    margin-bottom: 2rem;
    font-family: 'Roboto';
    border-radius: 0;
    .react-datepicker {
      &__navigation {
        border: 1rem solid transparent;
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
    margin-left: 8rem;
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
`;

const EventDetails = styled.p`
  font-size: 2.6rem;
  font-weight: 300;
  line-height: 4rem;
`;

const NoEvent = styled.p`
  font-size: 3rem;
`;
