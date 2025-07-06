import type { Data } from '/@/store/Reducer/registrantReducer'

import type { EnumAddLookEdit } from '../../type'

export interface Props {
  visible: boolean
  state: EnumAddLookEdit
  fields: Data
  handleFormCancel: () => void
  handleFormAdd: (values: Data) => void
  handleFormEdit: (values: Data) => void
}
