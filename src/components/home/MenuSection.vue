<script setup>

  defineProps({
    items: {
      type: Array,
      required: true,
    }
  })

</script>

<template>
  <div class="bg-[#F8F8F8] dark:border-gray-600 dark:bg-gray-900">

    <div 
      id="mega-menu-full-dropdown" 
      class="mt-1 bg-gray-50 md:bg-[#F8F8F8] dark:bg-gray-800 dark:border-gray-600"
    >
      <div class="py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
        <ul class="grid grid-cols-2">
          <li v-for="(item, index) in items" :key="index">
            <div class="block p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
              <a :href="item.url" class="font-semibold hover:text-orange-400">{{ item.title }}</a>
              <div v-if="item.children?.length">
                <a 
                  v-for="(child, childIndex) in item.children" :key="childIndex" 
                  :href="child.url" 
                  class="text-sm text-gray-500 dark:text-gray-400 pr-4 hover:text-orange-500"
                >
                  {{ child.title }}
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>