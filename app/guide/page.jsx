'use client'

import React from 'react'
import Card from '../../src/components/ui/Card'
import Button from '../../src/components/ui/Button'
import { cn } from '../../src/utils/cn'

const Indicator = ({ carbon, feasibility }) => {
  return (
    <span className="inline-flex items-center gap-2 mr-2 font-bold text-sm">
      {carbon && (
        <span className="text-[#47B332]">{carbon}</span>
      )}
      {feasibility && (
        <span className="text-ap-blue">{feasibility}</span>
      )}
    </span>
  )
}

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Card variant="glass" size="lg" className="mb-8">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              AP0110 Guide to Independent Technologies
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">
              Conquer Your Frontier
            </h2>
            
            <h3 className="text-xl md:text-2xl font-bold mt-8 mb-4 text-white">
              Why Independence Matters
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Unexpected disruptions—environmental, infrastructural, or economic—can challenge your comfort, security, and operations. At <span className="font-mono">AP0110</span>, we believe in safeguarding you against these surprises by reducing reliance on external resources. This approach ensures that your household or organization continues to operate smoothly, no matter what lies ahead.
            </p>

            <h3 className="text-xl md:text-2xl font-bold mt-8 mb-4 text-white">
              Our Purpose
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              <span className="font-mono">AP0110</span> empowers individuals and businesses with next-generation, off-grid technology solutions. Whether you're a homeowner seeking self-sufficiency or an enterprise looking to maintain continuous operations under pressure, our tools and strategies unite trusted and emerging technologies in a cohesive, independent system.
            </p>

            <h3 className="text-xl md:text-2xl font-bold mt-8 mb-4 text-white">
              Your Journey to Total Independence Starts Now
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Embrace the next frontier of independent, secure living. Book a consultation and see how <span className="font-mono">AP0110</span> can help you achieve lasting self-reliance—without sacrificing comfort, convenience, or environmental responsibility.
            </p>
            <Button size="lg" variant="primary">Book Now</Button>

            <h3 className="text-xl md:text-2xl font-bold mt-8 mb-4 text-white">
              What's In This Guide
            </h3>
            <ul className="text-lg text-gray-300 leading-relaxed space-y-2 mb-6">
              <li>A focused approach to selecting and deploying advanced, eco-conscious solutions—tailored to your unique environment.</li>
              <li>Practical insights and recommendations proven suitable in both residential and enterprise contexts.</li>
              <li>A foundation for seamless integration of off-grid systems, ensuring low-maintenance, uninterrupted living.</li>
            </ul>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-white">Contents</h3>
                <ul className="space-y-2">
                  <li><a href="#independent-internet" className="text-ap-blue hover:text-blue-400 font-mono font-bold">Independent Internet (AP0110)</a></li>
                  <li><a href="#electricity" className="text-ap-blue hover:text-blue-400 font-mono font-bold">Electricity</a></li>
                  <li><a href="#water" className="text-ap-blue hover:text-blue-400 font-mono font-bold">Water</a></li>
                  <li><a href="#natural-gas" className="text-ap-blue hover:text-blue-400 font-mono font-bold">Natural Gas</a></li>
                  <li><a href="#food" className="text-ap-blue hover:text-blue-400 font-mono font-bold">Food</a></li>
                  <li><a href="#waste-management" className="text-ap-blue hover:text-blue-400 font-mono font-bold">Waste Management</a></li>
                  <li><a href="#climate-control" className="text-ap-blue hover:text-blue-400 font-mono font-bold">Climate Control</a></li>
                  <li><a href="#security" className="text-ap-blue hover:text-blue-400 font-mono font-bold">Security</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-white">Key</h3>
                <h4 className="text-lg font-semibold mb-2 text-white">Carbon Impact</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <Indicator carbon="C-" />
                    <span>Carbon Negative</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Indicator carbon="C=" />
                    <span>Carbon Neutral</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Indicator carbon="C+" />
                    <span>Carbon Positive</span>
                  </li>
                </ul>
                <h4 className="text-lg font-semibold mb-2 text-white">Feasibility</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Indicator feasibility="R" />
                    <span>Residential</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Indicator feasibility="E" />
                    <span>Enterprise</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Indicator feasibility="B" />
                    <span>Both</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Independent Internet Section */}
      <section id="independent-internet" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Card variant="glass" size="lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Independent Internet (AP0110)
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Communication networks that rely on centralized infrastructures are vulnerable to outages, disruptions, and external control. <span className="font-mono">AP0110</span> introduces a new category of grid-independence and unparalleled data security—delivering reliable, independent communication systems that ensure ongoing connectivity and data protection in any environment, from your home to remote facilities in disaster-prone areas.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold mt-8 mb-4 text-white">
              AP0110: The Heart of Independent Internet
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              <span className="font-mono">AP0110</span> is a modular, containerized, and (optionally) AI-powered Network Operating System designed for network routers and servers. It facilitates the creation and maintenance of an Independent Internet.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold mt-8 mb-4 text-white">
              On-Grid (Internet & Cellular)
            </h3>
            <ul className="text-lg text-gray-300 leading-relaxed space-y-3 mb-6">
              <li><strong>Encryption</strong>: Protects all communications and data transfers against unauthorized access increasing cyber-threats.</li>
              <li><strong>VPNs (Virtual Private Networks)</strong>: Creates secure, encrypted internet connections for heightened privacy, allowing users to send and receive data as if their devices were directly connected to the same private network.</li>
              <li><strong>Firewalls</strong>: Guards networks from cyberattacks by monitoring and controlling incoming and outgoing network traffic based on predetermined security rules.</li>
              <li><strong>Network Monitoring</strong>: Continuous monitoring of network performance and security to detect and address issues promptly.</li>
              <li><strong>Bandwidth Management</strong>: Optimizes data flow for efficient, reliable communication.</li>
              <li><strong>Redundancy</strong>: Maintains backup connections to ensure continuous connectivity if the main system is disrupted.</li>
              <li><strong>Local DNS & Naming Services</strong>: Ensures that local devices can resolve services within the infranet without external DNS, allowing easier device discovery and reducing confusion in purely offline environments.</li>
              <li><strong>Identity & Access Management</strong>: Secure authentication and user management within the intranet, including multi-factor authentication and role-based access controls, strengthening privacy and data protection.</li>
            </ul>

            <h3 className="text-2xl md:text-3xl font-bold mt-8 mb-4 text-white">
              Off-Grid (Infranet)
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              <span className="font-mono">AP0110</span> supports local intranets (or "infranets") with advanced in-network services and external capabilities, enabling private, high-security data sharing and communication.
            </p>

            <h4 className="text-xl md:text-2xl font-bold mt-6 mb-4 text-white">
              Network Storage & Data Management
            </h4>
            <ul className="text-lg text-gray-300 leading-relaxed space-y-3 mb-6">
              <li><strong>Distributed File-Sharing & Version Control</strong>: Built-in tools for robust peer-to-peer file sharing and version-controlled archives for critical documents, ensuring consistent updates and preventing confusion over file versions.</li>
              <li>
                <strong>Local Databases</strong>:
                <ul className="ml-6 mt-2 space-y-2">
                  <li><strong>Medical and Health Reference</strong>: Comprehensive health information for self-care and emergency situations, including symptoms, treatments, and first aid.</li>
                  <li><strong>Recipes</strong>: A collection of cooking instructions for meal preparation.</li>
                  <li><strong>Education (K-12+)</strong>: Educational resources for all levels, from kindergarten to higher education.</li>
                  <li><strong>Encyclopedic Knowledge</strong>: A general knowledge database for reference and learning, covering a wide array of topics.</li>
                </ul>
              </li>
              <li>
                <strong>Local Resources</strong>:
                <ul className="ml-6 mt-2 space-y-2">
                  <li><strong>Language & Document Translation</strong></li>
                  <li><strong>Maps</strong>: Detailed maps for navigation and planning, including local and regional information.</li>
                  <li><strong>Calculators</strong>: Various types of calculators for different needs, such as scientific, financial, conversion, and basic arithmetic.</li>
                </ul>
              </li>
            </ul>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              <strong>Note</strong>: Operators are free to stock their <span className="font-mono">AP0110</span> System with resources and datasets from AP0110 or third-party providers, ensuring flexibility and transparency.
            </p>

            <h4 className="text-xl md:text-2xl font-bold mt-6 mb-4 text-white">
              Antenna Arrays
            </h4>
            <ul className="text-lg text-gray-300 leading-relaxed space-y-3 mb-6">
              <li><strong>Mesh Radio</strong>: Decentralized communication and file-sharing through interconnected nodes.</li>
              <li><strong>Terrestrial Radio</strong> (AM/FM, GMRS/FRS, HAM): Enables both local and long-distance voice communication, including emergency broadcasts, using different radio frequencies for various purposes.</li>
              <li><strong>Public Satellite</strong>: Secures weather, news, and emergency updates independently of terrestrial or cable networks by receiving information downlinks from existing public satellites in the sky.</li>
              <li><strong>OTA-Television</strong>: Over-the-air TV for news, entertainment, and emergency bulletins, providing access to broadcast channels without the need for cable or internet.</li>
              <li><strong>Private Cellular and 5G</strong>: Closed cellular networks for enhanced privacy, offering high-speed, reliable communication within a defined area.</li>
            </ul>

            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              <span className="font-mono">AP0110</span> orchestrates these critical systems to guarantee total autonomy, efficiency, and real-time control—without dependence on external data centers or cloud-based services. Key features include:
            </p>
            <ul className="text-lg text-gray-300 leading-relaxed space-y-3 mb-6">
              <li><strong>Edge Computing & Automation</strong>: Provides immediate data processing for faster responses and reduced reliance on external networks, enabling real-time control and decision-making.</li>
              <li><strong>Autonomous System Failover</strong>: Self-healing infrastructure with built-in redundancy to ensure uninterrupted service, automatically switching to backup systems in case of failure.</li>
              <li><strong>Secure, Decentralized Operation</strong>: Delivers robust privacy and resilience, unaffected by third-party outages or intrusions, ensuring continuous and secure operation.</li>
              <li><strong>AI-Driven Resource Optimization (Optional)</strong>: Intelligently allocates power, water, and food production for maximum efficiency, using advanced algorithms to optimize resource use.</li>
              <li><strong>Local Communication Protocols</strong>: An internal telephony system lets users make voice or video calls even if the internet is out, with integration for VOIP or SIP services in a local-only capacity.</li>
              <li><strong>Peer-to-Peer Federation or Multi-Site Bridging</strong>: Bridging separate infranets for larger communities or multiple independent sites, allowing them to share data or updates securely without needing a full internet connection.</li>
              <li><strong>Blockchain or Distributed Ledger (Optional)</strong>: Offering a decentralized transaction or ledger system for certain off-grid economic or record-keeping scenarios.</li>
            </ul>

            <h3 className="text-2xl md:text-3xl font-bold mt-8 mb-4 text-white">
              Embrace True Independence with AP0110
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              <span className="font-mono">AP0110</span> is more than just a product—it's a resilient, continuously evolving platform designed to keep you connected and operational, even when centralized infrastructures fail. Whether ensuring seamless operation during severe weather events or safeguarding data-sensitive businesses with advanced encryption and AI-driven resource optimization, <span className="font-mono">AP0110</span> delivers unmatched reliability. With regular updates, professional support, and modular add-ons, it adapts to your evolving needs. As your command center, <span className="font-mono">AP0110</span> integrates energy, water, food production, waste management, and security, enabling a fully self-sufficient lifestyle. Embrace the future of true independence and security—say goodbye to external reliance with <span className="font-mono">AP0110</span>.
            </p>
          </Card>
        </div>
      </section>

      {/* Electricity Section */}
      <section id="electricity" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Card variant="glass" size="lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Electricity
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Reliable, resilient, scalable energy solutions ensure continuous power, regardless of location or conditions.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold mt-8 mb-4 text-white">
              Sourcing
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              <strong>On-grid</strong>: Local electric tie-in.
            </p>
            <ul className="text-lg text-gray-300 leading-relaxed space-y-2 mb-6">
              <li>Subject to outages due to natural disasters, infrastructure failures, or maintenance issues.</li>
              <li>Can lead to higher long-term costs due to rising energy prices and potential fees.</li>
            </ul>

            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              <strong>Off-grid</strong>: Independent solutions provide greater reliability, control over energy production, and potential cost savings:
            </p>
            <ul className="text-lg text-gray-300 leading-relaxed space-y-3 mb-6">
              <li>
                <Indicator carbon="C-" feasibility="B" />
                <strong>Solar Panels</strong> – Photovoltaic systems convert sunlight into electricity. They are scalable and can be installed on rooftops or ground-mounted arrays. Sun-tracking mounts can maximize energy output.
              </li>
              <li>
                <Indicator carbon="C-" feasibility="B" />
                <strong>Wind Turbines</strong> – Wind energy conversion systems generate electricity from wind. Suitable for areas with consistent wind speeds.
              </li>
              <li>
                <Indicator carbon="C-" feasibility="B" />
                <strong>Micro-Hydro Power</strong> – Small-scale hydroelectric power generation using flowing water from streams or rivers. Ideal for properties with access to a water source.
              </li>
              <li>
                <Indicator carbon="C=" feasibility="B" />
                <strong>Biomass Energy</strong> – Conversion of organic materials (like wood, agricultural residues, or animal waste) into electricity. Suitable for rural areas with abundant biomass resources.
              </li>
              <li>
                <strong>Generators</strong> – Gas generators provide backup power during outages or when renewable sources are insufficient.
                <ul className="ml-6 mt-2 space-y-2">
                  <li>
                    <Indicator carbon="C+" feasibility="B" />
                    <strong>Diesel</strong> – Reliable and efficient, but with higher emissions.
                  </li>
                  <li>
                    <Indicator carbon="C+" feasibility="B" />
                    <strong>Propane</strong> – Cleaner burning than diesel, with a longer shelf life for fuel.
                  </li>
                  <li>
                    <Indicator carbon="C+" feasibility="B" />
                    <strong>Natural Gas</strong> – Efficient and cleaner burning, often used in areas with natural gas infrastructure.
                  </li>
                </ul>
              </li>
            </ul>

            <h3 className="text-2xl md:text-3xl font-bold mt-8 mb-4 text-white">
              Storage
            </h3>
            <ul className="text-lg text-gray-300 leading-relaxed space-y-3 mb-6">
              <li>
                <strong>Battery Backups</strong> – Battery storage solutions store excess energy generated from renewable sources for use during low production periods.
                <ul className="ml-6 mt-2 space-y-2">
                  <li>
                    <Indicator carbon="C=" feasibility="B" />
                    <strong>Lithium-ion</strong> – High energy density, long lifespan, and efficiency. Commonly used in residential and commercial applications.
                  </li>
                  <li>
                    <Indicator carbon="C=" feasibility="B" />
                    <strong>Lead-acid</strong> – Lower cost but shorter lifespan and lower energy density. Often used in off-grid systems due to their reliability.
                  </li>
                  <li>
                    <Indicator carbon="C=" feasibility="E" />
                    <strong>Flow Batteries</strong> – Long lifespan and scalable, suitable for large-scale storage needs.
                  </li>
                </ul>
              </li>
            </ul>

            <h3 className="text-2xl md:text-3xl font-bold mt-8 mb-4 text-white">
              Management & Efficiency
            </h3>
            <ul className="text-lg text-gray-300 leading-relaxed space-y-3">
              <li>
                <Indicator carbon="C=" feasibility="B" />
                <strong>Smart Panels</strong> – Intelligent electrical distribution panels that optimize energy use, monitor system performance, and automatically switch sources when necessary for uninterrupted power.
              </li>
              <li>
                <Indicator carbon="C=" feasibility="B" />
                <strong>Smart Meters</strong> – Advanced metering infrastructure for real-time monitoring of energy consumption and production.
              </li>
              <li>
                <Indicator carbon="C=" feasibility="B" />
                <strong>Smart Switches</strong> – Automated switches that manage energy flow and prioritize critical loads.
              </li>
              <li>
                <Indicator carbon="C=" feasibility="B" />
                <strong>Energy-Efficient Appliances</strong> – Using appliances that consume less energy can significantly reduce overall energy demand.
              </li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Water Section */}
      <section id="water" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Card variant="glass" size="lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Water
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              A fully independent water system ensures a constant supply of clean, safe water for drinking, irrigation, and sanitation.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold mt-8 mb-4 text-white">
              Sourcing
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              <strong>On-grid</strong>: Local water tie-in.
            </p>
            <ul className="text-lg text-gray-300 leading-relaxed space-y-2 mb-6">
              <li>Supply can be disrupted by infrastructure issues, contamination, or droughts.</li>
            </ul>

            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              <strong>Off-grid</strong>: Independent water systems provide security and control over water quality and availability, reducing dependency on municipal sources and potential water restrictions.
            </p>
            <ul className="text-lg text-gray-300 leading-relaxed space-y-3 mb-6">
              <li>
                <Indicator carbon="C=" feasibility="B" />
                <strong>Atmospheric Water Generation</strong> – Devices that extract water from humid ambient air, providing a reliable source of water in areas with sufficient humidity.
              </li>
              <li>
                <Indicator carbon="C=" feasibility="B" />
                <strong>Rainwater Harvesting</strong> – Collection and storage of rainwater from rooftops or other surfaces for reuse in irrigation, flushing toilets, and even potable use with proper treatment.
              </li>
              <li>
                <Indicator carbon="C=" feasibility="B" />
                <strong>Well & Borehole Systems</strong> – Groundwater extraction systems that provide a consistent water supply from underground aquifers.
              </li>
              <li>
                <Indicator carbon="C=" feasibility="B" />
                <strong>Surface Water Collection</strong> – Utilizing nearby lakes, rivers, or streams as a water source, with appropriate treatment to ensure safety.
              </li>
            </ul>

            <h3 className="text-2xl md:text-3xl font-bold mt-8 mb-4 text-white">
              Storage
            </h3>
            <ul className="text-lg text-gray-300 leading-relaxed space-y-3 mb-6">
              <li>
                <Indicator feasibility="B" />
                <strong>Private Water Towers</strong> – Elevated water storage tanks that provide pressure for water distribution and ensure a reserve supply.
              </li>
              <li>
                <Indicator feasibility="B" />
                <strong>Cisterns and Tanks</strong> – Ground-level or underground storage solutions for collected rainwater, well water, or other sources.
              </li>
              <li>
                <Indicator feasibility="B" />
                <strong>Bladders</strong> – Flexible storage containers that can be used for temporary or emergency water storage.
              </li>
            </ul>

            <h3 className="text-2xl md:text-3xl font-bold mt-8 mb-4 text-white">
              Purification
            </h3>
            <ul className="text-lg text-gray-300 leading-relaxed space-y-3 mb-6">
              <li>
                <Indicator carbon="C+" feasibility="E" />
                <strong>Desalination</strong> – Removal of salts and minerals from seawater or brackish water, making it suitable for drinking and irrigation.
              </li>
              <li>
                <Indicator carbon="C=" feasibility="B" />
                <strong>Reverse Osmosis</strong> – Filtration method that removes contaminants from water by forcing it through a semi-permeable membrane.
              </li>
              <li>
                <Indicator carbon="C=" feasibility="B" />
                <strong>UV</strong> – Ultraviolet light systems that disinfect water by killing bacteria, viruses, and other pathogens.
              </li>
              <li>
                <Indicator carbon="C=" feasibility="B" />
                <strong>Oxygenation</strong> – Aeration systems that improve water quality by increasing dissolved oxygen levels.
              </li>
              <li>
                <Indicator carbon="C=" feasibility="B" />
                <strong>Activated Carbon Filters</strong> – Filters that remove chlorine, sediment, volatile organic compounds (VOCs), and other contaminants.
              </li>
              <li>
                <Indicator carbon="C=" feasibility="B" />
                <strong>Ceramic Filters</strong> – Porous ceramic filters that remove bacteria, protozoa, and other pathogens.
              </li>
              <li>
                <Indicator carbon="C+" feasibility="B" />
                <strong>Distillation</strong> – Process of boiling water and condensing the steam to remove impurities and contaminants.
              </li>
            </ul>

            <h3 className="text-2xl md:text-3xl font-bold mt-8 mb-4 text-white">
              Management & Efficiency
            </h3>
            <ul className="text-lg text-gray-300 leading-relaxed space-y-3">
              <li>
                <Indicator carbon="C=" feasibility="B" />
                <strong>Smart Meters</strong> – Advanced water metering systems that monitor usage and detect leaks.
              </li>
              <li>
                <Indicator carbon="C=" feasibility="B" />
                <strong>Smart Valves</strong> – Automated valves that control water flow and prevent wastage.
              </li>
              <li>
                <Indicator carbon="C=" feasibility="B" />
                <strong>Leak Detection Systems</strong> – Sensors and alarms that detect leaks in the water system to prevent water loss and damage.
              </li>
              <li>
                <Indicator carbon="C=" feasibility="B" />
                <strong>Automated Irrigation Systems</strong> – Systems that optimize water use for irrigation based on soil moisture, weather conditions, and plant needs.
              </li>
              <li>
                <Indicator carbon="C=" feasibility="B" />
                <strong>Low-Flow Fixtures</strong> – Faucets, showerheads, and toilets designed to use less water without sacrificing performance.
              </li>
              <li>
                <Indicator carbon="C=" feasibility="B" />
                <strong>Drip Irrigation</strong> – Efficient irrigation method that delivers water directly to the plant roots, reducing water waste.
              </li>
              <li>
                <Indicator carbon="C=" feasibility="B" />
                <strong>Water-Efficient Landscaping</strong> – Using native plants and xeriscaping techniques to reduce the need for irrigation.
              </li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Natural Gas Section */}
      <section id="natural-gas" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Card variant="glass" size="lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Natural Gas
            </h2>

            <h3 className="text-2xl md:text-3xl font-bold mt-8 mb-4 text-white">
              Sourcing
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              <strong>On-grid</strong>: Local gas tie-in.
            </p>
            <ul className="text-lg text-gray-300 leading-relaxed space-y-2 mb-6">
              <li>Natural gas supply can be interrupted by pipeline issues, supply shortages, or price fluctuations.</li>
            </ul>

            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              <strong>Off-grid</strong>: Independent solutions like biogas production and propane storage offer greater reliability and control over fuel sources, reducing vulnerability to external disruptions.
            </p>
            <ul className="text-lg text-gray-300 leading-relaxed space-y-3 mb-6">
              <li>
                <Indicator carbon="C=" feasibility="E" />
                <strong>Biogas Production</strong> – Generation of gas from organic waste through anaerobic digestion. Suitable for farms and facilities with significant organic waste.
              </li>
              <li>
                <Indicator carbon="C+" feasibility="B" />
                <strong>Propane Storage</strong> – Use of propane tanks for off-grid gas supply, providing a reliable source of fuel for heating, cooking, and generators.
              </li>
              <li>
                <Indicator carbon="C+" feasibility="E" />
                <strong>Compressed Natural Gas (CNG)</strong> – Storage of natural gas in high-pressure containers for use in vehicles or as a backup fuel source.
              </li>
            </ul>

            <h3 className="text-2xl md:text-3xl font-bold mt-8 mb-4 text-white">
              Storage
            </h3>
            <ul className="text-lg text-gray-300 leading-relaxed space-y-3 mb-6">
              <li>
                <Indicator feasibility="B" />
                <strong>Gas Cylinders</strong> – Portable gas storage solutions for smaller-scale use.
              </li>
              <li>
                <Indicator feasibility="B" />
                <strong>Underground Tanks</strong> – Large capacity gas storage systems for long-term supply.
              </li>
              <li>
                <Indicator feasibility="B" />
                <strong>Above-Ground Tanks</strong> – Easier to install and maintain compared to underground tanks, suitable for residential and commercial use.
              </li>
              <li>
                <Indicator feasibility="E" />
                <strong>Gas Holders (Gasometers)</strong> – Large storage containers for holding gas at near atmospheric pressure, typically used in industrial applications.
              </li>
            </ul>

            <h3 className="text-2xl md:text-3xl font-bold mt-8 mb-4 text-white">
              Management
            </h3>
            <ul className="text-lg text-gray-300 leading-relaxed space-y-3 mb-6">
              <li>
                <Indicator carbon="C=" feasibility="B" />
                <strong>Smart Meters</strong> – Advanced gas metering systems that monitor consumption and detect leaks.
              </li>
              <li>
                <Indicator carbon="C=" feasibility="B" />
                <strong>Smart Valves</strong> – Automated valves that control gas flow and enhance safety.
              </li>
              <li>
                <Indicator carbon="C=" feasibility="B" />
                <strong>Gas Leak Detection Systems</strong> – Sensors and alarms that detect gas leaks to prevent waste, accidents, and ensure safety.
              </li>
              <li>
                <Indicator carbon="C=" feasibility="B" />
                <strong>High-Efficiency Appliances</strong> – Using appliances that consume less gas can significantly reduce overall gas demand.
              </li>
            </ul>

            <h3 className="text-2xl md:text-3xl font-bold mt-8 mb-4 text-white">
              Considerations
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Proper installation, maintenance, and monitoring are crucial to prevent gas leaks and ensure safety.
            </p>
          </Card>
        </div>
      </section>

      {/* Food Section */}
      <section id="food" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Card variant="glass" size="lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Food
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Self-sufficient food systems provide year-round nutrition without reliance on external supply chains.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold mt-8 mb-4 text-white">
              Production
            </h3>
            <ul className="text-lg text-gray-300 leading-relaxed space-y-3 mb-6">
              <li>
                <Indicator carbon="C=" feasibility="B" />
                <strong>Hydroponics</strong> – Soil-less plant cultivation using nutrient-rich water. Suitable for indoor and greenhouse environments.
              </li>
              <li>
                <Indicator carbon="C=" feasibility="B" />
                <strong>Aquaponics</strong> – A combination of aquaculture (raising fish) and hydroponics, where fish waste provides nutrients for plants, and plants help filter the water for fish. This creates a symbiotic environment that maximizes resource use.
              </li>
              <li>
                <Indicator carbon="C=" feasibility="B" />
                <strong>Greenhouses & Indoor Farming</strong> – Controlled environment agriculture that extends growing seasons and protects crops from adverse weather. Allows for precise control over temperature, humidity, and light.
              </li>
              <li>
                <Indicator carbon="C=" feasibility="E" />
                <strong>Vertical Farming</strong> – Multi-layered indoor farming that maximizes space and allows for year-round production. Often utilizes LED lighting and automated systems for optimal growth conditions.
              </li>
              <li>
                <Indicator carbon="C-" feasibility="E" />
                <strong>Regenerative Farming</strong> – Sustainable farming practices that restore soil health and biodiversity. Techniques include crop rotation, cover cropping, reduced tillage, and organic amendments.
              </li>
              <li>
                <Indicator carbon="C-" feasibility="B" />
                <strong>Permaculture</strong> – Ecosystem-based farming that mimics natural processes and promotes sustainability. Focuses on creating self-sustaining agricultural systems that integrate plants, animals, and natural resources.
              </li>
              <li>
                <Indicator carbon="C+" feasibility="B" />
                <strong>Livestock</strong> – Animal husbandry for meat, dairy, and eggs. Includes poultry, cattle, goats, and other animals. Practices should ensure animal welfare and sustainable resource use.
              </li>
              <li>
                <Indicator carbon="C-" feasibility="E" />
                <strong>Agroforestry</strong> – Integrating trees and shrubs into crop and livestock systems to enhance biodiversity, improve soil health, and provide additional food sources.
              </li>
            </ul>

            <h3 className="text-2xl md:text-3xl font-bold mt-8 mb-4 text-white">
              Preservation and Storage
            </h3>
            <ul className="text-lg text-gray-300 leading-relaxed space-y-3 mb-6">
              <li>
                <Indicator feasibility="B" />
                <strong>Canning and Jarring</strong> – Long-term food preservation methods that involve sealing food in airtight containers. Suitable for fruits, vegetables, meats, and prepared meals.
              </li>
              <li>
                <Indicator feasibility="B" />
                <strong>Freezing</strong> – Preservation through low temperatures to maintain food quality and safety. Ideal for fruits, vegetables, meats, and prepared meals.
              </li>
              <li>
                <Indicator feasibility="B" />
                <strong>Dehydration</strong> – Removal of moisture from food to extend shelf life. Suitable for fruits, vegetables, herbs, and meats (jerky).
              </li>
              <li>
                <Indicator feasibility="R" />
                <strong>Root Cellars</strong> – Underground storage for vegetables and fruits, utilizing natural cooling and humidity control. Ideal for root vegetables, apples, and other storage crops.
              </li>
              <li>
                <Indicator feasibility="B" />
                <strong>Fermentation</strong> – Preservation method that uses beneficial bacteria and yeasts to convert sugars into acids or alcohol. Suitable for vegetables (sauerkraut, kimchi), dairy (yogurt, cheese), and beverages (kombucha).
              </li>
              <li>
                <Indicator feasibility="B" />
                <strong>Pickling</strong> – Preserving food in a solution of vinegar, salt, and spices. Suitable for vegetables, fruits, and some meats.
              </li>
              <li>
                <Indicator feasibility="B" />
                <strong>Smoking</strong> – Using smoke to preserve and flavor meats, fish, and some vegetables. Can be combined with drying for longer shelf life.
              </li>
            </ul>

            <h3 className="text-2xl md:text-3xl font-bold mt-8 mb-4 text-white">
              Management
            </h3>
            <ul className="text-lg text-gray-300 leading-relaxed space-y-3 mb-6">
              <li>
                <Indicator carbon="C=" feasibility="B" />
                <strong>Smart Irrigation Systems</strong> – Automated watering systems that optimize water use and reduce waste. Can be controlled by sensors that monitor soil moisture and weather conditions.
              </li>
              <li>
                <Indicator carbon="C=" feasibility="E" />
                <strong>Crop Rotation Planning</strong> – Strategic planning for soil health and pest management. Rotating crops helps prevent soil depletion and reduces the risk of pests and diseases.
              </li>
              <li>
                <Indicator carbon="C=" feasibility="B" />
                <strong>Pest Management</strong> – Integrated pest control systems that minimize chemical use and protect crops. Techniques include biological control, companion planting, and physical barriers.
              </li>
              <li>
                <Indicator carbon="C=" feasibility="E" />
                <strong>Soil Health Monitoring</strong> – Regular testing and monitoring of soil nutrients, pH, and organic matter to ensure optimal growing conditions.
              </li>
              <li>
                <Indicator carbon="C=" feasibility="B" />
                <strong>Climate Control Systems</strong> – Automated systems for regulating temperature, humidity, and light in greenhouses and indoor farms.
              </li>
              <li>
                <Indicator carbon="C=" feasibility="B" />
                <strong>Seed Saving</strong> – Collecting and storing seeds from current crops for future planting. Ensures a sustainable and cost-effective supply of seeds.
              </li>
              <li>
                <Indicator carbon="C-" feasibility="B" />
                <strong>Composting</strong> – Recycling organic waste into nutrient-rich compost to improve soil health and reduce waste.
              </li>
            </ul>

            <h3 className="text-2xl md:text-3xl font-bold mt-8 mb-4 text-white">
              Considerations
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Compliance with agricultural regulations and food safety standards is essential.
            </p>
          </Card>
        </div>
      </section>

      {/* Waste Management Section */}
      <section id="waste-management" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Card variant="glass" size="lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Waste Management & Recycling
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              A well-planned waste system minimizes environmental impact and enhances sustainability.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold mt-8 mb-4 text-white">
              Organic Waste Management
            </h3>
            <ul className="text-lg text-gray-300 leading-relaxed space-y-3 mb-6">
              <li>
                <Indicator carbon="C-" feasibility="B" />
                <strong>Composting</strong> – Organic waste decomposition to produce nutrient-rich soil amendments. Suitable for food scraps, yard waste, and other biodegradable materials.
              </li>
              <li>
                <Indicator carbon="C-" feasibility="B" />
                <strong>Vermiculture</strong> – Use of worms to decompose organic waste, producing high-quality compost known as worm castings.
              </li>
              <li>
                <Indicator carbon="C=" feasibility="E" />
                <strong>Bioreactors</strong> – Biological waste treatment systems that convert organic waste into biogas and compost. Suitable for large-scale operations such as farms and food processing facilities.
              </li>
            </ul>

            <h3 className="text-2xl md:text-3xl font-bold mt-8 mb-4 text-white">
              Water Recycling
            </h3>
            <ul className="text-lg text-gray-300 leading-relaxed space-y-3 mb-6">
              <li>
                <Indicator carbon="C=" feasibility="B" />
                <strong>Greywater Recycling</strong> – Reuse of lightly used water from sinks, showers, and laundry for irrigation and flushing toilets.
              </li>
              <li>
                <Indicator carbon="C=" feasibility="E" />
                <strong>Blackwater Treatment</strong> – Treatment of sewage and wastewater to remove contaminants and pathogens, making it safe for reuse or discharge.
              </li>
              <li>
                <Indicator carbon="C=" feasibility="B" />
                <strong>Water Reuse Systems</strong> – Systems for recycling water within the home or facility, reducing overall water consumption and waste.
              </li>
            </ul>

            <h3 className="text-2xl md:text-3xl font-bold mt-8 mb-4 text-white">
              Waste-to-Energy
            </h3>
            <ul className="text-lg text-gray-300 leading-relaxed space-y-3 mb-6">
              <li>
                <Indicator carbon="C=" feasibility="E" />
                <strong>Biogas Production</strong> – Generation of biogas from organic waste through anaerobic digestion. The biogas can be used for heating, electricity generation, or as a vehicle fuel.
              </li>
              <li>
                <Indicator carbon="C+" feasibility="E" />
                <strong>Plasma Gasification & Incineration</strong> – Waste-to-energy technologies that convert waste into energy and reduce landfill use. Plasma gasification uses high temperatures to break down waste into syngas and slag, while incineration burns waste to produce heat and electricity.
              </li>
            </ul>

            <h3 className="text-2xl md:text-3xl font-bold mt-8 mb-4 text-white">
              On-Site Waste Treatment
            </h3>
            <ul className="text-lg text-gray-300 leading-relaxed space-y-3 mb-6">
              <li>
                <Indicator feasibility="B" />
                <strong>Septic Tanks</strong> – On-site sewage treatment systems for properties without access to municipal sewer systems. Septic tanks treat wastewater through a combination of settling and anaerobic digestion.
              </li>
              <li>
                <Indicator carbon="C=" feasibility="E" />
                <strong>Constructed Wetlands</strong> – Engineered systems that use natural processes involving wetland vegetation, soils, and their associated microbial assemblages to treat wastewater.
              </li>
            </ul>

            <h3 className="text-2xl md:text-3xl font-bold mt-8 mb-4 text-white">
              Considerations
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Proper waste segregation and recycling contribute to sustainability. Compliance with local environmental and health standards is necessary.
            </p>
          </Card>
        </div>
      </section>

      {/* Climate Control Section */}
      <section id="climate-control" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Card variant="glass" size="lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Climate Control
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Energy-efficient climate control ensures comfort in any environment.
            </p>

            <ul className="text-lg text-gray-300 leading-relaxed space-y-3 mb-6">
              <li>
                <Indicator carbon="C-" feasibility="B" />
                <strong>Passive Solar Design</strong> – Architectural design that maximizes natural heating and cooling through building orientation, insulation, and thermal mass. This includes features like south-facing windows, overhangs, and materials that absorb and slowly release heat.
              </li>
              <li>
                <Indicator carbon="C=" feasibility="B" />
                <strong>Insulation and Weatherproofing</strong> – Proper insulation and sealing of buildings to maintain indoor temperatures and reduce the need for heating and cooling.
              </li>
              <li>
                <Indicator carbon="C=" feasibility="B" />
                <strong>Smart Thermostats</strong> – Programmable and learning thermostats that optimize heating and cooling schedules based on occupancy and preferences, improving energy efficiency.
              </li>
              <li>
                <Indicator carbon="C=" feasibility="B" />
                <strong>Zoned Heating and Cooling</strong> – Systems that divide a building into different zones, each with its own temperature control, to provide targeted heating and cooling where needed.
              </li>
              <li>
                <Indicator carbon="C=" feasibility="B" />
                <strong>Energy Recovery Ventilators (ERVs) and Heat Recovery Ventilators (HRVs)</strong> – Systems that exchange stale indoor air with fresh outdoor air while recovering heat or cooling energy to maintain indoor comfort and improve air quality.
              </li>
            </ul>

            <h3 className="text-2xl md:text-3xl font-bold mt-8 mb-4 text-white">
              Heating
            </h3>
            <ul className="text-lg text-gray-300 leading-relaxed space-y-3 mb-6">
              <li>
                <Indicator carbon="C-" feasibility="B" />
                <strong>Solar Thermal Heating</strong> – Solar energy systems that use solar collectors to capture and convert sunlight into heat, which can be used for space heating or water heating.
              </li>
              <li>
                <Indicator carbon="C=" feasibility="B" />
                <strong>Radiant Heating</strong> – Systems that provide heat directly to the floor or panels in the wall or ceiling. Radiant heating can be powered by electricity, hot water, or solar thermal energy.
              </li>
              <li>
                <Indicator carbon="C+" feasibility="B" />
                <strong>Wood and Pellet Stoves</strong> – Biomass heating systems that burn wood or pellets to provide heat. These can be a sustainable option if using locally sourced biomass.
              </li>
            </ul>

            <h3 className="text-2xl md:text-3xl font-bold mt-8 mb-4 text-white">
              Cooling
            </h3>
            <ul className="text-lg text-gray-300 leading-relaxed space-y-3 mb-6">
              <li>
                <Indicator carbon="C=" feasibility="B" />
                <strong>Geothermal Cooling</strong> – Similar to geothermal heating, these systems use ground-source heat pumps to transfer heat from the building to the ground, providing efficient cooling.
              </li>
              <li>
                <Indicator carbon="C=" feasibility="B" />
                <strong>Evaporative Coolers</strong> – Devices that cool air through the evaporation of water. They are energy-efficient and work best in dry climates.
              </li>
              <li>
                <Indicator carbon="C=" feasibility="B" />
                <strong>Natural Ventilation</strong> – Design strategies that maximize airflow through the building using windows, vents, and architectural features to enhance cooling without mechanical systems.
              </li>
            </ul>

            <h3 className="text-2xl md:text-3xl font-bold mt-8 mb-4 text-white">
              Air Quality
            </h3>
            <ul className="text-lg text-gray-300 leading-relaxed space-y-3">
              <li>
                <Indicator carbon="C=" feasibility="B" />
                <strong>Air Filtration</strong> – Systems for clean indoor air, removing dust, allergens, and pollutants. This includes HEPA filters, activated carbon filters, and UV air purifiers.
              </li>
              <li>
                <Indicator carbon="C=" feasibility="B" />
                <strong>Humidifiers and Dehumidifiers</strong> – Devices that maintain optimal indoor humidity levels, improving comfort and preventing issues like mold growth and dry air.
              </li>
              <li>
                <Indicator carbon="C=" feasibility="B" />
                <strong>Ventilation Systems</strong> – Mechanical systems that ensure a constant supply of fresh air, removing indoor pollutants and maintaining air quality.
              </li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Card variant="glass" size="lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Security & Safety
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Integrated security measures protect assets, resources, and personnel.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold mt-8 mb-4 text-white">
              Automated Smart Security
            </h3>
            <ul className="text-lg text-gray-300 leading-relaxed space-y-3 mb-6">
              <li><strong>Person Detection</strong> – Identifies and alerts to the presence of individuals. Uses cameras and sensors to monitor and recognize human activity, providing real-time alerts and recordings.</li>
              <li><strong>Animal Detection</strong> – Monitors and alerts to the presence of animals. Helps prevent wildlife intrusions and protects livestock.</li>
              <li><strong>Object Detection</strong> – Tracks and identifies objects within the property. Useful for monitoring valuable assets and ensuring they remain in place.</li>
              <li><strong>Threat Detection</strong> – Recognizes potential threats and triggers alarms. Includes motion sensors, sound detection, and advanced analytics to identify suspicious behavior.</li>
              <li><strong>Surveillance Cameras</strong> – High-definition cameras with night vision and remote access capabilities for continuous monitoring.</li>
              <li><strong>Smart Alarms</strong> – Integrated alarm systems that can be controlled remotely and provide instant notifications to your smartphone or security service.</li>
              <li><strong>Access Control Systems</strong> – Automated systems that manage entry and exit points, ensuring only authorized individuals can access certain areas.</li>
            </ul>

            <h3 className="text-2xl md:text-3xl font-bold mt-8 mb-4 text-white">
              Physical Security
            </h3>
            <ul className="text-lg text-gray-300 leading-relaxed space-y-3 mb-6">
              <li><strong>Locks</strong> – High-security locks for doors and windows. Includes deadbolts, smart locks, and reinforced locking mechanisms.</li>
              <li><strong>Biometric Identification</strong> – Access control using fingerprints, facial recognition, or other biometric data. Enhances security by ensuring only authorized personnel can gain access.</li>
              <li><strong>Trained Dogs</strong> – Guard dogs for security and protection. Can be trained to detect intruders, provide alerts, and offer physical protection.</li>
              <li><strong>Fencing and Barriers</strong> – Physical barriers such as fences, walls, and gates to deter unauthorized access and protect the perimeter.</li>
              <li><strong>Security Lighting</strong> – Motion-activated and strategically placed lighting to deter intruders and enhance visibility around the property.</li>
              <li><strong>Safe Rooms</strong> – Reinforced rooms designed to provide a secure location during emergencies or intrusions.</li>
            </ul>

            <h3 className="text-2xl md:text-3xl font-bold mt-8 mb-4 text-white">
              Medical Supply
            </h3>
            <ul className="text-lg text-gray-300 leading-relaxed space-y-3 mb-6">
              <li><strong>First Aid Kits</strong> – Stockpiling essential medical supplies and first aid kits for emergencies. Includes bandages, antiseptics, pain relievers, and other basic medical supplies.</li>
              <li><strong>Emergency Medical Equipment</strong> – Equipment such as automated external defibrillators (AEDs), oxygen tanks, and splints for more serious medical emergencies.</li>
              <li><strong>Medications</strong> – Stock of essential medications, including prescription drugs, over-the-counter medications, and emergency antibiotics.</li>
            </ul>

            <h3 className="text-2xl md:text-3xl font-bold mt-8 mb-4 text-white">
              Fire Safety
            </h3>
            <ul className="text-lg text-gray-300 leading-relaxed space-y-3 mb-6">
              <li><strong>Smoke Detectors</strong> – Devices that detect smoke and provide early warnings of fire. Should be installed in key areas and regularly tested.</li>
              <li><strong>Fire Extinguishers</strong> – Portable devices for extinguishing small fires. Should be easily accessible and regularly maintained.</li>
              <li><strong>Fire Suppression Systems</strong> – Automated systems such as sprinklers that activate in the event of a fire to control and extinguish flames.</li>
            </ul>

            <h3 className="text-2xl md:text-3xl font-bold mt-8 mb-4 text-white">
              Disaster Preparedness
            </h3>
            <ul className="text-lg text-gray-300 leading-relaxed space-y-3 mb-6">
              <li><strong>Emergency Plans</strong> – Comprehensive plans for various emergencies, including natural disasters, intrusions, and medical emergencies. Should include evacuation routes, communication plans, and roles and responsibilities.</li>
              <li><strong>Emergency Kits</strong> – Kits containing essential supplies such as food, water, clothing, and tools to sustain individuals during an emergency.</li>
              <li><strong>Backup Power</strong> – Generators or battery storage systems to provide power during outages, ensuring critical systems remain operational.</li>
              <li><strong>Communication Systems</strong> – Reliable communication tools such as two-way radios, satellite phones, and emergency contact lists.</li>
            </ul>

            <h3 className="text-2xl md:text-3xl font-bold mt-8 mb-4 text-white">
              Cybersecurity
            </h3>
            <ul className="text-lg text-gray-300 leading-relaxed space-y-3 mb-6">
              <li><strong>Network Security</strong> – Measures to protect home or business networks from cyber threats. Includes firewalls, encryption, and secure Wi-Fi networks.</li>
              <li><strong>Data Protection</strong> – Regular backups and secure storage of important data to prevent loss or theft.</li>
              <li><strong>Access Controls</strong> – Strong passwords, multi-factor authentication, and user access controls to protect sensitive information.</li>
              <li><strong>Monitoring and Alerts</strong> – Systems that monitor for suspicious activity and provide alerts for potential cyber threats.</li>
            </ul>

            <h3 className="text-2xl md:text-3xl font-bold mt-8 mb-4 text-white">
              Considerations
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Privacy laws must be considered when implementing security measures.
            </p>
          </Card>
        </div>
      </section>

      {/* Considerations Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Card variant="glass" size="lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Considerations
            </h2>
            <ul className="text-lg text-gray-300 leading-relaxed space-y-3">
              <li><strong>Initial Costs</strong> – The upfront investment for independent systems can be high, but long-term savings, security, and sustainability benefits often offset these costs.</li>
              <li><strong>Local Regulations</strong> – Compliance with local building codes, zoning laws, safety standards, and environmental regulations is essential when implementing independent systems.</li>
              <li><strong>Scalability</strong> – Systems should be designed with future expansion in mind to accommodate growing needs.</li>
              <li><strong>Sustainability</strong> – Prioritizing sustainable practices ensures long-term viability and minimal environmental impact.</li>
              <li><strong>Community Involvement</strong> – Engaging with local communities can provide additional resources, knowledge, and support for various independent initiatives.</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Build Your Independent Future Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Card variant="glass" size="lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Build Your Independent Future
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Self-sufficient living is no longer an alternative—it's a modern, intelligent choice. Whether you're designing a private residence, a remote research site, or a future-proof safe haven, <strong><span className="font-mono">AP0110</span></strong> provides integrated, automated solutions that eliminate reliance on external infrastructure.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              <strong><span className="font-mono">AP0110</span></strong> is not just software—it is the intelligence layer that makes off-grid living seamless, efficient, and autonomous. From <strong>power and water</strong> to <strong>food, security, and automation</strong>, we design custom solutions for any mission—no compromises, no dependencies.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              <strong>Ready to take control of your environment?</strong> Contact <strong><span className="font-mono">AP0110</span></strong> today to start designing your self-sufficient future and take full control of your off-grid mission.
            </p>
            <Button size="lg" variant="primary">Book Now</Button>
          </Card>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Card variant="glass" size="lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Let's Collaborate!
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Are you a developer or provider of sustainability technologies? Do you share our vision for an independent future? Partner with us to bring your innovative solutions to those who need them.
            </p>
            <Button size="lg" variant="primary">Partner</Button>
          </Card>
        </div>
      </section>
    </div>
  )
}

