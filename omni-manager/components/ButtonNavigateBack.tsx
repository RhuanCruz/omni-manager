'use client'
import { ChevronLeft } from 'lucide-react';
import { Button } from "./ui/button";
import { use } from "react";

export default function ButtonNavigateBack() {
    const navigateBack = () => {
        window.history.back();
    };
    
    return (
        <ChevronLeft onClick={navigateBack} className='cursor-pointer'></ChevronLeft>
    );
}