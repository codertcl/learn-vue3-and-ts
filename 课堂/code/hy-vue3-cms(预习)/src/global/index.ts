import { App } from 'vue'
import setupFilters from './filters'

export function setupGlobalProperties(app: App) {
  setupFilters(app)
}
