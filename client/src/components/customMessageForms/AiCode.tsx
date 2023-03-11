import { usePostAiCodeMutation } from '@/state/api'
import React, { useState } from 'react'
import MessageForrmUI from './MessageFormUI'

function AiCode({ props, activeChat }: any) {
    const [message, setMessage] = useState("")
    const [attachment, setAttachment] = useState<File | undefined>()
    const [triggerCode] = usePostAiCodeMutation();
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value)
    }

    const handleSubmit = async () => {
        const date = new Date()
            .toISOString()
            .replace("T", " ")
            .replace("Z", `${Math.floor(Math.random() * 1000)}+00:00`)
        const at = attachment ? [{ blob: attachment, file: attachment.name }] : []
        const form = {
            attachments: at,
            created: date,
            sender_username: props.username,
            text: message,
            activeChatId: activeChat.id
        }
        props.onSubmit(form);
        triggerCode(form)
        setMessage("")
        setAttachment(undefined)
    }
    return (
        <MessageForrmUI
            setAttachment={setAttachment}
            message={message}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        />
    )
}

export default AiCode