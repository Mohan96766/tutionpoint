const tuitionCenters = (req,res) => {
  const tuitionCenters=[
          {
          name: 'Java Programming',
          address: '123 Main Street, City, State ZIP',
          rating: 4,
          facilities: ['Experienced Instructors', 'Personalized Curriculum', 'Flexible Schedules'],
          distance: '100m',
          },
          {
          name: 'Python Programming',
          address: '456 Elm Street, City, State ZIP',
          rating: 4.5,
          facilities: ['Laboratories', 'Expert Teachers', 'Hands-on Learning'],
          distance: '200m',
          },
          {
          name: 'Data Structures',
          address: '789 Oak Street, City, State ZIP',
          rating: 3.5,
          facilities: ['Multilingual Instructors', 'Language Labs', 'Cultural Workshops'],
          distance: '250m',
          },
      ]
  
  res.render('location-list',{tuitionCenters})
};

const tuitionInfo = (req, res) => {
  res.render('location-info', {
    title: 'Tutoring Center',
    pageHeader: {
      title: 'Tuition Center',
    },
    sidebar: {
      context: 'is on our platform because it offers quality education with experienced instructors. We provide personalized learning experiences with flexible schedules.',
      callToAction: "If you've used our services and want to share your experience, please leave a review to help other students just like you.",
    },
    center: {
      name: 'Online Tutoring Center',
      address: '123 Main Street, City, State ZIP',
      rating: 4,
      facilities: ['Experienced Instructors', 'Personalized Curriculum', 'Flexible Schedules'],
      coords: { lat: 51.455041, lng: -0.9690884 },
      openingTimes: [
        {
          days: 'Monday - Friday',
          opening: '9:00am',
          closing: '6:00pm',
          closed: false,
        },
        {
          days: 'Saturday',
          opening: '10:00am',
          closing: '4:00pm',
          closed: false,
        },
        {
          days: 'Sunday',
          closed: true,
        },
      ],
      reviews: [
        {
          author: 'John Smith',
          rating: 5,
          timestamp: '16 February 2023',
          reviewText: 'Great tuition center with helpful instructors.',
        },
        {
          author: 'Emily Davis',
          rating: 4.5,
          timestamp: '14 February 2023',
          reviewText: 'Highly recommended for personalized learning.',
        },
      ],
    },
  });
};

const addReview = (req, res) => {
  res.render('location-review-form', {
    title: 'Review Math Tutoring Center',
    pageHeader: { title: 'Review Math Tutoring Center' },
  });
};

module.exports = {
  tuitionCenters,
  tuitionInfo,
  addReview
};
