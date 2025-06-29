"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Cloud,
  Server,
  Database,
  Globe,
  Shield,
  Zap,
  Settings,
  Play,
  CheckCircle,
  Clock,
  DollarSign,
} from "lucide-react"

const awsServices = [
  {
    name: "Amazon EC2",
    category: "Compute",
    description: "Scalable virtual servers in the cloud",
    icon: Server,
    pricing: "$0.0116/hour",
    features: ["Auto Scaling", "Load Balancing", "Security Groups", "Elastic IPs"],
    useCases: ["Web applications", "Development environments", "High-performance computing"],
  },
  {
    name: "Amazon S3",
    category: "Storage",
    description: "Object storage service with industry-leading scalability",
    icon: Database,
    pricing: "$0.023/GB/month",
    features: ["99.999999999% durability", "Versioning", "Lifecycle policies", "Cross-region replication"],
    useCases: ["Static websites", "Data backup", "Content distribution"],
  },
  {
    name: "Amazon RDS",
    category: "Database",
    description: "Managed relational database service",
    icon: Database,
    pricing: "$0.017/hour",
    features: ["Automated backups", "Multi-AZ deployment", "Read replicas", "Performance monitoring"],
    useCases: ["Web applications", "E-commerce", "Enterprise applications"],
  },
  {
    name: "AWS Lambda",
    category: "Serverless",
    description: "Run code without thinking about servers",
    icon: Zap,
    pricing: "$0.20/1M requests",
    features: ["Event-driven", "Auto scaling", "Pay per execution", "Multiple languages"],
    useCases: ["API backends", "Data processing", "Real-time file processing"],
  },
]

const deploymentSteps = [
  {
    step: 1,
    title: "Code Repository",
    description: "Push code to AWS CodeCommit or GitHub",
    status: "completed",
    duration: "30s",
    service: "CodeCommit",
  },
  {
    step: 2,
    title: "Build Process",
    description: "Compile and test application using CodeBuild",
    status: "completed",
    duration: "3m 45s",
    service: "CodeBuild",
  },
  {
    step: 3,
    title: "Deploy to Staging",
    description: "Deploy to staging environment for testing",
    status: "running",
    duration: "1m 23s",
    service: "CodeDeploy",
  },
  {
    step: 4,
    title: "Production Deployment",
    description: "Deploy to production with blue-green deployment",
    status: "pending",
    duration: "2m 15s",
    service: "CodeDeploy",
  },
]

const costBreakdown = [
  { service: "EC2 Instances", cost: 245.67, percentage: 45 },
  { service: "S3 Storage", cost: 89.23, percentage: 16 },
  { service: "RDS Database", cost: 156.78, percentage: 29 },
  { service: "Lambda Functions", cost: 23.45, percentage: 4 },
  { service: "CloudFront CDN", cost: 34.12, percentage: 6 },
]

const performanceMetrics = [
  { metric: "Response Time", value: "245ms", target: "< 300ms", status: "good" },
  { metric: "Throughput", value: "1,247 req/s", target: "> 1,000 req/s", status: "good" },
  { metric: "Error Rate", value: "0.12%", target: "< 0.5%", status: "good" },
  { metric: "Availability", value: "99.97%", target: "> 99.9%", status: "good" },
]

