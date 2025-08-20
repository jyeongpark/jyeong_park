// 아주 라이트한 필터: strong, b, em, i, u, a 만 허용

export function whitelistHtml(html: string) {
  return html
    .replace(/<(?!\/?(strong|b|em|i|u|a|mark)(\s|>|\/))/gi, "&lt;")
    .replace(/javascript:/gi, "");
}
