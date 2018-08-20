const message = {}

// 消息处理器
let _dealers = {}

/**
 * 添加消息处理器
 * @param name 监听的消息名称
 * @param dealer 消息触发后的处理方法
 */
message.addDealer = (name, dealer) => {
  if(!name || !dealer) {
    return
  }

  if(typeof name !== 'string') {
    return
  }

  if(typeof dealer !== 'function') {
    return
  }

  let _nameDealers = _dealers[name]
  if(_nameDealers) {
    _nameDealers.push(dealer)
  } else {
    _dealers[name] = [dealer]
  }

}

/**
 * 发送广播信息
 * @param name 消息名称
 * @param data 消息内容
 */
message.send = (name, data) => {
  if(!name) {
    return;
  }

  if(typeof name !== 'string') {
    return;
  }

  let _nameDealers = _dealers[name]
  if(!_nameDealers) {
    return
  }
  for(let _dealer of _nameDealers) {
    _dealer(data)
  }
}

export { message }