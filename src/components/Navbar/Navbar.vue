
<template>
  <header class="header">
    <nav class="header__nav" :class="{color: scrolled > 0}">
      <div class="container">
        <div class="header__nav-container">
          <router-link to="/" class="header__nav-logo" @click="burger = false">
            <img src="/src/assets/images/logo.png" alt="">
          </router-link>
          <div class="header__nav-btn" @click="burger = !burger" :class="{active: burger}">
            <span></span>
          </div>
          <ul class="header__nav-list" :class="{active: burger}">
            <li v-for="link in links" :key="link.url">
                <router-link :to="link.url" class="header__nav-link" @click="burger = false">
                    {{ link.title }}
                </router-link>
            </li>
        
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return{
        links: [
            {title: 'Главная', url: '/'},
            {title: 'Обо мне', url: '/about'},
            {title: 'Мой опыт', url: '/skill'},
            {title: 'Проекты', url: '/project'},
            {title: 'Контакты', url: '/contact'},
        ],
        burger: false,
        scrolled: 0
    }
  },
  methods:{
    updateScroll(){
      this.scrolled = window.scrollY
    }
  },
  mounted(){
    window.addEventListener('scroll', this.updateScroll)
  }
};
</script>

<style>

</style>