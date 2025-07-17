<script setup>
import MenuSection from '@/components/home/MenuSection.vue'
import { articles, voice, magazine } from '@/data/data'
import { ref, computed } from 'vue'
import dayjs from 'dayjs'

const menuTab = ref('')
const toggleMenu = ref(false)

const menuData = computed(() => {
  if( menuTab.value == 'articles') return articles
  if( menuTab.value == 'voice') return voice
  if( menuTab.value == 'magazine') return magazine
  return []
})

const handdleTab = function(tab){
  if(menuTab.value == tab){
    toggleMenu.value = !toggleMenu.value
  }else{
    menuTab.value = tab
    toggleMenu.value = true
  }
}

const month = dayjs().format('MMM')
const date = dayjs().format('DD')

</script>

<template>
  <div class="max-w-6xl m-auto">

    <div class="pt-10 border-b-2">
      <p class="pb-2">屬於我們時代的文化媒體</p>
    </div>

    <div class="border-y-1 mt-2 flex justify-between py-5 items-center">
      <div>
        <a class="text-8xl" href="#">VERSE</a>
      </div>
      <div class="flex items-center">
        <div class="border-l-1 h-30 pl-5 pr-20">Issue 30<br />
          夜晚的秘密新浪潮 »
        </div>
        <div>
          <span class="text-2xl font-bold">{{ month }}.</span>
          <span class="text-8xl font-bold">{{ date }}</span>
        </div>
      </div>
    </div>

    <div class="flex justify-between border-b-1">
      <div class="flex">
        <ul class="flex py-2">
          <li class="cursor-pointer">人物</li>
          <li @click="handdleTab('articles')" class="before:mx-2 before:font-bold before:content-['‧'] cursor-pointer">文章</li>         
          <li class="before:mx-2 before:font-bold before:content-['‧'] cursor-pointer">專題</li>
          <li @click="handdleTab('voice')" class="before:mx-2 before:font-bold before:content-['‧'] cursor-pointer">聲音</li>
          <li @click="handdleTab('magazine')" class="before:mx-2 before:font-bold before:content-['‧'] cursor-pointer">雜誌</li>
          <li class="before:mx-2 before:font-bold before:content-['‧'] cursor-pointer">VIBES</li>
          <li class="before:mx-2 before:font-bold before:content-['‧'] cursor-pointer">V Shop</li>
          <li class="relative overflow-hidden bg-[#ffa500] text-[#F8F8F8] rounded-2xl px-2 font-bold mx-2 cursor-pointer">
            <span>訂閱VERSE雜誌</span></li>
        </ul>
      </div>
      <div class="flex py-2 items-center cursor-pointer">
        <i class="fa-solid fa-moon mx-2 cursor-pointer"></i>
        <i class="fa-solid fa-magnifying-glass mx-2 cursor-pointer"></i>
        <i class="fa-regular fa-circle-user mx-2 cursor-pointer"></i>
        <i class="fa-solid fa-bag-shopping mx-2 cursor-pointer"></i>
        <a href="mailto:dhp951320@gmail.com"><i class="fa-solid fa-envelope mx-2 cursor-pointer"></i></a>
        
        <a href="https://github.com/Bella-Cheng">
          <img 
            class="w-5 h-5 ml-2 cursor-pointer"
            src="@/assets/GitHub.png"
            alt="GitHub"
          >
        </a>
      </div>
    </div>
    <MenuSection v-if="toggleMenu" :items="menuData"/>
  </div>
</template>