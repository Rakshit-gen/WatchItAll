import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    params: {
      maxResults:'50'
    },
    headers: {
      'X-RapidAPI-Key': 'c7186661e9msh3110f78f1dde9fcp1eb409jsn599a2cb9afd1',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchfromAPI = async(url)=>{
    const {data} = await axios.get(`${BASE_URL}/${url}`,options);

    return data;
  }