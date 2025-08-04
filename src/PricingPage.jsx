import React from "react";
import { Link } from "react-router-dom";

export default function PricingPage() {
  return (
    <main className="bg-blue-50 min-h-screen font-sans text-blue-800">
      <header className="bg-white py-6 shadow-sm px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-700">Teachsuite</h1>
          <Link to="/" className="text-blue-700 underline hover:text-blue-900 text-sm">
            Back to Home
          </Link>
        </div>
      </header>

      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-blue-900">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="border rounded-2xl p-8 shadow bg-white">
              <h3 className="text-xl font-semibold mb-4">Starter</h3>
              <p className="text-4xl font-extrabold text-blue-700 mb-2">Free</p>
              <p className="mb-6 text-blue-600">
                Try out core Teachsuite features with no commitment.
              </p>
              <ul className="text-left space-y-3 text-blue-800 mb-6">
                <li>✓ 5 pre-built lessons</li>
                <li>✓ 1 teacher account</li>
                <li>✓ Student preview link</li>
              </ul>
              <button className="bg-blue-500 text-white px-6 py-3 rounded-2xl w-full shadow hover:bg-blue-600 transition">
                Start for Free
              </button>
            </div>

            <div className="border-4 border-blue-500 rounded-2xl p-8 shadow-lg bg-white">
              <h3 className="text-xl font-semibold mb-4">Pro</h3>
              <p className="text-4xl font-extrabold text-blue-700 mb-2">
                $499<span className="text-lg font-normal">/year</span>
              </p>
              <p className="mb-6 text-blue-600">
                Ideal for classrooms and small teams looking to scale impact.
              </p>
              <ul className="text-left space-y-3 text-blue-800 mb-6">
                <li>✓ 100+ ready-to-use lessons</li>
                <li>✓ Up to 10 teachers</li>
                <li>✓ Progress tracking and insights</li>
              </ul>
              <button className="bg-blue-500 text-white px-6 py-3 rounded-2xl w-full shadow hover:bg-blue-600 transition">
                Buy Now
              </button>
            </div>

            <div className="border rounded-2xl p-8 shadow bg-white">
              <h3 className="text-xl font-semibold mb-4">District</h3>
              <p className="text-4xl font-extrabold text-blue-700 mb-2">Custom</p>
              <p className="mb-6 text-blue-600">
                Get a tailored plan for your school or district’s needs.
              </p>
              <ul className="text-left space-y-3 text-blue-800 mb-6">
                <li>✓ Unlimited teachers</li>
                <li>✓ Full content library</li>
                <li>✓ Admin tools & onboarding</li>
              </ul>
              <button className="bg-yellow-400 text-blue-700 px-6 py-3 rounded-2xl w-full shadow hover:bg-yellow-300 transition">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-blue-700 text-white py-10 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-2">© 2025 K12 Teachsuite. All rights reserved.</p>
          <p className="text-sm">Part of the Stride K12 family of learning solutions.</p>
        </div>
      </footer>
    </main>
  );
}
