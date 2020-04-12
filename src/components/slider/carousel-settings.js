export const carouselSettings = {
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  infinite: true,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
};
