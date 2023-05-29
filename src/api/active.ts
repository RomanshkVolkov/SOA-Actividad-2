import axios from 'axios';
import urls from '../utils/urls';

const active = {
   getActives: async () =>
      await axios
         .get(`${urls.BASE_URL}/activos`)
         .then((res) => res.data)
         .catch((err) => console.log(err)),
};

export default active;
