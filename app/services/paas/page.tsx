"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Cloud,
  Code,
  Database,
  Server,
  Zap,
  Globe,
  CheckCircle,
  XCircle,
  Star,
  TrendingUp,
  Users,
  DollarSign,
} from "lucide-react"

const paasPlatforms = [
  {
    name: "Heroku",
    provider: "Salesforce",
    description: "Cloud platform for building, running, and scaling applications",
    icon: Cloud,
    languages: ["Ruby", "Node.js", "Python", "Java", "PHP", "Go", "Scala", "Clojure"],
    features: ["Git-based deployment", "Add-ons marketplace", "Auto-scaling", "CI/CD integration"],
    pricing: "$7-500+/month",
    rating: 4.3,
    pros: ["Easy deployment", "Great developer experience", "Extensive add-ons"],
    cons: ["Expensive at scale", "Limited customization", "Vendor lock-in"],
    useCases: ["Rapid prototyping", "Startups", "Web applications"],
    marketShare: "15%",
  },
  {
    name: "Google App Engine",
    provider: "Google Cloud",
    description: "Serverless platform for building scalable web applications",
    icon: Globe,
    languages: ["Python", "Java", "Node.js", "PHP", "Ruby", "Go", ".NET"],
    features: ["Auto-scaling", "Built-in security", "Integrated monitoring", "Version management"],
    pricing: "Pay-as-you-go",
    rating: 4.1,
    pros: ["Automatic scaling", "No server management", "Google infrastructure"],
    cons: ["Vendor lock-in", "Limited runtime customization", "Complex pricing"],
    useCases: ["Web applications", "APIs", "Microservices"],
    marketShare: "12%",
  },
  {
    name: "AWS Elastic Beanstalk",
    provider: "Amazon Web Services",
    description: "Easy-to-use service for deploying web applications",
    icon: Server,
    languages: ["Java", ".NET", "PHP", "Node.js", "Python", "Ruby", "Go"],
    features: ["Auto-scaling", "Health monitoring", "Version management", "Easy deployment"],
    pricing: "No additional charges (pay for AWS resources)",
    rating: 4.2,
    pros: ["No additional cost", "Full control", "AWS integration"],
    cons: ["AWS-specific", "Learning curve", "Complex for beginners"],
    useCases: ["Enterprise applications", "Legacy migration", "AWS-native apps"],
    marketShare: "20%",
  },
  {
    name: "Microsoft Azure App Service",
    provider: "Microsoft",
    description: "Fully managed platform for building web and mobile apps",
    icon: Code,
    languages: [".NET", "Java", "Ruby", "Node.js", "PHP", "Python"],
    features: ["Auto-scaling", "DevOps integration", "Built-in authentication", "Custom domains"],
    pricing: "$13-400+/month",
    rating: 4.0,
    pros: ["Microsoft ecosystem", "Enterprise features", "Hybrid capabilities"],
    cons: ["Windows-centric", "Complex pricing", "Learning curve"],
    useCases: ["Enterprise apps", "Microsoft stack", "Hybrid deployments"],
    marketShare: "18%",
  },
  {
    name: "Vercel",
    provider: "Vercel Inc.",
    description: "Frontend cloud platform for static sites and serverless functions",
    icon: Zap,
    languages: ["JavaScript", "TypeScript", "Python", "Go", "Ruby"],
    features: ["Edge network", "Serverless functions", "Git integration", "Preview deployments"],
    pricing: "$0-20+/user/month",
    rating: 4.7,
    pros: ["Excellent DX", "Fast deployments", "Great for JAMstack"],
    cons: ["Frontend-focused", "Limited backend features", "Newer platform"],
    useCases: ["Static sites", "JAMstack apps", "Frontend applications"],
    marketShare: "8%",
  },
  {
    name: "Railway",
    provider: "Railway Corp.",
    description: "Modern deployment platform with focus on developer experience",
    icon: Database,
    languages: ["Node.js", "Python", "Ruby", "Go", "Rust", "PHP"],
    features: ["One-click deploy", "Database hosting", "Environment management", "Team collaboration"],
    pricing: "$5-20+/month",
    rating: 4.5,
    pros: ["Simple pricing", "Great UX", "Database included"],
    cons: ["Newer platform", "Limited enterprise features", "Smaller ecosystem"],
    useCases: ["Side projects", "Startups", "Simple applications"],
    marketShare: "3%",
  },
]

