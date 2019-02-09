import {fetchData} from '../http.js';

import {getLevel} from '../index.js';

jest.mock('../http.js');

 beforeEach(() => {
  jest.resetAllMocks();
});

test('Проверка формирования запроса', () => {
    
    let resp = {
		status: 'ok',
		level: 10
    }     

    fetchData.mockReturnValue(resp);

    getLevel(1);
    expect(fetchData).toBeCalledWith('https://server/user/1');
})

test('Проверка выдачи уровня', () => {
    
    const resp = {
		status: 'ok',
		level: 10
    } 
    
    fetchData.mockReturnValue(resp);
    
    const expected = `Ваш текущий уровень: 10`;
    const reseived = getLevel(1);

    expect(reseived).toBe(expected);
})

test('Проверка выдачи сообщения о недоступности уровня', () => {
    
    const resp = {
		status: 'Не ok',
		level: 10
    }
    
    fetchData.mockReturnValue(resp);
    
    const expected = `Информация об уровне временно недоступна`;
    const reseived = getLevel(1);

    expect(reseived).toBe(expected);
})
