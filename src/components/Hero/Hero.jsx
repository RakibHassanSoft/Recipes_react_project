const Hero = () => {
    return (
        <div className="hero lg:h-screen  lg:max-w-7xl m-auto lexend rounded-2xl mb-8" style={{ backgroundImage: 'url(https://cdn.pixabay.com/photo/2024/01/20/12/31/ai-generated-8520996_960_720.png)' }}>
            <div className="hero-content text-center text-neutral-content ">
                <div className="">
                    <h1 className="mb-5 text-4xl font-bold text-white">Discover an exceptional cooking class tailored for you!</h1>
                    <p className="mb-5">Here you will be able to see our recipes and the system that will help cook to work properly</p>
                    <div className="flex justify-center gap-7">
                    <button className="btn bg-[#0BE58A] text-black rounded-full border-0 hover:bg-opacity-0 hover:text-white">Explore Now</button>
                    <button className="btn bg-opacity-0 text-white rounded-full hover:bg-[#0BE58A] hover:text-black hover:border-0">Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;