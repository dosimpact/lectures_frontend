export const pureSort = <T>(array: readonly T[]): T[] => {
  let deepCopied = [...array]
  return deepCopied.sort()
}