export default function AWSSimulation() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">AWS Deployment Simulation</h2>
        <div className="flex items-center gap-2">
          <Badge variant="outline">us-east-1</Badge>
          <Button size="sm">
            <Play className="h-4 w-4 mr-2" />
            Start Deployment
          </Button>
        </div>
      </div>

      <Tabs defaultValue="services" className="space-y-4">
        <TabsList>
          <TabsTrigger value="services">AWS Services</TabsTrigger>
          <TabsTrigger value="deployment">Deployment Pipeline</TabsTrigger>
          <TabsTrigger value="monitoring">Monitoring & Metrics</TabsTrigger>
          <TabsTrigger value="costs">Cost Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="services" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>AWS Architecture Overview</CardTitle>
              <CardDescription>Simulated cloud infrastructure using AWS services</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {awsServices.map((service) => {
                  const IconComponent = service.icon
                  return (
                    <Card key={service.name} className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-orange-100 text-orange-600 rounded-lg">
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold">{service.name}</h3>
                            <Badge variant="outline">{service.category}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">{service.description}</p>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="font-medium">Pricing:</span>
                              <span className="text-green-600">{service.pricing}</span>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium mb-1">Key Features:</h4>
                              <div className="flex flex-wrap gap-1">
                                {service.features.map((feature) => (
                                  <Badge key={feature} variant="secondary" className="text-xs">
                                    {feature}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium mb-1">Use Cases:</h4>
                              <div className="text-xs text-muted-foreground">{service.useCases.join(" • ")}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>AWS Well-Architected Framework</CardTitle>
              <CardDescription>Best practices for building secure, high-performing, resilient systems</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="space-y-2 p-4 border rounded-lg">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-red-500" />
                    <h3 className="font-semibold">Security</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Protect information, systems, and assets while delivering business value
                  </p>
                  <div className="space-y-1 text-xs">
                    <div>• Identity and access management</div>
                    <div>• Detective controls</div>
                    <div>• Infrastructure protection</div>
                  </div>
                </div>

                <div className="space-y-2 p-4 border rounded-lg">
                  <div className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-yellow-500" />
                    <h3 className="font-semibold">Performance</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Use computing resources efficiently to meet system requirements
                  </p>
                  <div className="space-y-1 text-xs">
                    <div>• Selection of resource types</div>
                    <div>• Monitoring and alerting</div>
                    <div>• Trade-offs and optimization</div>
                  </div>
                </div>

                <div className="space-y-2 p-4 border rounded-lg">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-green-500" />
                    <h3 className="font-semibold">Cost Optimization</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Avoid unnecessary costs and optimize spending</p>
                  <div className="space-y-1 text-xs">
                    <div>• Right-sizing resources</div>
                    <div>• Reserved instances</div>
                    <div>• Cost monitoring</div>
                  </div>
                </div>

                <div className="space-y-2 p-4 border rounded-lg">
                  <div className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-blue-500" />
                    <h3 className="font-semibold">Reliability</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Ensure a workload performs its intended function correctly
                  </p>
                  <div className="space-y-1 text-xs">
                    <div>• Fault tolerance</div>
                    <div>• Disaster recovery</div>
                    <div>• Auto-scaling</div>
                  </div>
                </div>

                <div className="space-y-2 p-4 border rounded-lg">
                  <div className="flex items-center gap-2">
                    <Settings className="h-5 w-5 text-purple-500" />
                    <h3 className="font-semibold">Operational Excellence</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Run and monitor systems to deliver business value</p>
                  <div className="space-y-1 text-xs">
                    <div>• Infrastructure as code</div>
                    <div>• Continuous improvement</div>
                    <div>• Automation</div>
                  </div>
                </div>

                <div className="space-y-2 p-4 border rounded-lg">
                  <div className="flex items-center gap-2">
                    <Cloud className="h-5 w-5 text-indigo-500" />
                    <h3 className="font-semibold">Sustainability</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Minimize environmental impact of running cloud workloads
                  </p>
                  <div className="space-y-1 text-xs">
                    <div>• Resource efficiency</div>
                    <div>• Carbon footprint reduction</div>
                    <div>• Sustainable practices</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="deployment" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>AWS CodePipeline Simulation</CardTitle>
              <CardDescription>Automated CI/CD pipeline using AWS native services</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {deploymentSteps.map((step) => (
                  <div key={step.step} className="flex items-center gap-4 p-4 border rounded-lg">
                    <div className="flex items-center gap-3 flex-1">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                          step.status === "completed"
                            ? "bg-green-100 text-green-600"
                            : step.status === "running"
                              ? "bg-blue-100 text-blue-600"
                              : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {step.status === "completed" ? (
                          <CheckCircle className="h-4 w-4" />
                        ) : step.status === "running" ? (
                          <Clock className="h-4 w-4 animate-spin" />
                        ) : (
                          step.step
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold">{step.title}</h3>
                          <Badge variant="outline" className="text-xs">
                            {step.service}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {step.duration}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
                      </div>
                    </div>
                    {step.status === "running" && (
                      <div className="w-32">
                        <Progress value={65} className="h-2" />
                        <p className="text-xs text-muted-foreground mt-1">65% complete</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Deployment Environments</CardTitle>
              <CardDescription>Multi-environment deployment strategy</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <Card className="p-4">
                  <h3 className="font-semibold mb-2">Development</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Instance Type:</span>
                      <Badge variant="outline">t3.micro</Badge>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Status:</span>
                      <Badge variant="default">Running</Badge>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Cost/month:</span>
                      <span className="text-green-600">$8.50</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-4">
                  <h3 className="font-semibold mb-2">Staging</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Instance Type:</span>
                      <Badge variant="outline">t3.small</Badge>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Status:</span>
                      <Badge variant="default">Deploying</Badge>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Cost/month:</span>
                      <span className="text-green-600">$17.00</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-4">
                  <h3 className="font-semibold mb-2">Production</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Instance Type:</span>
                      <Badge variant="outline">t3.medium</Badge>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Status:</span>
                      <Badge variant="secondary">Pending</Badge>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Cost/month:</span>
                      <span className="text-green-600">$34.00</span>
                    </div>
                  </div>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="monitoring" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>CloudWatch Metrics</CardTitle>
              <CardDescription>Real-time monitoring and performance metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {performanceMetrics.map((metric) => (
                  <Card key={metric.metric} className="p-4">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-sm">{metric.metric}</h3>
                      <div className="text-2xl font-bold">{metric.value}</div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">Target: {metric.target}</span>
                        <Badge variant={metric.status === "good" ? "default" : "destructive"}>
                          {metric.status === "good" ? "Healthy" : "Alert"}
                        </Badge>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Auto Scaling Configuration</CardTitle>
              <CardDescription>Automatic scaling based on demand</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Scale Out Policy</h4>
                    <div className="text-sm space-y-1">
                      <div>Trigger: CPU &gt; 70% for 2 minutes</div>
                      <div>Action: Add 1 instance</div>
                      <div>Cooldown: 300 seconds</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Scale In Policy</h4>
                    <div className="text-sm space-y-1">
                      <div>Trigger: CPU &lt; 30% for 5 minutes</div>
                      <div>Action: Remove 1 instance</div>
                      <div>Cooldown: 300 seconds</div>
                    </div>
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold">2</div>
                    <div className="text-sm text-muted-foreground">Min Instances</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold">4</div>
                    <div className="text-sm text-muted-foreground">Current Instances</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold">10</div>
                    <div className="text-sm text-muted-foreground">Max Instances</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="costs" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>AWS Cost Breakdown</CardTitle>
              <CardDescription>Monthly cost analysis by service</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-3xl font-bold text-green-600">$549.25</div>
                  <div className="text-sm text-muted-foreground">Total Monthly Cost</div>
                </div>
                <div className="space-y-3">
                  {costBreakdown.map((item) => (
                    <div key={item.service} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{item.service}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">${item.cost}</span>
                          <Badge variant="outline">{item.percentage}%</Badge>
                        </div>
                      </div>
                      <Progress value={item.percentage} className="h-2" />
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cost Optimization Recommendations</CardTitle>
              <CardDescription>Suggestions to reduce AWS spending</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium">Reserved Instances</h4>
                    <p className="text-sm text-muted-foreground">Save up to 75% with 1-3 year commitments</p>
                  </div>
                  <Badge variant="outline" className="text-green-600">
                    Save $180/month
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium">Right-size Instances</h4>
                    <p className="text-sm text-muted-foreground">Optimize instance types based on usage</p>
                  </div>
                  <Badge variant="outline" className="text-green-600">
                    Save $45/month
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium">S3 Intelligent Tiering</h4>
                    <p className="text-sm text-muted-foreground">Automatically move data to cheaper storage classes</p>
                  </div>
                  <Badge variant="outline" className="text-green-600">
                    Save $23/month
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
