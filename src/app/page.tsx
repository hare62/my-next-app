import Image from 'next/image';
import diamondPic from '../../public/Sphere.png';
import Ellipse from '../../public/Ellipse673.png';



export default function Home() {
  return (
    <div style={{ fontFamily: 'NEXT BOOK' }} className='w-screen h-screen overflow-hidden flex items-center justify-between'>
      <div className=" w-400  mx-auto h-[50.0625rem] text-white rounded-lg sm:rounded-none lg:rounded-xl bg-main">
        <div className='flex items-center justify-between p-[5%] py-[7%] '>
          <div className="w-86 h-140 flex items-center flex-col flex-shrink-0 bg-custom pt-9 rounded-lg sm:rounded-none lg:rounded-xl">
            <div className='flex flex-col columns-1 items-center'>
              <div className="mb-14 flex flex-col items-center">
                <div className='w-25.5 h-25.5 bg-gray-300 rounded-full mb-[20px] '></div>
                <div className='mb-3' >
                  <div className="font-bold text-[20px]">
                    Carina Geng
                  </div>
                </div>
                <div className='flex' >
                  <div className="left w-5 h-5 bg-gray-300 mr-2 rounded-full"></div>
                  <div className='medium text-font-olor'>Level3</div>
                  <div className='icon relative'>
                    <div className='w-5 h-5 ml-5 font-bold rounded-full text-center text-gray-500 border border-gray-600 text-[11.55px]'>?</div>
                  </div>
                </div>
              </div>
              <div className='flex'>
                <div className='flex flex-col items-center'>
                  <div className='text-[12px] text-taupe font-normal mb-3'>Today&apos;s XP</div>
                  <div className='text-[16px] font-bold text-font-olor'>50</div>
                </div>
                <div className="center mx-8">
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="44" viewBox="0 0 13 44" fill="none">
                    <path d="M12 1L1 43" stroke="#7D7D7D" />
                  </svg>
                </div>
                <div className="flex flex-col items-center">
                  <div className='text-[12px] text-taupe font-normal mb-3'>Total XP</div>
                  <div className='text-[16px] font-bold text-font-olor'>750/800</div>
                </div>
              </div>
            </div>
            <div className='bottom flex items-center mt-14 w-full pl-20 pr-20 relative justify-between '>
              <div className='w-17 h-17 bg-gray-circle rounded-full'></div>
              <div className='w-21 h-21 bg-white rounded-full absolute top-2/4 left-1/2 transform translate-x-[-50%] translate-y-[-50%]'></div>
              <div className='w-17 h-17 bg-gray-circle rounded-full  '></div>
            </div>
            <div className='w-36.25 h-10 rounded-xl must f-center mt-8'>
              View all badges
            </div>
          </div>
          <div className='left-contain flex-1 h-140 ml-3 w-full overflow-hidden'>
            <div className='left-top-contain  w-full h-56 flex right-0 relative'>
              <svg className='absolute left-0 top-0 z-10  ' xmlns="http://www.w3.org/2000/svg" width="189" height="220" viewBox="0 0 189 220" fill="none">
                <path d="M0 20C0 8.9543 8.9543 0 20 0H188.426L128.78 220H20C8.9543 220 0 211.046 0 200V20Z" fill="#1C1C1C" />
              </svg>
              <svg className='absolute left-0  bottom-0 z-20  ' xmlns="http://www.w3.org/2000/svg" width="142" height="115" viewBox="0 0 142 115" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M141.739 67.2027L128.78 115H20C8.9543 115 0 106.046 0 95V17.2623C15.0458 6.40044 33.5254 0 53.5 0C95.6215 0 131.095 28.4618 141.739 67.2027Z" fill="#232323" />
              </svg>
              <div className=" w-47 h-56 absolute left-0 bg-custom rounded-lg sm:rounded-none lg:rounded-xl"></div>
              <div className=" w-47 h-56"></div>
              <div className="w-252 h-56 bg-custom flex firstLevel absolute right-0  rounded-lg sm:rounded-none lg:rounded-xl">
                <div className='w-32 h-56'></div>
                <div className='w-153.44 h-56 flex flex-col'>
                  <div className='w-full h-6.44'></div>
                  <div className='w-full h-33.75 f-center'>
                    <div className='w-33.75 h-33.75 relative'>
                      <Image className='w-33.75 h-33.75 absolute imgborde top-0 left-0' src={Ellipse} alt=''></Image>
                    </div>
                    <div className='w-26.25 h-0.25 bg-white'></div>
                    <div className='w-33.75 h-33.75 bg-custom round2 f-center flex-col relative text-gray-900'>
                      <svg className='round2circle' xmlns="http://www.w3.org/2000/svg" width="94" height="89" viewBox="0 0 94 89" fill="none">
                        <g clip-path="url(#clip0_1_301)">
                          <circle cx="18.8047" cy="72.206" r="68.5" transform="rotate(-180 18.8047 72.206)" stroke="white" stroke-width="2" />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_301">
                            <rect width="94" height="89" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span>Complete<br />10`&nbsp;`Quest</span>
                      <span>6/10</span>
                    </div>
                    <div className='w-26.5 h-0.25 bg-white'></div>
                    <div className='w-33.199 h-33.199 bg-custom round3 f-center flex-col relative text-font-olor'>
                      <span className='round3Text'>Complete<br />20&nbsp;Quest</span>
                      <span className='round3Text ml-9'>6/20</span>
                    </div>
                  </div>
                  <div className='w-full h-15.04 flex'>
                    <div className='w-33.75 h-15.04 f-center'>
                      <Image width={20.8} height={20.8} className='mr-1' src={diamondPic} alt="" />
                      <div className='text-font-olor bold leading-110'>5</div>
                    </div>
                    <div className='w-26.25 h-15.04 '></div>
                    <div className='w-33.75 h-15.04 bg-custom f-center'>
                      <Image width={20.8} height={20.8} className='mr-1' src={diamondPic} alt="" />
                      <div className='text-font-olor bold leading-110'>10</div>
                    </div>
                    <div className='w-26.5 h-15.04 '></div>
                    <div className='w-33.199 h-15.04 bg-custom f-center'>
                      <Image width={20.8} height={20.8} className='mr-1' src={diamondPic} alt="" />
                      <div className='text-font-olor bold leading-110'>25</div>
                    </div>
                  </div>
                </div>
                <div className='w-66.04 h-56  flex flex-col  f-center'>
                  <div className='w-35.75 h-9.75 bg-fontGray text-black rounded-2xl f-center mb-3'>
                    Claim
                  </div>
                  <div className='must  w-35.75 h-10 bg-white rounded-xl  text-font-olor text-sm not-italic f-center'>
                    <div className='normal-font'>
                      Start Learning
                    </div>
                  </div>
                </div>
              </div>
              <div className='absolute left-7 top-10 z-30 text-base text-font-olor font-normal'>Daily <br /> Quests</div>
            </div>
            <div className="right-bottom-contain mt-3  w-full overflow-hidden rounded-lg relative">
              <div className=" w-full h-82 bg-custom flex flex-col">
                <div className='relative h-20'>
                  <div className='absolute left-7 top-10 text-base text-font-olor  font-bold leading-110'>Milestones</div>
                  <div className=" flex flex-col absolute right-14 top-11 text-sm font-bold leading-110">
                    <div className="flex">
                      <div>&lt;/Course&nbsp;Completion &gt;</div>
                      <div className='ml-14'>Quest Winning Streak</div>
                      <div className='ml-14'>Track&nbsp;Completion</div>
                    </div>
                    <div className='relative mt-3 w-full' >
                      <div className='w-38 h-1 bg-line rounded-line z-20 absolute left-0 top-0 '></div>
                      <div className='h-1 w-140 '>
                        <svg className=' absolute right-0 bottom-0 z-0 ' xmlns="http://www.w3.org/2000/svg" width="481" height="2" viewBox="0 0 481 2" fill="none">
                          <path d="M0 1L481 0.999958" stroke="#282828" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col pl-7 pr-14 mt-6.5' >
                  <div className='tile'>
                    <svg className='absolute h-13 w-40.375' xmlns="http://www.w3.org/2000/svg" width="162" height="53" viewBox="0 0 162 53" fill="none">
                      <path d="M0 20C0 8.95431 8.9543 0 20 0H161.5L147.255 53H20C8.95431 53 0 44.0457 0 33V20Z" fill="#292929" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M117.891 0C116.921 20.0334 109.508 38.3759 97.6798 53H20C8.95431 53 0 44.0457 0 33V20C0 8.95431 8.9543 0 20 0H117.891Z" fill="#232323" />
                    </svg>
                    <div className='absolute left-40.375 h-full f-center'>
                      <div className='w-53.625 ml-3 '>Complete6&nbsp;3&nbsp;Syntax</div>
                      <div className='flex  w-28'>
                        <Image width={20.8} height={20.8} className='mr-1' src={diamondPic} alt="" />
                        <div className='text-font-olor bold leading-110'>25</div>
                      </div>
                      <div className='flex items-center'>
                        <div className='relative'>
                          <div className='w-68.75 h-3 bg-bottom rounded-line '>
                            <div className='w-27 h-3 bg-white rounded-line'></div>
                          </div>
                        </div>
                        <div className='normal leading ml-3'>1/3</div>
                      </div>
                      <div className='ml-24.8 mr-1.52 w-22.25 h-10 bg-white rounded-xl  text-claim text-sm not-italic f-center'>
                        <div>
                          Claim
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='tile'>
                    <svg className='absolute h-13 w-40.375' xmlns="http://www.w3.org/2000/svg" width="162" height="53" viewBox="0 0 162 53" fill="none">
                      <path d="M0 20C0 8.95431 8.9543 0 20 0H161.5L147.255 53H20C8.95431 53 0 44.0457 0 33V20Z" fill="#292929" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M117.891 0C116.921 20.0334 109.508 38.3759 97.6798 53H20C8.95431 53 0 44.0457 0 33V20C0 8.95431 8.9543 0 20 0H117.891Z" fill="#232323" />
                    </svg>
                    <div className='absolute left-40.375 h-full f-center'>
                      <div className='w-53.625 ml-3 '>Complete&nbsp;6&nbsp;Syntax</div>
                      <div className='flex  w-28'>
                        <Image width={20.8} height={20.8} className='mr-1' src={diamondPic} alt="" />
                        <div className='text-font-olor bold leading-110'>50</div>
                      </div>
                      <div className='flex items-center'>
                        <div className='relative'>
                          <div className='w-68.75 h-3 bg-bottom rounded-line '>
                            <div className='w-15.25 h-3 bg-white rounded-line'></div>
                          </div>
                        </div>
                        <div className='normal leading ml-3'>1/6</div>
                      </div>
                      <div className='must ml-10 mr-1.52 w-35.75 h-10 bg-white rounded-xl  text-claim text-sm not-italic f-center'>
                        <div className='text-font-olor normal leading-110'>
                          Start Learning
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='tile'>
                    <svg className='absolute h-13' xmlns="http://www.w3.org/2000/svg" width="162" height="53" viewBox="0 0 162 53" fill="none">
                      <path d="M0 20C0 8.95431 8.9543 0 20 0H161.5L147.255 53H20C8.95431 53 0 44.0457 0 33V20Z" fill="#292929" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M117.891 0C116.921 20.0334 109.508 38.3759 97.6798 53H20C8.95431 53 0 44.0457 0 33V20C0 8.95431 8.9543 0 20 0H117.891Z" fill="#232323" />
                    </svg>
                    <div className='absolute left-40.375 h-full f-center'>
                      <div className='w-53.625 ml-3 '>Complete&nbsp;10&nbsp;Syntax</div>
                      <div className='flex w-28'>
                        <Image width={20.8} height={20.8} className='mr-1' src={diamondPic} alt="" />
                        <div className='text-font-olor bold leading-110'>120</div>
                      </div>
                      <div className='flex items-center'>
                        <div className='relative'>
                          <div className='w-68.75 h-3 bg-bottom rounded-line '>
                            <div className='w-9.75 h-3 bg-white rounded-line'></div>
                          </div>
                        </div>
                        <div className='normal leading ml-3'>1/10</div>
                      </div>
                      <div className='must ml-8 mr-1.52 w-35.75 h-10 bg-white rounded-xl  text-claim text-sm not-italic f-center' >
                        <div className='text-font-olor normal leading-110'>
                          Start Learning
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-270 h-7.5 absolute bottom-9 bottomLiner'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}