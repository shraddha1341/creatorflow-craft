import { Plus, TrendingUp, Users, Eye, Heart, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const activityItems = [
  {
    id: 1,
    title: "YouTube Short: 'Top 5 Marketing Tips'",
    status: "Published",
    platform: "YouTube",
    views: "12.4K",
    time: "2 hours ago"
  },
  {
    id: 2,
    title: "Instagram Reel: 'Daily Motivation'",
    status: "Scheduled",
    platform: "Instagram",
    views: "—",
    time: "Tomorrow at 9 AM"
  },
  {
    id: 3,
    title: "TikTok Video: 'Quick Tutorial'",
    status: "Draft",
    platform: "TikTok",
    views: "—",
    time: "3 days ago"
  }
]

const stats = [
  {
    title: "Total Views",
    value: "124.3K",
    change: "+12.5%",
    icon: Eye,
    trend: "up"
  },
  {
    title: "Engagement Rate",
    value: "8.2%",
    change: "+2.1%",
    icon: Heart,
    trend: "up"
  },
  {
    title: "Followers",
    value: "45.6K",
    change: "+856",
    icon: Users,
    trend: "up"
  },
  {
    title: "Comments",
    value: "2.1K",
    change: "+423",
    icon: MessageCircle,
    trend: "up"
  }
]

export default function Dashboard() {
  return (
    <div className="p-6 space-y-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary via-accent to-primary p-8 text-white">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2">
            Hi Alex 👋, ready to create today?
          </h1>
          <p className="text-white/90 text-lg mb-6">
            Your content creation studio is ready. Let's make something amazing!
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="stats-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center text-xs text-success">
                <TrendingUp className="w-3 h-3 mr-1" />
                {stat.change}
                <span className="text-muted-foreground ml-1">from last week</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Activity Timeline */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Your latest content creation activity
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {activityItems.map((item) => (
              <div key={item.id} className="flex items-start space-x-4 p-4 rounded-lg border border-border/50 hover:bg-muted/30 transition-colors">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-medium truncate">{item.title}</h4>
                    <Badge variant={
                      item.status === 'Published' ? 'default' :
                      item.status === 'Scheduled' ? 'secondary' : 'outline'
                    }>
                      {item.status}
                    </Badge>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground mt-1">
                    <span>{item.platform}</span>
                    {item.views !== '—' && (
                      <>
                        <span className="mx-2">•</span>
                        <span>{item.views} views</span>
                      </>
                    )}
                    <span className="mx-2">•</span>
                    <span>{item.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}