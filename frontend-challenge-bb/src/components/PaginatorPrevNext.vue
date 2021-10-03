<template>
    <div class="paginatorBall">
        <p class="paginatorBallText">{{ getDirection }}</p>
    </div>
</template>

<script>
export default {
    props: ['direction'],
    computed: {
        getDirection() {
            if (this.direction === 'prev') {
                return '<';
            } else {
                return '>';
            }
        }
    }
}
</script>