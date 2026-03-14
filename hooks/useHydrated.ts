"use client"

import { useEffect, useState } from "react"

// Prevents mismatch between the server components and the data in localStorage by delaying rendering Zustand values

export function useHydrated() {
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setHydrated(true)
  }, [])

  return hydrated
}