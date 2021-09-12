import type { Data } from '/@/store/reducer/registrantReducer'
import { State } from '../../type'

export interface Props {
  visible: boolean
  state: State
  fields: Data
  handleFormCancel: () => void
  handleFormAdd: (values: Data) => void
  handleFormEdit: (values: Data) => void
}
