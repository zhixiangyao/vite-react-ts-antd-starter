import type { Data } from '/@/store/Reducer/registrantReducer'

import type { ADD_LOOK_EDIT } from '../../type'

export interface Props {
  visible: boolean
  state: ADD_LOOK_EDIT
  fields: Data
  handleFormCancel: () => void
  handleFormAdd: (values: Data) => void
  handleFormEdit: (values: Data) => void
}
