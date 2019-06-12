import Axios from 'axios';

export default Axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID c505ab4320e1de4ff195b322fd877d96189ac55fd80987e3ddc2d17ee24eb3d2'
	}

});



