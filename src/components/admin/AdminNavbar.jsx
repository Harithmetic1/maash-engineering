import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const AdminNavbar = () => {
  return (
    <div className='navbar-container w-full p-5 border-b border-b-admin-secondary'>
        <div className='user-details flex justify-between gap-5 items-center w-11/12'>
        <Link href='/' className='text-sm'>
                Go back to site
            </Link>
            <div className='user flex justify-center items-center gap-2'>
                <Image src='/admin-user.svg' alt='User-icon' width={32} height={32} />
                <div className='name-role'>
                    <h1 className='text-admin-secondary text-sm font-bold'>Khadija Aminu Ibrahim</h1>
                    <p className='text-admin-secondary text-xs'>Super Admin</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminNavbar;