import React from 'react'
import UploadCareButton from './UploadCareButton'
import { string } from 'zod'

type Props = {
   userImage : string | null
   onDelete? : any
   onUpload : any

}

function ProfilePicture({userImage , onDelete , onUpload}: Props) {
  return (
    <div className="flex flex-col">
    <p className="text-lg text-white">
    Profile Picture
    </p>
    <div className='flex h-[30vh] flex-col items-center justify-center'>
        <UploadCareButton onUpload={onUpload} />
    </div>
    </div>
  )
}

export default ProfilePicture