<template>
    <div>
        <div>广告</div>
        <el-radio-group v-model="selectedCat" size="small">
            <el-radio-button label="全部"></el-radio-button>
            <el-radio-button
                v-for="cat in category"
                :key="cat.categoryID"
                :label="cat.categoryName"
            />
        </el-radio-group>
        <br />
        <br />
        <div style="display: flex; flex-direction: column; align-items: center">
            <div class="books-container">
                <BookCard v-for="book in books" :key="book.productID" :book="book" />
            </div>
            <el-pagination
                background
                layout="prev, pager, next"
                :page-size="20"
                :total="booksNum"
                @current-change="changePageNo"
                hide-on-single-page
            >
            </el-pagination>
        </div>
    </div>
</template>

<script>
import Service from '../service/Service';
import BookCard from '../components/BookCard.vue';
import _ from 'lodash';
export default {
    components: { BookCard },
    name: 'BookView',
    data() {
        return {
            pageNo: 1,
            categoryID: 0,
            books: {},
            category: [],
            selectedCat: '',
            booksNum: 0,
        };
    },
    methods: {
        changePageNo(pageNo) {
            this.pageNo = pageNo;
        },
    },
    mounted() {
        Service.getBook({
            pageNo: this.pageNo,
            pageSize: 20,
        }).then(res => {
            this.books = res.rows;
            this.booksNum = res.totalRows;
        });
        Service.searchBookcCategory().then(res => (this.category = res.rows));
    },
    watch: {
        pageNo() {
            Service.getBook({
                pageNo: this.pageNo,
                pageSize: 20,
            }).then(res => {
                this.books = res.rows;
                this.booksNum = res.totalRows;
            });
        },
        selectedCat() {
            if (this.selectedCat !== '全部')
                Service.getBook({
                    categoryID: _.find(this.category, { categoryName: this.selectedCat })
                        .categoryID,
                }).then(res => {
                    this.books = res.rows;
                    this.booksNum = res.totalRows;
                });
            else {
                Service.getBook({
                    pageNo: this.pageNo,
                    pageSize: 20,
                }).then(res => {
                    this.books = res.rows;
                    this.booksNum = res.totalRows;
                });
            }
        },
    },
};
</script>

<style>
.books-container {
    display: flex;
    flex-wrap: wrap;
}
.books-frame {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
