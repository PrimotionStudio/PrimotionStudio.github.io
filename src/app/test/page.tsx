export default function Home() {
    return (
        <div className="min-h-screen md:flex">
            {/* Desktop & Mobile Background (Black Side) */}
            <div className="w-full md:w-2/5 bg-gray-800 text-white p-4 ">
                <h1 className="text-3xl font-bold">My Next App</h1>
                <p>Black Side</p>
            </div>

            {/* Mobile Black Background (2/5 width) */}
            {/* <div className="sm:hidden w-2/5 min-h-screen bg-gray-800 p-4 absolute top-0 left-0">
                <h1 className="text-2xl font-bold text-white">My Next App</h1>
                <p className="text-white">Black Side</p>
            </div> */}

            {/* Desktop & Mobile Drawer (White Side) */}
            <div className="w-full md:w-3/5 bg-white p-4 min-h-screen bg-red-400 sm:absolute z-10 rounded-t-3xl">
                <h2 className="text-3xl font-bold">White Side</h2>
                <p>This is the white drawer on mobile and the white side on desktop.</p>
            </div>
        </div>
    );
}
