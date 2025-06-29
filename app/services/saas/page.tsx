"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Globe, Users, FileText, Calendar, MessageSquare, BarChart3, CheckCircle, XCircle, Star } from "lucide-react"

const saasApplications = [
  {
    name: "Google Workspace",
    category: "Productivity Suite",
    description: "Complete productivity and collaboration platform",
    icon: Globe,
    features: ["Gmail", "Google Drive", "Google Docs", "Google Meet", "Google Calendar"],
    pricing: "$6-18/user/month",
    users: "3+ billion",
    rating: 4.6,
    pros: ["Seamless integration", "Real-time collaboration", "Generous storage"],
    cons: ["Privacy concerns", "Limited offline functionality"],
    useCases: ["Email communication", "Document collaboration", "Video conferencing"],
  },
  {
    name: "Microsoft 365",
    category: "Productivity Suite",
    description: "Enterprise productivity and collaboration tools",
    icon: FileText,
    features: ["Outlook", "OneDrive", "Word", "Excel", "PowerPoint", "Teams"],
    pricing: "$6-22/user/month",
    users: "400+ million",
    rating: 4.5,
    pros: ["Enterprise features", "Advanced security", "Desktop integration"],
    cons: ["Complex pricing", "Learning curve"],
    useCases: ["Enterprise productivity", "Business communication", "File sharing"],
  },
  {
    name: "Salesforce",
    category: "CRM",
    description: "Customer relationship management platform",
    icon: Users,
    features: ["Lead Management", "Sales Pipeline", "Customer Service", "Marketing Automation"],
    pricing: "$25-300/user/month",
    users: "150,000+ companies",
    rating: 4.2,
    pros: ["Highly customizable", "Extensive integrations", "Powerful analytics"],
    cons: ["Expensive", "Complex setup", "Steep learning curve"],
    useCases: ["Sales management", "Customer service", "Marketing campaigns"],
  },
  {
    name: "Slack",
    category: "Communication",
    description: "Team communication and collaboration platform",
    icon: MessageSquare,
    features: ["Channels", "Direct Messages", "File Sharing", "App Integrations", "Video Calls"],
    pricing: "$0-15/user/month",
    users: "12+ million",
    rating: 4.4,
    pros: ["Great user experience", "Extensive integrations", "Organized conversations"],
    cons: ["Can be distracting", "Limited free plan", "Information overload"],
    useCases: ["Team communication", "Project collaboration", "Remote work"],
  },
  {
    name: "Zoom",
    category: "Video Conferencing",
    description: "Video conferencing and webinar platform",
    icon: Calendar,
    features: ["Video Meetings", "Webinars", "Phone System", "Chat", "Whiteboard"],
    pricing: "$0-20/user/month",
    users: "300+ million",
    rating: 4.4,
    pros: ["Reliable video quality", "Easy to use", "Cross-platform support"],
    cons: ["Security concerns", "Limited free plan duration"],
    useCases: ["Video meetings", "Webinars", "Remote presentations"],
  },
  {
    name: "HubSpot",
    category: "Marketing & CRM",
    description: "Inbound marketing and sales platform",
    icon: BarChart3,
    features: ["CRM", "Marketing Hub", "Sales Hub", "Service Hub", "CMS"],
    pricing: "$0-3,200/month",
    users: "100,000+ customers",
    rating: 4.5,
    pros: ["Free tier available", "All-in-one platform", "Great support"],
    cons: ["Can get expensive", "Limited customization in lower tiers"],
    useCases: ["Lead generation", "Email marketing", "Customer support"],
  },
]

const saasCategories = [
  {
    name: "Productivity & Collaboration",
    description: "Tools for document creation, communication, and teamwork",
    examples: ["Google Workspace", "Microsoft 365", "Slack", "Notion"],
    marketSize: "$47.2B",
    growth: "+12.8%",
  },
  {
    name: "Customer Relationship Management",
    description: "Platforms for managing customer interactions and sales",
    examples: ["Salesforce", "HubSpot", "Pipedrive", "Zoho CRM"],
    marketSize: "$63.9B",
    growth: "+14.2%",
  },
  {
    name: "Enterprise Resource Planning",
    description: "Integrated business process management software",
    examples: ["SAP", "Oracle", "NetSuite", "Workday"],
    marketSize: "$54.8B",
    growth: "+10.1%",
  },
  {
    name: "Human Resources",
    description: "Tools for employee management and HR processes",
    examples: ["BambooHR", "Workday", "ADP", "Greenhouse"],
    marketSize: "$24.3B",
    growth: "+11.7%",
  },
]

const saasMetrics = [
  { metric: "Monthly Recurring Revenue (MRR)", value: "$2.4M", change: "+15.2%" },
  { metric: "Customer Acquisition Cost (CAC)", value: "$127", change: "-8.3%" },
  { metric: "Customer Lifetime Value (CLV)", value: "$1,847", change: "+22.1%" },
  { metric: "Churn Rate", value: "3.2%", change: "-1.1%" },
  { metric: "Net Promoter Score (NPS)", value: "67", change: "+5.2%" },
  { metric: "Monthly Active Users", value: "45,231", change: "+18.7%" },
]

