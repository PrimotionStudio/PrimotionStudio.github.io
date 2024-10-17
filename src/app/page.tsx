"use client";
import React, { useEffect, useRef, useState } from 'react';

const Home = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [currentDate, setCurrentDate] = useState<string | null>(null);
  const [timeOnSite, setTimeOnSite] = useState(0);
  const [command, setCommand] = useState("");
  const [username, setUsername] = useState("anonymous");

  const handleDivClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  useEffect(() => {
    const user = localStorage.getItem('terminalPortfolioProfile');
    if (user) {
      setUsername(user);
    }
    const savedTime = sessionStorage.getItem('timeOnSite');
    if (savedTime) {
      setTimeOnSite(parseInt(savedTime)); // Load the saved time
    }
    const timer = setInterval(() => {
      setCurrentDate(new Date().toString());

      setTimeOnSite((prevTime) => {
        const updatedTime = prevTime + 1;
        sessionStorage.setItem('timeOnSite', updatedTime.toString());
        return updatedTime;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `Time on site: ${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };


  const linuxCommands = [
    "ls",
    "cd",
    "pwd",
    "mkdir",
    "rmdir",
    "touch",
    "rm",
    "cp",
    "mv",
    "chmod",
    "chown",
    "grep",
    "cat",
    "head",
    "tail",
    "chmod",
    "ssh",
    "sudo",
  ];

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === "Enter") {
      const cmd = command.toLowerCase().trim();
      setCommand("");
      switch (cmd) {
        case 'login':
          let name = prompt("What is your name?");
          name = name ? name.toLowerCase().replace(/\s/g, "") : '';
          localStorage.setItem("terminalPortfolioProfile", name);
          setUsername(name);
          break;

        case 'logout':
          localStorage.removeItem("terminalPortfolioProfile");
          setUsername("anonymous");
          break;

        default:
          alert("I don't know that command");
          break;
      }
      if (linuxCommands.includes(cmd)) {
        alert("Ahahaha, I can't be hacked!");
      }
    };
  };

  return (
    <div className="flex h-screen flex-col md:flex-row">
      <div className="w-full md:w-2/5 flex flex-col justify-start items-start gap-y-1 p-3 font-xs md:font-md">
        <p>Martins Okanlawon - Portfolio Terminal</p>
        <div className='hidden md:block'>

          <p>Alias: Prime, The Primotion Studio</p>
          <p>Version 2.3.4</p>
          <p>Date: <span id="current_date">{currentDate ? currentDate : "Loading..."}</span></p>
          <p>This is the virtual portfolio console of Prime.</p>
          <br />
          <p>Type 'login' to login a personalized console.</p>
          <p>Type 'logout' to opt out of your personalized console.</p>
          <br />
          <p>1) <em>home</em> - A little bit about myself</p>
          <p>2) <em>about</em> - A little more-bit about myself</p>
          <p>3) <em>career</em> - My skills, projects, careers & experiences</p>
          <p>4) <em>contact</em> - You wanna hire me? Contact Me!!! (Yippie&#x1F643; !)</p>
        </div>

        <p id="counter">{formatTime(timeOnSite)}</p>
        <div
          className="command-box flex-1 w-full"
          onClick={handleDivClick}>
          <p className='flex'>┌──(
            <em>
              <span id="user">{username}</span>@theprimotionstudio
            </em>
            )<span className='hidden md:block'>-[~/
              <span id="directory">home</span>
              ]
            </span>
          </p>
          <p>
            └─$&nbsp;
            <input
              type="text"
              id="command"
              className="command bg-inherit focus:border-none focus:outline-none w-10/12"
              name="command"
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder='Type `help` or `?` for help'
              ref={inputRef}
            />
          </p>
        </div>
      </div>
      <div className="w-full md:w-3/5 flex flex-col bg-white justify-center items-center rounded-t-3xl md:rounded-t-none absolute md:relative bottom-0 md:top-0 h-4/5 md:h-full">
        <p className='text-gray-950'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aut at facere porro, sint sapiente quos quas necessitatibus ab dolores repudiandae iusto aspernatur enim modi explicabo nam sequi ipsam molestiae dignissimos omnis. Quam recusandae labore vel eligendi. Earum inventore, et est assumenda eius eum praesentium? Autem rerum vero voluptatum fugit?
        </p>
      </div>
    </div>
  );
};

export default Home;