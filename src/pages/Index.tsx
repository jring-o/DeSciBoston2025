
import { useState, useEffect } from 'react';
import { FiCalendar, FiMapPin, FiUsers, FiClock, FiTarget, FiLayout } from 'react-icons/fi';
import SlideLayout from '@/components/SlideLayout';
import SlideTitle from '@/components/SlideTitle';
import SlideContent from '@/components/SlideContent';
import Navigation from '@/components/Navigation';
import ScheduleItem from '@/components/ScheduleItem';
import InfoCard from '@/components/InfoCard';
import KeyPress from '@/components/KeyPress';
import TouchNavigation from '@/components/TouchNavigation';
import ProgressBar from '@/components/ProgressBar';

const Pitchdeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 8;

  const goToNextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const goToPreviousSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    // Set document title
    document.title = "DeSci Momentum @ SOLBoston";
    
    // Prevent scrolling with arrow keys
    const preventDefaultForArrowKeys = (e: KeyboardEvent) => {
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].includes(e.key)) {
        e.preventDefault();
      }
    };
    
    window.addEventListener("keydown", preventDefaultForArrowKeys);
    
    return () => {
      window.removeEventListener("keydown", preventDefaultForArrowKeys);
    };
  }, []);

  const slides = [
    // Slide 1: Title Slide
    <SlideLayout key="1" bgClass="bg-gradient-to-br from-blue-100 via-purple-100 to-blue-200">
      <div className="flex flex-col items-center justify-center h-full text-center">
        <div className="mb-8">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text animate-pulse">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">DeSci Momentum</h1>
          </div>
          <div className="flex items-center justify-center">
            <div className="h-0.5 w-16 bg-gradient-to-r from-blue-500 to-transparent"></div>
            <span className="mx-4 text-2xl text-blue-800 font-bold">@</span>
            <span className="text-3xl font-bold text-blue-900">SOLBoston</span>
            <div className="h-0.5 w-16 bg-gradient-to-l from-blue-500 to-transparent"></div>
          </div>
        </div>
        <p className="text-2xl md:text-3xl text-purple-800 mb-10 font-light">What Decentralized Science Brings to Web3</p>
        <div className="bg-white/30 backdrop-blur-sm rounded-xl p-6 md:p-10 max-w-xl shadow-xl border border-blue-100">
          <p className="text-xl text-blue-800">Introducing core innovations, tangible projects, and unique value propositions from the DeSci movement to strengthen the Web3 ecosystem</p>
        </div>
        <div className="absolute bottom-16 left-0 right-0 flex justify-center">
          <div className="px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm animate-bounce">
            Use arrow keys to navigate ↓
          </div>
        </div>
      </div>
    </SlideLayout>,

    // Slide 2: Core Goal & Audience
    <SlideLayout key="2">
      <SlideTitle title="Core Goal & Audience" />
      <SlideContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InfoCard icon={<FiTarget />} title="Core Goal">
            <p>Introduce the SOLBoston (broader Web3) audience to the core innovations, tangible projects, and unique value propositions emerging from the Decentralized Science (DeSci) movement, highlighting how these can inform, strengthen, and integrate with the wider Web3 ecosystem.</p>
          </InfoCard>
          <InfoCard icon={<FiUsers />} title="Target Audience">
            <p>SOLBoston attendees:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Web3 developers</li>
              <li>Builders</li>
              <li>Investors</li>
              <li>Enthusiasts</li>
              <li>Community members</li>
            </ul>
          </InfoCard>
        </div>
      </SlideContent>
    </SlideLayout>,

    // Slide 3: Event Format & Logistics
    <SlideLayout key="3">
      <SlideTitle title="Event Format & Logistics" />
      <SlideContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InfoCard icon={<FiLayout />} title="Format">
            <p>Half-day (4 hours) featuring:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Focused presentations</li>
              <li>Rapid-fire pitches/lightning talks</li>
              <li>High-level panel discussion</li>
            </ul>
          </InfoCard>
          <InfoCard icon={<FiMapPin />} title="Venue & Capacity">
            <p>Co-located within SOLBoston</p>
            <p className="mt-2">Capacity: 50-100+ attendees (dependent on room allocation)</p>
          </InfoCard>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <InfoCard icon={<FiClock />} title="Duration">
            <p>4 hours (e.g., 1:00 PM - 5:00 PM or 9:00 AM - 1:00 PM)</p>
          </InfoCard>
          <InfoCard icon={<FiCalendar />} title="Setup">
            <p>Standard presentation setup:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Screen & projector</li>
              <li>Microphones</li>
              <li>Networking area for transitions</li>
            </ul>
          </InfoCard>
        </div>
      </SlideContent>
    </SlideLayout>,

    // Slide 4: Schedule Overview
    <SlideLayout key="4">
      <SlideTitle title="Schedule Overview" subtitle="A 4-Hour Journey Through DeSci & Web3" />
      <SlideContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-6 transition-all duration-300 hover-card">
            <div className="flex items-center">
              <div className="bg-blue-100 text-blue-800 rounded-full p-2 mr-3">1</div>
              <h3 className="text-xl font-bold text-blue-900 mb-0">Hour 1: Setting the Stage</h3>
            </div>
            <div className="mt-4 pl-10">
              <p className="mb-2">Welcome & introduction to why DeSci matters for Web3</p>
              <p>Showcase: Reinventing Value & Funding in Web3</p>
            </div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-6 transition-all duration-300 hover-card">
            <div className="flex items-center">
              <div className="bg-blue-100 text-blue-800 rounded-full p-2 mr-3">2</div>
              <h3 className="text-xl font-bold text-blue-900 mb-0">Hour 2: Building Trust</h3>
            </div>
            <div className="mt-4 pl-10">
              <p className="mb-2">Showcase: Open Infrastructure & Data Integrity</p>
              <p>Networking break and transition</p>
            </div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-6 transition-all duration-300 hover-card">
            <div className="flex items-center">
              <div className="bg-blue-100 text-blue-800 rounded-full p-2 mr-3">3</div>
              <h3 className="text-xl font-bold text-blue-900 mb-0">Hour 3: The DeSci Frontier</h3>
            </div>
            <div className="mt-4 pl-10">
              <p>Lightning talks: 5-8 rapid-fire presentations of emerging DeSci innovations</p>
            </div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-6 transition-all duration-300 hover-card">
            <div className="flex items-center">
              <div className="bg-blue-100 text-blue-800 rounded-full p-2 mr-3">4</div>
              <h3 className="text-xl font-bold text-blue-900 mb-0">Hour 4: Synthesis</h3>
            </div>
            <div className="mt-4 pl-10">
              <p className="mb-2">Panel discussion: Bridging DeSci & Web3</p>
              <p>Closing remarks & call to action</p>
            </div>
          </div>
        </div>
      </SlideContent>
    </SlideLayout>,

    // Slide 5: Hour 1 Details
    <SlideLayout key="5">
      <SlideTitle title="Hour 1: Setting the Stage" subtitle="Foundational Innovations (60 mins)" />
      <SlideContent>
        <ScheduleItem 
          time="0:00-0:15"
          title="Welcome & Introduction: Why DeSci Matters for Web3"
          speakers="Event Host / Key DeSci Advocate"
          description="Briefly define DeSci for a Web3 audience. Frame the session's theme: DeSci isn't just using Web3, it's innovating on Web3 principles for complex, real-world problems (trust, funding, collaboration, data integrity)."
        />
        <ScheduleItem 
          time="0:15-0:55"
          title="Showcase 1: Reinventing Value & Funding in Web3"
          speakers="Molecule or ResearchHub or Drips (1-2 speakers)"
          description="Focus: How DeSci is pioneering new models for funding public goods, R&D, and intellectual property using Web3 mechanisms. Topics include IP-NFTs, biotech DAOs, novel funding frameworks, tokenomics for scientific contribution, and open peer review incentives."
        />
      </SlideContent>
    </SlideLayout>,

    // Slide 6: Hour 2 Details
    <SlideLayout key="6">
      <SlideTitle title="Hour 2: Building Trust" subtitle="Open Infrastructure & Data Integrity (60 mins)" />
      <SlideContent>
        <ScheduleItem 
          time="1:00-1:40"
          title="Showcase 2: Open Infrastructure & Data Integrity"
          speakers="DeSci Labs (PIDs/Infra) or Bacalhau/Coop.Hive/Algovera"
          description="Focus: How DeSci leverages Web3 for verifiable data, open knowledge graphs, and reproducible computation. Featuring persistent identifiers for data/entities on-chain, FAIR data principles, decentralized computation networks, and privacy-preserving ML."
        />
        <ScheduleItem 
          time="1:40-2:00"
          title="Transition / Quick Break / Networking Prompt"
          description="Opportunity for attendees to connect and discuss ideas from the first half of the event."
        />
      </SlideContent>
    </SlideLayout>,

    // Slide 7: Hour 3 Details
    <SlideLayout key="7">
      <SlideTitle title="Hour 3: The DeSci Frontier" subtitle="Lightning Pitches (60 mins)" />
      <SlideContent>
        <ScheduleItem 
          time="2:00-2:45"
          title="Lightning Talks: DeSci Innovations & Pitches"
          description="Rapid-fire introductions to emerging DeSci projects, tools, or concepts with strong Web3 relevance. 5-8 presenters with 5-7 minute slots each."
        />
        <div className="bg-blue-50 rounded-lg p-6 mt-4">
          <h3 className="text-xl font-bold text-blue-900 mb-3">Potential Areas & Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <ul className="list-disc pl-6">
                <li>New peer-review models (Reputation, Staking)</li>
                <li>Decentralized clinical trials / data commons</li>
                <li>Modular science tools / composability</li>
                <li>Novel DAO structures for scientific communities</li>
              </ul>
            </div>
            <div>
              <ul className="list-disc pl-6">
                <li>Tools for frictionless data pipelines</li>
                <li>Specific project pitches seeking collaboration</li>
                <li>Funding from the Web3 community</li>
                <li>DeSci pushing the boundaries of Web3 application</li>
              </ul>
            </div>
          </div>
        </div>
      </SlideContent>
    </SlideLayout>,

    // Slide 8: Hour 4 Details
    <SlideLayout key="8">
      <SlideTitle title="Hour 4: Synthesis & Future" subtitle="Panel Discussion & Closing (60 mins)" />
      <SlideContent>
        <ScheduleItem 
          time="2:45-3:45"
          title="Panel Discussion: Bridging Worlds - How DeSci & Web3 Accelerate Each Other"
          description="High-level discussion on the synergies, challenges, and future roadmap for DeSci within the broader Web3 ecosystem."
        />
        <div className="bg-blue-50 rounded-lg p-6 mt-4 mb-6">
          <h3 className="text-xl font-bold text-blue-900 mb-3">Potential Panelists Mix</h3>
          <ul className="list-disc pl-6">
            <li>A leading DeSci project founder</li>
            <li>A Web3 infrastructure expert/builder (perhaps from Solana ecosystem)</li>
            <li>An academic/thinker bridging science and Web3</li>
            <li>A Web3 VC or strategist interested in DeSci applications</li>
          </ul>
        </div>
        <ScheduleItem 
          time="3:45-4:00"
          title="Closing Remarks & Call to Action"
          speakers="Event Host"
          description="Summarize key takeaways – the innovations DeSci brings (funding models, data integrity solutions, complex coordination patterns, real-world asset integration). Reiterate the call for collaboration."
        />
      </SlideContent>
    </SlideLayout>,
  ];

  return (
    <div className="min-h-screen" tabIndex={0}>
      <ProgressBar 
        currentSlide={currentSlide} 
        totalSlides={totalSlides} 
      />
      <KeyPress
        onArrowLeft={goToPreviousSlide}
        onArrowRight={goToNextSlide}
        onSpace={goToNextSlide}
      />
      <TouchNavigation 
        onNext={goToNextSlide}
        onPrevious={goToPreviousSlide}
      />
      {slides[currentSlide]}
      <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <Navigation
            currentSlide={currentSlide}
            totalSlides={totalSlides}
            onPrevious={goToPreviousSlide}
            onNext={goToNextSlide}
          />
        </div>
      </div>
    </div>
  );
};

export default Pitchdeck;
