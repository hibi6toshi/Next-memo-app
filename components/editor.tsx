'use client'

import { BlockNoteEditor, PartialBlock } from '@blocknote/core'
import { BlockNoteView, useBlockNote } from '@blocknote/react'
import '@blocknote/core/style.css'
import { useTheme } from 'next-themes'

interface EditorProps {
  onChange: (value: string) => void
  initialContent?: string
}

const Editor = ({ onChange, initialContent }: EditorProps) => {
  const { resolvedTheme } = useTheme()

  const editor: BlockNoteEditor = useBlockNote({
    initialContent: initialContent
      ? (JSON.parse(initialContent) as PartialBlock[])
      : undefined,
    onEditorContentChange: (editor) => {
      onChange(JSON.stringify(editor.topLevelBlocks, null, 2))
    },
  })

  return (
    <div>
      <BlockNoteView
        editor={editor}
        theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
      />
    </div>
  )
}

export default Editor
