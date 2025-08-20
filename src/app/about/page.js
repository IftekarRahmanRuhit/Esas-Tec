import Banner from '../components/Banner';
import Ourwork from '../components/Ourwork';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner with Three.js Animation */}
      <Banner />
      
      {/* Our Work Process */}
      <Ourwork />
      
      {/* Company Story Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
              <p className="text-lg text-slate-600 mb-6">
                Founded with a vision to bridge the gap between technology and business success, REnova Tech has been at the forefront of digital innovation for over a decade.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                Our team of experts combines deep technical knowledge with strategic business insights to deliver solutions that not only work flawlessly but also drive real business growth.
              </p>
              <p className="text-lg text-slate-600">
                We believe in building lasting partnerships with our clients, understanding their unique challenges, and crafting tailored solutions that exceed expectations.
              </p>
            </div>
            <div className="bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-2xl p-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Innovation at Core</h3>
                <p className="text-slate-700">
                  We stay ahead of the curve with cutting-edge technologies and innovative approaches to solve complex business challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Values</h2>
            <p className="text-lg text-slate-600">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-white shadow-lg">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Excellence</h3>
              <p className="text-slate-600">We strive for excellence in every project, delivering quality that exceeds expectations.</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-white shadow-lg">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Collaboration</h3>
              <p className="text-slate-600">We believe in the power of teamwork and building strong partnerships with our clients.</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-white shadow-lg">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Innovation</h3>
              <p className="text-slate-600">We embrace new technologies and creative solutions to solve complex challenges.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Team</h2>
            <p className="text-lg text-slate-600">Meet the experts behind our success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">JD</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">John Doe</h3>
              <p className="text-cyan-600 font-medium mb-2">CEO & Founder</p>
              <p className="text-slate-600">Visionary leader with 15+ years of experience in technology and business strategy.</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">JS</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Jane Smith</h3>
              <p className="text-cyan-600 font-medium mb-2">CTO</p>
              <p className="text-slate-600">Technical expert specializing in scalable architecture and emerging technologies.</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">MJ</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Mike Johnson</h3>
              <p className="text-cyan-600 font-medium mb-2">Lead Developer</p>
              <p className="text-slate-600">Full-stack developer passionate about creating exceptional user experiences.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
