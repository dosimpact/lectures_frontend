export type ICoordinates = { longitude: number }
export type ILocation = { country: string, coords: ICoordinates }
export type IPerson  = { name: string, location: ILocation }

let person: IPerson
let longitude = person?.location?.coords?.longitude ?? 0 // 널 병합 연산자를 사용하여 기본 값 0을 설정합니다
console.log(longitude) // 0
