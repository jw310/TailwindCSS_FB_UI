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
      <!-- right click.stop 讓 window 不要觸發事件 -->
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

    <main class="min-h-[100vh] pt-main-span flex">
      <!-- left -->
      <div class="hidden sticky top-main-span max-w-[360px] w-full h-full pl-4 lg:block">
        <div class="flex items-center justify-items-center w-full p-2 mb-1 rounded
        hover:bg-fb-input cursor-pointer" v-for="item in leftArr" :key="item.name">
          <div class="w-[32px] overflow-hidden rounded-full mr-4">
            <img :src="item.img" alt="" />
          </div>
          <p class="text-white text-[.9rem]">{{ item.name }}</p>
        </div>
      </div>
      <!-- middle -->
      <div class="max-w-[744px] w-full mx-auto px-4 pb-4">
        <!--限時動態-->
        <div class="relative">
          <div class="flex overflow-x-auto no-scrollbar">
            <!-- flex-1 依照元素個數寬度彈性伸縮-->
            <div class="flex-1 px-[4px] min-w-[120px] cursor-pointer">
              <div class="h-full flex flex-col">
                <div class="h-full overflow-hidden">
                  <img class="object-cover w-full h-full duration-500 hover:scale-105" src="https://bruce-fe-fb.web.app/image/avator.png" alt="">
                </div>
                <div class="bg-fb-card pt-6 px-2 pb-2 relative">
                  <button class="w-[32px] h-[32px] p-2 absolute -top-4 left-[calc(50%-16px)] bg-fb rounded-full focus:outline-none ring-fb-card ring flex justify-center items-center">
                    <img src="https://bruce-fe-fb.web.app/image/plus.svg" alt="">
                  </button>
                  <p class="w-full text-white text-center">建立限時動態</p>
                </div>
              </div>
            </div>

            <div class="flex-1 px-[4px] min-w-[120px] cursor-pointer" @mouseover="maskIn(item, index, $event)" @mouseout="maskOut(item, index)" v-for="(item, index) in storyImg" :key="item.id">
              <div class="relative overflow-hidden" :id="`${item.id}`">
                <div class="absolute w-full h-full top-0 left-0 bg-black/20 z-20" :class="{ 'hidden': item.isHidden }"></div>
                <div class="w-[32px] h-[32px] absolute top-4 left-4 ring-4 ring-fb bg-fb-card rounded-full flex justify-center items-center z-30">
                  <p class="text-white text-sm">布{{ index }}</p>
                </div>
                <div class="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-black/30 to-transparent z-20"></div>
                <img class="w-full h-full duration-200" :class="{ 'scale-105': item.isScale }"
                src="https://bruce-fe-fb.web.app/image/story.png" alt="" />
                <p class="absolute bottom-2 left-2 text-white z-10">布魯斯</p>
              </div>
            </div>

          </div>
          <button class="absolute popover-btn -right-3 top-[calc(50%-22.5px)] z-30 w-[45px] h-[45px]">
            <img src="https://bruce-fe-fb.web.app/image/right-arrow.svg" alt="">
          </button>
        </div>
        <!--想些什麼-->
        <div class="card">
          <div class="flex pb-4">
            <div class="w-[40px] rounded-full overflow-hidden mr-3">
              <img src="https://bruce-fe-fb.web.app/image/avator.png" alt="">
            </div>
            <div class="bg-fb-input flex-1 rounded-full flex items-center">
              <p class="text-left text-sm pl-3 text-gray-400">
                Jerry，在想些什麼？
              </p>
            </div>
          </div>
        <div class="border-t border-gray-700 flex pt-3">
          <button class="flex-1 h-[40px] roundede-lg hover:bg-fb-input flex items-center justify-center">
            <div class="w-[16px]">
              <img src="https://bruce-fe-fb.web.app/image/camera.svg" alt="">
            </div>
            <p class="text-gray-400 text-sm pl-1.5">直播視訊</p>
          </button>
          <button class="flex-1 h-[40px] roundede-lg hover:bg-fb-input flex items-center justify-center">
            <div class="w-[16px]">
              <img src="https://bruce-fe-fb.web.app/image/photo.svg" alt="">
            </div>
            <p class="text-gray-400 text-sm pl-1.5">相片/影片</p>
          </button>
          <button class="flex-1 h-[40px] roundede-lg hover:bg-fb-input flex items-center justify-center">
            <div class="w-[16px]">
              <img src="https://bruce-fe-fb.web.app/image/feel.svg" alt="">
            </div>
            <p class="text-gray-400 text-sm pl-1.5">感受/活動</p>
          </button>
        </div>

        </div>
        <!-- 包廂-->
        <div class="card pr-0 flex">
          <div class="swiper-container fb-live">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <button class="mr-4 px-4 h-[40px] ring-2 ring-gray-600 flex items-center rounded-full focus:outline-none">
                  <div class="w-[24px]">
                    <img src="https://bruce-fe-fb.web.app/image/video.svg" alt="">
                  </div>
                  <p class="ml-2 text-fb text-sm font-bold">建立包廂</p>
                </button>
              </div>
              <div class="swiper-slide" v-for="n in 15" :key="n">
                <div class="w-[55px]">
                  <div class="relative w-[40px] cursor-pointer">
                    <div class="overflow-hidden rounded-full">
                      <img src="https://bruce-fe-fb.web.app/image/avator.png" alt="">
                    </div>
                    <div class="w-[10px] h-[10px] rounded-full bg-green-500 absolute bottom-0 right-0 ring-gray-900 ring">
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <!-- <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div> -->
          </div>
        </div>
        <!-- 貼文牆-->
        <div class="card pb-0 px-0">
          <!-- title -->
          <div class="flex px-4">
            <div class="w-[44px] rounded-full overflow-hidden mr-3">
              <img src="https://bruce-fe-fb.web.app/image/avator.png" alt="">
            </div>
            <div class="">
              <p class="text-white">Jerry</p>
              <div class="flex items-center text-gray-400 text-sm">
                <div>5小時</div>
                <div>.</div>
                <div class="w-[12px]">
                  <img clss="w-full" src="https://bruce-fe-fb.web.app/image/earth.svg" alt="">
                </div>
              </div>
            </div>
            <button class="w-[12px] focus:outline-none">
              <img src="https://bruce-fe-fb.web.app/image/more.svg" alt="">
            </button>
          </div>
          <!-- content -->
          <p class="text-base text-gray-300 mt-3 px-4">
            【布魯斯】手作蛋糕高雄分店開幕囉！！
          </p>
          <!-- pic -->
          <!-- inline -->
          <a href="#" class="block mt-3">
            <div class="w-full overflow-hidden h-[260px]">
              <img class="object-cover w-full" src="https://bruce-fe-fb.web.app/image/item.png" alt="">
            </div>
            <div class="bg-fb-input w-full px-4 py-2 text-white">
              <p class="text-gray-400 text-sm">WWW.BRUCEFE.COM</p>
              <p class="text-lg">布魯斯】手作蛋糕高雄分店開幕囉！！</p>
            </div>
          </a>
          <!-- like,message -->
          <div class="px-4">
            <div class="border-b border-gray-700 flex justify-between py-3">
              <div class="flex items-center">
                <div class="w-[18px] mr-2">
                  <img src="https://bruce-fe-fb.web.app/image/like-blue.svg" alt="">
                </div>
                <p class="text-sm text-gray-400">990</p>
              </div>
                <div class="flex items-center">
                  <p class="text-sm text-gray-400 mr-2">3則留言</p>
                  <p class="text-sm text-gray-400">1次分享</p>
                </div>
              </div>
            </div>
            <div class="flex items-center py-2">
              <button class="flex-1 h-[40px] rounded-lg hover:bg-fb-input flex items-center justify-center">
                <div class="w-[16px]">
                  <img src="https://bruce-fe-fb.web.app/image/like.svg" alt="">
                </div>
                <p class="text-gray-400 text-sm pl-1.5">讚</p>
              </button>
              <button class="flex-1 h-[40px] rounded-lg hover:bg-fb-input flex items-center justify-center">
                <div class="w-[16px]">
                  <img src="https://bruce-fe-fb.web.app/image/chat.svg" alt="">
                </div>
                <p class="text-gray-400 text-sm pl-1.5">留言</p>
              </button>
              <button class="flex-1 h-[40px] rounded-lg hover:bg-fb-input flex items-center justify-center">
                <div class="w-[16px]">
                  <img src="https://bruce-fe-fb.web.app/image/share.svg" alt="">
                </div>
                <p class="text-gray-400 text-sm pl-1.5">分享</p>
              </button>
            </div>
          </div>
          <!-- Loading-->
          <div class="card pb-0 px-0 animate-pulse">
            <!-- title -->
            <div class="flex px-4 items-center mb-4">
              <div class="w-[44px] h-[44px] rounded-full overflow-hidden mr-3 bg-fb-input"></div>
              <div class="flex content-evenly flex-wrap w-[200px] h-[50px]">
                <div class="bg-fb-input h-[16px] w-[200px] rounded-full"></div>
                <div class="bg-fb-input h-[16px] w-[200px] rounded-full"></div>
              </div>
            </div>
            <div class="w-full h-[260px] bg-fb-input"></div>
          </div>
      </div>
      <!-- right-->
      <div class="hidden sticky top-main-span max-w-[360px] w-full h-full lg:block">
        <p class="mb-2 text-lg text-gray-400">聯絡人</p>
        <div class="flex items-center justify-items-center w-full py-2 px-1 rounded
        hover:bg-fb-input cursor-pointer">
          <div class="w-[45px]">
            <div class="relative w-[32px] cursor-pointer">
              <div class="overflow-hidden rounded-full">
                <img src="https://bruce-fe-fb.web.app/image/avator.png" alt="">
              </div>
              <div class="w-[8px] h-[8px] rounded-full bg-green-500 absolute
              bottom-0 right-0 ring-gray-900 ring"></div>
            </div>
          </div>
          <p class="text-white text-[.9rem]">Jerry</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { onMounted, reactive, nextTick } from 'vue'
