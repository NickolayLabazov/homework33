import { fetchData } from './fetchData.js';

 /*  function fetchData (url) {
	  const resp = {
		status: 'ok',
		level: 10
	} 

	return resp;
}  */

export function getLevel(userId){
	
	const response = fetchData(`https://server/user/${userId}`);

  if (response == 10) {
    return `Ваш текущий уровень: ${response.level}`;
  }

  return `Информация об уровне временно недоступна`;
} 

