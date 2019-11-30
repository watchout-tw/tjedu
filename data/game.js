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
        msg: '你是小珍，是一位高中生，使用「我的國app」累積了非常高的信用分數，而得到了加入童軍社的機會。在這個年代，加入童軍社，經過受訓之後成為幹部，幾乎就等於取得大學第一志願的門票。'
      },
      {
        type: 'L_MSG',
        msg: '現在你因為要參加童軍社受訓，需要得到父母的同意。'
      }
    ],
    nextTo: 'SELECT',
    selects: [
      {
        type: 'START',
        link: ['CHARACTER_A', 'step1'],
        msg: '>>>>>> 開始遊戲 <<<<<<'
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
        type: 'L_MSG',
        msg: '不是跟你說，一定要接媽媽的電話'
      },
      {
        type: 'L_MSG',
        msg: '沒接電話，媽會擔心！！！'
      },
      {
        type: 'R_MSG_WITH_AVATAR',
        msg: '沒有啦，剛剛學姊來找我聊天，我在學校很忙'
      },
      {
        type: 'R_MSG',
        msg: '對了，媽你要記得簽同意書喔，剛剛學姊又來催我要交'
      },
      {
        type: 'L_MSG_WITH_AVATAR',
        msg: '什麼同意書？'
      },
      {
        type: 'R_MSG',
        msg: '就上次跟你說的童軍社要受訓，你要簽同意書啦'
      },
      {
        type: 'L_MSG_WITH_AVATAR',
        msg: '跟你說過多少次了，加入社團很危險，你怎麼還去？'
      },
      {
        type: 'R_MSG_WITH_AVATAR',
        msg: '加入社團，到底哪裡危險了？'
      },
      {
        type: 'R_MSG',
        msg: '媽～我好不容易才可以加入童軍社，沒去受訓會被扣分啦！'
      },
      {
        type: 'L_MSG_WITH_AVATAR',
        msg: '不准去就是不准去！好好讀書就好'
      },
      {
        type: 'L_MSG',
        msg: '這個政府在每個地方都會監控人，你就算什麼都沒做，萬一在社團被別人陷害告密，你可能就會被關，一輩子就毀了！'
      },
      {
        type: 'SYS_ALERT',
        msg: `
        <i class="fas fa-2x fa-exclamation-triangle"></i><br/>
        「對話涉及敏感議題，違反國家政策！你的信用分數從1950下降為410！」`
      }
    ],
    nextTo: 'SELECT',
    selects: [
      {
        type: 'SCRIPT',
        link: ['CHARACTER_A', 'a1'],
        msg: '驚慌'
      },
      {
        type: 'SCRIPT',
        link: ['CHARACTER_A', 'a2'],
        msg: '說理'
      },
      {
        type: 'SCRIPT',
        link: ['CHARACTER_A', 'a3'],
        msg: '生氣反駁'
      }
    ]
  }
}
