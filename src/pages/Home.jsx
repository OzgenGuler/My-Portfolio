export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center p-10">
      <h1 className="text-4xl font-bold text-blue-400">
        Welcome to My Portfolio
      </h1>
      <h2 className="home-h2"> Hello, I'm Özgen</h2>
      <p className="mt-4 max-w-xl">
        As a Junior Full Stack Developer, I completed a 10-month course, during
        which I encountered and learned many hooks and languages. In this
        situation, I strive to always take myself one step further and continue
        to develop.
      </p>
      <div className="hmt-6 flex gap-4">
        <a
          href="/portfolio"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Portfolio
        </a>
        <a
          href="/contact"
          className="px-4 py-2 border border-blue-600 text-blue-600 rounded"
        >
          Contact
        </a>
      </div>
    </section>
  );
}
