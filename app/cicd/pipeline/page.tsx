"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { GitBranch, Play, CheckCircle, Clock, AlertCircle, Upload, Settings, Zap } from "lucide-react"

const pipelineStages = [
  {
    name: "Source",
    description: "Code repository and version control",
    status: "completed",
    duration: "2s",
    tools: ["GitHub", "GitLab", "Bitbucket"],
    icon: GitBranch,
  },
  {
    name: "Build",
    description: "Compile and package application",
    status: "completed",
    duration: "3m 45s",
    tools: ["npm build", "webpack", "Docker"],
    icon: Settings,
  },
  {
    name: "Test",
    description: "Automated testing and quality checks",
    status: "running",
    duration: "1m 23s",
    tools: ["Jest", "Cypress", "ESLint"],
    icon: CheckCircle,
  },
  {
    name: "Deploy",
    description: "Deploy to staging/production environment",
    status: "pending",
    duration: "45s",
    tools: ["Netlify", "Vercel", "AWS"],
    icon: Upload,
  },
]

const deploymentHistory = [
  {
    id: "dep-001",
    commit: "feat: add user authentication",
    branch: "main",
    status: "success",
    environment: "production",
    timestamp: "2 hours ago",
    duration: "2m 34s",
  },
  {
    id: "dep-002",
    commit: "fix: resolve login redirect issue",
    branch: "hotfix/login",
    status: "success",
    environment: "staging",
    timestamp: "4 hours ago",
    duration: "1m 56s",
  },
  {
    id: "dep-003",
    commit: "feat: implement dashboard analytics",
    branch: "feature/analytics",
    status: "failed",
    environment: "staging",
    timestamp: "6 hours ago",
    duration: "3m 12s",
  },
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case "completed":
      return <CheckCircle className="h-4 w-4 text-green-500" />
    case "running":
      return <Clock className="h-4 w-4 text-blue-500 animate-spin" />
    case "pending":
      return <Clock className="h-4 w-4 text-gray-400" />
    case "failed":
      return <AlertCircle className="h-4 w-4 text-red-500" />
    default:
      return <Clock className="h-4 w-4 text-gray-400" />
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "success":
      return "bg-green-500"
    case "failed":
      return "bg-red-500"
    case "running":
      return "bg-blue-500"
    default:
      return "bg-gray-400"
  }
}

export default function DeploymentPipeline() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">CI/CD Pipeline</h2>
        <div className="flex items-center gap-2">
          <Badge variant="outline">Build #247</Badge>
          <Button size="sm">
            <Play className="h-4 w-4 mr-2" />
            Run Pipeline
          </Button>
        </div>
      </div>

      {/* Pipeline Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Current Pipeline Status
          </CardTitle>
          <CardDescription>Automated deployment pipeline for cloud-network-dashboard</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {pipelineStages.map((stage, index) => {
              const IconComponent = stage.icon
              return (
                <div key={stage.name} className="flex items-center gap-4 p-4 border rounded-lg">
                  <div className="flex items-center gap-3 flex-1">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{stage.name}</h3>
                        {getStatusIcon(stage.status)}
                        <Badge variant="outline" className="text-xs">
                          {stage.duration}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{stage.description}</p>
                      <div className="flex gap-1 mt-2">
                        {stage.tools.map((tool) => (
                          <Badge key={tool} variant="secondary" className="text-xs">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  {stage.status === "running" && (
                    <div className="w-32">
                      <Progress value={65} className="h-2" />
                      <p className="text-xs text-muted-foreground mt-1">65% complete</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Deployment Environments */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Development</CardTitle>
            <CardDescription>Local development environment</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Status</span>
                <Badge variant="secondary">Active</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Last Deploy</span>
                <span className="text-sm text-muted-foreground">5 min ago</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Branch</span>
                <Badge variant="outline">feature/dashboard</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Staging</CardTitle>
            <CardDescription>Pre-production testing environment</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Status</span>
                <Badge variant="default">Deployed</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Last Deploy</span>
                <span className="text-sm text-muted-foreground">2 hours ago</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Branch</span>
                <Badge variant="outline">main</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Production</CardTitle>
            <CardDescription>Live production environment</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Status</span>
                <Badge variant="default">Live</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Last Deploy</span>
                <span className="text-sm text-muted-foreground">1 day ago</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Branch</span>
                <Badge variant="outline">release/v1.2.0</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Deployment History */}
      <Card>
        <CardHeader>
          <CardTitle>Deployment History</CardTitle>
          <CardDescription>Recent deployments across all environments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {deploymentHistory.map((deployment) => (
              <div key={deployment.id} className="flex items-center gap-4 p-4 border rounded-lg">
                <div className={`w-3 h-3 rounded-full ${getStatusColor(deployment.status)}`} />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{deployment.commit}</span>
                    <Badge variant="outline" className="text-xs">
                      {deployment.branch}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                    <span>{deployment.environment}</span>
                    <span>{deployment.timestamp}</span>
                    <span>{deployment.duration}</span>
                  </div>
                </div>
                <Badge variant={deployment.status === "success" ? "default" : "destructive"}>{deployment.status}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Pipeline Configuration */}
      <Card>
        <CardHeader>
          <CardTitle>Pipeline Configuration</CardTitle>
          <CardDescription>Simulated CI/CD pipeline configuration for cloud deployment</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3">
              <h4 className="font-semibold">Build Configuration</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Node.js Version:</span>
                  <Badge variant="outline">18.x</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Package Manager:</span>
                  <Badge variant="outline">npm</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Build Command:</span>
                  <Badge variant="outline">npm run build</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Output Directory:</span>
                  <Badge variant="outline">dist/</Badge>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Deployment Settings</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Auto Deploy:</span>
                  <Badge variant="default">Enabled</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Deploy Branch:</span>
                  <Badge variant="outline">main</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Environment:</span>
                  <Badge variant="outline">Production</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Domain:</span>
                  <Badge variant="outline">cloud-dashboard.vercel.app</Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
