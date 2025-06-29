"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Network, Globe, Shield, Database, Layers } from "lucide-react"

const tcpipLayers = [
  {
    layer: 4,
    name: "Application Layer",
    description: "Network services and applications",
    protocols: ["HTTP/HTTPS", "FTP", "SMTP", "DNS", "DHCP", "SSH", "Telnet"],
    examples: ["Web browsers", "Email clients", "File transfer applications"],
    icon: Globe,
    color: "bg-blue-500",
    osiEquivalent: "Layers 5-7 (Session, Presentation, Application)",
  },
  {
    layer: 3,
    name: "Transport Layer",
    description: "End-to-end communication and reliability",
    protocols: ["TCP", "UDP"],
    examples: ["Port numbers", "Segmentation", "Flow control", "Error recovery"],
    icon: Shield,
    color: "bg-green-500",
    osiEquivalent: "Layer 4 (Transport)",
  },
  {
    layer: 2,
    name: "Internet Layer",
    description: "Routing and logical addressing",
    protocols: ["IP (IPv4/IPv6)", "ICMP", "ARP", "OSPF", "BGP"],
    examples: ["IP addresses", "Routing", "Packet forwarding"],
    icon: Network,
    color: "bg-yellow-500",
    osiEquivalent: "Layer 3 (Network)",
  },
  {
    layer: 1,
    name: "Network Access Layer",
    description: "Physical network access and data link",
    protocols: ["Ethernet", "Wi-Fi", "PPP", "Frame Relay"],
    examples: ["MAC addresses", "Physical transmission", "Error detection"],
    icon: Database,
    color: "bg-purple-500",
    osiEquivalent: "Layers 1-2 (Physical, Data Link)",
  },
]

const tcpVsUdp = {
  tcp: {
    name: "Transmission Control Protocol (TCP)",
    characteristics: ["Connection-oriented", "Reliable", "Ordered delivery", "Error checking", "Flow control"],
    advantages: ["Guaranteed delivery", "Data integrity", "Ordered packets"],
    disadvantages: ["Higher overhead", "Slower than UDP", "More complex"],
    useCases: ["Web browsing (HTTP/HTTPS)", "Email (SMTP)", "File transfer (FTP)", "Remote access (SSH)"],
  },
  udp: {
    name: "User Datagram Protocol (UDP)",
    characteristics: ["Connectionless", "Unreliable", "No ordering", "Minimal error checking", "No flow control"],
    advantages: ["Low overhead", "Fast transmission", "Simple protocol"],
    disadvantages: ["No delivery guarantee", "No error recovery", "Packets may arrive out of order"],
    useCases: ["DNS queries", "Video streaming", "Online gaming", "DHCP"],
  },
}

const ipAddressing = [
  {
    type: "IPv4",
    format: "32-bit (4 octets)",
    example: "192.168.1.1",
    range: "0.0.0.0 to 255.255.255.255",
    totalAddresses: "~4.3 billion",
    classes: [
      "Class A (1.0.0.0 - 126.255.255.255)",
      "Class B (128.0.0.0 - 191.255.255.255)",
      "Class C (192.0.0.0 - 223.255.255.255)",
    ],
  },
  {
    type: "IPv6",
    format: "128-bit (8 groups of 4 hex digits)",
    example: "2001:0db8:85a3:0000:0000:8a2e:0370:7334",
    range: "Much larger address space",
    totalAddresses: "~340 undecillion",
    classes: ["Global Unicast", "Link-Local", "Multicast", "Anycast"],
  },
]

