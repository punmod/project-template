
export default function Section1()
{
    return(
        <section className="py-16 bg-white">
<div className="flex flex-col max-w-7xl px-4 mx-auto lg:flex-row sm:px-6 lg:px-8">
<img className="lg:order-2" width="500" src="./assets/img/working-illustration.svg" alt="" />
<div className="flex flex-col items-center justify-center text-center lg:text-left lg:items-start">
<h1 className="my-6 text-5xl font-semibold text-gray-800">
Let us create Projects
<br />
Fast.
</h1>
<p className="w-4/6 text-lg text-gray-600">
You all have to create project
</p>
<div className="flex flex-col w-full mt-6 space-y-3 lg:space-y-0 lg:space-x-3 lg:flex-row lg:px-0">
<a href="https://flurly.com/p/tailmars" className="inline-flex items-center justify-center px-6 py-3 mx-auto text-lg font-medium text-white rounded-md lg:mx-0 bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600">
<span>Show me how</span>
<svg className="w-5 h-5 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
</svg>
</a>
<a href="documentation.html" className="inline-flex items-center justify-center px-6 py-3 mx-auto text-lg font-medium rounded-md lg:mx-0 text-primary-600 bg-primary-200 hover:bg-primary-300 hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600">
Docs
</a>
</div>
</div>
</div>
</section>
    );
}