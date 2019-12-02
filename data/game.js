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
        type: 'L_MSG_WITH_AVATAR',
        msg: '故事內容會因為你選項而有所不同，你準備好進入這個世界了嗎？'
      },
      {
        type: 'L_MSG_WITH_AVATAR',
        msg: '你是小珍，上高中後學校要求所有人都要使用「我的國app」，只要在日常生活中遵守國家政策，信用分數就會增加。'
      },
      {
        type: 'L_MSG_WITH_AVATAR',
        msg: '你累積了非常高的信用分數，而得到了加入童軍社的機會。在這個年代，加入童軍社，經過幹部訓練之後擔任幹部，幾乎就等於取得大學第一志願的門票。'
      },
      {
        type: 'L_MSG_WITH_AVATAR',
        msg: '現在你因為要參加童軍社幹部訓練，需要得到父母的同意。然而，一向要求你只要好好讀書的媽媽，究竟會不會同意呢？'
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
        type: 'R_MSG',
        msg: '媽～我想參加童軍社的幹部訓練，你幫我簽一下同意書～'
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
        msg: `<div style="text-align: center;"><i class="fas fa-2x fa-phone"></i></div>
              <div>未接來電</div>`
      },
      {
        type: 'L_MSG_WITH_AVATAR',
        msg: '跟你說過多少次了，一定要接電話'
      },
      {
        type: 'L_MSG_WITH_AVATAR',
        msg: '不要讓媽擔心！'
      },
      {
        type: 'R_MSG',
        msg: '沒有啦，剛剛在忙'
      },
      {
        type: 'R_MSG',
        msg: '媽幫我簽同意書啦～剛剛學姊又來催我了'
      },
      {
        type: 'L_MSG_WITH_AVATAR',
        msg: '我什麼時候說你可以參加社團了？社團很危險。'
      },
      {
        type: 'R_MSG',
        msg: '社團到底哪裡危險？而且我參加的是童軍社欸，一定很安全！'
      },
      {
        type: 'R_MSG',
        msg: '我好不容易才可以加入童軍社，沒去幹部訓練等於放棄第一志願！'
      },
      {
        type: 'L_MSG_WITH_AVATAR',
        msg: '不准去就是不准去！你好好讀書也可以上第一志願！'
      },
      {
        type: 'L_MSG_WITH_AVATAR',
        msg: '媽跟你說，政府隨時都在監控人，就算是學校社團也一樣。'
      },
      {
        type: 'L_MSG_WITH_AVATAR',
        msg: '就算你什麼都沒做，萬一在社團被別人陷害告密，別說是第一志願了，你一輩子就毀了！'
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
        msg: '媽 你在說什麼？'
      },
      {
        type: 'R_MSG',
        msg: '我的信用分數怎麼突然降那麼多！'
      },
      {
        type: 'L_MSG_WITH_AVATAR',
        msg: '就跟你說政府一直在監控，一定連我們的對話都監控。政府就是這樣在侵害我們的自由！'
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
        msg: '但是不去的話，第一志願就......'
      },
      {
        type: 'L_MSG_WITH_AVATAR',
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
        msg: '想知道媽媽以前發生了什麼事'
      }
    ]
  },
  a2: {
    script: [
      {
        type: 'R_MSG',
        msg: '媽 你在說什麼？'
      },
      {
        type: 'R_MSG',
        msg: '我的信用分數怎麼突然降那麼多！'
      },
      {
        type: 'L_MSG_WITH_AVATAR',
        msg: '就跟你說政府一直在監控，一定連我們的對話都監控。政府就是這樣在侵害我們的自由！'
      },
      {
        type: 'R_MSG',
        msg: '我們又沒做錯事，幹嘛怕監控'
      },
      {
        type: 'R_MSG',
        msg: '我要去幹部訓練啦，學姊也說只要當上幹部，第一志願不是問題'
      },
      {
        type: 'L_MSG_WITH_AVATAR',
        msg: '第一志願比較重要，還是你的命比較重要'
      },
      {
        type: 'R_MSG',
        msg: '你想太多了'
      },
      {
        type: 'L_MSG_WITH_AVATAR',
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
        msg: '想知道媽媽以前發生了什麼事'
      }
    ]
  },
  a3: {
    script: [
      {
        type: 'R_MSG',
        msg: '媽 你在說什麼？'
      },
      {
        type: 'R_MSG',
        msg: '我的信用分數怎麼突然降那麼多！'
      },
      {
        type: 'L_MSG_WITH_AVATAR',
        msg: '...'
      },
      {
        type: 'L_MSG_WITH_AVATAR',
        msg: '就跟你說政府一直在監控，一定連我們的對話都監控。政府就是這樣在侵害我們的自由！'
      },
      {
        type: 'R_MSG',
        msg: '學姊說監控是為了維護國家社會安定，才不是侵害自由'
      },
      {
        type: 'R_MSG',
        msg: '你不要再講了，不要再害我信用分數下降了'
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
        msg: '政府才不是你想的那樣'
      },
      {
        type: 'L_MSG_WITH_AVATAR',
        msg: '我不准你去是為你好'
      },
      {
        type: 'L_MSG_WITH_AVATAR',
        msg: '我再說一次，不准去社團'
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
        msg: '就算你不幫我簽同意書，我還是會去幹部訓練！'
      },
      {
        type: 'L_MSG_WITH_AVATAR',
        msg: '你難道你想跟媽一樣，因為社團被關12年嗎'
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
        msg: '想知道媽媽以前發生了什麼事'
      }
    ]
  },
  b1: {
    script: [
      {
        type: 'R_MSG',
        msg: '被關？怎麼可能'
      },
      {
        type: 'R_MSG',
        msg: '你不要再講了，我不想被扣分了'
      },
      {
        type: 'L_MSG_WITH_AVATAR',
        msg: '我在你出生前就因為參加社團被關了12年'
      },
      {
        type: 'R_MSG',
        msg: '你不要再講，我不想聽'
      }
    ],
    nextTo: 'SELECT',
    selects: [
      {
        type: 'END',
        link: ['CHARACTER_A', 'end1'],
        msg: '結束通話'
      }
    ]
  },
  b2: {
    script: [
      {
        type: 'R_MSG',
        msg: '被關？怎麼回事？'
      },
      {
        type: 'L_MSG_WITH_AVATAR',
        msg: '你出生前，我因為參加社團被關了12年'
      },
      {
        type: 'R_MSG',
        msg: '怎麼沒聽你說過？'
      },
      {
        type: 'L_MSG_WITH_AVATAR',
        msg: '怕政府找你麻煩'
      },
      {
        type: 'R_MSG',
        msg: '到底是怎麼回事？'
      },
      {
        type: 'L_MSG_WITH_AVATAR',
        msg: '晚上回來再說吧'
      }
    ],
    nextTo: 'SELECT',
    selects: [
      {
        type: 'END',
        link: ['CHARACTER_A', 'end2'],
        msg: '結束通話'
      }
    ]
  },
  end1: {
    msg: `
    那天，你關上手機，儘管媽媽打了很多通電話，但你都沒有回電。<br/><br/>
    每次媽媽要跟你說起過去的故事，你都生氣或是逃避。<br/><br/>
    漸漸的，你和媽媽不再對話。<br/><br/>
    很多很多年以後，偶然間你看到了這段影片，才知道那段屬於媽媽的故事。<br/><br/>
    屬於火燒島的流麻溝，女思想犯的故事。
    `,
    goto: {
      title: '>> 看這段媽媽的故事 <<',
      youtube: 'pRzHEPzx-1I?t=693'
    }
  },
  end2: {
    msg: `
    你盯著手機，看了好一陣子。<br/><br/>
    隨後傳了訊息給學姊，說你不去幹部訓練了。隨後收了書包回家。<br/><br/>
    這天晚上，才終於聽媽媽說起那段故事，屬於火燒島的流麻溝，女思想犯的故事。
    `,
    goto: {
      title: '>> 聽媽媽說故事 <<',
      youtube: 'pRzHEPzx-1I?t=693'
    }
  }
}
