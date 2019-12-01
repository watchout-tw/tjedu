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
        msg: '>> 開始遊戲 <<'
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
        對話涉及敏感議題，違反國家政策！<br/>
        你的信用分數從1950下降為410！`
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
  },
  a1: {
    script: [
      {
        type: 'R_MSG',
        msg: '媽你亂說什麼？'
      },
      {
        type: 'R_MSG',
        msg: '我的信用分數怎麼會突然下降那麼多'
      },
      {
        type: 'L_MSG_WITH_AVATAR',
        msg: '...'
      },
      {
        type: 'L_MSG',
        msg: '就跟你說這個政府一直在監控每個人，包含我們的對話，這個政府就是這樣在侵害我們的自由'
      },
      {
        type: 'R_MSG',
        msg: '怎麼可能有這種事..'
      },
      {
        type: 'R_MSG',
        msg: '學姊明明跟我說加入童軍社，是幫國家做事，是做對的事情...'
      },
      {
        type: 'L_MSG_WITH_AVATAR',
        msg: '別相信什麼學姊，她說不定就是政府派來監視你們社團的'
      },
      {
        type: 'R_MSG',
        msg: '我上次看到學姊在翻其他同學的書包，難道就是在監視我們嗎...'
      },
      {
        type: 'SYS_ALERT',
        msg: `
        <i class="fas fa-2x fa-exclamation-triangle"></i><br/>
        對話涉及敏感議題，違反國家政策！<br/>
        你的信用分數從410下降為125！`
      },
      {
        type: 'R_MSG',
        msg: '天阿，我的信用分數又下降了...'
      },
      {
        type: 'L_MSG_WITH_AVATAR',
        msg: '別管什麼信用分數了，今天下課後趕快回家吧，不要去什麼童軍社了'
      },
      {
        type: 'R_MSG',
        msg: '但是其他人都有去，現在不去會被其他同學笑啦...'
      },
      {
        type: 'R_MSG',
        msg: '不准去就是不准去，難道你想跟媽一樣被關12年嗎'
      }
    ],
    nextTo: 'SELECT',
    selects: [
      {
        type: 'SCRIPT',
        link: ['CHARACTER_A', 'b1'],
        msg: '太可怕了，不要再聽下去了，信用分數會被扣光！'
      },
      {
        type: 'SCRIPT',
        link: ['CHARACTER_A', 'b2'],
        msg: '好奇媽媽當年發生了什麼事'
      }
    ]
  },
  a2: {
    script: [
      {
        type: 'R_MSG',
        msg: '媽你亂說什麼？'
      },
      {
        type: 'R_MSG',
        msg: '我的信用分數怎麼會突然下降那麼多'
      },
      {
        type: 'L_MSG_WITH_AVATAR',
        msg: '...'
      },
      {
        type: 'L_MSG',
        msg: '就跟你說這個政府一直在監控每個人，包含我們的對話，這個政府就是這樣在侵害我們的自由'
      },
      {
        type: 'R_MSG',
        msg: '只要我們沒有做壞事，就不用怕被監控啊'
      },
      {
        type: 'R_MSG',
        msg: '媽，我一定要去童軍社啦，學姊說只要當上幹部，很有機會考上好大學耶'
      },
      {
        type: 'L_MSG_WITH_AVATAR',
        msg: '考上好大學，有比生命重要嗎'
      },
      {
        type: 'L_MSG',
        msg: '媽只希望你平平安安長大...'
      },
      {
        type: 'R_MSG',
        msg: '其他人都可以去，為什麼我不能去？不管啦，我一定要去'
      },
      {
        type: 'R_MSG',
        msg: '不准去就是不准去，難道你想跟媽一樣被關12年嗎'
      }
    ],
    nextTo: 'SELECT',
    selects: [
      {
        type: 'SCRIPT',
        link: ['CHARACTER_A', 'b1'],
        msg: '太可怕了，不要再聽下去了，信用分數會被扣光！'
      },
      {
        type: 'SCRIPT',
        link: ['CHARACTER_A', 'b2'],
        msg: '好奇媽媽當年發生了什麼事'
      }
    ]
  },
  a3: {
    script: [
      {
        type: 'R_MSG',
        msg: '媽你亂說什麼？'
      },
      {
        type: 'R_MSG',
        msg: '我的信用分數怎麼會突然下降那麼多'
      },
      {
        type: 'L_MSG_WITH_AVATAR',
        msg: '...'
      },
      {
        type: 'L_MSG',
        msg: '就跟你說這個政府一直在監控每個人，包含我們的對話，這個政府就是這樣在侵害我們的自由'
      },
      {
        type: 'R_MSG',
        msg: '學姊說監控是為了國家社會安定，才不是要侵害自由'
      },
      {
        type: 'R_MSG',
        msg: '媽你不要再亂講話了，不要再害我下降信用分數了'
      },
      {
        type: 'SYS_GOOD',
        msg: `
        <i class="fas fa-2x fa-smile-beam"></i><br/>
        協助宣傳國家政策！<br/>
        你的信用分數從410上升為520！`
      },
      {
        type: 'L_MSG_WITH_AVATAR',
        msg: '...'
      },
      {
        type: 'L_MSG',
        msg: '媽只是想要你平平安安長大'
      },
      {
        type: 'L_MSG',
        msg: '拜託你相信媽，不要去參加社團好不好'
      },
      {
        type: 'R_MSG',
        msg: '現在不去會被其他同學笑死啦！'
      },
      {
        type: 'R_MSG',
        msg: '算了，不跟你講了'
      },
      {
        type: 'R_MSG',
        msg: '就算你不簽同意書，我還是會去受訓！'
      },
      {
        type: 'L_MSG_WITH_AVATAR',
        msg: '你為什麼都不聽話，難道你想跟媽一樣被關12年嗎'
      }
    ],
    nextTo: 'SELECT',
    selects: [
      {
        type: 'SCRIPT',
        link: ['CHARACTER_A', 'b1'],
        msg: '太可怕了，不要再聽下去了，信用分數會被扣光！'
      },
      {
        type: 'SCRIPT',
        link: ['CHARACTER_A', 'b2'],
        msg: '好奇媽媽當年發生了什麼事'
      }
    ]
  },
  b1: {
    script: [
      {
        type: 'R_MSG',
        msg: '什麼？媽你被關過'
      },
      {
        type: 'R_MSG',
        msg: '你不要再講了，不要再害我被扣分了'
      },
      {
        type: 'L_MSG_WITH_AVATAR',
        msg: '媽真的只是為了你好，等你今天晚上回家，再跟你說清楚以前發生的事好嗎'
      },
      {
        type: 'R_MSG',
        msg: '媽你不要再講奇怪的話了，我不想聽了'
      }
    ],
    nextTo: 'END',
    end: {
      msg: `
      那天，你關上手機，儘管媽媽打了很多通電話，但你都沒有回電。<br/><br/>
      每次媽媽要跟你說起過去的故事，你都生氣或是逃避。<br/><br/>
      漸漸的，你和媽媽不再對話。<br/><br/>
      很多很多年以後，偶然間你看到了這段影片，才知道那段屬於媽媽的故事。<br/><br/>
      屬於火燒島的流麻溝，女思想犯的故事。
      `,
      goto: {
        title: '>> 看這段媽媽的故事 <<',
        youtube: '6EyW9XFPmcM'
      }
    }
  },
  b2: {
    script: [
      {
        type: 'R_MSG',
        msg: '媽以前你怎麼都沒說被關的事？'
      },
      {
        type: 'R_MSG',
        msg: '你怎麼會被關的？'
      },
      {
        type: 'L_MSG_WITH_AVATAR',
        msg: '以前不告訴你，是怕你知道太多，也會有危險'
      },
      {
        type: 'R_MSG',
        msg: '怎麼會有這種事情發生在你身上？'
      },
      {
        type: 'R_MSG',
        msg: '媽，我想知道你以前的事'
      },
      {
        type: 'L_MSG_WITH_AVATAR',
        msg: '媽也一直想告訴你'
      },
      {
        type: 'L_MSG',
        msg: '用手機講不安全，今天下課趕快回家，媽再告訴你'
      },
      {
        type: 'L_MSG',
        msg: '媽不是故意那麼兇的不讓你社團'
      },
      {
        type: 'L_MSG',
        msg: '媽真的只是為了你好'
      },
      {
        type: 'R_MSG',
        msg: '媽，我知道！'
      },
      {
        type: 'R_MSG',
        msg: '今天回家，你一定要告訴我喔！'
      }
    ],
    nextTo: 'END',
    end: {
      msg: `
      你關上手機。<br/><br/>
      你也拒絕了學姊加入童軍社。<br/><br/>
      回家後，才終於聽媽媽說起那段故事，屬於火燒島的流麻溝，女思想犯的故事。
      `,
      goto: {
        title: '>> 聽媽媽說故事 <<',
        youtube: '6EyW9XFPmcM'
      }
    }
  }
}
