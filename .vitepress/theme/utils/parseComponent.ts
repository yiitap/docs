import { parse } from 'vue-docgen-api'

export async function getComponentMeta(componentPath: string) {
  return parse(componentPath)
}