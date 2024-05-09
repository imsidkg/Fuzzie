import { useEditor } from '@/providers/EditorProvider'
import React, { useMemo } from 'react'
import { Position, useNodeId } from 'reactflow';
import EditorCanvasIconHelper from './EditorCanvasIconHelper';
import { EditorCanvasCardType } from '@/lib/types';
import CustomHandle from './CustomHandle';


type Props = {}

const EditorCanvasCardSingle = ({data} : {data: EditorCanvasCardType}) => {
    const {dispatch , state} = useEditor();
    const nodeId = useNodeId();
    const logo = useMemo(() => {
        return <EditorCanvasIconHelper type= {data.type} />
    },[data])
  return (
   <>
   {data.type != 'Trigger' && data.type != 'Google Drive' && (
    <CustomHandle 
    type = 'target'
    position = {Position.Top}
    style = { {zIndex : 100}}
    />
   )}
   </>
  )
}

export default EditorCanvasCardSingle