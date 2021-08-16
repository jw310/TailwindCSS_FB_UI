<template>
  <div class="bg-fb-bg">
    <header class="w-full h-[56px] bg-fb-header fixed top-0 left-0 right-0 flex
    item-center justify-between px-4 z-40">
      <!-- left -->
      <div class="flex items-center">
        <svg
          viewBox="0 0 36 36"
          class="fill-current text-fb"
          height="39"
          width="39"
        >
          <defs>
            <linearGradient x1="50%" x2="50%" y1="97.0782153%" y2="0%">
              <stop offset="0%" stop-color="#0062E0"></stop>
              <stop offset="100%" stop-color="#19AFFF"></stop>
            </linearGradient>
          </defs>
          <path
            d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"
          ></path>
          <path
            class="fill-current text-white"
            d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"
          ></path>
        </svg>
        <button class="popover-btn lg:hidden">
          <img src="https://bruce-fe-fb.web.app/image/search.svg" alt="">
        </button>
        <div class="bg-fb-input ml-2 py-2 px-3 w-[240px] rounded-full items-center
        hidden lg:flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-[18px] h-[18px] mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#9ba3af"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            class="w-full bg-transparent text-white focus:outline-none"
            placeholder="搜尋 Facebook"
          />
        </div>
      </div>
      <!-- right -->
      <div class="flex items-center">
        <button class="popover-btn" @click.stop="openPanel(0)">
          <img src="https://bruce-fe-fb.web.app/image/plus.svg" alt="">
        </button>
        <button class="popover-btn" @click.stop="openPanel(1)">
          <img src="https://bruce-fe-fb.web.app/image/messenger.svg" alt="">
        </button>
        <button class="popover-btn" @click.stop="openPanel(2)">
          <img src="https://bruce-fe-fb.web.app/image/bell.svg" alt="">
        </button>
        <button class="popover-btn" @click.stop="openPanel(3)">
          <img src="https://bruce-fe-fb.web.app/image/down.svg" alt="">
        </button>

        <!--選單 1 plus-->
        <div class="popover-panel" :class="{ 'hidden': plusPanel.isClose }">
          <p class="text-white mb-3 text-2xl">建立</p>
          <div class="flex item-center">
            <div class="bg-fb-input rounded-full p-2 mr-2 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </div>
            <div class="flex-1">
              <p class="text-sm text-white mb-[2px]">{{ plusPanel.title }}</p>
              <p class="text-xs text-gray-400">{{ plusPanel.content }}</p>
            </div>
          </div>
        </div>
        <!--選單 2 messenger-->
        <div class="popover-panel" :class="{ 'hidden': messengerPanel.isClose }">
          <p class="text-white mb-3 text-2xl">Messenger</p>
          <div class="bg-fb-input rounded-full py-1 px-3 flex items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-[18px] h-[18px] mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#9ba3af"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input type="text" class="w-full bg-transparent focus:outline-none text-white" placeholder="搜尋 Messenger">
          </div>
          <div class="flex items-center mb-2 p-2 rounded-lg hover:bg-fb-input cursor-pointer">
            <div class="w-[50px] h-[50px] rounded-full mr-3 overflow-hidden">
              <img class="w-full object-cover" src="https://bruce-fe-fb.web.app/image/avator.png" alt="">
            </div>
            <div class="flex-1">
              <p class="text-base text-white mb-[2px]">{{ messengerPanel.user }}</p>
              <p class="text-sm text-gray-400">{{ messengerPanel.content }}</p>
            </div>
          </div>
        </div>
        <!-- 選單 3 notification -->
        <div class="popover-panel" :class="{ 'hidden': notificationPanel.isClose }">
          <p class="text-white mb-3 text-2xl">通知</p>
          <div class="flex items-center mb-2 p-2 rounded-lg hover:bg-fb-input cursor-pointer">
            <div class="w-[50px] h-[50px] rounded-full overflow-hidden mr-3">
              <img class="w-full object-cover" src="https://bruce-fe-fb.web.app/image/avator.png" alt="">
            </div>
            <div class="flex-1">
              <p class="text-sm text-white mb-[2px]">{{ notificationPanel.title }}</p>
              <p class="text-xs text-fb">{{ notificationPanel.time }}</p>
            </div>
          </div>
        </div>
        <!-- 選單 4 more -->
        <div class="popover-panel" :class="{ 'hidden': morePanel.isClose }">
          <div class="flex items-center mb-2 p-2 rounded-lg hover:bg-fb-input cursor-pointer">
            <div class="w-[50px] h-[50px] rounded-full overflow-hidden mr-3">
              <img class="w-full object-cover" src="https://bruce-fe-fb.web.app/image/avator.png" alt="">
            </div>
            <div class="flex-1">
              <p class="text-sm text-white mb-[2px]">{{ morePanel.user }}</p>
              <p class="text-xs text-gray-400">{{ morePanel.other }}</p>
            </div>
          </div>
          <div class="flex p-1 mb-2 items-center hover:bg-fb-input rounded-lg cursor-pointer">
            <div class="bg-fb-input rounded-full p-2 mr-2 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </div>
            <p class="flex-1 text-white">登出</p>
          </div>
        </div>
      </div>
    </header>

    <!-- <main class="min-h-[100vh] pt-main-span">
      <div class="sticky top-main-span max-w-[360px] w-full h-full pl-4 lg:block">
      </div>
    </main> -->
  </div>
</template>

<script>
import { onMounted, reactive } from 'vue'

export default {
  setup () {
    const plusPanel = reactive({ isClose: true, title: '貼文', content: '在動態消息分享貼文' })
    const messengerPanel = reactive({ isClose: true, user: 'Jerry', content: 'TailwindCSS讚！・1分鐘前' })
    const notificationPanel = reactive({ isClose: true, title: 'Jerry發佈了一則新留言！', time: '1分鐘前' })
    const morePanel = reactive({ isClose: true, user: 'Jerry', other: '查看個人檔案' })

    const openPanel = (index) => {
      try {
        const panels = [plusPanel, messengerPanel, notificationPanel, morePanel]
        panels.forEach((p, idx) => {
          if (index !== idx) {
            p.isClose = true
          }
          if (index === idx) {
            p.isClose = !p.isClose
          }
        })
        // switch (index) {
        //   case 0:
        //     plusPanel.isClose = !plusPanel.isClose
        //     messengerPanel.isClose = true
        //     notificationPanel.isClose = true
        //     morePanel.isClose = true
        //     break
        //   case 1:
        //     plusPanel.isClose = true
        //     messengerPanel.isClose = !messengerPanel.isClose
        //     notificationPanel.isClose = true
        //     morePanel.isClose = true
        //     break
        //   case 2:
        //     plusPanel.isClose = true
        //     messengerPanel.isClose = true
        //     notificationPanel.isClose = !notificationPanel.isClose
        //     morePanel.isClose = true
        //     break
        //   case 3:
        //     plusPanel.isClose = true
        //     messengerPanel.isClose = true
        //     notificationPanel.isClose = true
        //     morePanel.isClose = !morePanel.isClose
        //     break
        // }
      } catch (error) {
        console.log(error)
      }
    }

    onMounted(() => {
      window.addEventListener('click', function () { // 關閉功能
        openPanel(-1)
      })
    })

    return {
      plusPanel,
      messengerPanel,
      notificationPanel,
      morePanel,
      openPanel
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
