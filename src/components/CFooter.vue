<template>
    <footer>
        <div class="footer-links">
            <a
                target="_blank"
                href="https://beian.miit.gov.cn"
                style="display: flex; align-items: center"
            >
                <img src="@/assets/beian_guohui.png" class="beian_img_con" />
                <p class="beian_content">京公网安备 11010102004423号</p>
            </a>
        </div>
        <div class="copyright">
            Copyright
            <a href="https://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer">
                京ICP备19011394号-2
            </a>
            出版物经营许可证：新出发京零字第海180213号
        </div>
    </footer>
</template>

<script>
export default {
    name: 'CFooter',
};
</script>

<style>
.footer-links {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
}
.copyright {
    color: white;
    text-align: center;
    background-color: #424242;
    font-size: 14px;
    padding: 5px 0px;
}
.beian_img_con {
    height: 15px;
}
a {
    color: #1fa2f8;
}
</style>
