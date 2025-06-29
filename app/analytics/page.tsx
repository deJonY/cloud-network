"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { TrendingUp, TrendingDown, Activity, Users, Globe, Server } from "lucide-react"

const networkTrafficData = [
  { time: "00:00", upload: 120, download: 340, users: 45 },
  { time: "04:00", upload: 80, download: 200, users: 23 },
  { time: "08:00", upload: 200, download: 450, users: 89 },
  { time: "12:00", upload: 180, download: 380, users: 76 },
  { time: "16:00", upload: 220, download: 520, users: 95 },
  { time: "20:00", upload: 160, download: 420, users: 67 },
]

const bandwidthUsage = [
  { name: "Video Streaming", value: 45, color: "#0088FE" },
  { name: "File Transfer", value: 25, color: "#00C49F" },
  { name: "Web Browsing", value: 20, color: "#FFBB28" },
  { name: "Email/Chat", value: 10, color: "#FF8042" },
]

const geographicData = [
  { region: "North America", traffic: 2400, latency: 45 },
  { region: "Europe", traffic: 1800, latency: 32 },
  { region: "Asia Pacific", traffic: 3200, latency: 78 },
  { region: "South America", traffic: 800, latency: 65 },
  { region: "Africa", traffic: 600, latency: 89 },
]

const protocolAnalysis = [
  { protocol: "HTTPS", requests: 45000, percentage: 65 },
  { protocol: "HTTP", requests: 15000, percentage: 22 },
  { protocol: "FTP", requests: 5000, percentage: 7 },
  { protocol: "SSH", requests: 3000, percentage: 4 },
  { protocol: "Other", requests: 1500, percentage: 2 },
]

export default function NetworkAnalytics() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Network Analytics</h2>
        <div className="flex items-center gap-2">
          <Badge variant="outline">Real-time</Badge>
          <Badge variant="secondary">Last 24h</Badge>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Bandwidth</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.2 TB</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
              +12% from yesterday
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,847</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
              +5.2% from last hour
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Peak Latency</CardTitle>
            <Globe className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89ms</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingDown className="h-3 w-3 mr-1 text-red-500" />
              +15ms from average
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Server Load</CardTitle>
            <Server className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">67%</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingDown className="h-3 w-3 mr-1 text-green-500" />
              -8% from peak
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="traffic" className="space-y-4">
        <TabsList>
          <TabsTrigger value="traffic">Traffic Analysis</TabsTrigger>
          <TabsTrigger value="bandwidth">Bandwidth Usage</TabsTrigger>
          <TabsTrigger value="geographic">Geographic Data</TabsTrigger>
          <TabsTrigger value="protocols">Protocol Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="traffic" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Network Traffic Overview</CardTitle>
              <CardDescription>Upload/Download traffic and concurrent users over 24 hours</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={networkTrafficData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="download"
                    stackId="1"
                    stroke="#8884d8"
                    fill="#8884d8"
                    name="Download (MB/s)"
                  />
                  <Area
                    type="monotone"
                    dataKey="upload"
                    stackId="1"
                    stroke="#82ca9d"
                    fill="#82ca9d"
                    name="Upload (MB/s)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="bandwidth" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Bandwidth Distribution</CardTitle>
                <CardDescription>Usage by application type</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={bandwidthUsage}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {bandwidthUsage.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Top Applications</CardTitle>
                <CardDescription>Bandwidth consumption by application</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {bandwidthUsage.map((app) => (
                  <div key={app.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: app.color }} />
                      <span className="text-sm font-medium">{app.name}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">{app.value}%</div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="geographic" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Geographic Traffic Distribution</CardTitle>
              <CardDescription>Network traffic and latency by region</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={geographicData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="region" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="traffic" fill="#8884d8" name="Traffic (GB)" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="protocols" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Protocol Analysis</CardTitle>
              <CardDescription>Network requests by protocol type</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {protocolAnalysis.map((protocol) => (
                  <div key={protocol.protocol} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{protocol.protocol}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">
                          {protocol.requests.toLocaleString()} requests
                        </span>
                        <Badge variant="outline">{protocol.percentage}%</Badge>
                      </div>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: `${protocol.percentage}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
