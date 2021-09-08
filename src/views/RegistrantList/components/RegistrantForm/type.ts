import type { Data } from '/@/store/reducer/registrantReducer'

export interface Props {
  visible: boolean
  state: 'add' | 'look' | 'edit'
  fields: Data
  handleCancel: () => void
  handleFinishAdd: (values: Data) => void
  handleFinishEdit: (values: Data) => void
}
