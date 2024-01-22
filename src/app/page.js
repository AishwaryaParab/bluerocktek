import Image from 'next/image'
import styles from './page.module.css'
import Main from '@/components/main/Main'
import Features from '@/components/features/Features'
import Services from '@/components/services/Services'
import Mission from '@/components/mission/Mission'
import Contact from '@/components/contact/Contact'

export default function Home() {
  return (
    <div>
      <Main />
      <Features />
      <Mission />
      <Services />
      <Contact />
    </div>
  )
}
