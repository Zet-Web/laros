export const downloadFile = (url: string) => {
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', 'file.pdf')
    link.setAttribute('target', '_blank')
    document.body.appendChild(link)
    link.click()
    link.parentNode?.removeChild(link)
}
