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

    <div class="flex justify-between items-center border-b-1">
      <div class="flex">
        <ul class="flex py-2">
          <router-link to="/articles" class="cursor-pointer">
            人物
          </router-link>

          <router-link to="/articles/figure" 
            @click="handdleTab('articles')" 
            class="before:mx-2 before:font-bold before:content-['‧'] cursor-pointer"
          >
            文章
          </router-link> 

          <router-link to="/features" 
            class="before:mx-2 before:font-bold before:content-['‧'] cursor-pointer"
          >
            專題
          </router-link>

          <router-link to="/podcasts" 
            @click="handdleTab('voice')" 
            class="before:mx-2 before:font-bold before:content-['‧'] cursor-pointer"
          >
            聲音
          </router-link>

          <router-link to="/magazines" 
            @click="handdleTab('magazine')" 
            class="before:mx-2 before:font-bold before:content-['‧'] cursor-pointer"
          >
            雜誌
          </router-link>

          <router-link to="/articles/tag/vibes" 
            class="before:mx-2 before:font-bold before:content-['‧'] cursor-pointer"
          >
            VIBES
          </router-link>

          <router-link to="/shop/cool-stuff" 
            class="before:mx-2 before:font-bold before:content-['‧'] cursor-pointer"
          >
            V Shop
          </router-link>

          <router-link to="/shop/subscription/one-year-plan" 
            class="relative overflow-hidden bg-[#ffa500] text-[#F8F8F8] rounded-2xl px-2 font-bold mx-2 cursor-pointer"
          >
            <span class="text-[#F8F8F8]">訂閱VERSE雜誌</span>
          </router-link>
        </ul>

      </div>
      <div class="flex py-2 items-center cursor-pointer">
        <i class="fa-solid fa-moon mx-2 cursor-pointer"></i>
        
        <i class="fa-solid fa-magnifying-glass mx-2 cursor-pointer"></i>
        
        <router-link to="/login">
          <i class="fa-regular fa-circle-user mx-2 cursor-pointer"></i>
        </router-link>

        <router-link to="/bag">
          <i class="fa-solid fa-bag-shopping mx-2 cursor-pointer"></i>
        </router-link>
        
        <a href="mailto:dhp951320@gmail.com"><i class="fa-solid fa-envelope mx-2 cursor-pointer"></i></a>
        
        <router-link to="/member">
          <img 
            class="w-5 h-5 ml-2 cursor-pointer"
            src="@/assets/GitHub.png"
            alt="GitHub"
          >
        </router-link>
      </div>
    </div>
    <MenuSection v-if="toggleMenu" :items="menuData"/>
  </div>
</template>