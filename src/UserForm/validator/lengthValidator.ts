export const lengthValidator = (length: number) => (value: string) =>
  value.length < length ? `Must be at least ${length} characters` : "";