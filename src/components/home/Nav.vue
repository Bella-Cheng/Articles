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
            <span class="hover:text-[#ffa500]">人物</span>
          </router-link>

          <router-link to="/articles/figure" 
            @click="handdleTab('articles')" 
            class="before:mx-2 before:font-bold before:content-['‧'] cursor-pointer"
          >
            <span class="hover:text-[#ffa500]">文章</span>
          </router-link> 

          <router-link to="/features" 
            class="before:mx-2 before:font-bold before:content-['‧'] cursor-pointer"
          >
            <span class="hover:text-[#ffa500]">專題</span>
          </router-link>

          <router-link to="/podcasts" 
            @click="handdleTab('voice')" 
            class="before:mx-2 before:font-bold before:content-['‧'] cursor-pointer"
          >
            <span class="hover:text-[#ffa500]">聲音</span>
          </router-link>

          <router-link to="/magazines" 
            @click="handdleTab('magazine')" 
            class="before:mx-2 before:font-bold before:content-['‧'] cursor-pointer"
          >
            <span class="hover:text-[#ffa500]">雜誌</span>
          </router-link>

          <router-link to="/articles/tag/vibes" 
            class="before:mx-2 before:font-bold before:content-['‧'] cursor-pointer"
          >
            <span class="hover:text-[#ffa500]">VIBES</span>
          </router-link>

          <router-link to="/shop/cool-stuff" 
            class="before:mx-2 before:font-bold before:content-['‧'] cursor-pointer"
          >
            <span class="hover:text-[#ffa500]">V Shop</span>
          </router-link>

          <router-link to="/shop/subscription/one-year-plan" 
            class="relative overflow-hidden bg-[#ffa500] text-[#F8F8F8] rounded-2xl px-2 font-bold mx-2 cursor-pointer"
          >
            <span class="text-[#F8F8F8]">訂閱VERSE雜誌</span>
          </router-link>
        </ul>

      </div>
      <div class="flex py-2 items-center cursor-pointer">
        <i class="fa-solid fa-moon mx-2 cursor-pointer hover:text-[#ffa500]"></i>
        
        <i class="fa-solid fa-magnifying-glass mx-2 cursor-pointer hover:text-[#ffa500]"></i>
        
        <router-link to="/login">
          <i class="fa-regular fa-circle-user mx-2 cursor-pointer hover:text-[#ffa500]"></i>
        </router-link>

        <router-link to="/bag">
          <i class="fa-solid fa-bag-shopping mx-2 cursor-pointer hover:text-[#ffa500]"></i>
        </router-link>
        
        <a href="mailto:dhp951320@gmail.com"><i class="fa-solid fa-envelope mx-2 cursor-pointer hover:text-[#ffa500]"></i></a>
        
        <router-link to="/member">
          <svg
            class="w-5 h-5 ml-2 cursor-pointer hover:fill-[#ffa500] transition"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 97.7 97.7"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
            />
          </svg>
        </router-link>
      </div>
    </div>
    <MenuSection v-if="toggleMenu" :items="menuData"/>
  </div>
</template>