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
        
        // Initialize position from current window position
        let x = window.screenLeft || window.screenX || Math.random() * (screen.availWidth - width);
        let y = window.screenTop || window.screenY || Math.random() * (screen.availHeight - height);
        
        // Random velocity with minimum speed
        let dx = (Math.random() > 0.5 ? 1 : -1) * (3 + Math.random() * 5);
        let dy = (Math.random() > 0.5 ? 1 : -1) * (3 + Math.random() * 5);
        
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
          // Update position
          x += dx;
          y += dy;
          
          // Screen boundaries (accounting for taskbar)
          const maxX = screen.availWidth - width;
          const maxY = screen.availHeight - height;
          const minX = 0;
          const minY = 0;
          
          // Bounce off edges
          if (x <= minX) { 
            x = minX; 
            dx = Math.abs(dx); 
            playSound(); 
          }
          if (x >= maxX) { 
            x = maxX; 
            dx = -Math.abs(dx); 
            playSound(); 
          }
          if (y <= minY) { 
            y = minY; 
            dy = Math.abs(dy); 
            playSound(); 
          }
          if (y >= maxY) { 
            y = maxY; 
            dy = -Math.abs(dy); 
            playSound(); 
          }
          
          // Move the window
          window.moveTo(Math.round(x), Math.round(y));
          
          // Use setTimeout for more consistent timing
          setTimeout(animate, 16);
        }
        
        // Start animation after a short delay
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
      const enabled = checkPopups()
      setChecking(false)
      if (enabled) {
        startChaos()
      }
    }, 500)
  }, [])

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="text-center">
        <div className="text-red-500 text-2xl font-bold mb-4">Welcome</div>
        <div className="text-gray-400">Enjoy your stay...</div>
      </div>
      
      {/* Bottom right popup warning */}
      {!popupsEnabled && !checking && (
        <div className="fixed bottom-4 right-4 bg-red-900 border border-red-600 rounded-lg p-4 shadow-lg max-w-xs animate-pulse">
          <div className="text-red-400 font-bold text-sm mb-2">Please Allow Popups</div>
          <div className="text-gray-300 text-xs">
            Enable popups for this site to experience the full effect.
          </div>
          <Button 
            onClick={enablePopups}
            size="sm"
            className="mt-3 bg-red-600 hover:bg-red-700 text-white text-xs w-full"
          >
            Enable Popups
          </Button>
        </div>
      )}
    </div>
  )
}