export default function TCPIPStack() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">TCP/IP Protocol Stack</h2>
        <Badge variant="outline">4 Layers</Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Layers className="h-5 w-5" />
            TCP/IP Model Overview
          </CardTitle>
          <CardDescription>
            The TCP/IP model is a practical networking framework that defines how data is transmitted over networks.
            It's the foundation of the modern internet.
          </CardDescription>
        </CardHeader>
      </Card>

      <Tabs defaultValue="layers" className="space-y-4">
        <TabsList>
          <TabsTrigger value="layers">Protocol Layers</TabsTrigger>
          <TabsTrigger value="protocols">TCP vs UDP</TabsTrigger>
          <TabsTrigger value="addressing">IP Addressing</TabsTrigger>
          <TabsTrigger value="comparison">OSI vs TCP/IP</TabsTrigger>
        </TabsList>

        <TabsContent value="layers" className="space-y-4">
          <div className="grid gap-4">
            {tcpipLayers.map((layer) => {
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
                  <CardContent className="pt-0 space-y-4">
                    <div className="grid gap-4 md:grid-cols-3">
                      <div>
                        <h4 className="font-semibold mb-2">Key Protocols</h4>
                        <div className="flex flex-wrap gap-1">
                          {layer.protocols.map((protocol) => (
                            <Badge key={protocol} variant="outline" className="text-xs">
                              {protocol}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Functions & Examples</h4>
                        <div className="flex flex-wrap gap-1">
                          {layer.examples.map((example) => (
                            <Badge key={example} variant="secondary" className="text-xs">
                              {example}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">OSI Equivalent</h4>
                        <Badge variant="default" className="text-xs">
                          {layer.osiEquivalent}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </TabsContent>

        <TabsContent value="protocols" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">TCP (Transmission Control Protocol)</CardTitle>
                <CardDescription>{tcpVsUdp.tcp.name}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Characteristics</h4>
                  <div className="space-y-1">
                    {tcpVsUdp.tcp.characteristics.map((char) => (
                      <div key={char} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        <span className="text-sm">{char}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-green-600">Advantages</h4>
                  <div className="space-y-1">
                    {tcpVsUdp.tcp.advantages.map((adv) => (
                      <div key={adv} className="text-sm text-green-600">
                        + {adv}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-red-600">Disadvantages</h4>
                  <div className="space-y-1">
                    {tcpVsUdp.tcp.disadvantages.map((dis) => (
                      <div key={dis} className="text-sm text-red-600">
                        - {dis}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Common Use Cases</h4>
                  <div className="flex flex-wrap gap-1">
                    {tcpVsUdp.tcp.useCases.map((useCase) => (
                      <Badge key={useCase} variant="outline" className="text-xs">
                        {useCase}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">UDP (User Datagram Protocol)</CardTitle>
                <CardDescription>{tcpVsUdp.udp.name}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Characteristics</h4>
                  <div className="space-y-1">
                    {tcpVsUdp.udp.characteristics.map((char) => (
                      <div key={char} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        <span className="text-sm">{char}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-green-600">Advantages</h4>
                  <div className="space-y-1">
                    {tcpVsUdp.udp.advantages.map((adv) => (
                      <div key={adv} className="text-sm text-green-600">
                        + {adv}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-red-600">Disadvantages</h4>
                  <div className="space-y-1">
                    {tcpVsUdp.udp.disadvantages.map((dis) => (
                      <div key={dis} className="text-sm text-red-600">
                        - {dis}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Common Use Cases</h4>
                  <div className="flex flex-wrap gap-1">
                    {tcpVsUdp.udp.useCases.map((useCase) => (
                      <Badge key={useCase} variant="outline" className="text-xs">
                        {useCase}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="addressing" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {ipAddressing.map((ip) => (
              <Card key={ip.type}>
                <CardHeader>
                  <CardTitle className={ip.type === "IPv4" ? "text-blue-600" : "text-green-600"}>
                    {ip.type} Addressing
                  </CardTitle>
                  <CardDescription>Internet Protocol version {ip.type.slice(-1)}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Format:</span>
                      <Badge variant="outline">{ip.format}</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Example:</span>
                      <code className="text-xs bg-muted px-2 py-1 rounded">{ip.example}</code>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Total Addresses:</span>
                      <span className="text-xs text-muted-foreground">{ip.totalAddresses}</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Address Classes/Types</h4>
                    <div className="space-y-1">
                      {ip.classes.map((cls) => (
                        <div key={cls} className="text-xs text-muted-foreground">
                          • {cls}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="comparison" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>OSI Model vs TCP/IP Model</CardTitle>
              <CardDescription>Comparison between the theoretical OSI model and practical TCP/IP model</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-center">OSI Model (7 Layers)</h3>
                  <div className="space-y-2">
                    {[
                      { layer: 7, name: "Application", color: "bg-red-500" },
                      { layer: 6, name: "Presentation", color: "bg-orange-500" },
                      { layer: 5, name: "Session", color: "bg-yellow-500" },
                      { layer: 4, name: "Transport", color: "bg-green-500" },
                      { layer: 3, name: "Network", color: "bg-blue-500" },
                      { layer: 2, name: "Data Link", color: "bg-indigo-500" },
                      { layer: 1, name: "Physical", color: "bg-purple-500" },
                    ].map((layer) => (
                      <div key={layer.layer} className="flex items-center gap-3 p-2 border rounded">
                        <div
                          className={`w-8 h-8 ${layer.color} text-white rounded flex items-center justify-center text-xs font-bold`}
                        >
                          {layer.layer}
                        </div>
                        <span className="font-medium">{layer.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-center">TCP/IP Model (4 Layers)</h3>
                  <div className="space-y-2">
                    {tcpipLayers
                      .slice()
                      .reverse()
                      .map((layer) => (
                        <div key={layer.layer} className="flex items-center gap-3 p-3 border rounded">
                          <div
                            className={`w-8 h-8 ${layer.color} text-white rounded flex items-center justify-center text-xs font-bold`}
                          >
                            {layer.layer}
                          </div>
                          <div>
                            <div className="font-medium">{layer.name}</div>
                            <div className="text-xs text-muted-foreground">{layer.osiEquivalent}</div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2">OSI Model</h4>
                  <div className="space-y-1 text-sm">
                    <div className="text-green-600">+ Comprehensive theoretical framework</div>
                    <div className="text-green-600">+ Clear separation of concerns</div>
                    <div className="text-green-600">+ Educational value</div>
                    <div className="text-red-600">- Complex implementation</div>
                    <div className="text-red-600">- Not widely used in practice</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">TCP/IP Model</h4>
                  <div className="space-y-1 text-sm">
                    <div className="text-green-600">+ Practical and widely implemented</div>
                    <div className="text-green-600">+ Foundation of the internet</div>
                    <div className="text-green-600">+ Simpler structure</div>
                    <div className="text-red-600">- Less detailed than OSI</div>
                    <div className="text-red-600">- Combines multiple functions in layers</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
