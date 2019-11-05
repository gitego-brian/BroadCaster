const mockData = {
  benSignup: {
    firstName: 'Ben',
    lastName: 'Gisa',
    email: 'bengisa@gmail.com',
    password: 'Password@123',
    userName: 'bengisa',
    phone: '+250785721391',
  },
  bruceSignup: {
    firstName: 'Bruce',
    lastName: 'Sangwa',
    email: 'bruceSangwa@gmail.com',
    password: 'Password@123',
    userName: 'brucesangwa',
    phone: '+250785721391',
  },
  benSignupInc: {
    firstName: 'Ben',
    email: 'bengisa@gmail.com',
    password: 'Password@123',
    userName: 'bengisa',
    phone: '+250785721391',
  },
  benSignupBad: {
    firstName: 'Ben',
    lastName: 'Gis  a',
    email: 'bengisa@gmail.com',
    password: 'Password@123',
    userName: 'bengisa',
    phone: '+250785721391',
  },
  benLogin: {
    email: 'bengisa@gmail.com',
    password: 'Password@123',
  },
  benLoginNotFound: {
    email: 'gisabena@gmail.com',
    password: 'Password@123',
  },
  benLoginIncPwd: {
    email: 'bengisa@gmail.com',
    password: 'Password@100',
  },
  benLoginBad: {
    email: 'bengisa  @gmail.com',
    password: 'Password@123',
  },
  newRecord: {
    title: 'Corruption somewhere',
    type: 'Intervention',
    location: '22.6789,11.56890',
    comment: 'There is corruption in my neighborhood and it has got to stop',
  },
  newRecordInc: {
    type: 'Intervention',
    location: '22.6789,11.56890',
    comment: 'There is corruption in my neighborhood and it has got to stop',
  },
  invalidToken: 'eyhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3ROYW1lIjoiQmVuIiwibGFzdE5hbWUiOiJHaXNhIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU3Mjg4MzQ4MX0.WviyBGlvr1y0KNfcxwDwjtw8JwmJ8GCe6N5wk-OPSgk',
  nonExistToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3ROYW1lIjoiQmVuIiwibGFzdE5hbWUiOiJHaXNhIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU3Mjk1NjY3NH0.8Rt05JoON0ayCTtetWWelYh4q9sz-NLLZJOUEqJ79Ig',
};

export default mockData;
