// ThemeHome.js
import { useState, useEffect } from "react";
import SideNavBar from "@/components/Theme_Frame/SideNavBar";
import { Button } from "@/components/ui/button";
import ProfilePage from "@/components/Theme_Frame/ProfilePage";
import ThemeSelector from "@/components/Theme_Frame/ThemeSelector";
import { FaHamburger } from "react-icons/fa";

function ThemeHome() {
    const [theme, setTheme] = useState({ color: '#FFFFFF' });
    const [mounted, setMounted] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(true); // State to manage sidebar visibility

    useEffect(() => {
        setMounted(true);

        // Function to handle window resize
        const handleResize = () => {
            if (window.innerWidth < 900) { // Adjusted breakpoint for sidebar
                setSidebarOpen(false); // Close sidebar on medium or smaller screens
            } else {
                setSidebarOpen(true); // Keep sidebar open on larger screens
            }
        };

        // Initial check on mount
        handleResize();

        // Event listener for window resize
        window.addEventListener("resize", handleResize);

        // Cleanup function for unmounting
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    if (!mounted) return null; // Render nothing on the server

    return (
        <div className="flex flex-wrap">
            {/* Sidebar section */}
            <div className={`w-1/5 overflow-hidden border-2 h-screen ${sidebarOpen ? '' : 'hidden lg:block'}`} >
                <SideNavBar />
            </div>

            {/* Main content section */}
            <div className="w-4/5 border-2 px-7 py-2 flex flex-col gap-4">
                {/* Top bar with name and profile */}
                <div className="flex w-full h-fit justify-between items-center ">
                    <p className="font-bold">Themes</p>
                    <div className="flex gap-1 p-2 items-center justify-center rounded-md border border-gray-500">
                        <p>Siddhesh Gore</p>
                        <div className="w-8 h-8 rounded-full bg-gray-400"></div>
                    </div>
                </div>

                {/* Section for applying a skin */}
                <div className="rounded-lg w-full border-2 h-16 px-6 flex justify-between items-center">
                    <h3 className="font-medium">Apply a skin to your profile</h3>
                    <div className="flex gap-1">
                        <Button variant="outline">+ Custom</Button>
                        <Button>Save</Button>
                    </div>
                </div>

                {/* Main content area with adjusted responsive layout */}
                <div className="w-full flex flex-col sm:flex-row">
                    {/* ThemeSelector section */}
                    <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
                        <ThemeSelector theme={theme} setTheme={setTheme} />
                    </div>

                    {/* ProfilePage section */}
                    <div className="w-full sm:w-2/3">
                        <ProfilePage theme={theme} />
                    </div>
                </div>
            </div>

            {/* Burger menu icon for small screens */}
            <div className="lg:hidden fixed top-4 left-4">
                <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="bg-gray-200 p-2 rounded-md"
                >
                    {/* Icon for burger menu */}
                   <FaHamburger/>
                        
                    
                </button>
            </div>
        </div>
    );
}

export default ThemeHome;
