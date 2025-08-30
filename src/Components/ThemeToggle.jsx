import { useEffect, useState } from "react";
import { Sun, Moon } from 'lucide-react';

function ThemeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme == "dark") {
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false);
        }

    }, []);

    const toggleClick = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }
        else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);

        }
    }
    return (
        <button onClick={toggleClick} className="z-70 fixed top-2 right-2 p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            {isDarkMode ? (<Sun className="h-6 w-6 text-yellow-300 " />) :
                (<Moon className="h-6 w-6 text-gray-400" />)}
        </button>
    );

}
export default ThemeToggle;