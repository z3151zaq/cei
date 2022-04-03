import axios from 'axios';

export default class Service {
    static async getCourse() {
        const url = '/api/search_navigation_child_list';
        //const result = await axios.get(url, {headers: getHeader(),});
        const params = {
            type: '',
            classType: '',
            parentID: 21,
            seriesID: '',
            pageNo: 1,
            pageSize: 100,
        };
        const result = await axios.get(url, {
            params,
        });
        return result.data.data;
    }
}
