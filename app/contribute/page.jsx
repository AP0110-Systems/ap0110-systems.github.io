import Card from '@/components/ui/Card'

export default function TechnologyPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-black/30 to-black/30 bg-cover bg-center"
           style={{backgroundImage: "url('/images/Brazil/rosa-rafael-rQSKTNvaVdE-unsplash-2.jpg')"}}>
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-white">Our Technology</h1>
            
            <div className="grid gap-6">
              <Card variant="glass">
                <h2 className="text-2xl font-bold mb-4 text-white">Connectivity Solutions</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-ap-cyan mb-3">Satellite Internet</h3>
                    <p className="text-gray-300 text-sm mb-4">
                      Leveraging low-earth orbit satellites to provide high-speed internet access to remote areas 
                      where traditional infrastructure is not feasible.
                    </p>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Global coverage capability</li>
                      <li>• Weather-resistant technology</li>
                      <li>• Scalable deployment</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ap-cyan mb-3">Mesh Networking</h3>
                    <p className="text-gray-300 text-sm mb-4">
                      Creating self-healing networks that can extend connectivity across communities without 
                      relying on centralized infrastructure.
                    </p>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Community-owned networks</li>
                      <li>• Automatic failover</li>
                      <li>• Cost-effective scaling</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card variant="glass">
                <h2 className="text-2xl font-bold mb-4 text-white">Platform Technologies</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-ap-cyan mb-2">Frontend</h3>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• React 18</li>
                      <li>• Next.js 14</li>
                      <li>• TypeScript</li>
                      <li>• Tailwind CSS</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ap-cyan mb-2">Visualization</h3>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Three.js</li>
                      <li>• Globe.gl</li>
                      <li>• Leaflet Maps</li>
                      <li>• React Leaflet</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ap-cyan mb-2">Deployment</h3>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Static Site Generation</li>
                      <li>• GitHub Pages</li>
                      <li>• CDN Distribution</li>
                      <li>• Global Edge Caching</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card variant="glass">
                <h2 className="text-2xl font-bold mb-4 text-white">Innovation Areas</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-ap-cyan mb-2">Adaptive Networks</h3>
                    <p className="text-gray-300 text-sm">
                      Developing intelligent routing algorithms that can adapt to changing conditions and optimize 
                      connectivity based on usage patterns and environmental factors.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ap-cyan mb-2">Energy Efficiency</h3>
                    <p className="text-gray-300 text-sm">
                      Creating low-power solutions that can operate on renewable energy sources, making our 
                      technology accessible in areas with limited electrical infrastructure.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ap-cyan mb-2">Local Content</h3>
                    <p className="text-gray-300 text-sm">
                      Building systems that can cache and serve educational content locally, reducing bandwidth 
                      requirements and improving access speeds for learning materials.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
