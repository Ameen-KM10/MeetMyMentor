import React, { useEffect, useState } from 'react';

const features = [
	{
		title: 'Automated Reminders',
		description:
			'Reminders are sent to users before every session you host. No manual follow-ups needed.',
		icon: (
			<svg width='48' height='48' fill='none'>
				<path
					d='M24 6v4M24 38v4M38 24h4M6 24h4M33.94 14.06l2.83-2.83M11.23 36.77l2.83-2.83M33.94 33.94l2.83 2.83M11.23 11.23l2.83 2.83'
					stroke='#FF8800'
					strokeWidth='2.5'
					strokeLinecap='round'
				/>
				<path
					d='M24 14a10 10 0 1 1-10 10'
					stroke='#FF8800'
					strokeWidth='2.5'
					strokeLinecap='round'
				/>
			</svg>
		),
	},
	{
		title: 'In-Built Paywall',
		description:
			'All paid sessions, content and webinars are automatically gated behind a secure checkout.',
		icon: (
			<svg width='48' height='48' fill='none'>
				<rect
					x='12'
					y='18'
					width='24'
					height='12'
					rx='2'
					stroke='#FF8800'
					strokeWidth='2.5'
				/>
				<path
					d='M24 18v-4a4 4 0 1 1 8 0v4'
					stroke='#FF8800'
					strokeWidth='2.5'
				/>
			</svg>
		),
	},
	{
		title: 'Multi-Channel Payout',
		description:
			'Withdraw your earnings through bank transfer, UPI, or PayPal, with full control over payouts.',
		icon: (
			<svg width='48' height='48' fill='none'>
				<rect
					x='10'
					y='32'
					width='28'
					height='6'
					rx='2'
					stroke='#FF8800'
					strokeWidth='2.5'
				/>
				<rect
					x='14'
					y='24'
					width='20'
					height='6'
					rx='2'
					stroke='#FF8800'
					strokeWidth='2.5'
				/>
				<rect
					x='18'
					y='16'
					width='12'
					height='6'
					rx='2'
					stroke='#FF8800'
					strokeWidth='2.5'
				/>
			</svg>
		),
	},
	{
		title: 'Enhanced Privacy',
		description:
			'Your personal contact details are never shared. All interactions stay within the platform.',
		icon: (
			<svg width='48' height='48' fill='none'>
				<path
					d='M24 34c-5.33 0-10-2.67-10-6V20l10-8 10 8v8c0 3.33-4.67 6-10 6z'
					stroke='#FF8800'
					strokeWidth='2.5'
				/>
				<circle cx='24' cy='26' r='3' stroke='#FF8800' strokeWidth='2.5' />
			</svg>
		),
	},
	{
		title: 'Verified Profiles',
		description:
			'Apply for verification to add a trusted badge to your profile and increase visibility.',
		icon: (
			<svg width='48' height='48' fill='none'>
				<circle
					cx='24'
					cy='24'
					r='18'
					stroke='#FF8800'
					strokeWidth='2.5'
				/>
				<path
					d='M18 24l5 5 7-9'
					stroke='#FF8800'
					strokeWidth='2.5'
					strokeLinecap='round'
				/>
			</svg>
		),
	},
	{
		title: 'All-in-One Dashboard',
		description:
			'View and manage your sessions, digital content, availability and payouts from one dashboard.',
		icon: (
			<svg width='48' height='48' fill='none'>
				<rect
					x='10'
					y='10'
					width='10'
					height='10'
					rx='2'
					stroke='#FF8800'
					strokeWidth='2.5'
				/>
				<rect
					x='28'
					y='10'
					width='10'
					height='10'
					rx='2'
					stroke='#FF8800'
					strokeWidth='2.5'
				/>
				<rect
					x='10'
					y='28'
					width='10'
					height='10'
					rx='2'
					stroke='#FF8800'
					strokeWidth='2.5'
				/>
				<rect
					x='28'
					y='28'
					width='10'
					height='10'
					rx='2'
					stroke='#FF8800'
					strokeWidth='2.5'
				/>
			</svg>
		),
	},
];

const FeaturesSection = () => {
	const [show, setShow] = useState(false);
	useEffect(() => {
		setTimeout(() => setShow(true), 100);
	}, []);
	return (
		<div
			className={`min-h-screen bg-[#FAF3EC] flex flex-col justify-center items-center px-4 transition-all duration-700 ${
				show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
			}`}
		>
			{/* <h2 className='text-3xl md:text-4xl font-bold mb-10 text-gray-900 tracking-tight'>
				Platform Features
			</h2> */}
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl'>
				{features.map((feature, idx) => (
					<div
						key={feature.title}
						className='bg-white rounded-2xl p-8 flex flex-col items-start min-h-[220px] transition-transform duration-200 hover:scale-105 hover:shadow-md'
						style={{
							transitionProperty: 'box-shadow, transform',
						}}
					>
						<div className='mb-4'>{feature.icon}</div>
						<h3 className='text-lg font-semibold mb-2 text-gray-900'>
							{feature.title}
						</h3>
						<p className='text-base text-gray-700 leading-relaxed'>
							{feature.description}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default FeaturesSection;