'use client'

import { useEffect, useState } from 'react'
import { CoverImageModal } from '../modals/cover-image-modal'
import { SettingModal } from '../modals/setting-modal'

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <>
      <SettingModal />
      <CoverImageModal />
    </>
  )
}