export default function SaaSApplications() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">SaaS Applications</h2>
        <Badge variant="outline">Software as a Service</Badge>
      </div>

      <Tabs defaultValue="applications" className="space-y-4">
        <TabsList>
          <TabsTrigger value="applications">Popular Applications</TabsTrigger>
          <TabsTrigger value="categories">Market Categories</TabsTrigger>
          <TabsTrigger value="metrics">SaaS Metrics</TabsTrigger>
          <TabsTrigger value="comparison">Feature Comparison</TabsTrigger>
        </TabsList>

        <TabsContent value="applications" className="space-y-4">
          <div className="grid gap-6">
            {saasApplications.map((app) => {
              const IconComponent = app.icon
              return (
                <Card key={app.name} className="overflow-hidden">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <IconComponent className="h-8 w-8" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{app.name}</CardTitle>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="outline">{app.category}</Badge>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-medium">{app.rating}</span>
                            </div>
                          </div>
                          <CardDescription className="mt-2">{app.description}</CardDescription>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-semibold">{app.pricing}</div>
                        <div className="text-sm text-muted-foreground">{app.users} users</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Key Features</h4>
                      <div className="flex flex-wrap gap-2">
                        {app.features.map((feature) => (
                          <Badge key={feature} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-3">
                      <div>
                        <h4 className="font-semibold mb-2 text-green-600">Advantages</h4>
                        <div className="space-y-1">
                          {app.pros.map((pro) => (
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
                          {app.cons.map((con) => (
                            <div key={con} className="flex items-center gap-2">
                              <XCircle className="h-4 w-4 text-red-500" />
                              <span className="text-sm">{con}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Common Use Cases</h4>
                        <div className="space-y-1">
                          {app.useCases.map((useCase) => (
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
              <CardTitle>SaaS Market Categories</CardTitle>
              <CardDescription>Major categories in the Software as a Service market</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {saasCategories.map((category) => (
                  <Card key={category.name} className="p-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">{category.name}</h3>
                        <Badge variant="outline" className="text-green-600">
                          {category.growth}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Market Size:</span>
                        <span className="text-lg font-bold">{category.marketSize}</span>
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
        </TabsContent>

        <TabsContent value="metrics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Key SaaS Metrics</CardTitle>
              <CardDescription>Important metrics for measuring SaaS business performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {saasMetrics.map((metric) => (
                  <Card key={metric.metric} className="p-4">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-sm">{metric.metric}</h3>
                      <div className="text-2xl font-bold">{metric.value}</div>
                      <div
                        className={`text-sm flex items-center gap-1 ${
                          metric.change.startsWith("+")
                            ? "text-green-600"
                            : metric.change.startsWith("-") && metric.metric === "Customer Acquisition Cost"
                              ? "text-green-600"
                              : metric.change.startsWith("-") && metric.metric === "Churn Rate"
                                ? "text-green-600"
                                : "text-red-600"
                        }`}
                      >
                        {metric.change} vs last month
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>SaaS Metrics Explained</CardTitle>
              <CardDescription>Understanding key performance indicators for SaaS businesses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-3">
                    <h4 className="font-semibold">Revenue Metrics</h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <strong>MRR:</strong> Monthly Recurring Revenue - predictable monthly income
                      </div>
                      <div>
                        <strong>ARR:</strong> Annual Recurring Revenue - yearly subscription revenue
                      </div>
                      <div>
                        <strong>ARPU:</strong> Average Revenue Per User - revenue per customer
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold">Customer Metrics</h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <strong>CAC:</strong> Customer Acquisition Cost - cost to acquire new customer
                      </div>
                      <div>
                        <strong>CLV:</strong> Customer Lifetime Value - total revenue from customer
                      </div>
                      <div>
                        <strong>Churn Rate:</strong> Percentage of customers who cancel subscription
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="comparison" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Feature Comparison Matrix</CardTitle>
              <CardDescription>Compare features across popular SaaS applications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2 font-semibold">Feature</th>
                      <th className="text-center p-2 font-semibold">Google Workspace</th>
                      <th className="text-center p-2 font-semibold">Microsoft 365</th>
                      <th className="text-center p-2 font-semibold">Salesforce</th>
                      <th className="text-center p-2 font-semibold">Slack</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-2 font-medium">Email</td>
                      <td className="text-center p-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                      </td>
                      <td className="text-center p-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                      </td>
                      <td className="text-center p-2">
                        <XCircle className="h-4 w-4 text-red-500 mx-auto" />
                      </td>
                      <td className="text-center p-2">
                        <XCircle className="h-4 w-4 text-red-500 mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-medium">Document Collaboration</td>
                      <td className="text-center p-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                      </td>
                      <td className="text-center p-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                      </td>
                      <td className="text-center p-2">
                        <XCircle className="h-4 w-4 text-red-500 mx-auto" />
                      </td>
                      <td className="text-center p-2">
                        <XCircle className="h-4 w-4 text-red-500 mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-medium">Video Conferencing</td>
                      <td className="text-center p-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
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
                      <td className="p-2 font-medium">CRM Features</td>
                      <td className="text-center p-2">
                        <XCircle className="h-4 w-4 text-red-500 mx-auto" />
                      </td>
                      <td className="text-center p-2">
                        <XCircle className="h-4 w-4 text-red-500 mx-auto" />
                      </td>
                      <td className="text-center p-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                      </td>
                      <td className="text-center p-2">
                        <XCircle className="h-4 w-4 text-red-500 mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-medium">Team Chat</td>
                      <td className="text-center p-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
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
                      <td className="p-2 font-medium">File Storage</td>
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
                    <tr>
                      <td className="p-2 font-medium">Mobile Apps</td>
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
