"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect } from "react"

export default function HomePage() {
  const openPopupWindow = () => {
    const width = 300
    const height = 150

    // Calculate center position
    const left = (screen.width - width) / 2
    const top = (screen.height - height) / 2

    // Open popup window with about:blank
    const popup = window.open(
      "about:blank",
      "PopupWindow",
      `width=${width},height=${height},left=${left},top=${top},resizable=no,scrollbars=no,toolbar=no,menubar=no,location=no,status=no`,
    )

    // Write image content directly to the popup
    if (popup) {
      popup.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Hello World</title>
          <style>
            body { margin: 0; padding: 0; background: white; display: flex; align-items: center; justify-content: center; width: 100vw; height: 100vh; }
            img { width: 100%; height: 100%; object-fit: contain; }
          </style>
        </head>
        <body>
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-I0FEYYPA1kC3KWkE0Ak8TeeG1lJSoI.png" alt="Hello World Dialog Box" />
        </body>
        </html>
      `)
      popup.document.close()
      popup.focus()
    }
  }

  const playErrorSound = () => {
    try {
      const audio = new Audio("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/erro-m7CKrQq7ouZZbJxiEtfyrhynOiPJj7.mp3")
      audio.play().catch((e) => console.log("[v0] Audio play failed:", e))
    } catch (e) {
      console.log("[v0] Audio creation failed:", e)
    }
  }

  const playSkullSound = () => {
    try {
      const audio = new Audio("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/undertale-muffet-laugh-RwcaQFHCMmdh6ww6skseMsXZdaia3n.mp3")
      audio.play().catch((e) => console.log("[v0] Skull audio play failed:", e))
    } catch (e) {
      console.log("[v0] Skull audio creation failed:", e)
    }
  }

  const createBouncingWindows = () => {
    const numWindows = 10 // Increased number of bouncing windows from 5 to 10
    const windows: Window[] = []

    for (let i = 0; i < numWindows; i++) {
      const width = 400
      const height = 200

      // Random starting position
      const left = Math.random() * (screen.width - width)
      const top = Math.random() * (screen.height - height)

      const popup = window.open(
        "about:blank",
        `BouncingWindow${i}`,
        `width=${width},height=${height},left=${left},top=${top},resizable=no,scrollbars=no,toolbar=no,menubar=no,location=no,status=no`,
      )

      if (popup) {
        // Write error dialog content directly to the popup
        popup.document.write(`
          <!DOCTYPE html>
          <html>
          <head>
            <title>RunDLL</title>
            <style>
              body { margin: 0; padding: 0; background: white; display: flex; align-items: center; justify-content: center; width: 100vw; height: 100vh; }
              img { width: 100%; height: 100%; object-fit: contain; }
            </style>
          </head>
          <body>
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tmlYmhwjOv2Pu8b3wRNnuRE3cIT8ss.png" alt="RunDLL Error Dialog" />
          </body>
          </html>
        `)
        popup.document.close()

        windows.push(popup)

        // Add bouncing animation
        let x = left
        let y = top
        let dx = (Math.random() - 0.5) * 10 // Random velocity
        let dy = (Math.random() - 0.5) * 10

        const animate = () => {
          if (popup.closed) return

          x += dx
          y += dy

          // Bounce off screen edges
          if (x <= 0 || x >= screen.width - width) {
            dx = -dx
            playErrorSound()
          }
          if (y <= 0 || y >= screen.height - height) {
            dy = -dy
            playErrorSound()
          }

          // Keep within bounds
          x = Math.max(0, Math.min(screen.width - width, x))
          y = Math.max(0, Math.min(screen.height - height, y))

          try {
            popup.moveTo(x, y)
          } catch (e) {
            // Window might be closed or blocked
            return
          }

          requestAnimationFrame(animate)
        }

        // Start animation after a short delay
        setTimeout(animate, 100)
      }
    }
  }

  const createSkullWindow = () => {
    const width = 200
    const height = 200

    // Random position on screen
    const left = Math.random() * (screen.width - width)
    const top = Math.random() * (screen.height - height)

    const popup = window.open(
      "about:blank",
      `SkullWindow${Date.now()}`,
      `width=${width},height=${height},left=${left},top=${top},resizable=no,scrollbars=no,toolbar=no,menubar=no,location=no,status=no,alwaysRaised=yes`,
    )

    if (popup) {
      // Write skull image content directly to the popup
      popup.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Skull</title>
          <style>
            body { 
              margin: 0; 
              padding: 0; 
              background: transparent; 
              display: flex; 
              align-items: center; 
              justify-content: center; 
              width: 100vw; 
              height: 100vh; 
            }
            img { 
              width: 100%; 
              height: 100%; 
              object-fit: contain; 
            }
          </style>
        </head>
        <body>
          <img src="https://media.tenor.com/M5sja8Npl5cAAAAM/skull-skull-emoji.gif" alt="Skull" />
        </body>
        </html>
      `)
      popup.document.close()
      popup.focus()

      // Play skull sound when window appears
      playSkullSound()

      // Try to keep window on top (limited browser support)
      try {
        popup.focus()
      } catch (e) {
        console.log("[v0] Could not focus skull window:", e)
      }
    }
  }

  const createSingleBouncingWindow = () => {
    const width = 400
    const height = 200

    // Random starting position
    const left = Math.random() * (screen.width - width)
    const top = Math.random() * (screen.height - height)

    const popup = window.open(
      "about:blank",
      `BouncingWindow${Date.now()}`,
      `width=${width},height=${height},left=${left},top=${top},resizable=no,scrollbars=no,toolbar=no,menubar=no,location=no,status=no`,
    )

    if (popup) {
      // Write error dialog content directly to the popup
      popup.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>RunDLL</title>
          <style>
            body { margin: 0; padding: 0; background: white; display: flex; align-items: center; justify-content: center; width: 100vw; height: 100vh; }
            img { width: 100%; height: 100%; object-fit: contain; }
          </style>
        </head>
        <body>
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tmlYmhwjOv2Pu8b3wRNnuRE3cIT8ss.png" alt="RunDLL Error Dialog" />
        </body>
        </html>
      `)
      popup.document.close()

      // Add bouncing animation
      let x = left
      let y = top
      let dx = (Math.random() - 0.5) * 10 // Random velocity
      let dy = (Math.random() - 0.5) * 10

      const animate = () => {
        if (popup.closed) return

        x += dx
        y += dy

        // Bounce off screen edges
        if (x <= 0 || x >= screen.width - width) {
          dx = -dx
          playErrorSound()
        }
        if (y <= 0 || y >= screen.height - height) {
          dy = -dy
          playErrorSound()
        }

        // Keep within bounds
        x = Math.max(0, Math.min(screen.width - width, x))
        y = Math.max(0, Math.min(screen.height - height, y))

        try {
          popup.moveTo(x, y)
        } catch (e) {
          // Window might be closed or blocked
          return
        }

        requestAnimationFrame(animate)
      }

      // Start animation after a short delay
      setTimeout(animate, 100)
    }
  }

  useEffect(() => {
    // Auto-open Hello World dialog
    setTimeout(() => {
      openPopupWindow()
    }, 500)

    // Auto-open bouncing error windows after a delay
    setTimeout(() => {
      createBouncingWindows()
    }, 1500)

    const bouncingInterval = setInterval(() => {
      createSingleBouncingWindow()
    }, 5000)

    const skullInterval = setInterval(() => {
      createSkullWindow()
    }, 3000)

    return () => {
      clearInterval(bouncingInterval)
      clearInterval(skullInterval)
    }
  }, [])

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Dialog Box Demo</CardTitle>
          <CardDescription>Windows will open automatically, or click buttons to open more</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Button onClick={openPopupWindow} size="lg" className="w-full">
            Open Hello World Dialog
          </Button>
          <Button onClick={createBouncingWindows} size="lg" variant="destructive" className="w-full">
            Launch Bouncing Error Windows
          </Button>
          <Button onClick={createSkullWindow} size="lg" variant="outline" className="w-full bg-transparent">
            Summon Skull Window
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
