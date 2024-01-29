import React from 'react'
import { Button } from '../ui/button'
import { LogOut } from 'lucide-react'

const LogoutButton = () => {
  return (
    <Button className='bg-black text-white rounded-full p-3 text-xs md:text-sm'>
            <LogOut className='cursor-pointer' />
          </Button>
  )
}

export default LogoutButton