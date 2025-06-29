"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { Activity, Cloud, Database, Globe, Server, Shield, Zap } from "lucide-react"

const trafficData = [
  { name: "Jan", inbound: 4000, outbound: 2400 },
  { name: "Feb", inbound: 3000, outbound: 1398 },
  { name: "Mar", inbound: 2000, outbound: 9800 },
  { name: "Apr", inbound: 2780, outbound: 3908 },
  { name: "May", inbound: 1890, outbound: 4800 },
  { name: "Jun", inbound: 2390, outbound: 3800 },
]

const latencyData = [
  { name: "00:00", latency: 45 },
  { name: "04:00", latency: 32 },
  { name: "08:00", latency: 78 },
  { name: "12:00", latency: 65 },
  { name: "16:00", latency: 89 },
  { name: "20:00", latency: 56 },
]

const serviceDistribution = [
  { name: "SaaS", value: 45, color: "#0088FE" },
  { name: "PaaS", value: 30, color: "#00C49F" },
  { name: "IaaS", value: 25, color: "#FFBB28" },
]

const resourceUsage = [
  { name: "CPU", usage: 68 },
  { name: "Memory", usage: 82 },
  { name: "Storage", usage: 45 },
  { name: "Network", usage: 73 },
]

export default function Dashboard() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Cloud Network Dashboard</h2>
        <div className="flex items-center space-x-2">
          <Badge variant="outline">Live Environment</Badge>
          
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Traffic</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45.2 GB</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Services</CardTitle>
            <Server className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">3 SaaS, 5 PaaS, 4 IaaS</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Latency</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">58ms</div>
            <p className="text-xs text-muted-foreground">-12ms from last hour</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Security Score</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94%</div>
            <p className="text-xs text-muted-foreground">Zero Trust enabled</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Network Traffic Overview</CardTitle>
            <CardDescription>Inbound and outbound traffic over the last 6 months</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={trafficData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="inbound" fill="#8884d8" name="Inbound (MB)" />
                <Bar dataKey="outbound" fill="#82ca9d" name="Outbound (MB)" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Service Distribution</CardTitle>
            <CardDescription>Current cloud service model usage</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <PieChart>
                <Pie
                  data={serviceDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {serviceDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Additional Charts */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Latency Monitoring</CardTitle>
            <CardDescription>Real-time network latency measurements</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={latencyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="latency" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Resource Utilization</CardTitle>
            <CardDescription>Current system resource usage across services</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {resourceUsage.map((resource) => (
              <div key={resource.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{resource.name}</span>
                  <span className="text-sm text-muted-foreground">{resource.usage}%</span>
                </div>
                <Progress value={resource.usage} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Cloud Models Comparison */}
      <Card>
        <CardHeader>
          <CardTitle>Cloud Deployment Models</CardTitle>
          <CardDescription>Comparison of different cloud deployment strategies</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2 p-4 border rounded-lg">
              <div className="flex items-center space-x-2">
                <Database className="h-5 w-5 text-blue-500" />
                <h3 className="font-semibold">On-Premises</h3>
              </div>
              <p className="text-sm text-muted-foreground">Full control, high security, high maintenance costs</p>
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span>Control</span>
                  <span>100%</span>
                </div>
                <Progress value={100} className="h-1" />
                <div className="flex justify-between text-xs">
                  <span>Cost Efficiency</span>
                  <span>30%</span>
                </div>
                <Progress value={30} className="h-1" />
              </div>
            </div>

            <div className="space-y-2 p-4 border rounded-lg">
              <div className="flex items-center space-x-2">
                <Cloud className="h-5 w-5 text-green-500" />
                <h3 className="font-semibold">Hybrid Cloud</h3>
              </div>
              <p className="text-sm text-muted-foreground">Balanced approach, flexible scaling, moderate complexity</p>
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span>Control</span>
                  <span>70%</span>
                </div>
                <Progress value={70} className="h-1" />
                <div className="flex justify-between text-xs">
                  <span>Cost Efficiency</span>
                  <span>75%</span>
                </div>
                <Progress value={75} className="h-1" />
              </div>
            </div>

            <div className="space-y-2 p-4 border rounded-lg">
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-purple-500" />
                <h3 className="font-semibold">Public Cloud</h3>
              </div>
              <p className="text-sm text-muted-foreground">High scalability, cost-effective, shared responsibility</p>
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span>Control</span>
                  <span>40%</span>
                </div>
                <Progress value={40} className="h-1" />
                <div className="flex justify-between text-xs">
                  <span>Cost Efficiency</span>
                  <span>95%</span>
                </div>
                <Progress value={95} className="h-1" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
