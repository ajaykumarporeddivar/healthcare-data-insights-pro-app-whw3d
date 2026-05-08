export const metadata = { 
  title: 'Healthcare Data Insights — Simplify Complex Healthcare Data', 
  description:Analyze and understand complex data with Healthcare Data Insights Pro' 
}

<div className="fixed top-0 z-50 bg-white/90 backdrop-blur border-b border-zinc100">
  < className="container mx-auto px-6 flex justify-between items-center py-4">
    <div className="flex items-center">
      <div className="bg-zinc-900 text-zinc-100 rounded-full w-8 h-8 flex justify-center items-center mr-2">H</div>
      <h2 className="text-zinc-900 font-bold text-lg">Healthcare Data Insights Pro</h2>
    </div>
    <ul className="flex items-center">
      <li className="mr-4"><a href="#" className="text-zinc-600 hover:text-zinc-900">Features</a></li>
      <li className="mr-4"><a href="#" className="text-zinc-600 hover:text-zinc-900">Pricing</a></li>
      <li><a href="/dashboard" className="bg-zinc-900 text-white hover:bg-zinc-700 rounded-lg px-4 py-2">Open Dashboard →</a></li>
    </ul>
  </nav>
</div>

<section className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24">
  <div className="bg-zinc-100 text-zinc-900 rounded-full w-8 h-8 flex justify-center items-center mb-2">AI</div>
  <h1 className="font-black text-5xl md:text-7xl tracking-tight leading-none">Simplify Complex Healthcare Data</h1>
  <p className="text-zinc-400 text-xl mt-4">Analyze and understand complex healthcare data with our intuitive platform.</p>
  <div className="mt-8 flex flex-col md:flex-row justify-center">
    <a href="/dashboard" className="bg-white text-zinc-900 font-bold rounded-xl px-8 py-4 shadow-lg hover:shadow-xl">Start Free Today →</a>
    <a href="/dashboard" className="border border-zinc-600 text-zinc-300 rounded-xl px-8 py-4 hover:bg-zinc-800 ml-0 md:ml-4 mt-4 md:mt-0">See It Live →</a>
  </div>
  <div className="rounded-2xl bg-zinc-800/50 border border-zinc-700 p-6 max-w-3xl mx-auto mt-12">
    <div className="bg-zinc-700 h-4 w-4 animate-pulse rounded-full mb-2"></div>
    <div className="flex flex-wrap justify-center mb-4">
      <div className="bg-indigo-500 w-20 h-20 rounded-md mr-2 mb-2"></div>
      <div className="bg-emerald-500 w-20 h-20 rounded-md mb-2"></div>
    </div>
    <div className="bg-zinc-700 h-4 w-40 animate-pulse rounded-full mb-2"></div>
  </div>
</section>

<section className="bg-zinc-800/30 border-y border-zinc-700/50 py-8">
  <div className="container mx-auto px-6 flex flex-wrap justify-center">
    <div className="flex flex-col items-center text-center mb-4 md:mb-0 md:mr-8 w-full md:w-1/2 xl:w-1/4">
      <h2 className="font-black text-4xl">10,000+</h2>
      <p className="text-zinc-400 text-sm">Users</p>
    </div>
    <div className="flex flex-col items-center text-center mb-4 md:mb-0 md:mr-8 w-full md:w-1/2 xl:w-1/4">
      <h2 className="font-black text-4xl">99.9%</h2>
      <p className="text-zinc-400 text-sm">Uptime</p>
    </div>
    <div className="flex flex-col items-center text-center mb-4 md:mb-0 md:mr-8 w-full md:w-1/2 xl:w-1/4">
      <h2 className="font-black text-4xl">$50M+</h2>
      <p className="text-zinc-400 text-sm">Processed</p>
    </div>
    <div className="flex flex-col items-center text-center w-full md:w-1/2 xl:w-1/4">
      <h2 className="font-black text-4xl">4.9★</h2>
      <p className="text-zinc-400 text-sm">Rating</p>
    </div>
  </div>
</section>

