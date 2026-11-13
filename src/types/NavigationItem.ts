import type { ComponentType } from "react"

export interface NavigationItem {
  sortOrder: number
  label: string
  link: `/${string}`
  component: ComponentType
  className: string
}