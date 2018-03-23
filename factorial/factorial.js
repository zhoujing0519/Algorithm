/**
 * 阶乘
 * @param {Number} num [多少阶]
 * @return {Number}
 */
function factorial(num){
  if(num <= 1) return 1
  // return num * factorial(num - 1) // 本函数的执行与函数名factorial紧紧的耦合在一起，为了消除这种耦合关系，可以像下面这样使用arguments.callee
  return num * arguments.callee(num - 1) // 知识点：callee是一个指针，指向拥有这个arguments的函数
}