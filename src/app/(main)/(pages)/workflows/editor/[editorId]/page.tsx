import { ConnectionsProvider } from '@/providers/ConnectionProvider'
import EditorProvider from '@/providers/EditorProvider'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
   <EditorProvider>
    <ConnectionsProvider>
      <></>
    </ConnectionsProvider>
   </EditorProvider>
  )
}

export default page