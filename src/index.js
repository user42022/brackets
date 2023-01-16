module.exports = function check(str, bracketsConfig) {
    // your solution
      const strReduce = (str)=> {
          let resStr=str
          for (let pair of bracketsConfig) {
              let regexp = new RegExp (pair.map((e,i,arr)=>e=(arr[i]==='|'||arr[i]==='('||arr[i]===')'||arr[i]==='['||arr[i]===']'||arr[i]==='{'||arr[i]==='}')?'\\'+arr[i]:arr[i]).join(''),'g')
  
              resStr=resStr.replace(regexp,'');
          }
      return resStr===str?resStr:strReduce(resStr)
      }
  return !strReduce(str).length
  }
