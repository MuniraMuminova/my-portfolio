<template>
  <footer class="footer">
    <div class="footer__img">
      <img
        class="footer__img-right"
        src="/src/assets/images/footer.png"
        alt=""
      />
      <img
        class="footer__img-left"
        src="/src/assets/images/footer-left.png"
        alt=""
      />
    </div>
    <div class="footer__info">
      <h2 class="footer__info-title">Muminova Munira</h2>
      <div class="footer__info-icons">
        <fa :icon="['fab', 'telegram']" class="icons-tg" />
        <fa :icon="['fab', 'instagram']" class="icons-insta" />
        <fa :icon="['fas', 'envelope']" class="icons-fb" />
        <fa :icon="['fab', 'youtube']" class="icons-you" />
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style>
</style>