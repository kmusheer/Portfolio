import React from 'react'
import { BsInstagram, BsTwitter} from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

export default function SocialMedia() {
  return (
    <div className='app__social'>
        <div><BsTwitter /></div>
        <div><FaFacebookF /></div>
        <div><BsInstagram /></div>
    </div>
  )
}
