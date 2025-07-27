import { Title } from '@/shared/ui/title'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <Title level={1} size='medium' variant='primary'>Not Found</Title>
      <Title level={3} size='medium' variant='primary'>Could not find requested resource</Title>
      <Link href="/">Return Home</Link>
    </div>
  )
}

//