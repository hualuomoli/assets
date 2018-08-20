const env = {}

let _debug = false

env.setDebug = (b) => {
  if(!b) {
    return
  }
  if(typeof b !== 'boolean') {
    return
  }
  _debug = b
}

env.isDebug = () => {
  return _debug
}

export { env }
export default env