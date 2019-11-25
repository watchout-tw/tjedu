import marked from 'marked'
const sanitizer = require('sanitize-html')
const minSanitizationOptions = {
  allowedTags: false,
  allowedAttributes: false,
  transformTags: {
    'a': sanitizer.simpleTransform('a', { target: '_blank' })
  }
}
const sansHTMLSanitizationOptions = {
  allowedTags: [],
  allowedAttributes: {}
}
export function markdown(str, removeHTMLFirst = false) {
  let result = ''
  if(typeof str === 'string') {
    str = str.trim()
    if(removeHTMLFirst) {
      str = sanitizer(str, sansHTMLSanitizationOptions)
    }
    result = sanitizer(marked(str), minSanitizationOptions)
  }
  result = result.replace(/\r?\n|\r/g, '')
  return result
}

export const PUNCT = {
  IDEOSPACE: '　',
  COMMA: '，',
  FSTOP: '。',
  PAUSE: '、',
  COLON: '：',
  SEMICOL: '；',
  EXCLA: '！',
  Q: '？',
  ELLIP: '⋯',
  SLASH: '／',
  DOT: '･',
  L: {
    PAR: '（',
    DBRAC: '《',
    SBRAC: '〈',
    QUOTE: '「',
    FBRAC: '【', // 隅付き括弧 (sumitsuki-kakko) OR ink-filled bracket OR lenticular bracket
    ARR: '←',
    ARRSTOP: '⇤'
  },
  R: {
    PAR: '）',
    DBRAC: '》',
    SBRAC: '〉',
    QUOTE: '」',
    FBRAC: '】',
    ARR: '→',
    ARRSTOP: '⇥'
  }
}

export const DIGITS = {
  CIRCLED: ['⓪', '①', '②', '③', '④', '⑤', '⑥', '⑦', '⑧', '⑨', '⑩']
}

export function spacingOptimizer(text) {
  let punctGroups = [
    {
      label: 'thin',
      list: [PUNCT.COMMA, PUNCT.FSTOP, PUNCT.PAUSE, PUNCT.COLON, PUNCT.SEMICOL, PUNCT.EXCLA]
    },
    {
      label: 'thick',
      list: [PUNCT.Q, PUNCT.SLASH]
    },
    {
      label: 'left',
      list: [PUNCT.L.PAR, PUNCT.L.DBRAC, PUNCT.L.SBRAC, PUNCT.L.QUOTE, PUNCT.L.FBRAC]
    },
    {
      label: 'right',
      list: [PUNCT.R.PAR, PUNCT.R.DBRAC, PUNCT.R.SBRAC, PUNCT.R.QUOTE, PUNCT.R.FBRAC]
    }
  ]
  let html = ''
  // NOTE: slower & better structured HTML
  let allPunct = [].concat(...punctGroups.map(g => g.list))
  let regExpAllPunct = new RegExp(`([${allPunct.join('')}])`, 'g')
  if(text) {
    html = text.split(regExpAllPunct).map(span => {
      let result = `<span>${span}</span>`
      for(let j = 0; j < punctGroups.length; j++) {
        let punctGroup = punctGroups[j]
        let regExp = new RegExp(`([${punctGroup.list.join('')}])`, 'g')
        if(regExp.test(span)) {
          result = `<span class="full-width-punct ${punctGroup.label}-punct">${span}</span>`
          break
        }
      }
      return result
    }).join('')
  }
  return html
}

export function generateMeta(baseURL, pageTitle, pageDescription, image) {
  let meta = [
    {
      hid: 'description',
      name: 'description',
      content: pageDescription
    },
    {
      vmid: 'og-type',
      name: 'og:type',
      property: 'og:type',
      content: 'website'
    },
    {
      vmid: 'og-title',
      name: 'og:title',
      property: 'og:title',
      content: pageTitle
    },
    {
      vmid: 'og-description',
      name: 'og:description',
      property: 'og:description',
      content: pageDescription
    },
    {
      vmid: 'twitter-title',
      name: 'twitter:title',
      property: 'twitter:title',
      content: pageTitle
    },
    {
      vmid: 'twitter-description',
      name: 'twitter:description',
      property: 'twitter:description',
      content: pageDescription
    }
  ]
  if(image) {
    meta.push({
      vmid: 'og-image',
      name: 'og:image',
      property: 'og:image',
      content: image
    },
    {
      vmid: 'twitter-card',
      name: 'twitter:card',
      property: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      vmid: 'twitter-image',
      name: 'twitter:image',
      property: 'twitter:image',
      content: image
    })
  }
  return meta
}
