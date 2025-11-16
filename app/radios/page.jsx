'use client'

import React from 'react'
import Card from '../../src/components/ui/Card'
import Button from '../../src/components/ui/Button'

export default function RadiosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Card variant="glass" size="lg" className="mb-8">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Radio Communication for Web 4.0
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">
              Independent Internet Infrastructure
            </h2>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Radio communication is the foundation of independent, decentralized networks. In Web 4.0—an internet built for people, not corporations—radio technologies enable resilient communication that operates without reliance on centralized infrastructure, corporate control, or surveillance.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              With simple USB radio devices and your computer, you can access free information broadcast through the airwaves: weather data, news, satellite imagery, and digital communications. All receiving is 100% free and license-free—you only need a license if you want to transmit.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              These radio technologies form the backbone of mesh networks and independent internet infrastructure, enabling communities to build their own communication systems that cannot be easily disrupted or controlled by external entities.
            </p>
          </Card>
        </div>
      </section>

      {/* Decentralized Communication Networks */}
      <section id="lora" className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <Card variant="glass" size="lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              LoRa / LoRaWAN Networks
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              <strong className="text-green-400">✅ 100% Free</strong> - LoRa enables decentralized, off-grid communication networks that operate independently of centralized infrastructure. With exceptional range (up to several kilometers) and minimal power consumption, LoRa is ideal for building resilient mesh networks and community-run communication systems that cannot be easily disrupted or controlled by external entities.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              LoRa networks form the backbone of independent internet infrastructure in Web 4.0—enabling communities to create their own communication systems without reliance on corporate ISPs, cellular towers, or centralized servers. Each LoRa gateway and node contributes to a distributed network where no single point of failure exists, making it perfect for remote areas, disaster resilience, and off-grid operations.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              No license needed. Operates in unlicensed ISM bands, making it accessible to anyone who wants to participate in building independent communication infrastructure.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold mt-6 mb-3 text-white">
              What You Can Receive
            </h3>
            <ul className="text-lg text-gray-300 leading-relaxed space-y-2 mb-4">
              <li>• <strong>Environmental Sensor Data</strong> - Temperature, humidity, air quality from community-run monitoring networks</li>
              <li>• <strong>Weather Station Data</strong> - Real-time weather measurements from independent weather stations</li>
              <li>• <strong>Mesh Network Data</strong> - Messages and data routed through peer-to-peer LoRa mesh networks</li>
              <li>• <strong>Agricultural Data</strong> - Soil moisture, crop monitoring from off-grid farming operations</li>
              <li>• <strong>Community Communications</strong> - Local messaging and data sharing in independent networks</li>
              <li>• <strong>Public LoRaWAN Data</strong> - Data from community-operated LoRaWAN networks</li>
            </ul>

            <h3 className="text-2xl md:text-3xl font-bold mt-6 mb-3 text-white">
              Hardware Needed
            </h3>
            <ul className="text-lg text-gray-300 leading-relaxed space-y-2 mb-4">
              <li>• <strong>LoRa USB Module</strong> - Microcontroller with LoRa or dedicated LoRa receiver</li>
              <li>• <strong>LoRa Gateway</strong> - For participating in or building LoRaWAN mesh networks</li>
              <li>• <strong>Computer</strong> - Any modern computer to process and route network data</li>
            </ul>

            <h3 className="text-2xl md:text-3xl font-bold mt-6 mb-3 text-white">
              Software for Decoding
            </h3>
            <ul className="text-lg text-gray-300 leading-relaxed space-y-2 mb-4">
              <li>• <strong>Public LoRaWAN Network Software</strong> - Open-source software for connecting to community LoRaWAN networks</li>
              <li>• <strong>LoRaWAN Network Server</strong> - Self-hosted network server software for operating independent networks</li>
              <li>• <strong>LoRa Gateway Software</strong> - Open-source gateway software for building mesh network nodes</li>
              <li>• <strong>Development Environments</strong> - For programming LoRa modules and building custom mesh network applications</li>
            </ul>
          </Card>
        </div>
      </section>

      <hr></hr>

      {/* Free Information Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Card variant="glass" size="lg" className="mb-8">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Free Information in the Airwaves
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">
              Accessing Radio Data with Your Computer
            </h2>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              The airwaves around you are filled with free information—weather data, news broadcasts, satellite imagery, digital communications, and more. With a simple USB radio device and your computer, you can access this wealth of data without any subscription fees or licenses (for receiving).
            </p>

            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              <strong className="text-green-400">✅ All receiving is 100% free and license-free.</strong> You only need a license if you want to transmit. This guide focuses on what you can receive and decode with computer-based radio solutions.
            </p>
          </Card>
        </div>
      </section>

      {/* SDR */}
      <section id="sdr" className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <Card variant="glass" size="lg" className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Software Defined Radio (SDR)
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Software Defined Radio (SDR) devices connect to your computer via USB and allow you to receive and decode radio signals across a wide range of frequencies. Software on your computer processes the signals into usable data, making SDR one of the most versatile tools for exploring the radio spectrum.
            </p>

            <div className="mb-8">
              <Card variant="glass" size="md">
                <h3 className="text-2xl font-bold mb-3 text-white">USB SDR Dongle</h3>
                <p className="text-gray-300 mb-3">
                  <strong>Frequency Range:</strong> Varies by device (typically 24 MHz - 6 GHz)<br/>
                  <strong>Best For:</strong> Weather satellites, HAM radio, air traffic, general exploration, research
                </p>
                <p className="text-gray-300">
                  USB SDR dongles turn your computer into a powerful radio receiver. Can receive AM, FM, shortwave, HAM bands, weather satellites, air traffic control, and much more. Some devices can also transmit (transmitting requires proper licensing). Frequency coverage varies by device, with options available from basic coverage to wide spectrum exploration.
                </p>
              </Card>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mt-6 mb-3 text-white">
              Recommended Software
            </h3>
            <ul className="text-lg text-gray-300 leading-relaxed space-y-2 mb-4">
              <li>• <strong>Windows SDR Software</strong> - Popular SDR software for Windows, great for beginners</li>
              <li>• <strong>Cross-Platform SDR Software</strong> - SDR software that works on Linux, macOS, and Windows</li>
              <li>• <strong>Signal Processing Framework</strong> - Advanced signal processing tools</li>
              <li>• <strong>Weather Satellite Decoder</strong> - Software that decodes weather satellite images</li>
              <li>• <strong>Digital Mode Decoder</strong> - Decodes digital modes (APRS, POCSAG, etc.)</li>
              <li>• <strong>Command-Line SDR Tools</strong> - Command-line tools for SDR devices</li>
              <li>• <strong>Spectrum Analyzer</strong> - Software for viewing and analyzing radio spectrum</li>
            </ul>

            <h3 className="text-2xl md:text-3xl font-bold mt-8 mb-3 text-white">
              Weather Satellite Images
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              <strong className="text-green-400">✅ 100% Free</strong> - Receive real-time weather images directly from satellites passing overhead. No license, no subscription, just free weather data.
            </p>
            <h4 className="text-xl md:text-2xl font-bold mt-4 mb-2 text-white">
              What You Can Receive
            </h4>
            <ul className="text-lg text-gray-300 leading-relaxed space-y-2 mb-4">
              <li>• <strong>Visible Light Images</strong> - Daytime cloud cover and weather patterns</li>
              <li>• <strong>Infrared Images</strong> - Temperature data, cloud heights, day/night coverage</li>
              <li>• <strong>Water Vapor Images</strong> - Atmospheric moisture content</li>
              <li>• <strong>Real-Time Weather Data</strong> - Current conditions from space</li>
              <li>• <strong>Storm Tracking</strong> - Monitor hurricanes, thunderstorms, and weather systems</li>
            </ul>
            <h4 className="text-xl md:text-2xl font-bold mt-4 mb-2 text-white">
              Additional Hardware Needed
            </h4>
            <ul className="text-lg text-gray-300 leading-relaxed space-y-2 mb-4">
              <li>• <strong>QFH Antenna</strong> or <strong>V-Dipole Antenna</strong> (DIY) - Optimized for 137 MHz</li>
            </ul>
            <h4 className="text-xl md:text-2xl font-bold mt-4 mb-2 text-white">
              Software for Decoding
            </h4>
            <ul className="text-lg text-gray-300 leading-relaxed space-y-2 mb-4">
              <li>• <strong>Weather Satellite Decoder</strong> - Free software that decodes weather satellite images</li>
              <li>• <strong>Satellite tracking apps</strong> - To know when satellites pass overhead</li>
            </ul>
            <h4 className="text-xl md:text-2xl font-bold mt-4 mb-2 text-white">
              Available Satellites
            </h4>
            <ul className="text-lg text-gray-300 leading-relaxed space-y-2 mb-4">
              <li>• <strong>US Weather Satellites</strong> - Pass 2-4 times daily</li>
              <li>• <strong>International Weather Satellites</strong> - Higher resolution options available</li>
              <li>• <strong>Geostationary Weather Satellites</strong> - Requires more advanced setup</li>
            </ul>

            <h3 className="text-2xl md:text-3xl font-bold mt-8 mb-3 text-white">
              AM/FM Radio Broadcasts
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              <strong className="text-green-400">✅ 100% Free</strong> - Receive local AM and FM radio stations with news, weather, music, and emergency broadcasts. Can be recorded and processed with software.
            </p>
            <h4 className="text-xl md:text-2xl font-bold mt-4 mb-2 text-white">
              What You Can Receive
            </h4>
            <ul className="text-lg text-gray-300 leading-relaxed space-y-2 mb-4">
              <li>• <strong>Local News</strong> - News updates and current events</li>
              <li>• <strong>Weather Reports</strong> - Current conditions and forecasts</li>
              <li>• <strong>Emergency Broadcasts</strong> - Emergency Alert System (EAS) messages</li>
              <li>• <strong>Traffic Reports</strong> - Road conditions and traffic updates</li>
              <li>• <strong>Music and Entertainment</strong> - Music stations and talk radio</li>
              <li>• <strong>Public Service Announcements</strong> - Community information</li>
            </ul>
            <h4 className="text-xl md:text-2xl font-bold mt-4 mb-2 text-white">
              Additional Hardware Needed
            </h4>
            <ul className="text-lg text-gray-300 leading-relaxed space-y-2 mb-4">
              <li>• <strong>Simple Wire Antenna</strong> - Basic antenna for AM/FM reception</li>
            </ul>

            <h3 className="text-2xl md:text-3xl font-bold mt-8 mb-3 text-white">
              HAM Radio Digital Communications (Receive Only)
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              <strong className="text-green-400">✅ Free to Receive</strong> - Listen to and decode digital communications from amateur radio operators. No license needed to receive. Includes weather reports, emergency communications, and digital data.
            </p>
            <h4 className="text-xl md:text-2xl font-bold mt-4 mb-2 text-white">
              What You Can Receive
            </h4>
            <ul className="text-lg text-gray-300 leading-relaxed space-y-2 mb-4">
              <li>• <strong>APRS (Automatic Packet Reporting System)</strong> - Location data, weather stations, messages</li>
              <li>• <strong>FT8 / FT4</strong> - Digital communication mode, can decode messages</li>
              <li>• <strong>PSK31 / PSK63</strong> - Text-based digital communications</li>
              <li>• <strong>RTTY</strong> - Radio teletype messages</li>
              <li>• <strong>Packet Radio</strong> - Digital data packets</li>
              <li>• <strong>Weather Station Data</strong> - Real-time weather from HAM weather stations</li>
              <li>• <strong>Emergency Communications</strong> - Disaster response communications</li>
            </ul>
            <h4 className="text-xl md:text-2xl font-bold mt-4 mb-2 text-white">
              Additional Hardware Needed
            </h4>
            <ul className="text-lg text-gray-300 leading-relaxed space-y-2 mb-4">
              <li>• <strong>Antenna</strong> - Appropriate for HAM bands (depends on frequency)</li>
            </ul>
            <h4 className="text-xl md:text-2xl font-bold mt-4 mb-2 text-white">
              Software for Decoding
            </h4>
            <ul className="text-lg text-gray-300 leading-relaxed space-y-2 mb-4">
              <li>• <strong>Digital Mode Decoder</strong> - Decodes FT8, FT4, and other digital modes</li>
              <li>• <strong>Multi-Mode Decoder</strong> - Decodes multiple digital modes (APRS, POCSAG, etc.)</li>
              <li>• <strong>APRS Decoder</strong> - APRS decoder and gateway software</li>
              <li>• <strong>Digital Communication Decoder</strong> - Decodes many digital modes (PSK31, RTTY, etc.)</li>
            </ul>

            <h3 className="text-2xl md:text-3xl font-bold mt-8 mb-3 text-white">
              Air Traffic Control Communications
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              <strong className="text-green-400">✅ Free to Receive</strong> - Listen to aircraft communications with air traffic control. No license needed. Great for learning about aviation and monitoring local air traffic.
            </p>
            <h4 className="text-xl md:text-2xl font-bold mt-4 mb-2 text-white">
              What You Can Receive
            </h4>
            <ul className="text-lg text-gray-300 leading-relaxed space-y-2 mb-4">
              <li>• <strong>ATC Communications</strong> - Air traffic control tower communications</li>
              <li>• <strong>Aircraft Transponder Data</strong> - Flight information, altitude, speed</li>
              <li>• <strong>Ground Control</strong> - Airport ground operations</li>
              <li>• <strong>Approach/Departure Control</strong> - Aircraft approach and departure</li>
            </ul>
            <h4 className="text-xl md:text-2xl font-bold mt-4 mb-2 text-white">
              Additional Hardware Needed
            </h4>
            <ul className="text-lg text-gray-300 leading-relaxed space-y-2 mb-4">
              <li>• <strong>VHF Antenna</strong> - Optimized for aviation frequencies (108-137 MHz)</li>
            </ul>
            <h4 className="text-xl md:text-2xl font-bold mt-4 mb-2 text-white">
              Software for Listening
            </h4>
            <ul className="text-lg text-gray-300 leading-relaxed space-y-2 mb-4">
              <li>• <strong>ADS-B Decoder</strong> - Decodes ADS-B transponder data (if you have ADS-B receiver)</li>
              <li>• <strong>Audio Recording Software</strong> - Record communications for analysis</li>
            </ul>

            <h3 className="text-2xl md:text-3xl font-bold mt-8 mb-3 text-white">
              GPS Signals
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              <strong className="text-green-400">✅ 100% Free</strong> - Receive GPS positioning and timing data directly from GPS satellites. No license needed. GPS signals are broadcast continuously and can be decoded to provide location, time, and navigation information.
            </p>
            <h4 className="text-xl md:text-2xl font-bold mt-4 mb-2 text-white">
              What You Can Receive
            </h4>
            <ul className="text-lg text-gray-300 leading-relaxed space-y-2 mb-4">
              <li>• <strong>Positioning Data</strong> - Latitude, longitude, and altitude information</li>
              <li>• <strong>Time Signals</strong> - Highly accurate atomic clock time synchronization</li>
              <li>• <strong>Satellite Ephemeris Data</strong> - Orbital information for GPS satellites</li>
              <li>• <strong>Navigation Messages</strong> - Satellite status and system information</li>
              <li>• <strong>Signal Strength</strong> - Information about satellite visibility and signal quality</li>
            </ul>
            <h4 className="text-xl md:text-2xl font-bold mt-4 mb-2 text-white">
              Additional Hardware Needed
            </h4>
            <ul className="text-lg text-gray-300 leading-relaxed space-y-2 mb-4">
              <li>• <strong>GPS Antenna</strong> - Active GPS antenna optimized for 1575.42 MHz</li>
            </ul>
            <h4 className="text-xl md:text-2xl font-bold mt-4 mb-2 text-white">
              Software for Decoding
            </h4>
            <ul className="text-lg text-gray-300 leading-relaxed space-y-2 mb-4">
              <li>• <strong>GPS Decoder Software</strong> - Software that decodes GPS navigation messages</li>
              <li>• <strong>Signal Processing Tools</strong> - For analyzing GPS signal characteristics</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* TV Tuner */}
      <section id="tv-tuner" className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <Card variant="glass" size="lg" className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              USB TV Tuner
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              USB TV tuners connect to your computer and allow you to receive free over-the-air television broadcasts. These devices decode digital TV signals (ATSC) and make broadcast content available on your computer for viewing, recording, and streaming.
            </p>

            <div className="mb-8">
              <Card variant="glass" size="md">
                <h3 className="text-2xl font-bold mb-3 text-white">USB TV Tuner</h3>
                <p className="text-gray-300 mb-3">
                  <strong>Frequency Range:</strong> TV broadcast bands (VHF/UHF)<br/>
                  <strong>Best For:</strong> Over-the-air television, ATSC decoding
                </p>
                <p className="text-gray-300">
                  Receives free over-the-air television broadcasts. Can record, stream, and decode digital TV signals. Works with any TV antenna to receive local channels.
                </p>
              </Card>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mt-6 mb-3 text-white">
              Software for Viewing
            </h3>
            <ul className="text-lg text-gray-300 leading-relaxed space-y-2 mb-4">
              <li>• <strong>Media Player Software</strong> - Can view TV tuner input</li>
              <li>• <strong>Media Center Software</strong> - Media center applications with TV support</li>
              <li>• <strong>Network Tuner Software</strong> - If using network-attached TV tuner</li>
              <li>• <strong>Built-in Media Center</strong> - Some operating systems include TV viewing capabilities</li>
            </ul>

            <h3 className="text-2xl md:text-3xl font-bold mt-8 mb-3 text-white">
              Over-the-Air Television (OTA TV)
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              <strong className="text-green-400">✅ 100% Free</strong> - Receive free HD television broadcasts including local news, network programming, and emergency alerts. No cable, no subscription, no license needed.
            </p>
            <h4 className="text-xl md:text-2xl font-bold mt-4 mb-2 text-white">
              What You Can Receive
            </h4>
            <ul className="text-lg text-gray-300 leading-relaxed space-y-2 mb-4">
              <li>• <strong>Local News Broadcasts</strong> - Live local news and weather</li>
              <li>• <strong>Network Programming</strong> - Major broadcast networks and local stations</li>
              <li>• <strong>Emergency Alert System (EAS)</strong> - Critical emergency information</li>
              <li>• <strong>Sports Events</strong> - Live sports broadcasts</li>
              <li>• <strong>Educational Content</strong> - Educational programming and shows</li>
              <li>• <strong>Entertainment</strong> - Movies, TV shows, and entertainment programming</li>
            </ul>
            <h4 className="text-xl md:text-2xl font-bold mt-4 mb-2 text-white">
              Additional Hardware Needed
            </h4>
            <ul className="text-lg text-gray-300 leading-relaxed space-y-2 mb-4">
              <li>• <strong>TV Antenna</strong> - Indoor or outdoor antenna</li>
            </ul>
            <p className="text-sm text-gray-400 mt-4">
              <strong>Check Channel Availability:</strong> Visit <a href="https://www.antennaweb.org" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">antennaweb.org</a> or <a href="https://www.tvfool.com" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">tvfool.com</a> to see what channels are available in your area.
            </p>
          </Card>
        </div>
      </section>

      {/* Other Free Signals */}
      <section id="other-signals" className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <Card variant="glass" size="lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Other Free Signals You Can Receive
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">Marine Radio (VHF)</h3>
                <p className="text-gray-300 mb-2">
                  Listen to boat and ship communications, weather reports, and maritime safety information. Frequency: 156-162 MHz. Use USB SDR dongle + VHF antenna.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">Public Safety (Where Legal)</h3>
                <p className="text-gray-300 mb-2">
                  Monitor police, fire, and emergency services (where legally permitted). Frequencies vary by location. Use USB SDR dongle + appropriate antenna. Check local laws.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">International Space Station</h3>
                <p className="text-gray-300 mb-2">
                  Receive astronaut communications, slow-scan TV, and packet radio from the International Space Station. Use USB SDR dongle + VHF/UHF antenna.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">Shortwave Radio</h3>
                <p className="text-gray-300 mb-2">
                  International broadcasts, time signals, and amateur radio. Frequency: 3-30 MHz. Use USB SDR dongle + shortwave antenna.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <hr></hr>

      {/* Private Cellular Networks */}
      <section id="private-cellular" className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <Card variant="glass" size="lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Private Cellular Networks
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              <strong className="text-green-400">✅ Free to Receive</strong> - Private cellular networks enable communities and organizations to operate their own independent cellular infrastructure, free from corporate carrier control. These networks use the same LTE and 5G technologies as commercial carriers but are owned and operated locally, forming a critical component of Web 4.0's independent internet infrastructure.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Private cellular networks provide high-speed, low-latency communication that can cover entire communities, campuses, or regions. Unlike commercial cellular networks controlled by large corporations, private networks are operated by the communities they serve—ensuring that communication infrastructure remains independent, resilient, and aligned with local needs rather than corporate profit motives.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              In Web 4.0, private cellular networks enable communities to build their own communication infrastructure without relying on corporate ISPs or cellular carriers. These networks can operate as standalone systems or connect to form federated networks, creating resilient communication systems that cannot be easily disrupted or controlled by external entities.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Receiving signals from private cellular networks does not require a license. However, operating a private cellular network requires proper licensing and regulatory compliance with local telecommunications authorities. This section focuses on receiving and understanding private cellular signals, as well as the potential for community-run cellular infrastructure.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold mt-6 mb-3 text-white">
              What You Can Receive
            </h3>
            <ul className="text-lg text-gray-300 leading-relaxed space-y-2 mb-4">
              <li>• <strong>Network Signals</strong> - Monitor and analyze private cellular network signals and coverage</li>
              <li>• <strong>Network Information</strong> - Cell tower identification, signal strength, and network parameters</li>
              <li>• <strong>Frequency Analysis</strong> - Study cellular frequency bands and spectrum usage</li>
              <li>• <strong>Community Network Data</strong> - Access data from community-operated private cellular networks (where available)</li>
              <li>• <strong>Network Performance Metrics</strong> - Signal quality, latency, and throughput measurements</li>
            </ul>

            <h3 className="text-2xl md:text-3xl font-bold mt-6 mb-3 text-white">
              Hardware Needed
            </h3>
            <ul className="text-lg text-gray-300 leading-relaxed space-y-2 mb-4">
              <li>• <strong>Cellular-Compatible SDR Device</strong> - Software Defined Radio device capable of receiving LTE/5G frequencies (typically 600 MHz - 6 GHz, with mmWave support for higher bands)</li>
              <li>• <strong>Cellular Antenna</strong> - Antenna optimized for cellular frequency bands (varies by band: low-band, mid-band, or high-band/mmWave)</li>
              <li>• <strong>Computer</strong> - Modern computer with sufficient processing power for cellular signal analysis</li>
            </ul>

            <h3 className="text-2xl md:text-3xl font-bold mt-6 mb-3 text-white">
              Software for Analysis
            </h3>
            <ul className="text-lg text-gray-300 leading-relaxed space-y-2 mb-4">
              <li>• <strong>Cellular Signal Analysis Software</strong> - Open-source software for analyzing cellular signals and network parameters</li>
              <li>• <strong>Open-Source Cellular Base Station Software</strong> - Software for operating community-run private cellular networks (requires proper licensing)</li>
              <li>• <strong>SDR Software</strong> - Software Defined Radio applications capable of processing cellular frequency bands</li>
              <li>• <strong>Network Monitoring Tools</strong> - Tools for monitoring and analyzing cellular network signals and performance</li>
            </ul>

            <h3 className="text-2xl md:text-3xl font-bold mt-6 mb-3 text-white">
              Community Private Cellular Networks
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Open-source cellular base station software enables communities to deploy independent private cellular networks. These community-run networks can provide high-speed internet access and cellular communication without relying on corporate ISPs or cellular carriers, forming part of Web 4.0's independent infrastructure. Private cellular networks are ideal for remote areas, disaster resilience, and communities seeking to maintain control over their communication infrastructure.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Operating a private cellular network requires proper licensing and regulatory compliance with local telecommunications authorities. However, the ability to build and operate independent cellular infrastructure represents a significant step toward Web 4.0's vision of decentralized, community-controlled communication networks.
            </p>
          </Card>
        </div>
      </section>
      
    </div>
  )
}