<section className="bg-white py-24 px-6">
  <h2 className="text-zinc-900 font-black text-4xl text-center">Everything you need to analyze healthcare data</h2>
  <p className="text-zinc-500 mt-3 text-center max-w-2xl mx-auto">Our platform provides a comprehensive set of tools to help you make data-driven decisions.</p>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
    <div className="bg-white border border-zinc-200 rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="bg-indigo-100 rounded-xl p-3 mb-4">
        <Lucide.User />
      </div>
      <h3 className="font-bold text-lg">User Authentication</h3>
      <p className="text-zinc-600 text-sm">Securely manage user access with our robust authentication system.</p>
    </div>
    <div className="bg-white border border-zinc-200 rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="bg-emerald-100 rounded-xl p-3 mb-4">
        <Lucide.ChartBar />
      </div>
      <h3 className="font-bold text-lg">Data Visualization</h3>
      <p className="text-zinc-600 text-sm">Gain insights with our interactive and customizable visualizations.</p>
    </div>
    <div className="bg-white border border-zinc-200 rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="bg-zinc-100 rounded-xl p-3 mb-4">
        <Lucide.Lock />
      </div>
      <h3 className="font-bold text-lg">Data Security</h3>
      <p className="text-zinc-600 text-sm">Protect your data with our enterprise-grade security measures.</p>
    </div>
  </div>
</section>

<section className="bg-zinc-50 py-24 px-6">
  <h2 className="text-zinc-900 font-black text-4xl text-center">How Healthcare Data Insights Pro works</h2>
  <div className="flex flex-col md:flex-row justify-center mt-12">
    <div className="flex flex-col items-center text-center mb-8 md:mb-0 md:mr-12 w-full md:w-1/2 xl:w-1/4">
      <div className="bg-indigo-500 rounded-full w-12 h-12 flex justify-center items-center mb-2">1</div>
      <h3 className="font-bold text-lg">Collect and Integrate Data</h3>
      <p className="text-zinc-600 text-sm">Gather data from various sources and integrate it into our platform.</p>
      <Lucide.ChevronRight className="text-zinc-500 mt-4" />
    </div>
    <div className="flex flex-col items-center text-center mb-8 md:mb-0 md:mr-12 w-full md:w-1/2 xl:w-1/4">
      <div className="bg-indigo-500 rounded-full w-12 h-12 flex justify-center items-center mb-2">2</div>
      <h3 className="font-bold text-lg">Analyze and Visualize Data</h3>
      <p className="text-zinc-600 text-sm">Gain insights with our interactive and customizable visualizations.</p>
      <Lucide.ChevronRight className="text-zinc-500 mt-4" />
    </div>
    <div className="flex flex-col items-center text-center w-full md:w-1/2 xl:w-1/4">
      <div className="bg-indigo-500 rounded-full w-12 h-12 flex justify-center items-center mb-2">3</div>
      <h3 className="font-bold text-lg">Make Data-Driven Decisions</h3>
      <p className="text-zinc-600 text-sm">Use our platform to inform your decisions and drive better outcomes.</p>
    </div>
  </div>
</section>

<section className="bg-white py-24 px-6">
  <h2 className="text-zinc-900 font-black text-4xl text-center">Simple, transparent pricing</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
    <div className="bg-white border border-zinc-200 rounded-2xl shadow-sm p-6">
      <h3 className="font-bold text-lg">Free</h3>
      <p className="text-zinc-600 text-sm">$0/mo</p>
      <ul className="list-none mt-4">
        <li className="text-zinc-600 text-sm mb-2">Limited features</li>
      </ul>
      <a href="/dashboard" className="bg-zinc-900 text-white hover:bg-zinc-700 rounded-lg px-4 py-2">Get Started</a>
    </div>
    <div className="bg-zinc-900 text-white rounded-2xl shadow-sm p-6 scale-105">
      <h3 className="font-bold text-lg">Pro</h3>
      <p className="text-white text-sm">$499/mo</p>
      <ul className="list-none mt-4">
        <li className="text-white text-sm mb-2">Full features</li>
      </ul>
      <a href="/dashboard" className="bg-white text-zinc-900 hover:bg-zinc-100 rounded-lg px-4 py-2">Get Started</a>
    </div>
    <div className="bg-white border border-zinc-200 rounded-2xl shadow-sm p-6">
      <h3 className="font-bold text-lg">Enterprise</h3>
      <p className="text-zinc-600 text-sm">Custom</p>
      <ul className="list-none mt-4">
        <li className="text-zinc-600 text-sm mb-2">Everything in Pro</li>
        <li className="text-zinc-600 text-sm mb-2">SLA and support</li>
      </ul>
      <a href="#" className="bg-zinc-900 text-white hover:bg-zinc-700 rounded-lg px-4 py-2">Contact Us</a>
    </div>
  </div>
