// ThemeHome.js
"use client"

import SideNavBar from "@/components/Theme_Frame/SideNavBar";
import { Button } from "@/components/ui/button";
import ProfilePage from "@/components/Theme_Frame/ProfilePage";
import ThemeSelector from "@/components/Theme_Frame/ThemeSelector";
import { useState, useEffect } from "react";
import { Separator } from "@/components/ui/separator";

function ThemeHome() {
    const [theme, setTheme] = useState({ color: '#FFFFFF' });
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null; // Render nothing on the server

    return (
        <div className="flex flex-wrap">
            <div className="w-1/5 border-2 h-screen">
                <SideNavBar />
            </div>
            <div className="w-4/5 border-2 px-7 py-2 flex flex-col gap-4">
                <div className="flex w-full h-fit justify-between items-center ">
                    <p className="font-bold">Themes</p>
                    <div className="flex gap-1 p-2 items-center justify-center rounded-md border border-gray-500">
                        <p>Siddhesh Gore</p>
                        <div className="w-8 h-8 rounded-full bg-gray-400"></div>
                    </div>
                </div>
                <div className="rounded-lg w-full border-2 h-16 px-6 flex justify-between items-center">
                    <h3 className="font-medium">Apply a skin to your profile</h3>
                    <div className="flex gap-1">
                        <Button variant="outline">+ Custom</Button>
                        <Button>Save</Button>
                    </div>
                </div>
                <div className="w-full flex">
                    <div className="w-1/3">
                        <ThemeSelector theme={theme} setTheme={setTheme} />
                    </div>
                    <div className="w-2/3 h-full">
                        <ProfilePage theme={theme} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ThemeHome;



