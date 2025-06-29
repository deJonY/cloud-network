"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { Shield, AlertTriangle, Eye, Lock, Activity, TrendingUp, TrendingDown, Server, Globe, Zap } from "lucide-react"

const securityAlerts = [
  {
    id: 1,
    type: "Critical",
    title: "Suspicious Login Activity",
    description: "Multiple failed login attempts from unknown IP address",
    timestamp: "2 minutes ago",
    status: "Active",
    severity: "high",
  },
  {
    id: 2,
    type: "Warning",
    title: "Unusual Data Transfer",
    description: "Large data transfer detected outside business hours",
    timestamp: "15 minutes ago",
    status: "Investigating",
    severity: "medium",
  },
  {
    id: 3,
    type: "Info",
    title: "Security Policy Update",
    description: "Password policy has been updated successfully",
    timestamp: "1 hour ago",
    status: "Resolved",
    severity: "low",
  },
  {
    id: 4,
    type: "Critical",
    title: "Malware Detection",
    description: "Potential malware detected on endpoint device",
    timestamp: "2 hours ago",
    status: "Contained",
    severity: "high",
  },
]

const threatData = [
  { time: "00:00", malware: 12, phishing: 8, intrusion: 3 },
  { time: "04:00", malware: 8, phishing: 5, intrusion: 1 },
  { time: "08:00", malware: 25, phishing: 15, intrusion: 7 },
  { time: "12:00", malware: 18, phishing: 12, intrusion: 4 },
  { time: "16:00", malware: 22, phishing: 18, intrusion: 6 },
  { time: "20:00", malware: 15, phishing: 10, intrusion: 2 },
]

const vulnerabilityData = [
  { severity: "Critical", count: 5, color: "#ef4444" },
  { severity: "High", count: 12, color: "#f97316" },
  { severity: "Medium", count: 28, color: "#eab308" },
  { severity: "Low", count: 45, color: "#22c55e" },
]

const complianceData = [
  { framework: "SOC 2", compliance: 95, target: 100 },
  { framework: "ISO 27001", compliance: 88, target: 95 },
  { framework: "GDPR", compliance: 92, target: 100 },
  { framework: "HIPAA", compliance: 85, target: 90 },
  { framework: "PCI DSS", compliance: 78, target: 85 },
]

const securityMetrics = [
  { metric: "Security Score", value: "87%", change: "+3.2%", icon: Shield },
  { metric: "Active Threats", value: "23", change: "-15.4%", icon: AlertTriangle },
  { metric: "Monitored Assets", value: "1,247", change: "+8.7%", icon: Eye },
  { metric: "Incidents Resolved", value: "156", change: "+22.1%", icon: Lock },
]

