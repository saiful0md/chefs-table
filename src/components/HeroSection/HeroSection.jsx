const HeroSection = () => {
    return (
        <div className="max-w-6xl mx-auto my-10 md:px-0 px-4">
            <div className="hero min-h-[600px]  rounded-lg" style={{ backgroundImage: 'url(/images/bg.png)' }}>
                <div className="hero-overlay bg-opacity-15  rounded-lg"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-3xl">
                        <h1 className="mb-5 md:text-5xl font-lexend font-bold">Discover an exceptional cooking class tailored for you!</h1>
                        <p className="mb-5">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                        <div className="flex gap-6 items-center justify-center">
                        <button className="btn bg-[#0BE58A] rounded-3xl">Explore Now</button>
                        <button className="btn btn-ghost border border-white rounded-3xl">Our Feedback</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;