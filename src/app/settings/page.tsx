import React from 'react'
import { getAppSettings } from '../lib/settings'

async function Settings() {
  const { theme, language } = await getAppSettings()
  return (
    <div>
      <h1 className='text-2xl font-bold'>Settings page</h1>

      <div className='border border-dashed border-red-500'>
        <p>Theme: {theme}</p>
        <p>Theme: {language}</p>
      </div>
    </div>
  )
}

export default Settings