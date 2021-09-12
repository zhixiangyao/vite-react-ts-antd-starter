import type { Data } from '/@/store/reducer/registrantReducer'
import { State } from '../../type'

export interface Props {
  visible: boolean
  state: State
  fields: Data
  handleCancel: () => void
  handleFinishAdd: (values: Data) => void
  handleFinishEdit: (values: Data) => void
}
