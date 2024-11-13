import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function HomePageComponent() {
	return (
		<div className="min-h-screen bg-background">
			<header className="bg-primary text-primary-foreground">
				<nav className="container mx-auto px-4 py-6">
					<ul className="flex justify-between items-center">
						<li>
							<a href="/" className="text-2xl font-bold">
								Valentinos
							</a>
						</li>
						<li>
							<a href="/donate" className="hover:underline">
								Donate
							</a>
						</li>
						<li>
							<a href="/subscribe" className="hover:underline">
								Subscribe
							</a>
						</li>
						<li>
							<a href="/blog" className="hover:underline">
								Blog
							</a>
						</li>
						<li>
							<a href="/support" className="hover:underline">
								Support
							</a>
						</li>
						<li>
							<a href="/media" className="hover:underline">
								Media
							</a>
						</li>
					</ul>
				</nav>
			</header>

			<main className="container mx-auto px-4 py-8">
				<section className="text-center mb-12">
					<h1 className="text-4xl font-bold mb-4">Welcome to Valentinos</h1>
					<p className="text-xl mb-6">
						Join our thriving community of{' '}
						<span className="font-bold text-primary">1,337 players</span> online
						now!
					</p>
					<div className="flex justify-center gap-4">
						<Button asChild>
							<a href="/donate">Donate</a>
						</Button>
						<Button asChild variant="outline">
							<a href="/subscribe">Subscribe</a>
						</Button>
					</div>
				</section>

				<section className="grid md:grid-cols-2 gap-8 mb-12">
					<Card>
						<CardHeader>
							<CardTitle>Latest Blog Post</CardTitle>
						</CardHeader>
						<CardContent>
							<h3 className="text-lg font-semibold mb-2">
								Exciting New Features Coming Soon!
							</h3>
							<p className="mb-4">
								We're working on some amazing updates to enhance your gaming
								experience...
							</p>
							<Button asChild variant="link">
								<a href="/blog">Read More</a>
							</Button>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle>Featured Clip</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="aspect-video bg-muted mb-4">
								{/* Placeholder for video embed */}
								<div className="w-full h-full flex items-center justify-center">
									Video Placeholder
								</div>
							</div>
							<Button asChild variant="link">
								<a href="/media">View More Clips</a>
							</Button>
						</CardContent>
					</Card>
				</section>

				<section className="text-center">
					<h2 className="text-2xl font-bold mb-4">Connect With Us</h2>
					<div className="flex justify-center gap-4">
						<Button asChild variant="outline">
							<a href="#">Twitter</a>
						</Button>
						<Button asChild variant="outline">
							<a href="#">Discord</a>
						</Button>
						<Button asChild variant="outline">
							<a href="#">YouTube</a>
						</Button>
						<Button asChild variant="outline">
							<a href="#">Twitch</a>
						</Button>
					</div>
				</section>
			</main>

			<footer className="bg-muted mt-12">
				<div className="container mx-auto px-4 py-6 text-center">
					<p>&copy; 2023 Valentinos. All rights reserved.</p>
				</div>
			</footer>
		</div>
	);
}
