import * as React from "react"

export const useToggle = (initialState) => {
  const [isToggled, setIsToggled] = React.useState(initialState)

  const toggle = React.useCallback(
    () => setIsToggled((state) => !state),
    [setIsToggled]
  )

  return [isToggled, toggle]
}