export default function SecurityMonitoring() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Security Monitoring</h2>
        <div className="flex items-center gap-2">
          <Badge variant="outline">Real-time</Badge>
          <Button size="sm">
            <Activity className="h-4 w-4 mr-2" />
            View Live Feed
          </Button>
        </div>
      </div>

      {/* Security Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {securityMetrics.map((metric) => {
          const IconComponent = metric.icon
          return (
            <Card key={metric.metric}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{metric.metric}</CardTitle>
                <IconComponent className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <p
                  className={`text-xs flex items-center gap-1 ${
                    metric.change.startsWith("+") && metric.metric !== "Active Threats"
                      ? "text-green-600"
                      : metric.change.startsWith("-") && metric.metric === "Active Threats"
                        ? "text-green-600"
                        : metric.change.startsWith("+")
                          ? "text-red-600"
                          : "text-green-600"
                  }`}
                >
                  {metric.change.startsWith("+") ? (
                    <TrendingUp className="h-3 w-3" />
                  ) : (
                    <TrendingDown className="h-3 w-3" />
                  )}
                  {metric.change} from last week
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Tabs defaultValue="dashboard" className="space-y-4">
        <TabsList>
          <TabsTrigger value="dashboard">Security Dashboard</TabsTrigger>
          <TabsTrigger value="alerts">Active Alerts</TabsTrigger>
          <TabsTrigger value="threats">Threat Analysis</TabsTrigger>
          <TabsTrigger value="compliance">Compliance Status</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Threat Detection Over Time</CardTitle>
                <CardDescription>Security threats detected in the last 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={threatData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="malware"
                      stackId="1"
                      stroke="#ef4444"
                      fill="#ef4444"
                      name="Malware"
                    />
                    <Area
                      type="monotone"
                      dataKey="phishing"
                      stackId="1"
                      stroke="#f97316"
                      fill="#f97316"
                      name="Phishing"
                    />
                    <Area
                      type="monotone"
                      dataKey="intrusion"
                      stackId="1"
                      stroke="#eab308"
                      fill="#eab308"
                      name="Intrusion"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Vulnerability Distribution</CardTitle>
                <CardDescription>Current vulnerabilities by severity level</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={vulnerabilityData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ severity, count }) => `${severity}: ${count}`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="count"
                    >
                      {vulnerabilityData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Security Infrastructure Status</CardTitle>
              <CardDescription>Current status of security systems and components</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div className="space-y-2 p-4 border rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-green-500" />
                      <span className="font-medium">Firewall</span>
                    </div>
                    <Badge variant="default">Active</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">Last updated: 5 min ago</div>
                  <Progress value={98} className="h-2" />
                </div>

                <div className="space-y-2 p-4 border rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Eye className="h-5 w-5 text-blue-500" />
                      <span className="font-medium">IDS/IPS</span>
                    </div>
                    <Badge variant="default">Monitoring</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">Threats blocked: 47</div>
                  <Progress value={95} className="h-2" />
                </div>

                <div className="space-y-2 p-4 border rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Lock className="h-5 w-5 text-purple-500" />
                      <span className="font-medium">VPN Gateway</span>
                    </div>
                    <Badge variant="default">Connected</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">Active sessions: 234</div>
                  <Progress value={87} className="h-2" />
                </div>

                <div className="space-y-2 p-4 border rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Server className="h-5 w-5 text-orange-500" />
                      <span className="font-medium">SIEM</span>
                    </div>
                    <Badge variant="default">Processing</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">Events/sec: 1,247</div>
                  <Progress value={92} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="alerts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Active Security Alerts</CardTitle>
              <CardDescription>Current security incidents requiring attention</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {securityAlerts.map((alert) => (
                  <div key={alert.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-2 rounded-lg ${
                          alert.severity === "high"
                            ? "bg-red-100 text-red-600"
                            : alert.severity === "medium"
                              ? "bg-yellow-100 text-yellow-600"
                              : "bg-blue-100 text-blue-600"
                        }`}
                      >
                        <AlertTriangle className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold">{alert.title}</h4>
                          <Badge
                            variant={
                              alert.severity === "high"
                                ? "destructive"
                                : alert.severity === "medium"
                                  ? "default"
                                  : "secondary"
                            }
                          >
                            {alert.type}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{alert.description}</p>
                        <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                          <span>{alert.timestamp}</span>
                          <Badge variant="outline" className="text-xs">
                            {alert.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Investigate
                      </Button>
                      <Button variant="outline" size="sm">
                        Dismiss
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="threats" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Threat Intelligence</CardTitle>
              <CardDescription>Analysis of current threat landscape and attack patterns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <Card className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertTriangle className="h-5 w-5 text-red-500" />
                    <h3 className="font-semibold">High Risk Threats</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Ransomware</span>
                      <Badge variant="destructive">Critical</Badge>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>APT Groups</span>
                      <Badge variant="destructive">High</Badge>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Zero-day Exploits</span>
                      <Badge variant="destructive">High</Badge>
                    </div>
                  </div>
                </Card>

                <Card className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Globe className="h-5 w-5 text-yellow-500" />
                    <h3 className="font-semibold">Geographic Threats</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Eastern Europe</span>
                      <span className="text-red-600">45%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Southeast Asia</span>
                      <span className="text-yellow-600">28%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>North America</span>
                      <span className="text-green-600">12%</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="h-5 w-5 text-blue-500" />
                    <h3 className="font-semibold">Attack Vectors</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Email Phishing</span>
                      <span>67%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Web Applications</span>
                      <span>23%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Network Intrusion</span>
                      <span>10%</span>
                    </div>
                  </div>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="compliance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Compliance Status</CardTitle>
              <CardDescription>Current compliance levels across security frameworks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {complianceData.map((item) => (
                  <div key={item.framework} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">{item.framework}</h4>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">
                          {item.compliance}% / {item.target}%
                        </span>
                        <Badge variant={item.compliance >= item.target ? "default" : "secondary"}>
                          {item.compliance >= item.target ? "Compliant" : "In Progress"}
                        </Badge>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <Progress value={item.compliance} className="h-2" />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Current: {item.compliance}%</span>
                        <span>Target: {item.target}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Compliance Actions Required</CardTitle>
              <CardDescription>Items that need attention to maintain compliance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium">Update Security Policies</h4>
                    <p className="text-sm text-muted-foreground">
                      Annual review of security policies required for SOC 2
                    </p>
                  </div>
                  <Badge variant="outline">Due in 15 days</Badge>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium">Vulnerability Assessment</h4>
                    <p className="text-sm text-muted-foreground">Quarterly vulnerability scan for PCI DSS compliance</p>
                  </div>
                  <Badge variant="outline">Due in 7 days</Badge>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium">Employee Training</h4>
                    <p className="text-sm text-muted-foreground">Security awareness training for GDPR compliance</p>
                  </div>
                  <Badge variant="destructive">Overdue</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
