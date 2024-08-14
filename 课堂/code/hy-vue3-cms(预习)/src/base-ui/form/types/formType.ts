import { IFormItemProps, ILayout } from './formItemType'

export interface IFormProps {
  labelWidth: string
  labelPosition: string
  formOptions: IFormItemProps[]
  formStyle: object
  formColStyle: object
  colLayout: ILayout
  showFooter: boolean
}
