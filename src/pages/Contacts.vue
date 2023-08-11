<template>
  <div class="container">
    <div class="contact">
      <h2 class="contact__title">Мои контакты</h2>
      <div class="contact__box">
        <div class="contact__right">
          <p class="contact__right-title">Связаться со мной</p>
          <div class="contact__right-btns">
            <button class="contact__right-btn">
              <a href="tel:+998977098286">
                <fa :icon="['fas', 'phone']" class="contact__right-icon" />
                <span>Phone </span>
              </a>
            </button>
            <button class="contact__right-btn">
              <a href="https:/t.me/Shovokhobova">
              <fa :icon="['fab', 'telegram']" class="contact__right-icon" />
              <span> Telegram</span>
            </a>
            </button>
            <button class="contact__right-btn">
              <fa :icon="['fab', 'instagram']" class="contact__right-icon" />
              <span> Instagram</span>
            </button>
            <button class="contact__right-btn">
              <a href="mailto:munirashovokhobova@gmail.com">
                <fa :icon="['fas', 'envelope']" class="contact__right-icon" />
                <span> Mail</span>
              </a>
            </button>
          </div>
        </div>
        <div class="contact__left">
          <img src="../assets/images/calling.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style>
</style>