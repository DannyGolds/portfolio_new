<template>
  <main>
    <section class="main">
      <div class="container">
        <div class="main__body">
          <h1 class="title main__title" data-shadow="Главная">Главная</h1>
          <div class="main__content">
            <div class="blog">
              <img src="@/assets/imgs/posts.svg" alt="ПОСТЫ" class="blog__title">
                <div class="blog__content">
                  <div class="blog__cart" v-for="n in 2" :key="n">
                    <img :src="require('@/assets/imgs/Group 75.png')" alt="IMG" class="blog__cart-img">
                    <p class="blog__cart-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dui quam, iaculis a accumsan eu, hendrerit quis nisl.</p>
                    <div class="blog__cart-raiting">
                        *****
                    </div>
                  </div>
                </div>
            </div>
          <div class="motivation">
            <h1 class="motivation__text">Вы на моём блоге-портфолио. Читайте и наслаждайтесь!</h1>
            <a href="#" class="motivation__btn">К портфолио</a>
          </div>
          </div>
        </div>
      </div>
    </section>
    <section class="characters">
      <div class="container">
        <div class="characters__body">
          <div class="characters__block" v-for="char in 4" :key="char">
            <p class="characters__block-text">lorem ipsum sith dolor amet</p>
          </div>
        </div>
      </div>
    </section>
    <section class="about">
      <div class="container">
        <div class="about__body">
          <h1 class="title about__title" data-shadow="Обо мне">Обо мне</h1>
          <img src="" alt="PHOTO" class="about__img">
          <p class="about__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dui quam, iaculis a accumsan eu, hendrerit quis nisl. Mauris eu tortor et turpis egestas facilisis. Aenean non condimentum urna.Quisque commodo convallis justo at fringilla. Mauris eu tortor et turpis egestas facilisis. Aenean non condimentum urna. Quisque commodo convallis justo at fringilla.</p>
          <router-link to='' class="about__link">К блогу</router-link>
        </div>
      </div>
    </section>
    <section class="tools">
      <div class="container">
        <div class="tools__body">
          <h1 class="title tools__title" data-shadow="Инструменты">Инструменты</h1>
          <h2 class="tools__text">Мои инструменты в разработке</h2>
        </div>
      </div>
      <div class="tools__content">
        <div class="container">
          <div class="tools__content-body">
            <div class="tools__content-cart" v-for="cart in 6" :key="cart">
              <img src="" alt="tool" class="tools__content-img">
              <p class="tools__content-text">Vue.JS для приложений</p>
              <p class="tools__content-raiting">Используемость: *****</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="contacts">
      <div class="container">
        <div class="contacts__body">
          <h1 class="title contacts__title" data-shadow="Контакты">Контакты</h1>
          <form class="contacts__form">
            <div class="contacts__wrapper">
              <input type="text" class="contacts__input" placeholder="Введите ваше имя">
              <input type="text" class="contacts__input" placeholder="Введите ваш e-mail">
            </div>
            <div class="contacts__wrapper">
              <textarea class="contacts__textarea" placeholder="Сообщение"></textarea>
              <button class="contacts__btn">Отправить</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>