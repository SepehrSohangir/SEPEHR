"use client"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { ArrowLeft, Star, TrendingUp, Calendar, Award, Target, Users, BarChart3 } from "lucide-react"

interface UserProfileProps {
  member: {
    id: string
    name: string
    role: string
    avatar: string
    rating: number
  }
  onBack: () => void
}

export function UserProfile({ member, onBack }: UserProfileProps) {
  const getRatingColor = (rating: number) => {
    if (rating >= 9) return "text-green-500"
    if (rating >= 8) return "text-blue-500"
    if (rating >= 7) return "text-yellow-500"
    if (rating >= 6) return "text-orange-500"
    return "text-red-500"
  }

  const getRatingBadge = (rating: number) => {
    if (rating >= 9) return "badge-success"
    if (rating >= 8) return "badge-primary"
    if (rating >= 7) return "badge-warning"
    return "badge-danger"
  }

  const getRatingLabel = (rating: number) => {
    if (rating >= 9) return "عالی"
    if (rating >= 8) return "خوب"
    if (rating >= 7) return "متوسط"
    if (rating >= 6) return "قابل قبول"
    return "نیاز به بهبود"
  }

  return (
    <div className="space-y-8" dir="rtl">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Button onClick={onBack} customVariant="ghost" className="button-ghost">
          <ArrowLeft className="h-4 w-4 mr-2" />
          بازگشت به نمای کلی
        </Button>
        <Badge className={`${getRatingBadge(member.rating)} text-sm px-4 py-2`}>
          {member.rating}/۱۰ - {getRatingLabel(member.rating)}
        </Badge>
      </div>

      {/* Profile Header */}
      <Card className="card-glass">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            {/* Avatar Section */}
            <div className="relative">
              <Avatar className="h-32 w-32 ring-4 ring-primary/20 shadow-2xl">
                <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                <AvatarFallback className="bg-gradient-to-br from-primary via-primary/80 to-primary/60 text-primary-foreground font-bold text-3xl">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center shadow-lg">
                <Award className="h-4 w-4 text-accent-foreground" />
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-foreground via-primary to-primary bg-clip-text text-transparent mb-2">
                {member.name}
              </h1>
              <p className="text-xl text-muted-foreground mb-4">{member.role}</p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-2 sm:space-y-0 sm:space-x-6">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <span className={`text-2xl font-bold ${getRatingColor(member.rating)}`}>
                    {member.rating}
                  </span>
                  <span className="text-muted-foreground">/۱۰</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  <span className="text-green-500 font-semibold">+۱۲٪</span>
                  <span className="text-muted-foreground text-sm">این ماه</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="card-stats">
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">۸۵٪</h3>
            <p className="text-muted-foreground">دسترسی به اهداف</p>
          </CardContent>
        </Card>

        <Card className="card-stats">
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">۱۲</h3>
            <p className="text-muted-foreground">همکاری‌های تیمی</p>
          </CardContent>
        </Card>

        <Card className="card-stats">
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-8 w-8 text-blue-500" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">۹۸٪</h3>
            <p className="text-muted-foreground">نرخ حضور</p>
          </CardContent>
        </Card>
      </div>

      {/* Performance Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Performance */}
        <Card className="card-glass">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span>عملکرد اخیر</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gradient-to-r from-muted/50 to-muted/30 rounded-xl border border-border/50">
                <span className="text-sm font-medium text-muted-foreground">مهارت‌های فنی</span>
                <div className="flex items-center space-x-2">
                  <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full" style={{ width: '85%' }} />
                  </div>
                  <span className="text-sm font-semibold text-foreground">۸۵٪</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-gradient-to-r from-muted/50 to-muted/30 rounded-xl border border-border/50">
                <span className="text-sm font-medium text-muted-foreground">ارتباطات</span>
                <div className="flex items-center space-x-2">
                  <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full" style={{ width: '92%' }} />
                  </div>
                  <span className="text-sm font-semibold text-foreground">۹۲٪</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-gradient-to-r from-muted/50 to-muted/30 rounded-xl border border-border/50">
                <span className="text-sm font-medium text-muted-foreground">رهبری</span>
                <div className="flex items-center space-x-2">
                  <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full" style={{ width: '78%' }} />
                  </div>
                  <span className="text-sm font-semibold text-foreground">۷۸٪</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card className="card-glass">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              <span>فعالیت‌های اخیر</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start space-x-3 p-3 bg-gradient-to-r from-muted/50 to-muted/30 rounded-xl border border-border/50">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">تکمیل بررسی اسپرینت</p>
                  <p className="text-xs text-muted-foreground">۲ روز پیش</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-3 bg-gradient-to-r from-muted/50 to-muted/30 rounded-xl border border-border/50">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">راهنمایی توسعه‌دهنده جوان</p>
                  <p className="text-xs text-muted-foreground">۱ هفته پیش</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-3 bg-gradient-to-r from-muted/50 to-muted/30 rounded-xl border border-border/50">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">جلسه بررسی کد</p>
                  <p className="text-xs text-muted-foreground">۱ هفته پیش</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-center space-x-4">
        <Button className="button-primary">
          <Target className="h-4 w-4 mr-2" />
          تعیین اهداف جدید
        </Button>
        <Button customVariant="outline" className="button-secondary">
          <TrendingUp className="h-4 w-4 mr-2" />
          مشاهده گزارش کامل
        </Button>
        <Button customVariant="outline" className="button-ghost">
          <Calendar className="h-4 w-4 mr-2" />
          برنامه‌ریزی بررسی
        </Button>
      </div>
    </div>
  )
}
