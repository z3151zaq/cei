<template>
    <div class="book-card" @click="bookdetail">
        <img class="book-pre" :src="book.thumbnailUrl" :alt="book.productName" />
        <div class="book-title">{{ book.productName }}</div>
        <div style="color: red">¥{{ book.basicPrice }}</div>
    </div>
</template>

<script>
export default {
    name: 'BookCard',
    props: ['book'],
    methods: {
        bookdetail() {
            this.$router.push({
                path: '/bdetail',
                query: {
                    id: this.book.productID,
                },
            });
        },
    },
};
</script>

<style>
.book-card {
    margin: 10px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 160px;
    cursor: pointer;
}
.book-pre {
    width: 140px;
}
.book-title {
    font-size: 13px;
    line-height: 2em;
    width: 120px;
    height: 4em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    -webkit-line-clamp: 2;
}
</style>
