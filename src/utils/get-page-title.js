import defaultSettings from '@/settings'

const title = defaultSettings.title || '全民制作人'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
