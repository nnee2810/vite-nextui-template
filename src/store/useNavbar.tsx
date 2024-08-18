import { create } from "zustand"

interface NavbarState {
  expandedPaths: Set<string>
  updatedAt?: number

  addExpandedPath(path: string): void

  removeExpandedPath(path: string): void

  removeExpandedPaths(paths: string[]): void

  clearExpandedPaths(): void
}

export const useNavbar = create<NavbarState>((set, getState) => ({
  expandedPaths: new Set<string>(),
  addExpandedPath(path) {
    set({
      expandedPaths: getState().expandedPaths.add(path),
      updatedAt: new Date().getTime(),
    })
  },
  removeExpandedPath(path) {
    const expandedPaths = getState().expandedPaths
    expandedPaths.delete(path)
    set({
      expandedPaths,
      updatedAt: new Date().getTime(),
    })
  },
  removeExpandedPaths(paths: string[]) {
    const expandedPaths = getState().expandedPaths
    for (const path of paths) {
      expandedPaths.delete(path)
    }
    set({
      expandedPaths,
      updatedAt: new Date().getTime(),
    })
  },
  clearExpandedPaths() {
    const expandedPaths = getState().expandedPaths
    expandedPaths.clear()
    set({
      expandedPaths,
      updatedAt: new Date().getTime(),
    })
  },
}))
