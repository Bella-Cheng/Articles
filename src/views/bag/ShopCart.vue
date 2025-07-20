<template>
  <div class="bg-gray-50 min-h-screen py-12 px-4">
    <div class="text-3xl font-bold py-8 mb-6 text-center">購物袋</div>
    <div class="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">

      <!-- 購物車列表 -->
      <div class="flex-1">
        <div class="divide-y">
          <!-- 商品 -->
          <div class="flex flex-col sm:flex-row items-start py-8 gap-6">
            <img src="@/assets/bar.jpg" alt="Nomad Tumbler" class="w-32 h-32 object-cover rounded-xl" />
            <div class="flex-1 w-full">
              <div class="flex justify-between items-start">
                <div>
                  <a href="http://">
                    <div class="font-semibold text-lg hover:text-gray-600">愛上花蓮的20個理由
                      <span class="flex gap-4 text-gray-700 text-sm mt-1">米老鼠封面</span>
                    </div>
                  </a>
                  <div class="mt-2 font-bold text-gray-900">NT$ 350</div>
                </div>

                <div class="flex items-center border-gray-100">
                  <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-black hover:text-white"> - </span>
                  <input class="h-8 w-8 border bg-white text-center text-xs outline-none" type="text" value="1" min="1" />
                  <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-black hover:text-white"> + </span>
                </div> 

                <button class="text-2xl text-gray-600 hover:text-red-800 ml-3">&times;</button>
              </div>

            </div>
          </div>

        </div>
      </div>

      <!-- 訂單摘要 -->
      <div class="w-full lg:w-96 flex-shrink-0">
        <div class="bg-white p-8">
          <h3 class="text-xl font-bold mb-6">訂單明細</h3>
          <ul class="text-gray-700 mb-6">
            <li class="flex justify-between items-center mb-3">
              <span>商品數量</span>
              <span class="font-semibold">1 件</span>
            </li>
            <li class="flex justify-between items-center mb-3">
              <span>商品金額</span>
              <span class="font-semibold">NT$ 350</span>
            </li>
            <li class="flex justify-between items-center mb-3">
              <span class="flex items-center">運費
                <span class="inline-block align-middle text-gray-400 pl-2 pb-1" title="滿 3000 元可免運">
                  <svg class="w-4 h-4 inline hover:text-[#ffa500] transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke-width="2" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 16v-4m0-4h.01" />
                  </svg>
                </span>
              </span>

              
              <span class="font-semibold">NT$ 100</span>
            </li>

            <li class="flex justify-between items-center border-t pt-4 mt-4 text-lg">
              <span>總金額</span>
              <span class="font-bold">NT$ 450</span>
            </li>
          </ul>
          <button class="w-full py-3 rounded-xl bg-black text-white font-semibold hover:bg-[#ffa500] transition text-lg">結帳</button>
        </div>
      </div>
    </div>
  </div>
</template>
