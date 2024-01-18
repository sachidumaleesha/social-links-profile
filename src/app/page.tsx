import Image from 'next/image'

export default function Home() {
  return (
   <main className='bg-[#141414] flex justify-center items-center h-screen'>
    <div className='bg-[#1f1f1f] max-w-[400px] w-full rounded-md text-white p-8 flex flex-col gap-7 m-5'>
      {/* Profile */}
      <div className='flex justify-center'>
        <Image src='https://github.com/sachidumaleesha/social-links-profile/assets/45502921/9cdf338c-c2f0-4e5b-b162-713df49ea0fd' alt='jessica' width={80} height={80} className='rounded-full'/>
      </div>

      {/* Bio */}
      <div className='text-center'>
        <p className='text-2xl font-semibold'>Jessica Randall</p>
        <p className='text-sm text-[#c5f82a]'>London, United Kingdom</p>
      </div>

      {/* Description */}
      <div className='text-center'>
        <p className='text-sm text-gray-400'>Front-end developer and avoid reader.</p>
      </div>

      {/* Social Links */}
      <div className='flex flex-col gap-5'>
        <p className='bg-[#333333] text-center py-3 px-1 font-semibold rounded-lg'>Github</p>
        <p className='bg-[#333333] text-center py-3 px-1 font-semibold rounded-lg'>Frontend Mentor</p>
        <p className='bg-[#333333] text-center py-3 px-1 font-semibold rounded-lg'>Linkedin</p>
        <p className='bg-[#333333] text-center py-3 px-1 font-semibold rounded-lg'>Twitter</p>
        <p className='bg-[#333333] text-center py-3 px-1 font-semibold rounded-lg'>Instagram</p>
      </div>
    </div>
   </main>
  )
}
