<template>
  <b-button squared size="lg" v-text="text" :style="style" class="shadow-none"></b-button>
</template>

<script>
import config from '@/../configs/config.json';

export default {
  name: 'CTAButton',
  data: () => ({
    text: config.launcher.ctaText,
    style: {
      height: '80px',
      width: '300px',
      backgroundColor: config.launcher.backgroundColor,
      color: config.launcher.color,
      fontFamily: config.launcher.fontFamily,
      fontSize: `${config.launcher.fontSize}px`
    },
  })
};
</script>
