import axios from 'axios';

export default class Service {
    static async getNavigationList(params) {
        const url = '/api/get_navigation_list';
        const result = await axios.get(url, {
            params,
        });
        return result.data.data;
    }
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

    static async getCourseDetail(params) {
        const url = '/api/get_product_detail';
        const result = await axios.get(url, {
            params,
        });
        return result.data.data;
    }
}