import Swiper from 'swiper'
import 'swiper/swiper-bundle.css' // import Swiper styles

export default {
  setup () {
    const plusPanel = reactive({ isClose: true, title: '貼文', content: '在動態消息分享貼文' })
    const messengerPanel = reactive({ isClose: true, user: 'Jerry', content: 'TailwindCSS讚！・1分鐘前' })
    const notificationPanel = reactive({ isClose: true, title: 'Jerry發佈了一則新留言！', time: '1分鐘前' })
    const morePanel = reactive({ isClose: true, user: 'Jerry', other: '查看個人檔案' })
    const leftArr = reactive([
      {
        name: '布魯斯',
        img: 'https://bruce-fe-fb.web.app/image/avator.png'
      },
      {
        name: '活動',
        img: 'https://bruce-fe-fb.web.app/image/left/activity.svg'
      },
      {
        name: '天氣',
        img: 'https://bruce-fe-fb.web.app/image/left/cloudy.png'
      },
      {
        name: '災害應變中心',
        img: 'https://bruce-fe-fb.web.app/image/left/dynamic.svg'
      },
      {
        name: '新冠病毒資訊中心',
        img: 'https://bruce-fe-fb.web.app/image/left/facemask.svg'
      },
      {
        name: '社團',
        img: 'https://bruce-fe-fb.web.app/image/left/friend.svg'
      },
      {
        name: '企業管理平台',
        img: 'https://bruce-fe-fb.web.app/image/left/job.png'
      },
      {
        name: 'Messenger',
        img: 'https://bruce-fe-fb.web.app/image/left/messenger.svg'
      },
      {
        name: '近期廣告動態',
        img: 'https://bruce-fe-fb.web.app/image/left/pay.png'
      },
      {
        name: '朋友名單',
        img: 'https://bruce-fe-fb.web.app/image/left/sale.png'
      },
      {
        name: '最愛',
        img: 'https://bruce-fe-fb.web.app/image/left/star.svg'
      },
      {
        name: 'Marketplace',
        img: 'https://bruce-fe-fb.web.app/image/left/store.svg'
      },
      {
        name: 'Watch',
        img: 'https://bruce-fe-fb.web.app/image/left/watchingTv.svg'
      }
    ])
    let swiper = null

    const storyImg = reactive([])
    for (let i = 0; i < 3; i++) {
      storyImg.push({ id: i, isHidden: false, isScale: false })
    }

    const openPanel = (index) => {
      try {
        const panels = [plusPanel, messengerPanel, notificationPanel, morePanel]
        panels.forEach((panel, idx) => {
          if (index !== idx) {
            panel.isClose = true
          }
          if (index === idx) {
            panel.isClose = !panel.isClose
          }
        })
        // switch (index) {
        //   case 0:
        //     plusPanel.isClose = !plusPanel.isClose
        //     break
        //   case 1:
        //     messengerPanel.isClose = !messengerPanel.isClose
        //     break
        //   case 2:
        //     notificationPanel.isClose = !notificationPanel.isClose
        //     break
        //   case 3:
        //     morePanel.isClose = !morePanel.isClose
        //     break
        // }
      } catch (error) {
        console.log(error)
      }
    }

    const maskIn = (item, index, event) => {
      // console.log(item, index, event)
      if (item.id === index) {
        item.isHidden = true
        item.isScale = true
      }
    }
    const maskOut = (item, index) => {
      // console.log(item, index)
      item.isHidden = false
      item.isScale = false
    }

    // const swiper = new Swiper('.fb-live', { // 官網文件 初始化 swiper.js
    //   loop: false,
    //   navigation: { // 導航選項
    //     nextEl: '.swiper-button-next', // 新增按鈕
    //     prevEl: '.swiper-button-prev'
    //   },
    //   slidesPerView: 'auto'
    //   // pagination: {
    //   //     el: ".swiper-pagination",
    //   //      clickable: true,
    //   //  },
    // })

    // watch((newVal) => {
    //   nextTick(() => {
    //     swiper.update()
    //   })
    // })

    onMounted(() => {
      window.addEventListener('click', function () { // 點選頁面關閉 Panels 功能
        openPanel(-1)
      })
      swiper = new Swiper('.fb-live', { // 官網文件 初始化 swiper.js
        loop: false,
        navigation: { // 導航選項
          nextEl: '.swiper-button-next', // 新增按鈕
          prevEl: '.swiper-button-prev'
        },
        slidesPerView: 'auto'
        // pagination: {
        //     el: ".swiper-pagination",
        //      clickable: true,
        //  },
      })
      nextTick(() => {
        swiper.update()
      })
    })

    return {
      plusPanel,
      messengerPanel,
      notificationPanel,
      morePanel,
      leftArr,
      openPanel,
      storyImg,
      maskIn,
      maskOut
    }
  }
}
</script>

<style lang="scss">
</style>
