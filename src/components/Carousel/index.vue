<template>
    <div class="swiper-container" ref="cur">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="carousel in list" :key="carousel.id">
                <img :src="carousel.imgUrl" />
            </div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
</template>

<script>
import Swiper from 'swiper';
export default {
    name: 'Carousel',
    props: ['list'],
    watch: {
        list: {
            immediate: true,
            handler() {
                this.$nextTick(() => {
                    let mySwiper = new Swiper(this.$refs.cur, {
                        loop: true,
                        pagination: {
                            el: '.swiper-pagination',
                            clickable: true
                        },
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev'
                        }
                    })
                })
            }
        }
    }
}
</script>

<style></style>