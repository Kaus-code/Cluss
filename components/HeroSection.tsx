'use client'
import Image from 'next/image'
import Marquee from './Marquee'
import Logo from '../public/Logo.png'
import Img1 from '../public/Img1.png'
import Img2 from '../public/Img2.png'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
    FileText,
    Calendar,
    Brain,
    Search,
    Video,
    Users,
    Plus,
    Mic2,
    AudioLines
} from 'lucide-react'
import InteractiveBackground from './ui/InteractiveBackground'

const HeroSection = () => {
    const { scrollY } = useScroll();

    // Map scroll position (0 to 200px) to the box dimensions and styles
    const width = useTransform(scrollY, [0, 200], ["99vw", "90vw"]);
    const height = useTransform(scrollY, [0, 200], ["100vh", "95vh"]);
    const borderRadius = useTransform(scrollY, [0, 200], ["0px", "48px"]);
    const marginTop = useTransform(scrollY, [0, 200], ["0px", "12px"]);

    return (
        <div id="home" className='flex items-center flex-col gap-20'>

            {/* Main Hero Container */}
            <motion.div
                style={{
                    width,
                    height,
                    borderRadius,
                    marginTop,
                }}
                className='flex flex-col xl:justify-evenly justify-between items-center bg-white relative overflow-hidden'
            >
              <InteractiveBackground>
                <div className='flex flex-col xl:justify-evenly justify-between items-center w-full h-full relative'>
                
                <div className='w-full h-22 invisible lg:block'></div>

                <div className='flex flex-col md:flex-row items-center justify-center gap-10 px-8 md:px-20 w-full flex-1 max-w-[2000px] mx-auto'>

                    {/* Left Side: Text Content */}
                    <div className='flex flex-col items-start mt-15 md:mt-0 gap-4 max-w-2xl z-10 md:pl-10'>
                        <div className='text-[40px] md:text-[70px] font-medium text-left leading-[1.1]'>
                            Stop Watching.<br />Start Mastering.
                        </div>
                        <div className='text-[18px] text-muted-foreground text-left max-w-lg'>
                            Cluss turns the chaos of YouTube tutorials into structured, achievable courses with AI-powered study plans and personalized schedules.
                        </div>

                        {/* CTA Button */}
                        <div className='group relative cursor-pointer px-6 py-3 bg-[#e5e9eb] flex gap-2 rounded-full overflow-hidden mt-4'>
                            <div className='absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out'></div>
                            <div className='relative z-10 flex gap-2 group-hover:text-white transition-colors duration-500'>
                                <div>Get Started</div>
                                <div className='group-hover:-rotate-45 transition duration-500 text-xl'>🎓</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: 3D Tilted Card Component */}
                    <div
                        aria-hidden
                        className="perspective-near hidden md:block min-w-75 md:min-w-125 scale-75 md:scale-95 py-12 md:translate-x-12">

                        {/* REMOVED: hover:rotate-0 hover:scale-105
                           KEPT: rotate-x-12 rotate-y-2 (Static Tilt)
                        */}
                        <div className="rotate-x-12 bg-muted rotate-y-2 rotate-z-10 relative flex h-64 -rotate-12 flex-col rounded-3xl border py-4 pl-4 transition-all duration-500">

                            {/* Floating Menu Card */}
                            <div className="bg-card ring-border shadow-foreground/10 bottom-20 absolute left-4 min-w-60 rounded-2xl p-1 shadow-xl ring-1 dark:shadow-black/25">

                                {/* Feature 1: Study Planner */}
                                <div className="hover:bg-muted flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors duration-200 [&>svg]:size-4 [&>svg]:opacity-65">
                                    <Calendar className="text-green-500" />
                                    <span>AI Study Planner</span>
                                </div>

                                {/* Separator */}
                                <span className="bg-size-[6px_1px] mx-3 my-0.5 block h-px bg-[linear-gradient(90deg,var(--color-foreground)_1px,transparent_1px)] bg-bottom bg-repeat-x opacity-30 dark:opacity-15" />

                                {/* Feature 2: Q&A */}
                                <div className="hover:bg-muted flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors duration-200 [&>svg]:size-4 [&>svg]:opacity-65">
                                    <FileText className="text-blue-500" />
                                    <span>YouTube Q&A Chat</span>
                                </div>

                                {/* Feature 3: Deep Search */}
                                <div className="hover:bg-muted flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors duration-200 [&>svg]:size-4 [&>svg]:opacity-65">
                                    <Search className="text-orange-500" />
                                    <span>Deep Topic Search</span>
                                </div>

                                {/* Feature 4: Summarizer */}
                                <div className="hover:bg-muted flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors duration-200 [&>svg]:size-4 [&>svg]:opacity-65">
                                    <Video className="text-red-500" />
                                    <span>Instant PDF Notes</span>
                                </div>

                                {/* Feature 5: Quiz */}
                                <div className="hover:bg-muted flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors duration-200 [&>svg]:size-4 [&>svg]:opacity-65">
                                    <Brain className="text-purple-500" />
                                    <span>AI Quiz Generator</span>
                                </div>

                                {/* Feature 6: Study Room */}
                                <div className="hover:bg-muted flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors duration-200 [&>svg]:size-4 [&>svg]:opacity-65">
                                    <Users className="text-yellow-500" />
                                    <span>RAG Study Rooms</span>
                                </div>
                            </div>

                            {/* Search Bar Input */}
                            <div className="bg-card ring-border shadow-foreground/6.5 dark:shadow-black/6.5 shadow-xs mt-auto flex h-fit w-[90%] justify-between gap-3 rounded-full p-2 ring-1">
                                <div className="flex items-center gap-2">
                                    <div className="bg-muted flex size-9 items-center justify-center rounded-full hover:bg-gray-200 cursor-pointer transition-colors *:size-4">
                                        <Plus />
                                    </div>
                                    <div className="text-muted-foreground text-sm font-medium">Where do they teach about For Loops?</div>
                                </div>
                                <div className="flex items-center gap-0.5">
                                    <div className="flex size-9 items-center justify-center rounded-full hover:bg-muted cursor-pointer transition-colors *:size-4">
                                        <Mic2 />
                                    </div>
                                    <div className="bg-foreground text-background flex size-9 items-center justify-center rounded-full hover:brightness-110 cursor-pointer transition-all *:size-4">
                                        <AudioLines />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className='w-11 h-11 rounded-full group flex items-center justify-center hover:bg-[#dedede] transition-all duration-300 cursor-pointer bg-black animate-float mb-6'>
                    <Image
                        src='https://cdn.prod.website-files.com/673786754d248974527e65b5/673a2c5929486b4e031f7c94_dropdown-arrow.svg'
                        alt="Arrow"
                        width={10}
                        height={10}
                        className="rounded-full invert-100 group-hover:invert-25 transition-transform duration-300"
                    />
                </div>

                <div className='left-0 w-full'>
                    <Marquee />
                </div>
                </div>
              </InteractiveBackground>
            </motion.div>

            {/* Who We Are Section with Showreel */}
            <div className='w-[90vw] rounded-4xl h-auto bg-white flex flex-col md:flex-row px-8 py-10 gap-8 relative overflow-hidden'>
              <InteractiveBackground>
                <div className='flex flex-col md:flex-row gap-8 w-full h-full relative'>
                {/* Left: Showreel Card */}
                <div className='w-full md:w-1/2 flex flex-col justify-start gap-3'>
                    <div className='flex items-center gap-5 font-medium text-xl'>
                        <div className='dot'></div>
                        <div>Who we are</div>
                    </div>
                    <div className='bg-[#eef3f4] rounded-3xl p-6 relative w-full max-w-105'>
                        <div className='rounded-2xl overflow-hidden relative'>
                            {/* Replace "dQw4w9WgXcQ" with your YouTube Video ID */}
                            <div className='aspect-video w-full rounded-xl overflow-hidden bg-[#f3f6f7]'>
                                <iframe
                                    className='w-full h-full'
                                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>

                        <div className='mt-5 flex items-center justify-between'>
                            <div className='text-[18px] font-medium'>Cluss Showreel</div>
                            <div className='opacity-90'><Image src={Logo} alt='Logo' width={36} height={36} /></div>
                        </div>
                    </div>
                </div>

                {/* Right: Product / Tools Content */}
                <div className='w-full md:w-1/2 flex flex-col justify-center'>
                    <h2 className='text-[40px] font-semibold tracking-tight mb-6'>Turn Content into Knowledge</h2>
                    <p className='text-[16px] text-[#222] leading-relaxed max-w-170 mb-6'>
                        Cluss provides an integrated toolkit for learning teams and creators. Instantly transcribe YouTube lectures, generate concise summaries, run group discussions, and turn lessons into quizzes and study notes — powered by AI to save time and boost retention.
                    </p>

                    <div className='group relative cursor-pointer w-fit px-6 py-3 bg-[#e5e9eb] flex gap-2 rounded-full overflow-hidden'>
                        <div className='absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out'></div>
                        <div className='relative z-10 flex gap-2 group-hover:text-white transition-colors duration-500'>
                            <div>Explore Tools</div>
                            <div className='group-hover:-rotate-45 transition duration-500 text-xl'><Image src={Logo} alt='Logo' width={23} height={23} /></div>
                        </div>
                    </div>
                </div>
                </div>
              </InteractiveBackground>
            </div>


            {/* Card Breaker  */}

            <div className='w-[90vw] flex flex-col md:flex-row rounded-4xl gap-2 justify-between items-start '>
                <div className='px-2 md:px-0 flex items-center gap-2'>
                    <div className='dot'></div>
                    <div className='text-sm md:text-xl font-medium'>Featured Works</div>
                </div>
                <div className='px-2 md:px-0 text-xl md:text-2xl lg:text-3xl md:w-1/2 font-semibold'>
                    <div className='w-3/4'>
                        We create a path for learning but you have to walk by yourself
                    </div>
                </div>
            </div>


            <div className='w-[90vw] rounded-4xl h-auto bg-white flex flex-col items-center relative overflow-hidden'>
              <InteractiveBackground>
                <div className='flex flex-col items-center w-full h-full relative'>

                {/* Box 1 */}

                <div id='about' className='flex flex-col md:flex-row  px-18 py-15 gap-8'>
                    {/* Left: Card */}
                    <div className='w-full md:w-1/2 flex flex-col justify-between gap-4'>
                        <div className='flex flex-col gap-3'>
                            <div className='flex items-center gap-5 font-medium text-[18px]'>
                                <div className='dot'></div>
                                <div>Organize your time</div>
                            </div>
                            <h2 className='text-[35px] font-medium tracking-tight mb-6 underline'>Study Planner</h2>
                            <div className='text-[16px] text-[#222] leading-relaxed max-w-170 mb-6'>
                                <div className='w-3/4'>
                                    Stop guessing how much time you need. Tell us your deadline or your daily availability, and our intelligent algorithm builds a day-by-day roadmap. Switch between Exam Mode for high-intensity cramming or Flex Mode to balance learning with your busy lifestyle.
                                </div>
                            </div>
                        </div>

                        <div className='flex gap-2'>
                            <div className='bg-[#fafafa] text-sm px-5 py-2 border border-[#d7d7d7] rounded-sm cursor-pointer hover:border-[#a4a4a4] transition-all duration-300'>Exam Mode</div>
                            <div className='bg-[#fafafa] text-sm px-5 py-2 border border-[#d7d7d7] rounded-sm cursor-pointer hover:border-[#a4a4a4] transition-all duration-300'>Flex Mode</div>
                            <div className='bg-[#fafafa] text-sm px-5 py-2 border border-[#d7d7d7] rounded-sm cursor-pointer hover:border-[#a4a4a4] transition-all duration-300'>Scheduling</div>
                        </div>
                    </div>


                    {/* Right: Product*/}
                    <div className='w-full md:w-1/2 flex flex-col justify-start gap-3'>
                        <Image src={Img1} alt='img1' className='w-full' />
                    </div>
                </div>



                <div className='flex flex-col md:flex-row px-18 py-15 gap-8'>
                    {/* Left: Card */}
                    <div className='w-full hidden md:flex md:w-1/2 flex-col justify-start gap-3'>
                        <Image src={Img2} alt='img2' className='w-full' />
                    </div>


                    {/* Right: Product*/}
                    <div className='w-full px-5 md:w-1/2 flex flex-col justify-between gap-4'>
                        <div className='flex flex-col gap-3'>
                            <div className='flex items-center gap-5 font-medium text-[18px]'>
                                <div className='dot'></div>
                                <div>Your personal tutor</div>
                            </div>
                            <h2 className='text-[35px] font-medium tracking-tight mb-6 underline'>AI Assistant</h2>
                            <div className='text-[16px] text-[#222] leading-relaxed max-w-170 mb-6'>
                                <div className='w-3/4'>
                                    Interact with your courses like never before. Navigate long tutorials instantly using Deep Search, get comprehensive PDF notes generated from any video, and challenge yourself with AI-powered quizzes that adapt to your knowledge gaps.
                                </div>
                            </div>
                        </div>

                        <div className='flex gap-2'>
                            <div className='bg-[#fafafa] text-sm px-5 py-2 border border-[#d7d7d7] rounded-sm cursor-pointer hover:border-[#a4a4a4] transition-all duration-300'>Q&A</div>
                            <div className='bg-[#fafafa] text-sm px-5 py-2 border border-[#d7d7d7] rounded-sm cursor-pointer hover:border-[#a4a4a4] transition-all duration-300'>Summaries</div>
                            <div className='bg-[#fafafa] text-sm px-5 py-2 border border-[#d7d7d7] rounded-sm cursor-pointer hover:border-[#a4a4a4] transition-all duration-300'>Quizzes</div>
                        </div>
                    </div>

                    {/* Img: Card on Mobile Screen*/}
                    <div className='md:hidden w-full md:w-1/2 flex flex-col justify-start gap-3'>
                        <Image src={Img2} alt='img2' className='w-full' />
                    </div>
                </div>


                {/* Box 2 */}

                <div className='flex flex-col md:flex-row px-18 py-15 gap-8'>
                    {/* Left: Card */}
                    <div className='w-full md:w-1/2 flex flex-col justify-between gap-4'>
                        <div className='flex flex-col gap-3'>
                            <div className='flex items-center gap-5 font-medium text-[18px]'>
                                <div className='dot'></div>
                                <div>Find what matters</div>
                            </div>
                            <h2 className='text-[35px] font-medium tracking-tight mb-6 underline'>Smart Discovery</h2>
                            <div className='text-[16px] text-[#222] leading-relaxed max-w-170 mb-6'>
                                <div className='w-3/4'>
                                    Stop wasting hours on subpar tutorials. Our Smart Discovery engine vets thousands of YouTube playlists, analyzing metadata and transcript quality to recommend courses that are educationally sound and structured.
                                </div>
                            </div>
                        </div>

                        <div className='flex gap-2'>
                            <div className='bg-[#fafafa] text-sm px-5 py-2 border border-[#d7d7d7] rounded-sm cursor-pointer hover:border-[#a4a4a4] transition-all duration-300'>YouTube API</div>
                            <div className='bg-[#fafafa] text-sm px-5 py-2 border border-[#d7d7d7] rounded-sm cursor-pointer hover:border-[#a4a4a4] transition-all duration-300'>Insights</div>
                            <div className='bg-[#fafafa] text-sm px-5 py-2 border border-[#d7d7d7] rounded-sm cursor-pointer hover:border-[#a4a4a4] transition-all duration-300'>Curation</div>
                        </div>
                    </div>


                    {/* Right: Product*/}
                    <div className='w-full md:w-1/2 flex flex-col justify-start gap-3'>
                        <Image src={Img1} alt='img1' className='w-full' />
                    </div>
                </div>

                <div className='flex flex-col md:flex-row px-18 py-15 gap-8'>
                    {/* Left: Card */}
                    <div className='w-full hidden md:flex md:w-1/2 flex-col justify-start gap-3'>
                        <Image src={Img2} alt='img2' className='w-full' />
                    </div>


                    {/* Right: Product*/}
                    <div className='w-full px-5 md:w-1/2 flex flex-col justify-between gap-4'>
                        <div className='flex flex-col gap-3'>
                            <div className='flex items-center gap-5 font-medium text-[18px]'>
                                <div className='dot'></div>
                                <div>Track your growth</div>
                            </div>
                            <h2 className='text-[35px] font-medium tracking-tight mb-6 underline'>Gamification</h2>
                            <div className='text-[16px] text-[#222] leading-relaxed max-w-170 mb-6'>
                                <div className='w-3/4'>
                                    Consistency is the key to mastery. Track your learning streaks with GitHub-style contribution heatmaps, climb leaderboards, and turn your educational journey into a rewarding game you'll love to win.
                                </div>
                            </div>
                        </div>

                        <div className='flex gap-2'>
                            <div className='bg-[#fafafa] text-sm px-5 py-2 border border-[#d7d7d7] rounded-sm cursor-pointer hover:border-[#a4a4a4] transition-all duration-300'>Heatmaps</div>
                            <div className='bg-[#fafafa] text-sm px-5 py-2 border border-[#d7d7d7] rounded-sm cursor-pointer hover:border-[#a4a4a4] transition-all duration-300'>Badges</div>
                            <div className='bg-[#fafafa] text-sm px-5 py-2 border border-[#d7d7d7] rounded-sm cursor-pointer hover:border-[#a4a4a4] transition-all duration-300'>Leaderboard</div>
                        </div>
                    </div>

                    {/* Img: Card on Mobile Screen*/}
                    <div className='md:hidden w-full md:w-1/2 flex flex-col justify-start gap-3'>
                        <Image src={Img2} alt='img2' className='w-full' />
                    </div>
                </div>

                {/* CTA Button */}
                <div className='group relative cursor-pointer px-6 py-3 mb-15 bg-[#e5e9eb] flex gap-2 rounded-full overflow-hidden mt-4'>
                    <div className='absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out'></div>
                    <div className='relative z-10 flex gap-2 group-hover:text-white transition-colors duration-500'>
                        <div>All Projects</div>
                    </div>
                </div>

                </div>
              </InteractiveBackground>
            </div>

        </div>
    )
}

export default HeroSection