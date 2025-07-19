<script setup>
  import ArticleCard from '@/components/public/ArticleCard.vue';
  import { verseList } from '@/data/data'
</script>

<template>
  <div class="max-w-6xl m-auto">
    <div v-for="(section, index) in verseList" :key="index">
      
      <div class="text-4xl font-bold py-8">
        {{ section.mainTitle }}
        <span class="text-2xl font-bold">{{ section.enMainTitle }}</span>
      </div>，，，

      <div :class="[
        'flex gap-10 border-b border-gray-300 mb-10 pb-10',
        index % 2 !== 0 ? 'flex-row-reverse' : ''
      ]">
     
        <div class="w-2/3">
          <ArticleCard v-bind="section.children[0]" />
        </div>

        <div :class="[
          'w-1/3 flex flex-col gap-10',
          index % 2 === 0
            ? 'border-l border-gray-300 pl-10'
            : 'border-r border-gray-300 pr-10'
        ]">
          <div class="flex-1">
            <ArticleCard v-bind="section.children[1]" />
          </div>
          <div class="flex-1">
            <ArticleCard v-bind="section.children[2]" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>