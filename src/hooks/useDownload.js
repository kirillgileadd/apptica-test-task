import {useRef} from "react";

export const useDownload = () => {
    const chartRef = useRef(null)

    const exportPngImage = () => {
        const link = document.createElement('a')
        link.download = 'chart.png'
        link.href = chartRef.current.toBase64Image()
        link.click()
    }

    return [chartRef, exportPngImage]
}