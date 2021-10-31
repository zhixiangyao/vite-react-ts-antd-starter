import React from 'react'
import { Upload, message } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'

import type { RcFile } from 'antd/lib/upload/interface'
import type { UploadChangeParam, UploadFile } from 'antd/lib/upload/interface'

function getBase64(img: RcFile, callback: (imageUrl: string) => unknown) {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result as string))
  reader.readAsDataURL(img)
}

function beforeUpload(file: RcFile) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
  if (!isJpgOrPng) message.error('You can only upload JPG/PNG file!')

  const isLt2M = file.size / 1024 / 1024 < 2
  if (!isLt2M) message.error('Image must smaller than 2MB!')

  return isJpgOrPng && isLt2M
}

interface Props {
  disabled: boolean
}

class UploadAvatar extends React.Component<Props> {
  override state = {
    loading: false,
    imageUrl: '',
  }

  handleChange = (info: UploadChangeParam<UploadFile<any>>) => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true })
      return
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as RcFile, (imageUrl: string) => {
        console.log('imageUrl:', imageUrl)

        this.setState({
          imageUrl,
          loading: false,
        })
      })
    }
  }

  override render() {
    const { loading, imageUrl } = this.state

    const uploadButton = (
      <div>
        {loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    )

    return (
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        disabled={this.props.disabled}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        headers={{}}
        onChange={this.handleChange}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
      </Upload>
    )
  }
}

export default UploadAvatar
