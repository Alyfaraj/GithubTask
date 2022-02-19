import {SearchInList} from "../src/utils/SearchInList";


it('should return correct list', () => {
    const list = [{ id: 1, name: 'one' }, { id: 2, name: 'two' }, { id: 3, name: 'three' }]
    const newList=SearchInList('t', list)
    expect(newList.length).toBe(2)
});
