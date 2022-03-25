/*
 * @Author       : zhucaiyun1@xdf.cn
 * @Date         : 2022-03-25 17:56:49
 * @LastEditors  : zhucaiyun1@xdf.cn
 * @LastEditTime : 2022-03-25 18:25:17
 * @Description  : 描述信息
 */
var a = [
  { id: 1, name: 'moon', age: 1000 },
  { id: 2, name: 'spring', age: 1000 },
  { id:3,name: 'autumn', age: 2000 }
]
// console.log(a.find(item => item.age === 1000)) // {id:1,name:'moon',age:1000} // 找到一个就不找了

const url = 'http://localhost:8886/tcscreen/monday/webviewpad/?name=1&id=2 '
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
//   search: '',
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
  search.split('&').reduce(rs, item => { 
    const [s,v] = item.split('=').map(item => { 
      return decodeURIComponent(item)
    })
    rs[s] = v
    return rs
  })
}
console.log(formatParams(searchParams))