import { ModeToggle } from './ModeToggle'

export function TopNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="flex items-center justify-between px-6 py-4">
          <div></div>
            <ModeToggle />
      </div>
    </nav>
  )
}
