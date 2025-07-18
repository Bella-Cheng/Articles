<script setup>
import { computed } from 'vue';

const props = defineProps({
  tag : [String, Array],
  img: String,
  title : String,
  desc: String,
  url: String,
})

const tagsList = computed(() => {
  return Array.isArray(props.tag)? props.tag : [ props.tag ]

})
</script>

<template>
  <div>
    <a :href="url">
      <div>
        <div class="w-full">
          <img class="w-full aspect-[4/3] object-cover" :src="img" :alt="title" />
        </div>
        <div class="flex gap-2">
          <div
            v-for="(tag, index) in tagsList"
            :key="index"
            class="bg-black w-12 flex justify-center items-center rounded-xs mt-6"
          >
            <p class="text-white">
              {{ tag }}
            </p>
          </div>
        </div>
        <div class="text-2xl font-bold mt-4 w-full line-clamp-2 overflow-hidden">{{ title }}</div>
        <div
          v-if="desc"
          class="text-sm text-gray-500 font-bold mt-4 w-full line-clamp-2 overflow-hidden"
        >
          {{ desc }}
        </div>
      </div>
    </a>
  </div>
</template>