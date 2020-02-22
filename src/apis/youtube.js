import axios from 'axios';

const KEY = 'AIzaSyBo4rDdHnHRXWT405G809IfsnuNACmR9fw';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: `${KEY}`,
    type: 'video'
  }
});
