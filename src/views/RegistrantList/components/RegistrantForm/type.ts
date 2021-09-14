import { ADD_LOOK_EDIT } from '../../type'
import type { Data } from '/@/store/reducer/registrantReducer'

export interface Props {
  visible: boolean
  state: ADD_LOOK_EDIT
  fields: Data
  handleFormCancel: () => void
  handleFormAdd: (values: Data) => void
  handleFormEdit: (values: Data) => void
}
