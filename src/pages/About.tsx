export default function About() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">About</h1>
      <p className="text-gray-600 mb-4">
        Welcome to my minimal blog! This is a simple React-based blog built with modern web technologies.
      </p>
      <p className="text-gray-600 mb-4">
        I write about technology, development, and anything else that interests me. The goal is to keep things simple and focused on content.
      </p>
      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Technologies Used</h2>
      <ul className="list-disc list-inside text-gray-600 space-y-2">
        <li>React with TypeScript</li>
        <li>Vite for fast development</li>
        <li>Tailwind CSS for styling</li>
        <li>React Router for navigation</li>
        <li>Markdown for content</li>
      </ul>
    </div>
  );
} 