
import Navbar from "./components/navbar";
import Section1 from "./components/section1";
import Section2 from "./components/section2";
import Section3 from "./components/section3";
export default function App() {

 
 return (
<>
<div className="bg-gray-100">
<Navbar>fdgd</Navbar>
<Section1></Section1>
<Section2></Section2>

<Section3></Section3>




<section className="w-full pt-16 pb-20 bg-gray-100">
<div className="flex flex-col max-w-6xl mx-auto lg:flex-row">
<div className="px-4 bg-gray-100 lg:w-1/2 sm:px-6 md:px-8 lg:order-2">
<div className="flex flex-col justify-center h-full max-w-xl py-6 mx-auto md:py-8 lg:py-20">
<h2 className="text-3xl text-gray-800">
We offer a wide range of services.
<br />
<span className="flex justify-start mt-2">
<span className="inline-block overflow-hidden text-complementary-700">
We do
<span className="typewriter-effect" data-wait="2000" data-speed="70" data-words='["design","branding", "UI/UX", "web development", "marketing"]'></span>

</span>
</span>
</h2>
<p className="mt-6 text-lg text-gray-600">
Our team of experts has seen pretty much everything under the sun, so we can help you
level up your business with an incedible digital solution, no matter what you do.
</p>
<ul className="grid grid-cols-1 gap-4 py-8 text-complementary-700 sm:grid-cols-2">
<li className="flex">
<div className="w-6 h-6 p-1 mr-2 rounded-full bg-complementary-200">
<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
</svg>
</div>
Digital Strategy
</li>
<li className="flex">
<div className="w-6 h-6 p-1 mr-2 rounded-full bg-complementary-200">
<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
</svg>
</div>
Web & App Development
</li>
<li className="flex">
<div className="w-6 h-6 p-1 mr-2 rounded-full bg-complementary-200">
<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
</svg>
</div>
SEO Strategy & Systems
</li>
<li className="flex">
<div className="w-6 h-6 p-1 mr-2 rounded-full bg-complementary-200">
<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
</svg>
</div>
Identity Design
</li>
</ul>
</div>
</div>
<div className="px-4 pt-6 sm:px-6 md:px-8 lg:w-1/2 sm:p-0">
<div className="flex flex-col max-w-xl mx-auto overflow-hidden transition duration-150 ease-in-out bg-white rounded-lg lg:max-w-md focus-within:-translate-y-2 focus-within:shadow-lg">
<img src="https://source.unsplash.com/wD1LRb9OeEo" alt="" className="w-full h-auto" />
<div className="w-full h-[6vw] md:h-8 transform -translate-y-1/2 -skew-y-3 bg-white -mb-6"></div>
<form className="p-6">
<div className="mb-4">
<label htmlFor="name" className="text-gray-700"> Name </label>
<input type="text" name="name" id="name" className="w-full py-3 mt-1 text-base border border-gray-300 rounded-md shadow-sm focus:ring-complementary-500 focus:border-complementary-500" placeholder="Full Name" />
</div>
<div className="mb-8">
<label htmlFor="email" className="text-gray-700"> Email </label>
<input type="text" name="email" id="email" className="w-full py-3 mt-1 text-base border border-gray-300 rounded-md shadow-sm focus:ring-complementary-500 focus:border-complementary-500" placeholder="example@email.com" />
</div>
<a href="https://flurly.com/p/tailmars" className="flex items-center justify-center px-6 py-3 text-lg font-medium text-white rounded-md bg-complementary-600 hover:bg-complementary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-complementary-600">
See what we're about
</a>
</form>
</div>
</div>
</div>
</section>

<section className="w-full py-8 bg-gray-100 sm:py-16">
<div className="flex flex-col max-w-6xl px-4 mx-auto sm:px-6 md:px-8 sm:flex-row">
<div className="relative flex mx-auto sm:w-3/5 sm:order-2">
<div className="relative mx-auto">
<div className="relative bottom-0 left-0 w-full">
<div className="relative w-full h-full -ml-2 sm:ml-0 skewed-3d-left">
<img src="assets/img/dashboard-example.png" alt="" className="relative top-0 left-0 w-full h-auto border shadow-xl rounded-xl" />
</div>
</div>
</div>
</div>
<div className="flex items-center w-full pt-12 sm:w-2/5 sm:pt-0">
<div className="mx-auto sm:pr-6">
<h1 className="text-3xl text-gray-800">
Let's work
<span className="text-primary-600"> together</span>
</h1>
<div className="flex items-start gap-4 mt-8">
<div className="text-primary-600">
<svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
</svg>
</div>
<div>
<h2 className="text-lg text-gray-800">We'll be part of the team</h2>
<p className="mt-1 text-lg text-gray-400">
Don't call us a vendor or contractor, we're an extension of your team.
</p>
</div>
</div>
<div className="flex items-start gap-4 mt-8">
<div className="text-primary-600">
<svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
</svg>
</div>
<div>
<h2 className="text-lg text-gray-800">See real results</h2>
<p className="mt-1 text-lg text-gray-400">
We aim to overdeliver on time and on budget.
</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full pt-20 bg-gray-100 pb-14">
<div className="max-w-6xl px-4 mx-auto mb-12 sm:px-6 md:px-8">
<h1 className="mb-3 text-3xl text-center text-gray-800">Our customers are our biggest fans</h1>
<h2 className="mb-6 text-lg text-center text-gray-600">
People have said some great things about Tailmars since its launch.
</h2>
<div className="flex flex-col gap-8 md:flex-row">
<div className="flex flex-col justify-between flex-1 p-6 mt-4 text-center bg-white shadow-lg rounded-xl">
<img alt="" src="https://source.unsplash.com/OhKElOkQ3RE" className="flex-shrink-0 object-cover object-center w-20 h-20 mx-auto rounded-full" />
<p className="my-8 text-lg text-gray-800">
"I was truly confident that our website was done to the standards that we require and
our customers demand."
</p>
<p className="text-sm text-gray-600 uppercase">Chance McDaniel</p>
</div>
<div className="flex flex-col justify-between flex-1 p-6 mt-4 text-center bg-white shadow-lg rounded-xl">
<img alt="" src="https://source.unsplash.com/jzY0KRJopEI" className="flex-shrink-0 object-cover object-center w-20 h-20 mx-auto rounded-full" />
<p className="my-8 text-lg text-gray-800">
"They helped us through the whole process. They asked for our input and opinions at
every step so we never felt in the dark. The end product looks AMAZING, we get so many
compliments from our customers."
</p>
<p className="text-sm text-gray-600 uppercase">Claire Heaton</p>
</div>
</div>
</div>
<div className="relative w-full transform translate-y-1/2 -skew-y-3 bg-white h-[6vw] -mb-14"></div>
</section>

<section className="w-full py-8 bg-white sm:py-16">
<div className="flex flex-col max-w-6xl px-4 mx-auto sm:px-6 md:px-8 sm:flex-row">
<div className="relative flex px-8 mx-auto sm:w-1/2 sm:order-2">
<img src="assets/img/meditation-illustration.svg" alt="" className="w-full h-auto" />
</div>
<div className="flex items-center w-full pt-12 sm:w-1/2 sm:pt-0">
<div className="mx-auto sm:pr-6">
<h1 className="text-3xl text-gray-800">
We focus on the digital impact
<br />
<span className="text-primary-600">So you can focus on your business</span>
</h1>
<p className="mt-6 text-lg text-gray-600">
Our responsive, clean, and modern websites are built so that you can focus on running
your business and not worry about your online presence.
</p>
<div className="flex flex-row justify-between gap-2 mt-8">
<div>
<h3 className="text-xl text-primary-600">100%</h3>
<p className="text-gray-800">Satisfaction</p>
</div>
<div>
<h3 className="text-xl text-primary-600">24/7</h3>
<p className="text-gray-800">Support</p>
</div>
<div>
<h3 className="text-xl text-primary-600">3.1x</h3>
<p className="text-gray-800">Faster</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full">
<div className="relative w-full h-full">
<div className="max-w-6xl px-4 pb-16 mx-auto sm:px-6 md:px-8">
<div className="relative z-30 mt-16 mb-8 text-center">
<h2 className="mb-4 text-4xl font-medium">Simple pricing</h2>
<p className="mb-8 text-gray-800 sm:mb-20">
For a one-time purchase, you'll get access to lifetime releases of landing pages and
components as we advance our theme.
</p>
<div className="space-y-8 md:space-y-0 md:flex md:justify-center md:space-x-10">
<div className="flex-1 p-12 transition duration-100 ease-in-out bg-white border border-gray-100 rounded-md shadow-lg hover:-translate-y-2">
<div>
<h3 className="text-3xl font-bold">$5</h3>
<p className="font-medium text-gray-600">Lifetime License</p>
</div>
<hr className="w-full mx-auto my-12 divider" />
<ul className="space-y-3 text-gray-500">
<li>For personal or commercial use</li>
<li>Access to all updated and future releases</li>
<li>Flexible and customizable</li>
<li>Beautiful designs</li>
</ul>
<a href="https://flurly.com/p/tailmars" className="inline-flex px-5 py-3 mt-8 font-medium text-white rounded-md bg-primary-600 hover:bg-primary-700 whitespace-nowrap">
Purchase Now
</a>
</div>
<div className="relative flex-1 p-12 transition duration-100 ease-in-out transform border rounded-md shadow-lg md:scale-110 bg-primary-50 border-primary-500 hover:-translate-y-2">
<div className="absolute top-0 px-3 py-1 text-sm tracking-tighter text-white uppercase -translate-y-1/2 rounded-full right-6 bg-primary-600">
Most popular
</div>
<div>
<h3 className="text-3xl font-bold">$5</h3>
<p className="font-medium text-gray-600">Lifetime License</p>
</div>
<hr className="w-full mx-auto my-12 divider" />
<ul className="space-y-3 text-gray-500">
<li>For personal or commercial use</li>
<li>Access to all updated and future releases</li>
<li>Flexible and customizable</li>
<li>Beautiful designs</li>
</ul>
<a href="https://flurly.com/p/tailmars" className="inline-flex px-5 py-3 mt-8 font-medium text-white rounded-md bg-primary-600 hover:bg-primary-700 whitespace-nowrap">
Purchase Now
</a>
</div>
<div className="flex-1 p-12 transition duration-100 ease-in-out bg-white border border-gray-100 rounded-md shadow-lg hover:-translate-y-2">
<div>
<h3 className="text-3xl font-bold">$5</h3>
<p className="font-medium text-gray-600">Lifetime License</p>
</div>
<hr className="w-full mx-auto my-12 divider" />
<ul className="space-y-3 text-gray-500">
<li>For personal or commercial use</li>
<li>Access to all updated and future releases</li>
<li>Flexible and customizable</li>
<li>Beautiful designs</li>
</ul>
<a href="https://flurly.com/p/tailmars" className="inline-flex px-5 py-3 mt-8 font-medium text-white rounded-md bg-primary-600 hover:bg-primary-700 whitespace-nowrap">
Purchase Now
</a>
</div>
</div>
</div>
</div>
<div className="absolute bottom-0 w-full h-1/2">
<div className="w-full absolute top-0 transform -translate-y-1/2 skew-y-3 bg-white h-[6vw] z-10"></div>
<div className="absolute top-0 z-0 w-full h-full bg-gray-700"></div>
</div>
</div>
</section>

<section className="w-full py-8 bg-gray-700">
<div className="max-w-2xl px-4 mx-auto sm:px-6 md:px-8">
<h2 className="mb-4 text-4xl font-medium text-center text-gray-100">Contact us</h2>
<p className="mb-4 text-center text-gray-300">
If there's something we can help you with, just let us know. We'll be more than happy to
offer you our help
</p>
<form className="max-w-xl py-6 mx-auto">
<div className="mb-4">
<label htmlFor="name" className="text-gray-100"> Name </label>
<input type="text" name="name" id="name" className="w-full py-3 mt-1 text-base bg-gray-100 border-2 border-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-700 focus:ring-primary-300 focus:border-gray-100" placeholder="Full Name" />
</div>
<div className="mb-4">
<label htmlFor="email" className="text-gray-100"> Email </label>
<input type="email" name="email" id="email" className="w-full py-3 mt-1 text-base bg-gray-100 border-2 border-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-700 focus:ring-primary-300 focus:border-gray-100" placeholder="example@email.com" />
</div>
<div className="mb-4">
<label htmlFor="phone" className="text-gray-100"> Phone </label>
<input type="tel" name="phone" id="phone" className="w-full py-3 mt-1 text-base bg-gray-100 border-2 border-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-700 focus:ring-primary-300 focus:border-gray-100" placeholder="123-456-7890" />
</div>
<div className="mb-8">
<label htmlFor="message" className="text-gray-100"> Message </label>
<textarea name="message" id="message" className="w-full py-3 mt-1 text-base bg-gray-100 border-2 border-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-700 focus:ring-primary-300 focus:border-gray-100" placeholder="Let us know how we can help you!"></textarea>
</div>
<button type="submit" className="flex items-center justify-center w-full px-6 py-3 text-lg font-medium text-white rounded-md bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-700 focus:ring-primary-300 focus:border-gray-100">
Send your message
</button>
</form>
</div>
</section>
<footer className="w-full bg-gray-700">
<div className="px-4 py-12 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8">
<div className="flex justify-center mt-8 space-x-6">
<a href="#" className="text-gray-400 hover:text-gray-500">
<span className="sr-only">Facebook</span>
<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
<path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
</svg>
</a>
<a href="#" className="text-gray-400 hover:text-gray-500">
<span className="sr-only">Instagram</span>
<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
<path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
</svg>
</a>
<a href="#" className="text-gray-400 hover:text-gray-500">
<span className="sr-only">Twitter</span>
<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
</svg>
</a>
<a href="#" className="text-gray-400 hover:text-gray-500">
<span className="sr-only">GitHub</span>
<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
<path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
</svg>
</a>
<a href="#" className="text-gray-400 hover:text-gray-500">
<span className="sr-only">Dribbble</span>
<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
<path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" />
</svg>
</a>
</div>
<p className="mt-8 text-base text-center text-gray-400">
&copy; 2022<a href="https://weblime.com"> WebLime</a>, Inc. All rights reserved.
</p>
</div></footer> </div></>
  );


}
