/* eslint-disable @typescript-eslint/no-unused-vars */
import { Mail, Github, Twitter, Linkedin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import localFont from 'next/font/local'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import {Roboto_Mono} from "next/font/google"
import { Inter } from 'next/font/google'

const roboto = Roboto_Mono({style: ["normal"], subsets: ["latin", "latin-ext"]})

const inter = Inter({style: ["normal", "italic"], subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext"]})

const supply = localFont({
  src: './font/Supply-Regular.otf',
  display: 'swap',
})

const montreal = localFont({
  src: './font/NeueMontreal-Regular.otf',
  display: 'swap',
})

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-6 space-y-12">
        {/* Header */}
        <header className="flex justify-between items-start">
          <div className='flex flex-row items-center gap-x-4'>
            <h1 className={`text-3xl font-bold text-white tracking-tight ${supply.className}`}>SHASHANK TELKHADE</h1>
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com/shashank-100" className="text-gray-400 hover:text-white transition-colors">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="https://www.linkedin.com/in/shashank-telkhade/" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="mailto:shashank.telkhade@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </header>

        {/* Hero */}
        <section className={`space-y-4 text-[0.9rem] tracking-[-0.045rem] ${roboto.className}`}>
          <p className="text-white/70 max-w-3xl">
            Hi, I{"'"}m <span className='text-white/90'>Shashank Telkhade</span>. I{"'"}m a Software Engineer with experience in full-stack development, cloud architecture, and distributed systems. Currently working at Capital One, I specialize in building scalable applications and microservices.
          </p>
          <p className="text-white/75">
            You can reach me at <span className='text-white underline hover:cursor-pointer'>shashank.telkhade@gmail.com</span> or connect with me on <span className='text-white underline hover:cursor-pointer'><Link href={"https://www.linkedin.com/in/shashank-telkhade/"}>LinkedIn</Link></span> and <span className='text-white underline hover:cursor-pointer'><Link href={"https://github.com/shashank-vt"}>GitHub</Link></span>.
          </p>
        </section>

        

        {/* Experience */}
        <section className="space-y-2 text-sm tracking-wide">
        <h1 className={`text-2xl text-white font-extrabold tracking-wide mb-6 ${montreal.className}`}>Work</h1>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="relative h-12 w-12 overflow-hidden rounded-full">
                <Image
                  src="/channels4_profile.jpg"
                  alt="Capital One"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <div className={`flex items-center justify-between ${montreal.className} cursor-pointer`}>
                  <div>
                    <div className="group flex items-center gap-2">
                      <h3 className="font-bold text-white">Capital One</h3>
                      <ChevronRight className="h-4 w-4 transform opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-1 group-hover:opacity-100 text-white" />
                    </div>
                    <p className="text-white/60">
                      Software Engineer
                    </p>
                    <ul className="mt-2 space-y-1 text-white/70 text-[0.8rem]">
                      <li>• Led end-to-end development of student credit card application UI, generating 100M+ impressions</li>
                      <li>• Built microservices and distributed systems for OAuth2.0 APIs enabling external authentication</li>
                      <li>• Developed system architecture using AWS ECS, EC2, ALB, ElastiCache, Route53</li>
                      <li>• Reduced deployment time from 48-72 hours to under 2 hours via Jenkins CI/CD pipelines</li>
                      <li>• Architected features for applynow.capitalone.com platform enhancing customer experience</li>
                    </ul>
                  </div>
                  <span className="text-gray-400">2021 - Present</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="space-y-2">
        <h1 className={`text-2xl text-white font-extrabold tracking-wide mb-6 ${montreal.className}`}>Projects</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-16">
            <Link href="/projects/belzin" className="group w-full max-w-[30rem]">
              <div className="space-y-4">
                <div className="relative w-full h-[250px] overflow-hidden rounded-lg">
                  <Image
                    src="/belzin.png"
                    alt="Polymarket Agent"
                    fill
                    className="object-cover image-glow opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className={`text-xl text-white font-bold group-hover:text-white group-hover:underline group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] ${montreal.className}`}>Polymarket Agent</h3>
                    <span className="text-gray-400">2025</span>
                  </div>
                  <p className={`text-white/65 tracking-tight font-[400] text-[0.8rem] ${roboto.className}`}>
                    AI-Agent Powered P2P Group Chat Betting. 
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/projects/liquotic" className="group w-full max-w-[30rem]">
              <div className="space-y-4">
                <div className="relative w-full h-[250px] overflow-hidden rounded-lg">
                  <Image
                    src="/liquotic.jpg"
                    alt="Swap NFT"
                    fill
                    className="object-cover image-glow opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className={`text-xl text-white font-bold group-hover:text-white group-hover:underline group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] ${montreal.className}`}>Swap NFT</h3>
                    <span className="text-gray-400">2024</span>
                  </div>
                  <p className={`text-white/65 tracking-tight font-[400] text-[0.8rem] ${roboto.className}`}>
                    Buy NFTs with any SPL-Token
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/projects/openvest" className="group w-full max-w-[30rem]">
              <div className="space-y-4">
                <div className="relative w-full h-[250px] overflow-hidden rounded-lg">
                  <Image
                    src="/openvest.png"
                    alt="TokenVest"
                    fill
                    className="object-cover image-glow opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className={`text-xl text-white font-bold group-hover:text-white group-hover:underline group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] ${montreal.className}`}>TokenVest</h3>
                    <span className="text-gray-400">2024</span>
                  </div>
                  <p className={`text-white/65 tracking-tight font-[400] text-[0.8rem] ${roboto.className}`}>
                    Create Token Vesting Schedules for Company Employees
                  </p>
                </div>
              </div>
            </Link>
            <Link href="https://github.com/shashank-100/SolWatch" className="group w-full max-w-[30rem]">
              <div className="space-y-4">
                <div className="relative w-full h-[250px] overflow-hidden rounded-lg">
                  <Image
                    src="/solclix.png"
                    alt="SolWatch"
                    fill
                    className="object-cover image-glow opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className={`text-xl text-white font-bold group-hover:text-white group-hover:underline group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] ${montreal.className}`}>SolWatch</h3>
                    <span className="text-gray-400">2024</span>
                  </div>
                  <p className={`text-white/65 tracking-tight font-[400] text-[0.8rem] ${roboto.className}`}>
                    A fast Solana geyser plugin for real-time account monitoring and data streaming with PostgreSQL and gRPC
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </section>
      </div>

      <div className="fixed inset-0 -z-10 gradient-blur" />
    </main>
  )
}