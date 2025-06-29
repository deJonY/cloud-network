"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Layers, Network, Wifi, Database, Shield, Globe, Monitor, Smartphone } from "lucide-react"

const osiLayers = [
  {
    layer: 7,
    name: "Application",
    description: "Network services to applications",
    protocols: ["HTTP", "HTTPS", "FTP", "SMTP", "DNS"],
    examples: ["Web browsers", "Email clients", "File transfer"],
    icon: Monitor,
    color: "bg-red-500",
  },
  {
    layer: 6,
    name: "Presentation",
    description: "Data translation, encryption, compression",
    protocols: ["SSL/TLS", "JPEG", "GIF", "MPEG"],
    examples: ["Encryption", "Compression", "Data formatting"],
    icon: Shield,
    color: "bg-orange-500",
  },
  {
    layer: 5,
    name: "Session",
    description: "Manages sessions between applications",
    protocols: ["NetBIOS", "RPC", "SQL"],
    examples: ["Session establishment", "Session management"],
    icon: Database,
    color: "bg-yellow-500",
  },
  {
    layer: 4,
    name: "Transport",
    description: "Reliable data transfer, error recovery",
    protocols: ["TCP", "UDP"],
    examples: ["Port numbers", "Segmentation", "Flow control"],
    icon: Globe,
    color: "bg-green-500",
  },
  {
    layer: 3,
    name: "Network",
    description: "Routing and logical addressing",
    protocols: ["IP", "ICMP", "OSPF", "BGP"],
    examples: ["Routers", "IP addresses", "Routing tables"],
    icon: Network,
    color: "bg-blue-500",
  },
  {
    layer: 2,
    name: "Data Link",
    description: "Node-to-node delivery, error detection",
    protocols: ["Ethernet", "Wi-Fi", "PPP"],
    examples: ["Switches", "MAC addresses", "Frames"],
    icon: Wifi,
    color: "bg-indigo-500",
  },
  {
    layer: 1,
    name: "Physical",
    description: "Physical transmission of raw bits",
    protocols: ["Ethernet cables", "Fiber optic", "Radio waves"],
    examples: ["Cables", "Hubs", "Repeaters", "Signals"],
    icon: Smartphone,
    color: "bg-purple-500",
  },
]

export default function OSILayers() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">OSI Model Layers</h2>
        <Badge variant="outline">7 Layers</Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Layers className="h-5 w-5" />
            Open Systems Interconnection Model
          </CardTitle>
          <CardDescription>
            The OSI model is a conceptual framework that standardizes the functions of a communication system into seven
            abstraction layers.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid gap-4">
        {osiLayers.map((layer) => {
          const IconComponent = layer.icon
          return (
            <Card key={layer.layer} className="relative overflow-hidden">
              <div className={`absolute left-0 top-0 bottom-0 w-2 ${layer.color}`} />
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${layer.color} text-white`}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">
                        Layer {layer.layer}: {layer.name}
                      </CardTitle>
                      <CardDescription className="mt-1">{layer.description}</CardDescription>
                    </div>
                  </div>
                  <Badge variant="secondary">L{layer.layer}</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="font-semibold mb-2">Protocols & Standards</h4>
                    <div className="flex flex-wrap gap-1">
                      {layer.protocols.map((protocol) => (
                        <Badge key={protocol} variant="outline" className="text-xs">
                          {protocol}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Examples & Functions</h4>
                    <div className="flex flex-wrap gap-1">
                      {layer.examples.map((example) => (
                        <Badge key={example} variant="secondary" className="text-xs">
                          {example}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Data Flow Through OSI Layers</CardTitle>
          <CardDescription>How data travels from sender to receiver through each layer</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3">
              <h4 className="font-semibold">Sending Process (Encapsulation)</h4>
              {osiLayers
                .slice()
                .reverse()
                .map((layer, index) => (
                  <div key={layer.layer} className="flex items-center gap-3">
                    <div className="text-sm font-medium w-8">{layer.layer}</div>
                    <div className="flex-1">
                      <Progress value={((index + 1) / 7) * 100} className="h-2" />
                    </div>
                    <div className="text-sm text-muted-foreground">{layer.name}</div>
                  </div>
                ))}
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Receiving Process (Decapsulation)</h4>
              {osiLayers.map((layer, index) => (
                <div key={layer.layer} className="flex items-center gap-3">
                  <div className="text-sm font-medium w-8">{layer.layer}</div>
                  <div className="flex-1">
                    <Progress value={((index + 1) / 7) * 100} className="h-2" />
                  </div>
                  <div className="text-sm text-muted-foreground">{layer.name}</div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
