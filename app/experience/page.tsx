"use client";
import { Timeline } from "@/components/ui/timeline";
import React from "react";
import Link from "next/link";

export default function ExperiencePage() {
  const experiences = [
    {
      title: "2023",
      content: (
        <div className="bg-neutral-900 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-2">
            Senior Developer
          </h3>
          <h4 className="text-blue-400 mb-2">Company Name</h4>
          <p className="text-gray-400">
            Description of your role and key achievements.
          </p>
        </div>
      ),
    },
    // Add more experiences as needed
  ];

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
            <h1 className="text-4xl font-bold text-white mb-4">Work Experience</h1>
            <p className="text-xl text-gray-400">
              My professional journey and experiences.
            </p>
          </div>
          
          <Timeline data={experiences} />
        </div>
      </div>
    </main>
  );
}
