import * as React from "react"
import { Button } from "./button"

export function ModeToggle() {
  const [theme, setThemeState] = React.useState<"light" | "dark">("light")
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    const isDarkMode = document.documentElement.classList.contains("dark")
    setThemeState(isDarkMode ? "dark" : "light")
  }, [])

  React.useEffect(() => {
    if (!mounted) return
    const isDark = theme === "dark"
    document.documentElement.classList[isDark ? "add" : "remove"]("dark")
  }, [theme, mounted])

  const toggleTheme = () => {
    setThemeState((prevTheme: string) => prevTheme === "light" ? "dark" : "light")
  }

  if (!mounted) return null

  return (
    <Button
      variant="ghost"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <div className=" font-medium text-muted-foreground">dark</div>
      ) : (
        <div className=" font-medium text-muted-foreground">light</div>
      )}
    </Button>
  )
}