"use client";
import React from "react";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black">
      <header className="w-full fixed top-0 left-0 flex justify-end p-4 z-50">
        <nav className="flex space-x-6">
          <Link
            href="/"
            className="text-neutral-200 hover:text-neutral-400 cursor-pointer transition-colors"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="text-neutral-200 hover:text-neutral-400 cursor-pointer transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/experience"
            className="text-neutral-200 hover:text-neutral-400 cursor-pointer transition-colors"
          >
            Experience
          </Link>
          <Link
            href="/contact"
            className="text-neutral-200 hover:text-neutral-400 cursor-pointer transition-colors"
          >
            Contact
          </Link>
        </nav>
      </header>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-4">Projects</h1>
            <p className="text-xl text-gray-400">
              Here are some of the projects I&apos;ve worked on.
            </p>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example Project Card - Repeat as needed */}
            <div className="bg-neutral-900 rounded-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Project Name
                </h3>
                <p className="text-gray-400 mb-4">
                  Brief description of the project and what technologies were used.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-500 rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-green-500/10 text-green-500 rounded-full text-sm">
                    Node.js
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
