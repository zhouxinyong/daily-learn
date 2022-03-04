import React from 'react'
import { Singleton } from './index'

export default () => {
  const a = Singleton.getInstance('a')
  const b = Singleton.getInstance('b')

  console.log(a === b)
  return <div>打开控制台查看输出</div>
}