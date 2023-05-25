export const removeParagraphTags = (text: string): string => {
  const paragraphTagsRegex = /^<p>(.*)<\/p>$/
  const match = text?.match(paragraphTagsRegex)

  if (match != null) {
    return match[1]
  }

  return text
}
