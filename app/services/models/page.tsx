"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cloud, Database, Server, Code, Globe } from "lucide-react"

const serviceModels = [
  {
    name: "Infrastructure as a Service (IaaS)",
    description: "Provides virtualized computing resources over the internet",
    icon: Server,
    color: "bg-blue-500",
    examples: ["Amazon EC2", "Google Compute Engine", "Microsoft Azure VMs"],
    responsibilities: {
      provider: ["Hardware", "Virtualization", "Networking", "Storage"],
      customer: ["OS", "Runtime", "Middleware", "Applications", "Data"],
    },
    useCases: ["Web hosting", "Development environments", "Backup solutions"],
    advantages: ["Cost-effective", "Scalable", "Flexible"],
    disadvantages: ["Requires technical expertise", "Security concerns"],
  },
  {
    name: "Platform as a Service (PaaS)",
    description: "Provides a platform for developing, running, and managing applications",
    icon: Code,
    color: "bg-green-500",
    examples: ["Heroku", "Google App Engine", "Microsoft Azure App Service"],
    responsibilities: {
      provider: ["Hardware", "Virtualization", "Networking", "Storage", "OS", "Runtime"],
      customer: ["Applications", "Data"],
    },
    useCases: ["Application development", "API development", "Microservices"],
    advantages: ["Faster development", "Reduced complexity", "Built-in scalability"],
    disadvantages: ["Vendor lock-in", "Limited customization"],
  },
  {
    name: "Software as a Service (SaaS)",
    description: "Delivers software applications over the internet on a subscription basis",
    icon: Globe,
    color: "bg-purple-500",
    examples: ["Google Workspace", "Microsoft 365", "Salesforce"],
    responsibilities: {
      provider: ["Hardware", "Virtualization", "Networking", "Storage", "OS", "Runtime", "Middleware", "Applications"],
      customer: ["Data", "User management"],
    },
    useCases: ["Email services", "CRM systems", "Collaboration tools"],
    advantages: ["No installation required", "Automatic updates", "Accessible anywhere"],
    disadvantages: ["Limited customization", "Data security concerns"],
  },
]

const deploymentModels = [
  {
    name: "Public Cloud",
    description: "Services offered over the public internet and shared across organizations",
    icon: Globe,
    characteristics: ["Cost-effective", "Highly scalable", "No maintenance"],
    examples: ["AWS", "Google Cloud", "Microsoft Azure"],
  },
  {
    name: "Private Cloud",
    description: "Cloud infrastructure operated solely for a single organization",
    icon: Database,
    characteristics: ["Enhanced security", "Greater control", "Compliance"],
    examples: ["VMware vSphere", "OpenStack", "On-premises solutions"],
  },
  {
    name: "Hybrid Cloud",
    description: "Combination of public and private clouds with orchestration between them",
    icon: Cloud,
    characteristics: ["Flexibility", "Cost optimization", "Gradual migration"],
    examples: ["AWS Outposts", "Azure Stack", "Google Anthos"],
  },
]

export default function ServiceModels() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Cloud Service Models</h2>
        <Badge variant="outline">IaaS • PaaS • SaaS</Badge>
      </div>

      {/* Service Models */}
      <div className="space-y-6">
        {serviceModels.map((model) => {
          const IconComponent = model.icon
          return (
            <Card key={model.name} className="relative overflow-hidden">
              <div className={`absolute left-0 top-0 bottom-0 w-2 ${model.color}`} />
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-lg ${model.color} text-white`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{model.name}</CardTitle>
                    <CardDescription className="mt-1">{model.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Examples */}
                <div>
                  <h4 className="font-semibold mb-2">Popular Examples</h4>
                  <div className="flex flex-wrap gap-2">
                    {model.examples.map((example) => (
                      <Badge key={example} variant="secondary">
                        {example}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Responsibility Matrix */}
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="font-semibold mb-2 text-green-600">Provider Manages</h4>
                    <div className="space-y-1">
                      {model.responsibilities.provider.map((item) => (
                        <div key={item} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-blue-600">Customer Manages</h4>
                    <div className="space-y-1">
                      {model.responsibilities.customer.map((item) => (
                        <div key={item} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Use Cases and Pros/Cons */}
                <div className="grid gap-4 md:grid-cols-3">
                  <div>
                    <h4 className="font-semibold mb-2">Common Use Cases</h4>
                    <div className="space-y-1">
                      {model.useCases.map((useCase) => (
                        <Badge key={useCase} variant="outline" className="text-xs block w-fit">
                          {useCase}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-green-600">Advantages</h4>
                    <div className="space-y-1">
                      {model.advantages.map((advantage) => (
                        <div key={advantage} className="text-sm text-green-600">
                          + {advantage}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-red-600">Disadvantages</h4>
                    <div className="space-y-1">
                      {model.disadvantages.map((disadvantage) => (
                        <div key={disadvantage} className="text-sm text-red-600">
                          - {disadvantage}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Deployment Models */}
      <Card>
        <CardHeader>
          <CardTitle>Cloud Deployment Models</CardTitle>
          <CardDescription>Different ways to deploy and access cloud services</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            {deploymentModels.map((model) => {
              const IconComponent = model.icon
              return (
                <div key={model.name} className="p-4 border rounded-lg space-y-3">
                  <div className="flex items-center gap-2">
                    <IconComponent className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">{model.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{model.description}</p>
                  <div>
                    <h4 className="text-sm font-medium mb-1">Key Characteristics</h4>
                    <div className="space-y-1">
                      {model.characteristics.map((char) => (
                        <div key={char} className="text-xs text-muted-foreground">
                          • {char}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-1">Examples</h4>
                    <div className="flex flex-wrap gap-1">
                      {model.examples.map((example) => (
                        <Badge key={example} variant="outline" className="text-xs">
                          {example}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