const paasCategories = [
  {
    name: "Application Platforms",
    description: "Full-stack platforms for web and mobile applications",
    examples: ["Heroku", "Google App Engine", "Azure App Service"],
    features: ["Runtime environments", "Auto-scaling", "Database integration"],
  },
  {
    name: "Container Platforms",
    description: "Platforms for deploying containerized applications",
    examples: ["Red Hat OpenShift", "Cloud Foundry", "Docker Cloud"],
    features: ["Container orchestration", "Kubernetes support", "CI/CD pipelines"],
  },
  {
    name: "Serverless Platforms",
    description: "Function-as-a-Service platforms for event-driven computing",
    examples: ["AWS Lambda", "Azure Functions", "Google Cloud Functions"],
    features: ["Event triggers", "Pay-per-execution", "Auto-scaling"],
  },
  {
    name: "API Platforms",
    description: "Platforms specifically designed for API development and management",
    examples: ["Apigee", "MuleSoft", "Kong"],
    features: ["API gateway", "Rate limiting", "Analytics"],
  },
]

const developmentMetrics = [
  { metric: "Deployment Frequency", value: "23/day", change: "+45%" },
  { metric: "Lead Time", value: "2.3 hours", change: "-67%" },
  { metric: "Mean Time to Recovery", value: "12 minutes", change: "-43%" },
  { metric: "Change Failure Rate", value: "2.1%", change: "-38%" },
  { metric: "Developer Productivity", value: "87%", change: "+23%" },
  { metric: "Infrastructure Costs", value: "$12,450", change: "-15%" },
]

