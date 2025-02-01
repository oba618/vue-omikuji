import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import FortuneHeader from '../FortuneHeader.vue'
import FortuneMain from '../FortuneMain.vue'
import FortuneFooter from '../FortuneFooter.vue'

describe('FortuneHeader', () => {
  it('renders text', () => {
    const header = mount(FortuneHeader)
    expect(header.text()).toContain('vue-omikuji')
  })
})

describe('FortuneMain', () => {
  it('renders text', () => {
    const header = mount(FortuneMain)
    expect(header.text()).toContain('ボタンをクリックしてください')
  })
})

describe('FortuneFooter', () => {
  it('renders text', () => {
    const header = mount(FortuneFooter)
    expect(header.text()).toContain('since 2025')
  })
})
