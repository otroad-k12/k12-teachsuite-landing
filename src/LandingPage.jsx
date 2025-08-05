import React from "react";
import { Link } from "react-router-dom";

const K12Logo = ({ color = "#0035F0" }) => (
  <span className="inline-block align-middle" aria-label="K12 TeachSuite logo">
    {/* K12 SVG logo, sized for header */}
    <svg width="121" height="32" viewBox="0 0 121 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
      <path d="M24.8829 31.7883H31.3571V1.17146C27.5243 1.46433 24.1206 2.21237 21.0962 3.31679V10.402C22.4258 9.8163 23.6384 9.31525 24.8829 8.92712V31.7883Z" fill={color}></path>
      <path d="M33.6972 26.3932V31.7848H55.6479V25.4158H43.4227C46.3975 23.2811 49.0283 21.4533 50.9819 19.4703C53.4213 16.9897 55.1019 14.9009 55.1019 10.8748C55.1019 5.13044 51.3258 1.17146 44.1177 1.17146C38.4766 1.17146 33.8497 4.77054 33.5376 11.1218C33.5164 11.5594 33.5341 12.011 33.5341 12.4803H39.9339C39.9197 12.0146 39.902 11.5629 39.9445 11.1218C40.1821 8.60602 41.6747 6.75356 44.2807 6.75356C47.766 6.75356 48.6773 9.27644 48.6773 10.8149C48.6773 13.4189 47.2945 15.1726 45.2806 17.2614C43.2667 19.3503 37.2818 23.8633 33.7007 26.3897L33.6972 26.3932Z" fill={color}></path>
      <path d="M18.8128 11.5241V4.21656C14.6291 6.0902 10.7927 8.43312 6.53451 12.745V1.17499H0V31.7918H6.53451L6.54514 21.845C6.98834 21.1746 7.46699 20.5606 7.97756 19.9219L15.9693 31.7918H23.025L12.3634 16.0582C14.895 13.7788 16.6217 12.8014 18.8164 11.5241H18.8128Z" fill={color}></path>
      <path d="M56.8569 25.4193H58.9914V25.9345H58.2291V27.9493H57.6228V25.9345H56.8569V25.4193Z" fill={color}></path>
      <path d="M60.1862 25.4193L60.7571 27.3071L60.7819 27.4376L60.8067 27.3106L61.3882 25.4229H62.2249V27.9493H61.6399V26.2027L61.6576 25.871L61.5761 26.2097L61.0336 27.9493H60.523L59.9806 26.2133L59.9026 25.8851L59.9203 26.2027V27.9493H59.3317V25.4193H60.1898H60.1862Z" fill={color}></path>
      <path d="M68.3552 27.4094C69.4615 28.8067 70.5889 29.4842 72.4326 29.4842C73.8899 29.4842 74.6664 28.7679 74.6664 27.8117C74.6664 26.4885 73.0248 26.2521 71.2343 25.9557C68.8906 25.5499 66.6214 24.9642 66.6214 22.1908C66.6214 20.0066 68.412 18.1506 71.6775 18.1506C74.0955 18.1506 75.8861 18.8493 77.4355 20.8146L75.0564 22.5965C74.17 21.3474 73.1737 20.6488 71.4044 20.6488C69.9295 20.6488 69.1707 21.4215 69.1707 22.2472C69.1707 22.907 69.504 23.3481 70.1493 23.5528C70.8123 23.7539 71.6455 23.9374 72.6418 24.1032C74.8188 24.4525 77.2192 25.0947 77.2192 27.8681C77.2192 29.0996 76.776 30.1087 75.8719 30.8603C74.9677 31.6119 73.7516 32 72.2199 32C69.3586 32 67.3483 30.9908 66.0932 29.3007L68.3623 27.4094H68.3552Z" fill={color}></path>
      <path d="M88.4835 21.5168V31.7989H85.8066V29.4842C85.1223 31.1567 83.8707 32 82.3922 32C80.0131 32 78.7402 30.3663 78.7402 27.9246V21.5168H81.4349V27.173C81.4349 28.8067 82.0057 29.7629 83.5551 29.7629C85.0124 29.7629 85.7889 28.4574 85.7889 26.6226V21.5168H88.4835Z" fill={color}></path>
      <path d="M91.7809 16.6298C92.8339 16.6298 93.4615 17.3285 93.4615 18.3376C93.4615 19.3468 92.8339 19.989 91.7809 19.989C90.6747 19.989 90.0825 19.308 90.0825 18.3376C90.0825 17.3673 90.6747 16.6298 91.7809 16.6298ZM93.0715 21.5168V31.7989H90.3591V21.5168H93.0715Z" fill={color}></path>
      <path d="M102.499 31.506C101.928 31.8165 101.336 31.9824 100.471 31.9824C98.1097 31.9824 97.1312 30.7333 97.1312 28.4009V23.7186H94.7875V21.5133H97.1666V18.9798L99.6592 17.512V21.5168H102.499V23.7221H99.6592V28.0939C99.6592 29.2125 100.177 29.71 101.134 29.71C101.67 29.71 101.982 29.6006 102.499 29.3783V31.5095V31.506Z" fill={color}></path>
      <path d="M113.664 29.4489C112.703 30.9908 111.228 31.9824 108.959 31.9824C105.378 31.9824 103.534 29.7594 103.534 26.7108C103.534 23.828 105.563 21.3122 108.867 21.3122C112.356 21.3122 113.941 23.7539 113.941 26.4179V27.4094H106.137C106.357 28.8773 107.318 29.7594 108.924 29.7594C110.122 29.7594 110.789 29.3007 111.395 28.2527L113.664 29.4454V29.4489ZM106.19 25.7581H111.303C111.228 24.509 110.548 23.5175 108.867 23.5175C107.392 23.5175 106.431 24.3431 106.19 25.7581Z" fill={color}></path>
      <path d="M65.3344 3.58143V1.21381H76.4604V3.58143H72.2518V14.6186H69.5395V3.58143H65.3309H65.3344Z" fill={color}></path>
      <path d="M85.7038 12.2651C84.7429 13.807 83.2679 14.7985 80.9988 14.7985C77.4177 14.7985 75.574 12.5756 75.574 9.52696C75.574 6.64417 77.6021 4.12835 80.9066 4.12835C84.3954 4.12835 85.9803 6.57007 85.9803 9.23409V10.2256H78.1765C78.3963 11.6935 79.3572 12.5756 80.9633 12.5756C82.1617 12.5756 82.8283 12.1169 83.4346 11.0689L85.7038 12.2616V12.2651ZM78.2297 8.57427H83.3424C83.2679 7.32517 82.5872 6.33367 80.9066 6.33367C79.4316 6.33367 78.4708 7.15934 78.2297 8.57427Z" fill={color}></path>
      <path d="M87.2886 12.2122C87.2886 11.0372 87.8063 10.3562 88.5615 9.86217C89.299 9.40346 90.313 9.08943 92.3056 8.70482C93.153 8.53898 93.7097 8.3555 93.9472 8.17202C94.2061 7.97089 94.3337 7.73095 94.3337 7.42044C94.3337 6.76061 93.816 6.22781 92.49 6.22781C91.1639 6.22781 90.3307 6.96174 89.962 8.13673L87.5262 7.43809C88.3949 5.17984 90.3307 4.13188 92.6176 4.13188C95.1811 4.13188 96.8971 5.38097 96.8971 8.00618V11.5312C96.8971 12.4874 97.1737 12.7626 97.858 12.7626C98.1346 12.7626 98.3757 12.6885 98.5778 12.6144V14.3398C98.209 14.5798 97.5637 14.7985 96.805 14.7985C95.1634 14.7985 94.4436 14.0646 94.3514 12.4662C93.7061 13.9341 92.3021 14.7985 90.5506 14.7985C88.5579 14.7985 87.2851 13.8247 87.2851 12.2086L87.2886 12.2122ZM94.4117 10.0457V9.42111C94.1706 9.71397 93.5998 9.91862 92.5113 10.155C90.7207 10.5396 90.001 10.8537 90.001 11.7358C90.001 12.4874 90.5541 12.8367 91.6071 12.8367C93.4721 12.8367 94.4117 11.1642 94.4117 10.0457Z" fill={color}></path>
      <path d="M106.906 8.52134C106.704 7.2546 106.077 6.35484 104.619 6.35484C102.868 6.35484 102.074 7.66038 102.074 9.47756C102.074 11.2947 102.776 12.5438 104.619 12.5438C106.094 12.5438 106.686 11.6617 106.906 10.2856L109.675 10.836C109.434 11.9934 108.881 12.9284 108.034 13.6835C107.186 14.4351 106.041 14.8021 104.619 14.8021C101.17 14.8021 99.3436 12.5791 99.3436 9.47756C99.3436 6.37601 101.372 4.13541 104.694 4.13541C106.226 4.13541 107.371 4.48473 108.126 5.20101C108.881 5.9173 109.381 6.81707 109.658 7.9356L106.91 8.52487L106.906 8.52134Z" fill={color}></path>
      <path d="M111.072 14.6186V0H113.749V6.5736C114.434 4.93991 115.706 4.13188 117.274 4.13188C118.398 4.13188 119.302 4.49884 119.986 5.25042C120.67 6.00199 121 6.97585 121 8.2073V14.6151H118.305V8.95887C118.305 7.32517 117.642 6.36895 116.072 6.36895C114.501 6.36895 113.763 7.5263 113.763 9.41758V14.6151H111.069L111.072 14.6186Z" fill={color}></path>
    </svg>
  </span>
);