export default function PaaSPlatforms() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">PaaS Platforms</h2>
        <Badge variant="outline">Platform as a Service</Badge>
      </div>

      <Tabs defaultValue="platforms" className="space-y-4">
        <TabsList>
          <TabsTrigger value="platforms">Popular Platforms</TabsTrigger>
          <TabsTrigger value="categories">Platform Categories</TabsTrigger>
          <TabsTrigger value="metrics">Development Metrics</TabsTrigger>
          <TabsTrigger value="comparison">Platform Comparison</TabsTrigger>
        </TabsList>

        <TabsContent value="platforms" className="space-y-4">
          <div className="grid gap-6">
            {paasPlatforms.map((platform) => {
              const IconComponent = platform.icon
              return (
                <Card key={platform.name} className="overflow-hidden">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <IconComponent className="h-8 w-8" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{platform.name}</CardTitle>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="outline">{platform.provider}</Badge>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-medium">{platform.rating}</span>
                            </div>
                            <Badge variant="secondary">{platform.marketShare} market share</Badge>
                          </div>
                          <CardDescription className="mt-2">{platform.description}</CardDescription>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-semibold">{platform.pricing}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Supported Languages</h4>
                      <div className="flex flex-wrap gap-2">
                        {platform.languages.map((language) => (
                          <Badge key={language} variant="secondary" className="text-xs">
                            {language}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Key Features</h4>
                      <div className="flex flex-wrap gap-2">
                        {platform.features.map((feature) => (
                          <Badge key={feature} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-3">
                      <div>
                        <h4 className="font-semibold mb-2 text-green-600">Advantages</h4>
                        <div className="space-y-1">
                          {platform.pros.map((pro) => (
                            <div key={pro} className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span className="text-sm">{pro}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-red-600">Disadvantages</h4>
                        <div className="space-y-1">
                          {platform.cons.map((con) => (
                            <div key={con} className="flex items-center gap-2">
                              <XCircle className="h-4 w-4 text-red-500" />
                              <span className="text-sm">{con}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Best Use Cases</h4>
                        <div className="space-y-1">
                          {platform.useCases.map((useCase) => (
                            <div key={useCase} className="text-sm">
                              • {useCase}
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
        </TabsContent>

        <TabsContent value="categories" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>PaaS Platform Categories</CardTitle>
              <CardDescription>Different types of Platform as a Service offerings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {paasCategories.map((category) => (
                  <Card key={category.name} className="p-4">
                    <div className="space-y-3">
                      <h3 className="font-semibold">{category.name}</h3>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                      <div>
                        <h4 className="text-sm font-medium mb-2">Key Features:</h4>
                        <div className="space-y-1">
                          {category.features.map((feature) => (
                            <div key={feature} className="text-sm">
                              • {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2">Popular Examples:</h4>
                        <div className="flex flex-wrap gap-1">
                          {category.examples.map((example) => (
                            <Badge key={example} variant="secondary" className="text-xs">
                              {example}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>PaaS vs Traditional Development</CardTitle>
              <CardDescription>Comparing Platform as a Service with traditional development approaches</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-4">
                  <h3 className="font-semibold text-green-600">PaaS Benefits</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Faster time to market</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Reduced infrastructure management</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Built-in scalability</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Integrated development tools</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Cost-effective for small teams</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-red-600">Traditional Development</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <XCircle className="h-4 w-4 text-red-500" />
                      <span className="text-sm">Complex infrastructure setup</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <XCircle className="h-4 w-4 text-red-500" />
                      <span className="text-sm">Manual scaling required</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <XCircle className="h-4 w-4 text-red-500" />
                      <span className="text-sm">Higher operational overhead</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Full control over environment</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">No vendor lock-in</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="metrics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Development & Deployment Metrics</CardTitle>
              <CardDescription>Key performance indicators for PaaS-based development</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {developmentMetrics.map((metric) => (
                  <Card key={metric.metric} className="p-4">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-sm">{metric.metric}</h3>
                      <div className="text-2xl font-bold">{metric.value}</div>
                      <div
                        className={`text-sm flex items-center gap-1 ${
                          metric.change.startsWith("+") && metric.metric !== "Infrastructure Costs"
                            ? "text-green-600"
                            : metric.change.startsWith("-")
                              ? "text-green-600"
                              : "text-red-600"
                        }`}
                      >
                        <TrendingUp className="h-3 w-3" />
                        {metric.change} vs traditional
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>PaaS Adoption Statistics</CardTitle>
              <CardDescription>Market trends and adoption rates for Platform as a Service</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-5 w-5 text-blue-500" />
                    <h3 className="font-semibold">Market Size</h3>
                  </div>
                  <div className="text-2xl font-bold">$60.2B</div>
                  <div className="text-sm text-muted-foreground">Global PaaS market 2024</div>
                </Card>
                <Card className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="h-5 w-5 text-green-500" />
                    <h3 className="font-semibold">Growth Rate</h3>
                  </div>
                  <div className="text-2xl font-bold">19.6%</div>
                  <div className="text-sm text-muted-foreground">CAGR 2024-2029</div>
                </Card>
                <Card className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Globe className="h-5 w-5 text-purple-500" />
                    <h3 className="font-semibold">Adoption Rate</h3>
                  </div>
                  <div className="text-2xl font-bold">78%</div>
                  <div className="text-sm text-muted-foreground">Enterprise adoption</div>
                </Card>
                <Card className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="h-5 w-5 text-yellow-500" />
                    <h3 className="font-semibold">Cost Savings</h3>
                  </div>
                  <div className="text-2xl font-bold">35%</div>
                  <div className="text-sm text-muted-foreground">Average reduction</div>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="comparison" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Platform Feature Comparison</CardTitle>
              <CardDescription>Compare key features across major PaaS platforms</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2 font-semibold">Feature</th>
                      <th className="text-center p-2 font-semibold">Heroku</th>
                      <th className="text-center p-2 font-semibold">App Engine</th>
                      <th className="text-center p-2 font-semibold">Elastic Beanstalk</th>
                      <th className="text-center p-2 font-semibold">Vercel</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-2 font-medium">Auto-scaling</td>
                      <td className="text-center p-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                      </td>
                      <td className="text-center p-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                      </td>
                      <td className="text-center p-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                      </td>
                      <td className="text-center p-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-medium">Database Integration</td>
                      <td className="text-center p-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                      </td>
                      <td className="text-center p-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                      </td>
                      <td className="text-center p-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                      </td>
                      <td className="text-center p-2">
                        <XCircle className="h-4 w-4 text-red-500 mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-medium">CI/CD Integration</td>
                      <td className="text-center p-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                      </td>
                      <td className="text-center p-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                      </td>
                      <td className="text-center p-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                      </td>
                      <td className="text-center p-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-medium">Serverless Functions</td>
                      <td className="text-center p-2">
                        <XCircle className="h-4 w-4 text-red-500 mx-auto" />
                      </td>
                      <td className="text-center p-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                      </td>
                      <td className="text-center p-2">
                        <XCircle className="h-4 w-4 text-red-500 mx-auto" />
                      </td>
                      <td className="text-center p-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-medium">Container Support</td>
                      <td className="text-center p-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                      </td>
                      <td className="text-center p-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                      </td>
                      <td className="text-center p-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                      </td>
                      <td className="text-center p-2">
                        <XCircle className="h-4 w-4 text-red-500 mx-auto" />
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 font-medium">Free Tier</td>
                      <td className="text-center p-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                      </td>
                      <td className="text-center p-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                      </td>
                      <td className="text-center p-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                      </td>
                      <td className="text-center p-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
