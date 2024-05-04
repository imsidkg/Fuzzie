import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { WorkflowFormSchema } from '@/lib/types'
import { z } from 'zod'
type Props = {}

const Workflowform = (props: Props) => {


    const form = useForm<z.infer<typeof WorkflowFormSchema>>({
        mode: 'onChange',
        resolver: zodResolver(WorkflowFormSchema),
        defaultValues: {
          name: '',
          description: '',
        },
      })
  return (
    <div>Workflowform</div>
  )
}

export default Workflowform