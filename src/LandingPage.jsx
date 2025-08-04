import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <main className="bg-blue-100 min-h-screen font-sans text-blue-700">
      <section className="relative overflow-hidden bg-white py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Empower your teachers with tomorrow’s technology, today.
            </h1>
            <p className="text-lg leading-relaxed mb-6">
              Teachsuite equips K–12 educators with ready-to-use, engaging video content,
              seamless student delivery tools, and data-driven insights — all aligned
              with the K12 brand.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/pricing">
                <button className="bg-blue-500 text-white px-6 py-3 rounded-2xl shadow hover:bg-blue-600 transition">
                  See Plans
                </button>
              </Link>
              <button className="bg-yellow-400 text-blue-700 px-6 py-3 rounded-2xl shadow hover:bg-yellow-300 transition">
                Try It Free
              </button>
            </div>
          </div>
          <div>
            <img
              src="/images/teacher-hero-illustration.png"
              alt="Engaged Teacher Using Teachsuite"
              className="w-full rounded-xl shadow-xl"
            />
          </div>
        </div>
        <div className="absolute -top-10 -left-10 w-96 h-96 bg-blue-300 opacity-20 rounded-full z-0" />
      </section>

      <section className="bg-blue-50 py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">What Makes Teachsuite Different?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white rounded-2xl shadow p-6">
              <img src="/icons/ready-to-use.png" alt="Ready-to-use lessons" className="mb-4 mx-auto w-12" />
              <h3 className="font-semibold text-xl mb-2">Ready-to-Use Lessons</h3>
              <p className="text-blue-700">Get curated video content aligned to your school’s standards — no prep required.</p>
            </div>
            <div className="bg-white rounded-2xl shadow p-6">
              <img src="/icons/insights.png" alt="Data-driven insights" className="mb-4 mx-auto w-12" />
              <h3 className="font-semibold text-xl mb-2">Data-Driven Insights</h3>
              <p className="text-blue-700">Track student engagement and performance in real time.</p>
            </div>
            <div className="bg-white rounded-2xl shadow p-6">
              <img src="/icons/seamless-delivery.png" alt="Seamless delivery" className="mb-4 mx-auto w-12" />
              <h3 className="font-semibold text-xl mb-2">Seamless Delivery</h3>
              <p className="text-blue-700">Deliver content to students with one click — via LMS or direct link.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-yellow-100 py-16 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
          Bring Joy to Learning — for Teachers and Students
        </h2>
        <p className="max-w-2xl mx-auto text-lg mb-6 text-blue-800">
          Teachsuite is built for schools that believe learning should be effective, fun, and flexible. Join hundreds of districts already using it.
        </p>
        <button className="bg-blue-500 text-white px-8 py-4 rounded-2xl text-lg shadow hover:bg-blue-600 transition">
          Schedule a Demo
        </button>
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
