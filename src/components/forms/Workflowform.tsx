import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { WorkflowFormSchema } from '@/lib/types'
import { z } from 'zod'
import { useModal } from '@/providers/ModalProvider'
type Props = {
    title?: string
  subTitle?: string
}

const Workflowform = ({title , subTitle}: Props) => {
    const { setClose } = useModal()

    const form = useForm<z.infer<typeof WorkflowFormSchema>>({
        mode: 'onChange',
        resolver: zodResolver(WorkflowFormSchema),
        defaultValues: {
          name: '',
          description: '',
        },
      })

      const isLoading = form.formState.isLoading;
      const router = useRouter();
  return (
    <div>Workflowform</div>
  )
}

export default Workflowform