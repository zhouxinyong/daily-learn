export class Singleton {
  name: string

  constructor (name: string) {
    this.name = name
  }

  getName = () => {
    return this.name
  }

  static getInstance = (() => {
    let instance: Singleton | null = null
    return (name:string) => {
      if (!instance) {
        instance = new Singleton(name)
      }
      return instance
    }
   
  })()
}
export default Singleton


