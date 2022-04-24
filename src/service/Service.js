import axios from 'axios';

export default class Service {
    static async getNavigationList(params) {
        const url = '/api/get_navigation_list';
        const result = await axios.get(url, {
            params,
        });
        return result.data.data;
    }
    static async getCourse(parentID) {
        const url = '/api/search_navigation_child_list';
        //const result = await axios.get(url, {headers: getHeader(),});
        const params = {
            type: '',
            classType: '',
            parentID,
            seriesID: '',
            pageNo: 1,
            pageSize: 100,
        };
        const result = await axios.get(url, {
            params,
        });
        return result.data.data;
    }

    static async getProductDetail(params) {
        const url = '/api/get_product_detail';
        const result = await axios.get(url, {
            params,
        });
        return result.data.data;
    }

    static async getBook(params) {
        const url = '/api/get_book_list';
        const result = await axios.get(url, {
            params,
        });
        return result.data.data;
    }
    static async searchBookcCategory() {
        const url = '/api/search_book_category_list';
        const result = await axios.get(url);
        return result.data.data;
    }
    static async searchTeacherCategoryList() {
        const url = '/api/search_teacher_category_list';
        const result = await axios.get(url);
        return result.data.data;
    }
    static async getTeacherList(params) {
        const url = '/api/get_teacher_list';
        const result = await axios.get(url, { params });
        return result.data.data;
    }
    static async searchHomeFloorList() {
        const url = '/api/search_home_floor_list';
        const result = await axios.get(url);
        return result.data.data;
    }
}
