<script setup>
import { carouselData } from '@/data/data'
</script>

<template>
  <div 
    id="carouselExampleDark" 
    class="carousel carousel-dark slide py-10 max-w-6xl m-auto"
    data-bs-ride="carousel"
  >

    <div class="carousel-indicators">
      <button 
        v-for="( item, index ) in carouselData" 
        :key="index" 
        type="button" 
        data-bs-target="#carouselExampleDark" 
        :data-bs-slide-to="index" 
        :class="{ active : index === 0 }" 
        :aria-label="`Slide ${index + 1}`"
      >
      </button>
    </div>

    <div class="carousel-inner">
      <div 
        v-for="( item, index ) in carouselData" 
        :key="index" 
        :class="['carousel-item', { active: index === 0 }]"
        data-bs-interval="6000"
      >

        <div class="mb-4 text-left px-4">
          <div class="bg-black text-white w-16 h-7 text-center font-bold rounded-sm mb-2 flex items-center justify-center">
            <p>{{ item.tag }}</p>
          </div>
          <h2 class="min-h-[110px] text-2xl md:text-4xl font-bold leading-[1.5]">{{ item.title }}</h2>
        </div>
        <img :src="item.img" class="d-block w-full aspect-video object-cover" alt="熱門文章" loading="lazy">
      </div>
    </div>
    
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
    </button>
  </div>
</template>