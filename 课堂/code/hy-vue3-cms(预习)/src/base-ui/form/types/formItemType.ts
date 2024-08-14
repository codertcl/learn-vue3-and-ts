export interface ILayout {
  xl?: number
  lg?: number
  md?: number
  sm?: number
  xs?: number
  span?: number
}

export interface IFormItemProps {
  label: string
  field: string
  type: string
  colLayout: ILayout
  placeHolder: string
  otherOptions: object
  formData: object
  defaultFieldValue: string
}