export default function LandingPage() {
  return (
    <main className="bg-blue-50 min-h-screen font-sans text-blue-900">
      {/* Header with logo and nav */}
      <header className="bg-white shadow-sm py-6 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <K12Logo />
            <span className="text-2xl font-bold tracking-tight text-blue-900"></span>
          </div>
          <nav className="hidden md:flex gap-8 text-base font-medium">
            <Link to="/" className="hover:text-blue-600 transition">Home</Link>
            <Link to="/pricing" className="hover:text-blue-600 transition">Pricing</Link>
            <a href="https://k12teachsuite.com/login" className="hover:text-blue-600 transition" target="_blank" rel="noopener noreferrer">Login</a>
            <a href="https://k12teachsuite.com/sign-up" className="ml-2 bg-blue-600 text-white px-5 py-2 rounded-xl font-semibold shadow hover:bg-blue-700 transition" target="_blank" rel="noopener noreferrer">Sign Up</a>
          </nav>
        </div>
      </header>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-20 px-6 md:px-12 lg:px-24 border-b border-blue-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-8 text-blue-900 tracking-tight">Empower your teachers with tomorrow’s technology, today.</h1>
            <p className="text-xl leading-relaxed mb-8 text-blue-800">Teachsuite equips K–12 educators with ready-to-use, engaging video content, seamless student delivery tools, and data-driven insights — all aligned with the K12 brand.</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/pricing">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl shadow-lg font-semibold text-lg hover:bg-blue-700 transition">See Plans</button>
              </Link>
              <a href="https://k12teachsuite.com/sign-up" target="_blank" rel="noopener noreferrer">
                <button className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-2xl shadow-lg font-semibold text-lg hover:bg-yellow-300 transition">Try It Free</button>
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <video
              className="w-full max-w-md rounded-xl shadow-xl border border-blue-100 bg-yellow-100 p-4"
              controls
              poster="/images/teacher-hero-illustration.png"
              aria-label="K12 TeachSuite testimonial video"
            >
              <source src="/assets/TeachSuite_Testimonial_Video-Thk3MePP.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="absolute -top-10 -left-10 w-96 h-96 bg-blue-200 opacity-20 rounded-full z-0" />
      </section>
      {/* Features Section */}
      <section className="bg-blue-50 py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-14 text-blue-900 tracking-tight">What Makes Teachsuite Different?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
              <img src="/icons/ready_to_use_lessons.svg" alt="Ready-to-use lessons" className="mb-6 mx-auto w-16 h-16" />
              <h3 className="font-semibold text-2xl mb-3 text-blue-900">Ready-to-Use Lessons</h3>
              <p className="text-blue-800 text-lg">Get curated video content aligned to your school’s standards — no prep required.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
              <img src="/icons/data_driven_insights.svg" alt="Data-driven insights" className="mb-6 mx-auto w-16 h-16" />
              <h3 className="font-semibold text-2xl mb-3 text-blue-900">Data-Driven Insights</h3>
              <p className="text-blue-800 text-lg">Track student engagement and performance in real time.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
              <img src="/icons/seamless_delivery.svg" alt="Seamless delivery" className="mb-6 mx-auto w-16 h-16" />
              <h3 className="font-semibold text-2xl mb-3 text-blue-900">Seamless Delivery</h3>
              <p className="text-blue-800 text-lg">Deliver content to students with one click — via LMS or direct link.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Call to Action Section */}
      <section className="bg-yellow-100 py-16 text-center px-6 border-t border-blue-100">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8 tracking-tight">Bring Joy to Learning — for Teachers and Students</h2>
        <p className="max-w-2xl mx-auto text-xl mb-8 text-blue-800">Teachsuite is built for schools that believe learning should be effective, fun, and flexible. Join hundreds of districts already using it.</p>
        <button className="bg-blue-600 text-white px-10 py-5 rounded-2xl text-xl font-semibold shadow-lg hover:bg-blue-700 transition">Schedule a Demo</button>
      </section>
      {/* Footer */}
      <footer className="bg-blue-900 text-white py-10 px-6 mt-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <K12Logo color="#fff" />
            <span className="text-lg font-bold tracking-tight text-white"></span>
          </div>
          <div className="text-center md:text-right">
            <p className="mb-1">© 2025 K12 Teachsuite. All rights reserved.</p>
            <p className="text-sm opacity-80">Part of the Stride K12 family of learning solutions.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
