// export default function HeroSection() {
//   return (
//     <section className="bg-gradient-to-r from-primary to-secondary py-20 text-white">
//       <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
//         <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">Build Wealth Like Never Before</h1>
//           <p className="text-xl mb-8 opacity-90">
//             Smart investment strategies tailored for your financial freedom
//           </p>
//           <div className="flex space-x-4">
//             <button className="bg-blue-400 text-primary px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition shadow-lg">
//               Start Investing
//             </button>
//             <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition">
//               Learn More
//             </button>
//           </div>
//         </div>
//         <div className="md:w-1/2 flex justify-center animate-float">
//           <img 
//             src="/images/investment.jpg" 
//             alt="Investment Illustration" 
//             className="w-full max-w-md  overflow-hidden w-[30px] h-[292px] object-cover"
//           />
//         </div>
//       </div>
//     </section>
//   )
// }


export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary py-20 text-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Build Wealth Like Never Before</h1>
          <p className="text-xl mb-8 opacity-90">
            Smart investment strategies tailored for your financial freedom
          </p>
          <div className="flex space-x-4">
            <button className="bg-blue-400 text-primary px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition shadow-lg">
              Start Investing
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition">
              Learn More
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center animate-float">
          <svg
            className="w-[330px] h-[292px]"
            viewBox="0 0 640 480"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="100%" height="100%" fill="url(#gradient)" rx="24" />
            <g transform="translate(60, 60)">
              <rect x="0" y="200" width="40" height="100" fill="#34D399" rx="8" />
              <rect x="60" y="160" width="40" height="140" fill="#3B82F6" rx="8" />
              <rect x="120" y="100" width="40" height="200" fill="#8B5CF6" rx="8" />
              <rect x="180" y="60" width="40" height="240" fill="#F59E0B" rx="8" />
              <line
                x1="0"
                y1="300"
                x2="220"
                y2="300"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              <text x="0" y="320" fill="white" fontSize="14">2020</text>
              <text x="60" y="320" fill="white" fontSize="14">2021</text>
              <text x="120" y="320" fill="white" fontSize="14">2022</text>
              <text x="180" y="320" fill="white" fontSize="14">2023</text>
            </g>
           
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="640" y2="480" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1E3A8A" />
                <stop offset="1" stopColor="#3B82F6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  )
}
