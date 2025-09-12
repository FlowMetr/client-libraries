function sayHello() {
  return _internalHello();
}

function _internalHello() {
  return "Hello, World!";
}

module.exports = { sayHello };