</section>

<section className="bg-zinc-50 py-24 px-6">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="bg-white border border-zinc-200 rounded-2xl shadow-sm p-6">
      <blockquote className="text-zinc-600 text-lg mb-4">
        Healthcare Data Insights Pro has been instrumental in helping us analyze and understand our patient data.
      </blockquote>
      <div className="flex items-center">
        <div className="bg-zinc-100 rounded-full w-8 h-8 flex justify-center items-center mr-2">
          <Lucide.Star className="text-amber-500" />
          <Lucide.Star className="text-amber-500" />
          <Lucide.Star className="text-amber-500" />
          <Lucide.Star className="text-amber-500" />
          <Lucide.Star className="text-amber-500" />
        </div>
        <p className="text-zinc-600 text-sm">Dr. Rachel Thompson, Chief Medical Officer</p>
      </div>
    </div>
    <div className="bg-white border border-zinc-200 rounded-2xl shadow-sm p-6">
      <blockquote className="text-zinc-600 text-lg mb-4">
        The platform has allowed us to make data-driven decisions and drive better outcomes for our patients.
      </blockquote>
      <div className="flex items-center">
        <div className="bg-zinc-100 rounded-full w-8 h-8 flex justify-center items-center mr-2">
          <Lucide.Star className="text-amber-500" />
          <Lucide.Star className="text-amber-500" />
          <Lucide.Star className="text-amber-500" />
          <Lucide.Star className="text-amber-500" />
          <Lucide.Star className="text-amber-500" />
        </div>
        <p className="text-zinc-600 text-sm">Ms. Karen Lee, Research Coordinator</p>
      </div>
    </div>
    <div className="bg-white border border-zinc-200 rounded-2xl shadow-sm p-6">
      <blockquote className="text-zinc-600 text-lg mb-4">
        The intuitive interface and customizable visualizations have made it easy for our team to use.
      </blockquote>
      <div className="flex items-center">
        <div className="bg-zinc-100 rounded-full w-8 h-8 flex justify-center items-center mr-2">
          <Lucide.Star className="text-amber-500" />
          <Lucide.Star className="text-amber-500" />
          <Lucide.Star className="text-amber-500" />
          <Lucide.Star className="text-amber-500" />
          <Lucide.Star className="text-amber-500" />
        </div>
        <p className="text-zinc-600 text-sm">Dr. John Smith, Physician</p>
      </div>
    </div>
  </div>
</section>

<section className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white py-24 px-6 text-center">
  <h2 className="font-bold text-4xl">Launch Your Dashboard →</h2>
  <p className="text-zinc-400 text-sm mt-4">Start analyzing and understanding your healthcare data today.</p>
  <a href="/dashboard" className="bg-white text-indigo-900 hover:bg-indigo-100 rounded-lg px-4 py-2 mt-4">Launch Dashboard →</a>
</section>

<footer className="bg-zinc-900 text-zinc-400 py-12 px-6">
  <div className="container mx-auto flex justify-between">
    <div className="flex items-center">
      <div className="bg-zinc-100 text-zinc-900 rounded-full w-8 h-8 flex justify-center items-center mr-2">H</div>
      <h2 className="text-zinc-100 font-bold text-lg">Healthcare Data Insights Pro</h2>
      <p className="text-zinc-400 text-sm ml-2">Built with NEXUS OS</p>
    </div>
    <ul className="flex items-center">
      <li className="mr-4"><a href="#" className="text-zinc-400 hover:text-zinc-100">Features</a></li>
      <li className="mr-4"><a href="#" className="text-zinc-400 hover:text-zinc-100">Pricing</a></li>
      <li><a href="/dashboard" className="text-zinc-400 hover:text-zinc-100">Dashboard</a></li>
    </ul>
  </div>
  <div className="container mx-auto text-center mt-8">
    <p className="text-zinc-400 text-sm">&copy; 2025 Healthcare Data Insights Pro. All rights reserved.</p>
  </div>
</footer>