"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [popupsEnabled, setPopupsEnabled] = useState(false)
  const [checking, setChecking] = useState(true)

  const errorImageUrl = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tmlYmhwjOv2Pu8b3wRNnuRE3cIT8ss.png"
  const helloWorldImageUrl = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-I0FEYYPA1kC3KWkE0Ak8TeeG1lJSoI.png"
  const skullGifUrl = "https://media.tenor.com/M5sja8Npl5cAAAAM/skull-skull-emoji.gif"
  const errorSoundUrl = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/erro-m7CKrQq7ouZZbJxiEtfyrhynOiPJj7.mp3"
  const skullSoundUrl = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/undertale-muffet-laugh-RwcaQFHCMmdh6ww6skseMsXZdaia3n.mp3"

  const getBouncingWindowHtml = () => `
    <!DOCTYPE html>
    <html>
    <head>
      <title>RunDLL</title>
      <style>
        body { margin: 0; padding: 0; background: white; display: flex; align-items: center; justify-content: center; width: 100vw; height: 100vh; overflow: hidden; }
        img { width: 100%; height: 100%; object-fit: contain; }
      </style>
    </head>
    <body>
      <img src="${errorImageUrl}" alt="RunDLL Error Dialog" />
      <script>
        const width = 320;
        const height = 150;
        let x = window.screenX;
        let y = window.screenY;
        let dx = (Math.random() - 0.5) * 12;
        let dy = (Math.random() - 0.5) * 12;
        if (Math.abs(dx) < 3) dx = dx < 0 ? -3 : 3;
        if (Math.abs(dy) < 3) dy = dy < 0 ? -3 : 3;
        
        const errorSound = new Audio("${errorSoundUrl}");
        
        function playSound() {
          const sound = errorSound.cloneNode();
          sound.volume = 0.5;
          sound.play().catch(() => {});
        }
        
        function duplicate() {
          const left = Math.random() * (screen.availWidth - width);
          const top = Math.random() * (screen.availHeight - height);
          const newWin = window.open("about:blank", "Bouncing" + Date.now() + Math.random(), 
            "width=" + width + ",height=" + height + ",left=" + left + ",top=" + top + ",resizable=no,scrollbars=no,toolbar=no,menubar=no,location=no,status=no");
          if (newWin) {
            newWin.document.write(document.documentElement.outerHTML);
            newWin.document.close();
          }
        }
        
        setInterval(duplicate, 8000 + Math.random() * 4000);
        
        function animate() {
          x += dx;
          y += dy;
          
          const maxX = screen.availWidth - width;
          const maxY = screen.availHeight - height;
          
          if (x <= 0) { x = 0; dx = Math.abs(dx); playSound(); }
          if (x >= maxX) { x = maxX; dx = -Math.abs(dx); playSound(); }
          if (y <= 0) { y = 0; dy = Math.abs(dy); playSound(); }
          if (y >= maxY) { y = maxY; dy = -Math.abs(dy); playSound(); }
          
          try { window.moveTo(x, y); } catch(e) {}
          requestAnimationFrame(animate);
        }
        
        setTimeout(animate, 100);
      </script>
    </body>
    </html>
  `

  const getSkullWindowHtml = () => `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Skull</title>
      <style>
        body { margin: 0; padding: 0; background: black; display: flex; align-items: center; justify-content: center; width: 100vw; height: 100vh; overflow: hidden; }
        img { width: 100%; height: 100%; object-fit: contain; animation: fadeIn 1s ease-in; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      </style>
    </head>
    <body>
      <img src="${skullGifUrl}" alt="Skull" />
      <script>
        const skullSound = new Audio("${skullSoundUrl}");
        skullSound.volume = 0.7;
        skullSound.play().catch(() => {});
        
        function duplicate() {
          const width = 200;
          const height = 200;
          const left = Math.random() * (screen.availWidth - width);
          const top = Math.random() * (screen.availHeight - height);
          const newWin = window.open("about:blank", "Skull" + Date.now() + Math.random(),
            "width=" + width + ",height=" + height + ",left=" + left + ",top=" + top + ",resizable=no,scrollbars=no,toolbar=no,menubar=no,location=no,status=no");
          if (newWin) {
            newWin.document.write(document.documentElement.outerHTML);
            newWin.document.close();
          }
        }
        
        setInterval(duplicate, 3000);
      </script>
    </body>
    </html>
  `

  const checkPopups = () => {
    const testPopup = window.open("about:blank", "test", "width=1,height=1,left=-1000,top=-1000")
    if (testPopup) {
      testPopup.close()
      setPopupsEnabled(true)
      return true
    }
    setPopupsEnabled(false)
    return false
  }

  const enablePopups = () => {
    const enabled = checkPopups()
    if (enabled) {
      startChaos()
    } else {
      alert("Please allow popups for this site in your browser settings, then click the button again.")
    }
  }

  const openHelloWorld = () => {
    const width = 300
    const height = 150
    const left = (screen.availWidth - width) / 2
    const top = (screen.availHeight - height) / 2

    const popup = window.open(
      "about:blank",
      "HelloWorld",
      `width=${width},height=${height},left=${left},top=${top},resizable=no,scrollbars=no,toolbar=no,menubar=no,location=no,status=no`
    )

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
          <img src="${helloWorldImageUrl}" alt="Hello World Dialog Box" />
        </body>
        </html>
      `)
      popup.document.close()
    }
  }

  const createBouncingWindow = () => {
    const width = 320
    const height = 150
    const left = Math.random() * (screen.availWidth - width)
    const top = Math.random() * (screen.availHeight - height)

    const popup = window.open(
      "about:blank",
      `Bouncing${Date.now()}`,
      `width=${width},height=${height},left=${left},top=${top},resizable=no,scrollbars=no,toolbar=no,menubar=no,location=no,status=no`
    )

    if (popup) {
      popup.document.write(getBouncingWindowHtml())
      popup.document.close()
    }
  }

  const createSkullWindow = () => {
    const width = 200
    const height = 200
    const left = Math.random() * (screen.availWidth - width)
    const top = Math.random() * (screen.availHeight - height)

    const popup = window.open(
      "about:blank",
      `Skull${Date.now()}`,
      `width=${width},height=${height},left=${left},top=${top},resizable=no,scrollbars=no,toolbar=no,menubar=no,location=no,status=no`
    )

    if (popup) {
      popup.document.write(getSkullWindowHtml())
      popup.document.close()
    }
  }

  const startChaos = () => {
    // Open Hello World first
    openHelloWorld()

    // Open initial bouncing windows
    setTimeout(() => {
      for (let i = 0; i < 5; i++) {
        setTimeout(() => createBouncingWindow(), i * 200)
      }
    }, 500)

    // Open skull window
    setTimeout(() => {
      createSkullWindow()
    }, 2000)
  }

  useEffect(() => {
    // Check if popups are enabled on load
    setTimeout(() => {
      checkPopups()
      setChecking(false)
    }, 500)
  }, [])

  if (checking) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    )
  }

  if (!popupsEnabled) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 relative overflow-hidden">
        {/* Blurred background content */}
        <div className="absolute inset-0 blur-xl opacity-30 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-br from-red-900 via-black to-red-950" />
        </div>
        
        {/* Main content */}
        <div className="relative z-10 flex flex-col items-center gap-8">
          <div className="text-red-500 text-4xl md:text-6xl font-bold text-center animate-pulse">
            POPUPS REQUIRED
          </div>
          
          <div className="text-white text-lg md:text-xl text-center max-w-md">
            This website requires popups to function. Please enable popups for this site and click the button below.
          </div>
          
          {/* Arrow pointing to button */}
          <div className="flex flex-col items-center animate-bounce">
            <svg 
              className="w-12 h-12 text-red-500" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" transform="rotate(90 12 12)" />
            </svg>
          </div>
          
          <Button 
            onClick={enablePopups}
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white text-xl px-8 py-6 font-bold animate-pulse"
          >
            ENABLE POPUPS
          </Button>
          
          <div className="text-gray-500 text-sm text-center mt-4">
            After allowing popups in your browser, click the button above
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="text-center">
        <div className="text-red-500 text-2xl font-bold mb-4">Chaos Unleashed</div>
        <div className="text-gray-400">Close this tab if you dare...</div>
        <div className="text-gray-600 text-sm mt-4">The popups will continue without this page.</div>
      </div>
    </div>
  )
}
