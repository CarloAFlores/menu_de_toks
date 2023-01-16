<template>
<div class="fondo_pantalla">
  <div class="saludo">¡Bienvenido!</div>
  <Carousel :itemsToShow="3.95" :wrapAround="true" :transition="500">
    <Slide v-for="comida in comidas" :key="comida.id">
      <div class="carousel__item"><img :src="comida.imagen" alt="" class="fondo"><div class="mascara"></div><img :src="comida.recuadro" alt="." class="titulo_imagen"></div>
    </Slide>

    ...
  </Carousel>
</div>
</template>

<script>
import { computed, defineComponent, onMounted } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'
import { useStore } from 'vuex'
import font from "@/common/font.css";

export default defineComponent({
  name: 'Autoplay',
  components: {
    Carousel,
    Slide,
    Pagination,
  },

  setup(){
    const store = useStore();
    const comidas = computed(()=>{
      return store.state.comida
    })
    onMounted(()=>{
      store.dispatch('datosComida')
    })
    return{
      comidas
    }
  }
})
</script>

<style scoped>
.carousel__slide {
  padding: 1px;
  margin-top: 3rem;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.5);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.5);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.50);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.50);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1);
}

.carousel__item{
  border: 1px solid black;
  background-color: greenyellow;
  width: 17rem;
  height: 28rem;
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
}
.fondo{
  width: 17rem;
  height: 28rem;
  border-radius: 20px;
}
.mascara{
  background-color: rgba(0, 0, 0, 0.445);
  width: 17rem;
  height: 28rem;
  margin-top: -28rem;
  margin-left: 0rem;
  border-radius: 20px;
}
.titulo_imagen{
  margin-top: -50vh;
  margin-left: 1rem;
  width: 15rem;
  height: 8rem;
}

.fondo_pantalla{
  background: url(https://menugrg.com.mx:7443/recs_marcas/fondo_cate.jpg);
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-size: cover;
}

.saludo{
  text-align: center;
  font-family: Lifehack;
  font-size: 3rem;
  color: #f58220;
}

@media (min-width: 320px) and (max-width: 400px){
  
  .carousel__item{
    border: 1px solid black;
    background-color: greenyellow;
    width: 12rem;
    height: 40rem;
    border-radius: 20px;
    
  }
  .fondo{
    width: 12rem;
    height: 40rem;
  }
  .mascara{
  background-color: rgba(0, 0, 0, 0.445);
  width: 12rem;
  height: 40rem;
  margin-top: -40rem;
  margin-left: 0rem;
  border-radius: 20px;
}
.titulo_imagen{
  margin-top: -45vh;
  margin-left: .2rem;
  width: 11.5rem;
  height: 8rem;
}

  .carousel__slide {
  opacity: 0.9;
  transform: rotateY(-5deg) scale(0);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(50deg) scale(0);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-2deg) scale(0);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(2deg) scale(0);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1);
}
}

@media (min-width: 400px) and (max-width: 480px){
    .carousel__item{
    border: 1px solid black;
    background-color: greenyellow;
    width: 12rem;
    height: 40rem;
    border-radius: 20px;
    
  }
  .fondo{
    width: 12rem;
    height: 40rem;
  }
  .mascara{
  background-color: rgba(0, 0, 0, 0.445);
  width: 12rem;
  height: 40rem;
  margin-top: -40rem;
  margin-left: 0rem;
  border-radius: 20px;
}
.titulo_imagen{
  margin-top: -45vh;
  margin-left: .2rem;
  width: 11.5rem;
  height: 8rem;
}

  .carousel__slide {
  opacity: 0.9;
  transform: rotateY(-5deg) scale(0);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(50deg) scale(0);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-2deg) scale(0);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(2deg) scale(0);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1);
}
}



</style>