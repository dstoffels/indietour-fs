const ROOT = 'http://indietour.us-east-1.elasticbeanstalk.com/api';

export const restPath = path => ROOT + path;

// USER
export const USER_PATH = ROOT + '/user';
export const userPath = userDocId => `${USER_PATH}/${userDocId}`;

// BANDS
export const BANDS_PATH = ROOT + '/bands';
export const getBandPath = bandPath => `${BANDS_PATH}/${bandPath}`;

// MEMBERS
const MEMBERS = 'members';
export const membersPath = bandPath => `${ROOT + bandPath}/${MEMBERS}`;

// TOURS
const TOURS = 'tours';
export const toursPath = bandPath => `${ROOT + bandPath}/${TOURS}`;

// DATES

// TIMESLOTS

// GOOGLE
export const placesPath = search => `${ROOT}/places/${search}`;
