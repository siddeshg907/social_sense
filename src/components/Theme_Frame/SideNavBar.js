"use client"

import Image from 'next/image';
import React from 'react'
import { Nav } from "@/components/ui/nav";
import {
    BarChart,
    Calendar,
    Home,
    Inbox,
    Notebook,
    PaintRoller,
    Settings, 
    User, 
  } from "lucide-react"
import { Separator } from '@/components/ui/separator';

const headingStyle = {
  fontSize: "1.8rem",
  fontWeight: "bold",
  color: "#333",
  textAlign: "center",
  margin: "1rem 0",
};

const SideNavBar = () => {
  return (
    <div >
      <h1 style={headingStyle}>Social Sense</h1>
      <p className='ml-3'>Menu</p>
        <Nav
            isCollapsed={false}
            links={[
              {
                title: "Home",
                icon: Home,
                variant: "ghost",
              },
              {
                title: "Schedule",
               
                icon: Calendar,
                variant: "ghost",
              },
              {
                title: "Reccomendation",
                icon: Notebook,
                variant: "ghost",
              },
              {
                title: "Analytics",
                
                icon: BarChart,
                variant: "ghost",
              },
              {
                title: "Profile",
                
                icon: User,
                variant: "ghost",
              }, {
                title: "Inbox",
                label: "8",
                icon: Inbox,
                variant: "ghost",
              },
              {
                title: "Theme",
                
                icon: PaintRoller,
                variant: "default",
              },
            ]}
          />
          <Separator/>
          <p className='ml-3'>Account</p>
          <Nav
            isCollapsed={false}
            links={[
              {
                title: "Setting",
                icon: Settings,
                variant: "ghost",
              }
            ]}
          />
    </div>
  );
}

export default SideNavBar