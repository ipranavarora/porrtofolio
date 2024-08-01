"use client";

import { useEffect, useRef, useState } from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";

interface CommandHistoryItem {
    command: string;
    output: string;
}

const App: React.FC = () => {
    const [commandHistory, setCommandHistory] = useState<CommandHistoryItem[]>([
        { command: '', output: 'Available commands: help, about, contact, projects, skills, education, experience, clear' },
    ]);
    const [currentInput, setCurrentInput] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);

    const executeCommand = (command: string): void => {
        let output: string;
        switch (command.toLowerCase()) {
            case 'ls':
            case 'help':
                output = "Available commands: help, about, contact, projects, skills, education, experience, clear";
                break;
            case 'about':
                output = "I'm a full-stack developer with expertise in various technologies.";
                break;
            case 'contact':
                output = "Email: example@email.com\nGitHub: github.com/yourusername";
                break;
            case 'projects':
                output = "1. Code Compiler\n2. Chess\n(Use 'projects 1' or 'projects 2' for details)";
                break;
            case 'projects 1':
                output = `Name: Code Compiler
Description: A code compiler supporting multiple languages.
GitHub: https://github.com/Airbornharsh/code-compiler
Website: https://code-compiler.harshkeshri.com
Technologies: React, Vite, TypeScript, Tailwind CSS, Express, NodeJs`;
                break;
            case 'projects 2':
                output = `Name: Chess
Description: Multiplayer chess game using links or codes.
GitHub: https://github.com/Airbornharsh/chess
Website: https://chess.harshkeshri.com
Technologies: React, TypeScript, Tailwind CSS, Express, MongoDB, NodeJs, Firebase`;
                break;
            case 'skills':
                output = "Skills: React, Node.js, TypeScript, MongoDB, Express, and more.";
                break;
            case 'education':
                output = "BTech in Computer Science, University Name, Year";
                break;
            case 'experience':
                output = "Full Stack Developer at Company XYZ, 2020-Present";
                break;
            case 'clear':
                setCommandHistory([]);
                return;
            default:
                output = `Command not recognized: ${command}. Type 'help' for available commands.`;
        }
        setCommandHistory([...commandHistory, { command, output }]);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (currentInput.trim()) {
            executeCommand(currentInput.trim());
            setCurrentInput('');
        }
    };

    useEffect(() => {
        inputRef.current?.focus();
        window.scrollTo(0, document.body.scrollHeight);
    }, [commandHistory]);

    return (
        <div className="bg-black min-h-screen flex items-center justify-center p-4 relative">
            <div className="absolute inset-0 z-0">
                <AuroraBackground >i</AuroraBackground>
            </div>
            <div className="relative z-10 flex flex-col items-center">
                <h1 className="text-3xl font-bold mb-4 text-white">Terminal</h1>
                <div className="bg-gray-800 w-full max-w-2xl h-[80vh] rounded-lg overflow-hidden shadow-lg flex flex-col">
                    <div className="bg-gray-700 p-2 flex items-center">
                        <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div id="terminal-content" className="flex-grow overflow-y-auto p-4 font-mono text-white">
                        {commandHistory.map((item, index) => (
                            <div key={index} className="mb-2">
                                <div className="flex">
                                    <span className="text-green-400 mr-2">$</span>
                                    <span>{item.command}</span>
                                </div>
                                <pre className="ml-4 mt-1 whitespace-pre-wrap">{item.output}</pre>
                            </div>
                        ))}
                    </div>
                    <form onSubmit={handleSubmit} className="flex p-4 bg-gray-900">
                        <span className="text-green-400 mr-2">$</span>
                        <input
                            type="text"
                            value={currentInput}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCurrentInput(e.target.value)}
                            className="bg-transparent text-white focus:outline-none flex-grow custom-caret"
                            ref={inputRef}
                        />
                    </form>
                </div>
            </div>
        </div>

    );
};

export default App;
