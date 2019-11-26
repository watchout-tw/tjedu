export const SYSTEM = {
  meta: {
    avatar: 'game/cctv.png',
    background: 'game/start_1.jpg'
  },
  start: {
    script: [
      {
        type: 'L_MSG_WITH_AVATAR',
        msg: '你好，歡迎來到I2R4年，你將展開一段對話去體驗獨裁政權的年代裡，人們會有什麼樣的對話，以及世代思想的差異。'
      },
      {
        type: 'L_MSG',
        msg: '故事內容會因為你選項而有所不同，你準備好進入這個世界了嗎？'
      },
      {
        type: 'L_MSG',
        msg: '你是小珍，是一位國中生，同時也是我的國app的VIP，你因為得到了VIP所以擁有加入童軍社的機會。'
      },
      {
        type: 'L_MSG',
        msg: '現在你因為要參加童軍社受訓，需要經過父母的同意'
      }
    ],
    nextTo: 'SELECT',
    selects: [
      {
        type: 'SCRIPT',
        link: ['CHARACTER_A', 'step1'],
        msg: '>>>>>> 開始冒險 <<<<<<'
      }
    ]
  }
}

export const CHARACTER_A = {
  meta: {
    avatar: 'game/mom_avatar.png',
    background: 'game/mom_bg.jpg'
  },
  step1: {
    script: [
      {
        type: 'L_MSG_WITH_AVATAR',
        msg: `<div style="text-align: center;"><i class="fas fa-2x fa-phone"></i></div>
              <div>未接來電</div>`
      },
      {
        type: 'L_MSG_WITH_AVATAR',
        msg: `<div style="text-align: center;"><i class="fas fa-2x fa-phone"></i></div>
              <div>未接來電</div>`
      },
      {
        type: 'L_MSG_WITH_AVATAR',
        msg: `<div style="text-align: center;"><i class="fas fa-2x fa-phone"></i></div>
              <div>未接來電</div>`
      },
      {
        type: 'L_MSG_WITH_AVATAR',
        msg: '怎麼都不回'
      },
      {
        type: 'R_MSG_WITH_AVATAR',
        msg: '媽媽，你在忙嗎？'
      },
      {
        type: 'L_MSG_WITH_AVATAR',
        msg: '怎麼？你之前為什麼不回我電話？'
      },
      {
        type: 'R_MSG',
        msg: '沒有啊，之前不是跟你講過要翻牆很麻煩，所以很少用你為什麼那麼堅持只用message啊？'
      },
      {
        type: 'L_MSG_WITH_AVATAR',
        msg: '.........'
      },
      {
        type: 'L_MSG',
        msg: '你找我什麼事？'
      },
      {
        type: 'R_MSG',
        msg: '喔～沒有啦，就校外受訓需要你的同意'
      },
      {
        type: 'L_MSG_WITH_AVATAR',
        msg: `什麼受訓？是你之前說的那個童軍社嗎？<br>
              是叫你不要參加，你怎麼還去`
      },
      {
        type: 'R_MSG',
        msg: '你不懂啦，我花了很多力氣才得到加進社團的機會而且如果我不參加校外受訓會被扣分'
      },
      {
        type: 'L_MSG_WITH_AVATAR',
        msg: '就跟你說過不要去'
      }
    ],
    nextTo: 'SELECT',
    selects: [
      {
        type: 'SCRIPT',
        link: ['CHARACTER_A', 'step2-1'],
        msg: '撒嬌'
      },
      {
        type: 'SCRIPT',
        link: ['CHARACTER_A', 'step2-2'],
        msg: '恐嚇'
      },
      {
        type: 'SCRIPT',
        link: ['CHARACTER_A', 'step2-3'],
        msg: '轉移話題'
      },
      {
        type: 'SCRIPT',
        link: ['CHARACTER_A', 'step2-4'],
        msg: '說理'
      },
      {
        type: 'SCRIPT',
        link: ['CHARACTER_A', 'step2-5'],
        msg: '指責'
      }
    ]
  },
  'step2-1': {
    script: [
      {
        type: 'R_MSG',
        msg: '幫我簽啦～～'
      }
    ]
  },
  'step2-2': {
    script: [
      {
        type: 'R_MSG',
        msg: '你不幫我簽我就去XX'
      }
    ]
  },
  'step2-3': {
    script: [
      {
        type: 'R_MSG',
        msg: '你不幫我簽我就去XX'
      }
    ]
  },
  'step2-4': {
    script: [
      {
        type: 'R_MSG',
        msg: '大家都可以去，為什麼我不能去？你小時候也是這樣的阿 / 我們之前也去參加過活動阿'
      },
      {
        type: 'L_MSG_WITH_AVATAR',
        msg: '這又不一樣，我說不行就是不行'
      }
    ]
  },
  'step2-5': {
    script: [
      {
        type: 'R_MSG',
        msg: '你不幫我簽我就去XX'
      }
    ]
  }
}
