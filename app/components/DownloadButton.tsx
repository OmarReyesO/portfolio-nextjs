// components/DownloadButton.js

import React from "react"

const DownloadButton = () => {
  const handleDownload = () => {
    const downloadUrl = "/cv.pdf" // Adjust the file name and extension
    const anchor = document.createElement("a")
    anchor.href = downloadUrl
    anchor.download = "cv.pdf"
    document.body.appendChild(anchor)
    anchor.click()
    document.body.removeChild(anchor)
  }

  return (
    <button
      onClick={handleDownload}
      className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 text-white"
    >
      Download CV
    </button>
  )
}

export default DownloadButton
