import { ConnectionsProvider } from '@/providers/ConnectionProvider'
import EditorProvider from '@/providers/EditorProvider'
import React from 'react'
import EditorCanvas from './_components/EditorCanvas'

type Props = {}

const page = (props: Props) => {
  return (
   <EditorProvider>
    <ConnectionsProvider>
      <>
      <EditorCanvas />
      </>
    </ConnectionsProvider>
   </EditorProvider>
  )
}

export default page