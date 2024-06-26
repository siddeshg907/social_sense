"use client"
import React, { useEffect, useState } from 'react'
import ChartSection_1 from '@/components/Dashboard_Frame/ChartSection_1'
import { calculateDashboardData } from '@/components/ui/dataCalculation';
import Navbar, {  } from "@/components/Dashboard_Frame/Navbar";
import ChartSection_2, {  } from "@/components/Dashboard_Frame/ChartSection_2";
import customersData from '@/lib/customerData';
import TransactionSection, {  } from "@/components/Dashboard_Frame/TransactionSection";


function Frame1() {
    const dashboardData = calculateDashboardData();
    // const [mounted, setMounted] = useState(false);
   

    // useEffect(() => {
    //     setMounted(true);
    // }, []);

    // if (!mounted) return null; // Render nothing on the server
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-100 grid gap-5 p-10 ">
      <ChartSection_1 data={dashboardData} />
      <ChartSection_2 />
      <TransactionSection/>
      
    </div>
    </>
  )
}

export default Frame1
