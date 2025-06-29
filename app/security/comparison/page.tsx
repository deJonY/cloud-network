"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Shield, Network, CheckCircle, XCircle, AlertTriangle } from "lucide-react"

const comparisonData = [
  {
    aspect: "Security Model",
    vpn: "Perimeter-based security",
    zeroTrust: "Never trust, always verify",
    vpnScore: 60,
    ztScore: 95,
  },
  {
    aspect: "Network Access",
    vpn: "Full network access once connected",
    zeroTrust: "Least privilege access to specific resources",
    vpnScore: 40,
    ztScore: 90,
  },
  {
    aspect: "User Experience",
    vpn: "Can be slow and cumbersome",
    zeroTrust: "Seamless and transparent",
    vpnScore: 50,
    ztScore: 85,
  },
  {
    aspect: "Scalability",
    vpn: "Limited by VPN server capacity",
    zeroTrust: "Highly scalable cloud-based",
    vpnScore: 45,
    ztScore: 95,
  },
  {
    aspect: "Implementation Cost",
    vpn: "Lower initial setup cost",
    zeroTrust: "Higher initial investment",
    vpnScore: 80,
    ztScore: 60,
  },
  {
    aspect: "Maintenance",
    vpn: "Requires ongoing server maintenance",
    zeroTrust: "Managed service, less maintenance",
    vpnScore: 55,
    ztScore: 85,
  },
]

const vpnFeatures = [
  { feature: "Encrypted tunnel", status: "good" },
  { feature: "Remote access", status: "good" },
  { feature: "Network-level security", status: "good" },
  { feature: "Single point of failure", status: "bad" },
  { feature: "Full network access", status: "warning" },
  { feature: "Performance overhead", status: "warning" },
]

const zeroTrustFeatures = [
  { feature: "Identity verification", status: "good" },
  { feature: "Device compliance", status: "good" },
  { feature: "Least privilege access", status: "good" },
  { feature: "Continuous monitoring", status: "good" },
  { feature: "No network trust", status: "good" },
  { feature: "Complex implementation", status: "warning" },
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case "good":
      return <CheckCircle className="h-4 w-4 text-green-500" />
    case "bad":
      return <XCircle className="h-4 w-4 text-red-500" />
    case "warning":
      return <AlertTriangle className="h-4 w-4 text-yellow-500" />
    default:
      return null
  }
}

export default function SecurityComparison() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">VPN vs Zero Trust</h2>
        <Badge variant="outline">Security Comparison</Badge>
      </div>

      {/* Overview Cards */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Network className="h-5 w-5 text-blue-500" />
              <CardTitle>Virtual Private Network (VPN)</CardTitle>
            </div>
            <CardDescription>Traditional perimeter-based security approach</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              VPNs create an encrypted tunnel between the user's device and the corporate network, providing secure
              remote access to internal resources.
            </p>
            <div className="space-y-2">
              <h4 className="font-semibold">Key Characteristics</h4>
              {vpnFeatures.map((item) => (
                <div key={item.feature} className="flex items-center gap-2">
                  {getStatusIcon(item.status)}
                  <span className="text-sm">{item.feature}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-500" />
              <CardTitle>Zero Trust Network Access</CardTitle>
            </div>
            <CardDescription>Modern identity-centric security framework</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Zero Trust assumes no implicit trust and continuously validates every transaction before granting access
              to applications and data.
            </p>
            <div className="space-y-2">
              <h4 className="font-semibold">Key Characteristics</h4>
              {zeroTrustFeatures.map((item) => (
                <div key={item.feature} className="flex items-center gap-2">
                  {getStatusIcon(item.status)}
                  <span className="text-sm">{item.feature}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Comparison */}
      <Card>
        <CardHeader>
          <CardTitle>Detailed Comparison</CardTitle>
          <CardDescription>Side-by-side analysis of VPN and Zero Trust approaches</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {comparisonData.map((item) => (
              <div key={item.aspect} className="space-y-3">
                <h4 className="font-semibold">{item.aspect}</h4>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-blue-600">VPN</span>
                      <span className="text-sm text-muted-foreground">{item.vpnScore}%</span>
                    </div>
                    <Progress value={item.vpnScore} className="h-2" />
                    <p className="text-sm text-muted-foreground">{item.vpn}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-green-600">Zero Trust</span>
                      <span className="text-sm text-muted-foreground">{item.ztScore}%</span>
                    </div>
                    <Progress value={item.ztScore} className="h-2" />
                    <p className="text-sm text-muted-foreground">{item.zeroTrust}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Implementation Scenarios */}
      <Card>
        <CardHeader>
          <CardTitle>When to Use Each Approach</CardTitle>
          <CardDescription>Choosing the right security model for your organization</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3">
              <h4 className="font-semibold text-blue-600">VPN is Better For:</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Small organizations with limited IT resources</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Legacy applications requiring network-level access</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Temporary or project-based remote access</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Budget-constrained implementations</span>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-green-600">Zero Trust is Better For:</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Large enterprises with distributed workforce</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Organizations with strict compliance requirements</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Cloud-first or hybrid cloud environments</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">High-security industries (finance, healthcare)</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
