class LocalCache {
  setCache(key: string, value: any) {
    localStorage.setItem(key, value)
  }

  getCache(key: string): string | null {
    return localStorage.getItem(key)
  }
}

export default new LocalCache()
