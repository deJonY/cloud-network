"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Upload, Download, Eye, Trash2, Network, Server, Globe, Router } from "lucide-react"
import { useState } from "react"

const sampleDiagrams = [
  {
    id: 1,
    name: "Corporate Network Topology",
    type: "Network Architecture",
    uploadDate: "2024-01-15",
    size: "2.4 MB",
    format: "PNG",
    description: "Complete corporate network infrastructure showing routers, switches, and endpoints",
  },
  {
    id: 2,
    name: "Cloud Migration Plan",
    type: "Cloud Architecture",
    uploadDate: "2024-01-12",
    size: "1.8 MB",
    format: "PDF",
    description: "Step-by-step cloud migration strategy with hybrid connectivity",
  },
  {
    id: 3,
    name: "Security Network Zones",
    type: "Security Design",
    uploadDate: "2024-01-10",
    size: "3.1 MB",
    format: "SVG",
    description: "Network segmentation showing DMZ, internal zones, and security controls",
  },
  {
    id: 4,
    name: "Data Center Layout",
    type: "Physical Design",
    uploadDate: "2024-01-08",
    size: "4.2 MB",
    format: "PNG",
    description: "Physical data center layout with rack positions and cable management",
  },
]

const networkTemplates = [
  {
    name: "Basic LAN Setup",
    description: "Simple local area network with router, switch, and endpoints",
    components: ["Router", "Switch", "Computers", "Printer"],
    icon: Network,
  },
  {
    name: "Enterprise WAN",
    description: "Wide area network connecting multiple office locations",
    components: ["MPLS", "VPN", "Firewalls", "Load Balancers"],
    icon: Globe,
  },
  {
    name: "Cloud Hybrid",
    description: "Hybrid cloud architecture with on-premises and cloud resources",
    components: ["AWS/Azure", "VPN Gateway", "Direct Connect", "Load Balancer"],
    icon: Server,
  },
  {
    name: "Network Security",
    description: "Security-focused network design with multiple protection layers",
    components: ["Firewall", "IDS/IPS", "DMZ", "VPN"],
    icon: Router,
  },
]

export default function NetworkDiagrams() {
  const [dragActive, setDragActive] = useState(false)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    // Handle file drop logic here
    console.log("Files dropped:", e.dataTransfer.files)
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Network Diagrams</h2>
        <Button>
          <Upload className="h-4 w-4 mr-2" />
          Upload Diagram
        </Button>
      </div>

      <Tabs defaultValue="upload" className="space-y-4">
        <TabsList>
          <TabsTrigger value="upload">Upload & Manage</TabsTrigger>
          <TabsTrigger value="gallery">Diagram Gallery</TabsTrigger>
          <TabsTrigger value="templates">Network Templates</TabsTrigger>
          <TabsTrigger value="tools">Drawing Tools</TabsTrigger>
        </TabsList>

        <TabsContent value="upload" className="space-y-4">
          {/* File Upload Area */}
          <Card>
            <CardHeader>
              <CardTitle>Upload Network Diagrams</CardTitle>
              <CardDescription>
                Upload your network diagrams, topologies, and architecture documents. Supported formats: PNG, JPG, PDF,
                SVG, Visio
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                  dragActive ? "border-primary bg-primary/5" : "border-muted-foreground/25"
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-lg font-semibold mb-2">Drop files here or click to upload</h3>
                <p className="text-muted-foreground mb-4">
                  Maximum file size: 10MB. Supported formats: PNG, JPG, PDF, SVG, VSDX
                </p>
                <Button>
                  <Upload className="h-4 w-4 mr-2" />
                  Choose Files
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Recent Uploads */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Uploads</CardTitle>
              <CardDescription>Your recently uploaded network diagrams and documents</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {sampleDiagrams.map((diagram) => (
                  <div key={diagram.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Network className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{diagram.name}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">
                            {diagram.type}
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            {diagram.format}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{diagram.size}</span>
                          <span className="text-xs text-muted-foreground">{diagram.uploadDate}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{diagram.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="gallery" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {sampleDiagrams.map((diagram) => (
              <Card key={diagram.id} className="overflow-hidden">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <Network className="h-12 w-12 text-muted-foreground" />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{diagram.name}</CardTitle>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      {diagram.type}
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      {diagram.format}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-4">{diagram.description}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{diagram.uploadDate}</span>
                    <span>{diagram.size}</span>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                      <Eye className="h-4 w-4 mr-2" />
                      View
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="templates" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Network Diagram Templates</CardTitle>
              <CardDescription>
                Pre-built templates to help you create professional network diagrams quickly
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {networkTemplates.map((template) => {
                  const IconComponent = template.icon
                  return (
                    <Card key={template.name} className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-2">{template.name}</h3>
                          <p className="text-sm text-muted-foreground mb-3">{template.description}</p>
                          <div className="flex flex-wrap gap-1 mb-3">
                            {template.components.map((component) => (
                              <Badge key={component} variant="outline" className="text-xs">
                                {component}
                              </Badge>
                            ))}
                          </div>
                          <Button size="sm" className="w-full">
                            Use Template
                          </Button>
                        </div>
                      </div>
                    </Card>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tools" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Online Drawing Tools</CardTitle>
              <CardDescription>Recommended tools for creating network diagrams and topologies</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card className="p-4">
                  <h3 className="font-semibold mb-2">Draw.io (diagrams.net)</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Free online diagramming tool with extensive network symbols and templates.
                  </p>
                  <div className="space-y-2">
                    <Badge variant="outline" className="text-xs">
                      Free
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Web-based
                    </Badge>
                  </div>
                  <Button size="sm" className="w-full mt-3 bg-transparent" variant="outline">
                    Open Tool
                  </Button>
                </Card>

                <Card className="p-4">
                  <h3 className="font-semibold mb-2">Lucidchart</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Professional diagramming with collaboration features and network templates.
                  </p>
                  <div className="space-y-2">
                    <Badge variant="outline" className="text-xs">
                      Freemium
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Collaborative
                    </Badge>
                  </div>
                  <Button size="sm" className="w-full mt-3 bg-transparent" variant="outline">
                    Open Tool
                  </Button>
                </Card>

                <Card className="p-4">
                  <h3 className="font-semibold mb-2">Microsoft Visio</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Industry-standard diagramming tool with comprehensive network stencils.
                  </p>
                  <div className="space-y-2">
                    <Badge variant="outline" className="text-xs">
                      Paid
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Professional
                    </Badge>
                  </div>
                  <Button size="sm" className="w-full mt-3 bg-transparent" variant="outline">
                    Open Tool
                  </Button>
                </Card>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Diagram Best Practices</CardTitle>
              <CardDescription>Tips for creating effective network diagrams</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3">
                  <h4 className="font-semibold text-green-600">Do's</h4>
                  <div className="space-y-2 text-sm">
                    <div>✓ Use standard network symbols and icons</div>
                    <div>✓ Include IP addresses and subnet information</div>
                    <div>✓ Label all connections and interfaces</div>
                    <div>✓ Use consistent colors and styling</div>
                    <div>✓ Include a legend and title</div>
                    <div>✓ Keep diagrams simple and readable</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-red-600">Don'ts</h4>
                  <div className="space-y-2 text-sm">
                    <div>✗ Overcrowd the diagram with too much detail</div>
                    <div>✗ Use non-standard or confusing symbols</div>
                    <div>✗ Forget to update diagrams when network changes</div>
                    <div>✗ Mix logical and physical representations</div>
                    <div>✗ Use unclear or missing labels</div>
                    <div>✗ Create diagrams without proper documentation</div>
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
