import img1 from "../assets/image01.png"
import img2 from "../assets/image02.png"
import img3 from "../assets/image03.png"
import { Link } from "react-router-dom";


const HomeLayout = () => {
	return (
		<>
      
			<div className='bg-white py-24 sm:py-32'>
				<div className='mx-auto max-w-7xl px-6 lg:px-8'>
					<div className='mx-auto max-w-2xl text-center'>
						<h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
							My Projects
						</h2>
						
					</div>
					<div className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
						<article className='flex flex-col items-start justify-between'>
							<div className='relative w-full'>
								<img
									src={img1}
									alt='Project'
									className='aspect-[16/9] w-full rounded-2xl object-fill bg-gray-100  sm:aspect-[2/1] lg:aspect-[4/2]'
								/>
								<div className='absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10'></div>
							</div>
							<div className='max-w-xl'>
								<div className='group relative'>
									<h3 className='mt-4 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600'>
										Accamidation website
									</h3>
									<p className='mt-4 line-clamp-3 text-sm leading-6 text-gray-600'>
										A website to find a place to stay and book venues
									</p>
								</div>
								<div className='relative mt-8 flex items-center gap-x-4'>
                           <Link to="https://fascinating-swan-930562.netlify.app/">
                           <button className="btn btn-outline btn-accent">Visit the website here</button>
                           </Link>
								</div>
							</div>
						</article>
						<article className='flex flex-col items-start justify-between'>
							<div className='relative w-full'>
								<img
									src={img2}
									alt='Project'
									className='aspect-[16/9] w-full rounded-2xl object-fill bg-gray-100  sm:aspect-[2/1] lg:aspect-[4/2]'
								/>
								<div className='absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10'></div>
							</div>
							<div className='max-w-xl'>
								<div className='group relative'>
									<h3 className='mt-4 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600'>
										E-commer online website
									</h3>
									<p className='mt-4 line-clamp-3 text-sm leading-6 text-gray-600'>
										A online store
									</p>
								</div>
								<div className='relative mt-8 flex items-center gap-x-4'>
                           <Link to="https://e-com-store-tau.vercel.app/">
                           <button className="btn btn-outline btn-accent">Visit the website here</button>
                           </Link>
								</div>
							</div>
						</article>
						<article className='flex flex-col items-start justify-between'>
							<div className='relative w-full'>
								<img
									src={img3}
									alt='Project'
									className='aspect-[16/9] w-full rounded-2xl object-fill bg-gray-100  sm:aspect-[2/1] lg:aspect-[4/2]'
								/>
								<div className='absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10'></div>
							</div>
							<div className='max-w-xl'>
								<div className='group relative'>
									<h3 className='mt-4 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600'>
										A auction website
									</h3>
									<p className='mt-4 line-clamp-3 text-sm leading-6 text-gray-600'>
										Auction website for selg and bidding
									</p>
								</div>
								<div className='relative mt-8 flex items-center gap-x-4'>
                           <Link to="https://spectacular-unicorn-a2c65e.netlify.app/">
                           <button className="btn btn-outline btn-accent">Visit the website here</button>
                           </Link>
								</div>
							</div>
						</article>
					</div>
				</div>
			</div>
		</>
	);
};

export default HomeLayout;
