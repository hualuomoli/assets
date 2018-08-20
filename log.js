const log = {}

const Level = {
  ALL: 0, 
  DEBUG: 10,
  LOG: 20,
  INFO: 30,
  WARN: 40,
  ERROR: 50,
  OFF: 9999
}

// 默认日志级别为关闭
let _level = Level.OFF

/**
 * 是否允许debug输出
 * return 允许debug输出返回true,否则返回false
 */
log.isDebugEnable = () => {
  return _level >= Level.DEBUG
}

/**
 * debug输出信息
 * @param args 输出参数
 */
log.debug = (...args) => {
  if (_level < Level.DEBUG) {
    return
  }
  console.log.apply(null, args)
}

/**
 * 是否允许log输出
 * return 允许log输出返回true,否则返回false
 */
log.isLogEnable = () => {
  return _level >= Level.LOG
}

/**
 * log输出信息
 * @param args 输出参数
 */
log.log = (...args) => {
  if (_level < Level.LOG) {
    return
  }
  console.log.apply(null, args)
}

/**
 * 是否允许info输出
 * return 允许info输出返回true,否则返回false
 */
log.isInfoEnable = () => {
  return _level >= Level.INFO
}

/**
 * info输出信息
 * @param message 输出消息内容
 * @param args 输出参数
 */
log.info = (message, ...args) => {
  if(_level < Level.INFO) {
    return
  }
  console.log.apply(null, ['%c' +  message, 'color:#7dc5fb', ...args])
}

/**
 * 是否允许warn输出
 * return 允许warn输出返回true,否则返回false
 */
log.isWarnEnable = () => {
  return _level >= Level.WARN
}

/**
 * warn输出信息
 * @param message 输出消息内容
 * @param args 输出参数
 */
log.warn = (...args) => {
  if(_level < Level.WARN) {
    return
  }
  console.log.apply(null, ['%c' +  message, 'color:#eaea65f5', ...args])
}

/**
 * 是否允许error输出
 * return 允许error输出返回true,否则返回false
 */
log.isErrorEnable = () => {
  return _level >= Level.ERROR
}

log.error = (...args) => {
  if(_level < Level.ERROR) {
    return
  }
  console.log.apply(null, ['%c' +  message, 'color:#f13737', ...args])
}

/**
 * 设置日志级别
 * @param level 日志级别
 */
log.setLevel = (level) => {
  if(!level) {
    return
  }
  if (typeof level !== 'number') {
    return
  }
  _level = level
}

export { log, Level }
export default log
