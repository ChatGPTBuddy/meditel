import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Careers: React.FC = () => {
  const [openRole, setOpenRole] = useState<string | null>(null);
  const roleRefs = useRef<{ [key: string]: React.RefObject<HTMLDivElement> }>({});

  const jobOpenings = [
    { title: 'AI Engineer', department: 'Engineering', location: 'Remote' },
    { title: 'Operations Generalist', department: 'Operations', location: 'Remote' },
  ];

  useEffect(() => {
    jobOpenings.forEach(job => {
      roleRefs.current[job.title] = React.createRef<HTMLDivElement>();
    });
  }, []);

  const toggleRole = (role: string) => {
    setOpenRole(prevRole => {
      const newRole = prevRole === role ? null : role;
      if (newRole && roleRefs.current[newRole]?.current) {
        setTimeout(() => {
          const yOffset = -100;
          const element = roleRefs.current[newRole]?.current;
          const y = element!.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 100);
      }
      return newRole;
    });
  };

  const renderRoleDetails = (role: string) => {
    switch (role) {
      case 'AI Engineer':
        return (
          <div className="mt-4 text-gray-700">
            <h3 className="text-xl font-semibold mb-2">About the role</h3>
            <p className="mb-4">We are looking for a founding engineer to fold time and help us reach every practice in the country.</p>
            
            <h4 className="text-lg font-semibold mb-2">Some things you will be working on</h4>
            <div className="mb-4">
              <p className="font-bold mb-2">Automate customization and onboarding</p>
              <ul className="list-disc list-inside ml-4">
                <li>To build a 5-person unicorn, we have to automate more than just calls.</li>
                <li>How can we cut down onboarding time from days to minutes?</li>
                <li>How can we enable doctors to easily customize their receptionist on their own?</li>
              </ul>
            </div>
            <div className="mb-4">
              <p className="font-bold mb-2">Optimize scheduling to increase a practice's revenue</p>
              <ul className="list-disc list-inside ml-4">
                <li>Dental scheduling is more complicated than finding the soonest availability.</li>
                <li>Procedures have different costs and durations, some require more than one provider, others can be double booked.</li>
                <li>How can we create an optimal schedule every day for our practices that grows their revenue while still allowing them to provide a high level of care?</li>
              </ul>
            </div>
            <div className="mb-4">
              <p className="font-bold mb-2">Low latency at scale</p>
              <ul className="list-disc list-inside ml-4">
                <li>If the agent takes more than 1s to respond, callers get frustrated and hang up.</li>
                <li>How can we scale to 100K+ calls a day without sacrificing reliability or speed?</li>
              </ul>
            </div>
            <div className="mb-4">
              <p className="font-bold mb-2">Accents, dialects, and languages</p>
              <ul className="list-disc list-inside ml-4">
                <li>All of the above needs to work in every accent, dialect, and language.</li>
              </ul>
            </div>
            
            <h4 className="text-lg font-semibold mb-2">Who we are looking for</h4>
            <ul className="list-disc list-inside mb-4">
              <li>Someone who can write code, prompts, Terraform configs, emails, and everything in between.</li>
              <li>Thrives under pressure and can handle high-stakes situations.</li>
              <li>Excited by clear, measurable impact and a fast-paced environment.</li>
            </ul>
            
            <p className="mb-4">We handle phone calls non-stop for at least 12 hours a day, and there is almost no margin for error. If we drop a call, a practice loses revenue. We thrive under pressure and you should too.</p>
            
            <p className="mb-4">Our impact on our customers is crystal clear. At the end of each day, we know how many calls we handled successfully, how many appointments we scheduled, and how much revenue we generated for our practices. This makes every day extremely rewarding when things go well, and extremely clear when things need to be improved. This tight feedback loop allows us to move fast, and move with purpose. If this excites you, then let's talk!</p>
          </div>
        );
      case 'Operations Generalist':
        return (
          <div className="mt-4 text-gray-700">
            <h3 className="text-xl font-semibold mb-2">About the role</h3>
            <p className="mb-4">We are looking for an operations generalist who can wear many hats: Account Management, Sales, Customer Success, Growth Strategy, and really anything non-engineering. You will be working directly with the founders.</p>
            
            <h4 className="text-lg font-semibold mb-2">Some things you will be working on</h4>
            <div className="mb-4">
              <p className="font-bold mb-2">Customer Success</p>
              <ul className="list-disc list-inside ml-4">
                <li>Onboard: To successfully deploy DentCall at a practice, we have to learn their preferences and customize their receptionist. This sometimes requires creativity, prompt engineering, and good product taste.</li>
                <li>Retain: Practices request updates, report bugs, and provide feedback. Manage these critical relationships and deliver a stellar customer experience.</li>
                <li>Scale customer success without hiring more people. Streamline and automate every step of the way.</li>
              </ul>
            </div>
            <div className="mb-4">
              <p className="font-bold mb-2">Sales & Conferences</p>
              <ul className="list-disc list-inside ml-4">
                <li>Join the DentCall founders at Dental conferences across the country, that's where many Dentists buy software</li>
                <li>Help with anything else sales related such as demos and follow-ups</li>
              </ul>
            </div>
            <div className="mb-4">
              <p className="font-bold mb-2">Growth Strategy</p>
              <ul className="list-disc list-inside ml-4">
                <li>How can you make DentCall grow faster?</li>
              </ul>
            </div>
            
            <h4 className="text-lg font-semibold mb-2">Who we are looking for</h4>
            <ul className="list-disc list-inside mb-4">
              <li>An excellent communicator who's good with people</li>
              <li>Technical background is a HUGE bonus</li>
              <li>Ability to lead the charge in automating internal flows</li>
              <li>Thrives under pressure and can handle high-stakes situations</li>
            </ul>
            
            <p className="mb-4">We handle phone calls non-stop for at least 12 hours a day, and there is almost no margin for error. If we drop a call, a practice loses revenue. We thrive under pressure and you should too.</p>
            
            <p className="mb-4">Our impact on our customers is crystal clear. At the end of each day, we know how many calls we handled successfully, how many appointments we scheduled, and how much revenue we generated for our practices. This makes every day extremely rewarding when things go well, and extremely clear when things need to be improved. This tight feedback loop allows us to move fast, and move with purpose. If this excites you, then let's talk!</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <main className="bg-gray-100 py-20">
      <div className="container mx-auto px-4 pt-16">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Career Opportunities at DentCall</h1>
        <p className="text-xl text-center text-gray-600 mb-12">Join our team and help revolutionize dental practice management!</p>
        
        <div className="grid grid-cols-1 gap-6 mb-12">
          {jobOpenings.map((job, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6" ref={roleRefs.current[job.title]}>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{job.title}</h2>
              <p className="text-gray-600 mb-2">Department: {job.department}</p>
              <p className="text-gray-600 mb-4">Location: {job.location}</p>
              <button
                onClick={() => toggleRole(job.title)}
                className="text-blue-600 hover:text-blue-800 font-semibold flex items-center"
              >
                {openRole === job.title ? 'Hide Details' : 'Learn More'}
                {openRole === job.title ? <ChevronUp className="ml-1" /> : <ChevronDown className="ml-1" />}
              </button>
              {openRole === job.title && renderRoleDetails(job.title)}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">About DentCall</h2>
          <p className="text-lg text-gray-700 mb-4">DentCall is the AI receptionist for dentists that answers phone calls and schedules appointments. Most dental appointments are scheduled over the phone by overworked receptionists who put patients on hold and miss a third of incoming calls.</p>
          <p className="text-lg text-gray-700 mb-4">Our goal is to help dental clinics and practices go from handling just a few calls a day to answering 100% of incoming calls. We aim to become the trusted partner for dental practices across the US and Canada, managing their phones, schedules, and driving significant revenue growth.</p>
          <p className="text-lg text-gray-700 font-semibold">We are making generative AI available to those who need it the most.</p>
        </div>
      </div>
    </main>
  );
};

export default Careers;