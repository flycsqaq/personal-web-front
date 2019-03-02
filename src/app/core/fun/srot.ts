import { Subject } from '../../../../node_modules/rxjs';

export function sort_by(arr: Object[], sort_name: string): any {
  return arr.sort((left, right) => {
    const lc = left[sort_name]
    const rc = right[sort_name]
    if (lc < rc) {
      return -1
    }
    if (lc > rc) {
      return 1
    }
    return 0
  })
}export function reverse_by(arr: Object[], sort_name: string): any {
  return arr.sort((left, right) => {
    const lc = left[sort_name]
    const rc = right[sort_name]
    if (lc < rc) {
      return 1
    }
    if (lc > rc) {
      return -1
    }
    return 0
  })
}
export function setOneStream(sub: any, obj: any, payload: any, fun: any = false): any {
  console.log(obj)
  return sub.subscribe(res => {
    obj[payload] = res
      if (fun) {
        fun()
      }
    }, 
    error => console.log(error)
  )
}