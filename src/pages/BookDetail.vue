<template>
    <div>
        {{ this.$route.query.id }}
        <img :src="detail.previewImgUrl" :alt="detail.productName" />
    </div>
</template>

<script>
import Service from '../service/Service';
export default {
    name: 'BookDetail',
    data() {
        return {
            detail: {},
        };
    },
    mounted() {
        Service.getProductDetail({ productID: this.$route.query.id }).then(
            res => (this.detail = res)
        );
    },
};
</script>

<style></style>
