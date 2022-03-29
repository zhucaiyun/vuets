/*
 * @Author       : zhucaiyun1@xdf.cn
 * @Date         : 2022-03-25 17:56:49
 * @LastEditors  : zhucaiyun1@xdf.cn
 * @LastEditTime : 2022-03-29 15:45:44
 * @Description  : 描述信息
 */
var a = [
  { id: 1, name: 'moon', age: 1000 },
  { id: 2, name: 'spring', age: 1000 },
  { id:3,name: 'autumn', age: 2000 }
]
// console.log(a.find(item => item.age === 1000)) // {id:1,name:'moon',age:1000} // 找到一个就不找了

const url = 'http://localhost:8886/tcscreen/monday/webviewpad/?name=1&id=2&place="find"'
// URL {
//   href: 'http://localhost:8886/tcscreen/monday/webviewpad/',
//   origin: 'http://localhost:8886',
//   protocol: 'http:',
//   username: '',
//   password: '',
//   host: 'localhost:8886',
//   hostname: 'localhost',
//   port: '8886',
//   pathname: '/tcscreen/monday/webviewpad/',
//   search: '',// 使用URLSearchParams
//   searchParams: URLSearchParams {},
//   hash: ''
// }
// console.log(new URL(url))

// URLSearchParams 处理URL的查询字符串
const initUrl = new URL(url)
const searchParams = new URLSearchParams(initUrl.search).toString()
let rs 
// console.log(new URLSearchParams(initUrl.search).toString()) //name=1&id=2
function formatParams(search) { 
  // reduce的用法 1、reduce结果的return和函数中return的值需要区分开来；2、reduce第一个参数是函数，该函数的参数是第一个是结果，第二个是遍历的元素值
  return search.split('&').reduce((rs, item) => { 
    const [s,v] = item.split('=').map(item => { 
      return decodeURIComponent(item)
    })
    rs[s] = v
    return rs
  }, {})
}


// console.log(formatParams(searchParams))
// 获取url参数
var secondRs = {}
function getUrlParams(url) { 
  const initUrl = new URL(url)
  var searchParam = new URLSearchParams(initUrl.search) // 类数组
  // Array.from()方法对一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例
  return Array.from(searchParam.keys()).reduce((secondRs, item) => { 
    secondRs[item] = searchParam.get(item)
    return secondRs
  }, {})
}
// console.log(getUrlParams(url))
// console.log(testUrl(url))

// 使用URLSearchParams.entries()
let wholeRs = {}
function entriesUrlParams(url) { 
  const initUrl = new URL(url)
  const params = new URLSearchParams(initUrl.search)
  console.log(params.entries())
  return Array.from(params.entries()).reduce((wholeRs, item) => {
    console.log(item)
    wholeRs[item[0]] = item[1]
    return wholeRs
  }, {})
}
console.log(entriesUrlParams(url))
