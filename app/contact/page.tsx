"use client";
import React from "react";
import Link from "next/link";

export default function ContactPage() {
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
            <h1 className="text-4xl font-bold text-white mb-4">Get in Touch</h1>
            <p className="text-xl text-gray-400">
              I&apos;m always looking to build. Let's connect! Feel free to reach out for opportunities or just to say hello.
            </p>
          </div>

          <div className="max-w-2xl">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border border-gray-700 bg-neutral-900 text-white px-4 py-2 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border border-gray-700 bg-neutral-900 text-white px-4 py-2 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border border-gray-700 bg-neutral-900 text-white px-4 py-2 focus:border-blue-500 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-neutral-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-400">your.email@example.com</p>
            </div>
            <div className="bg-neutral-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
              <p className="text-gray-400">Your Location</p>
            </div>
            <div className="bg-neutral-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">Social</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  LinkedIn
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
