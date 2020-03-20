export function isClient () {
  /* Doc: https://nuxtjs.org/faq/window-document-undefined#window-or-document-undefined- */
  /* window or document is not defined 解决方法 */
  return process.client
}
