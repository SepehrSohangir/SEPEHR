"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Star, Eye, TrendingUp, Award } from "lucide-react"

interface TeamMember {
  id: string
  name: string
  role: string
  avatar: string
  rating: number
}

interface Team {
  id: string
  name: string
  members: TeamMember[]
}

interface TeamGridProps {
  team: Team
  onMemberSelect: (member: TeamMember) => void
}

export function TeamGrid({ team, onMemberSelect }: TeamGridProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [pulseId, setPulseId] = useState<string | null>(null)

  const getRoleColor = (role: string) => {
    const colors: Record<string, string> = {
      "توسعه‌دهنده": "bg-green-200 text-green-900",
      "تک لید": "bg-blue-200 text-blue-900",
      "مالک محصول": "bg-purple-200 text-purple-900",
      "اسکرام مستر": "bg-cyan-200 text-cyan-900",
      "تحلیلگر": "bg-yellow-200 text-yellow-900",
      "تستر": "bg-red-200 text-red-900",
      "مدیر پایگاه داده": "bg-gray-200 text-gray-800",
      "مدیر فنی": "bg-indigo-200 text-indigo-900",
    }
    return colors[role] || "bg-gray-100 text-gray-800"
  }
  
  // Rating tones with transparency
  const getRatingTone = (rating: number) => {
    if (rating >= 9) return { text: "text-green-500/90", bar: "bg-green-500/70" }
    if (rating >= 8) return { text: "text-blue-500/90", bar: "bg-blue-500/70" }
    if (rating >= 7) return { text: "text-yellow-500/90", bar: "bg-yellow-400/70" }
    return { text: "text-red-500/90", bar: "bg-red-500/70" }
  }
  const getRatingLabel = (rating: number) => {
    if (rating >= 9) return "عالی"
    if (rating >= 8) return "خوب"
    if (rating >= 7) return "متوسط"
    return "نیاز به بهبود"
  }

  const handleView = (member: TeamMember) => {
    setPulseId(member.id)
    setTimeout(() => setPulseId(null), 400)
    onMemberSelect(member)
  }

  return (
    <div className="space-y-6" dir="rtl">

      {/* Tiles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {team.members.map((m) => {
          const tone = getRatingTone(m.rating)
          const width = Math.max(0, Math.min(100, Math.round((m.rating / 10) * 100)))

          return (
            <div
              key={m.id}
              className="group relative overflow-hidden rounded-2xl ring-1 ring-border bg-gradient-to-b from-muted/40 to-background p-4 transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              {/* subtle decorative glow */}
              <div className="pointer-events-none absolute -inset-20 opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                   style={{ background: "radial-gradient(40% 40% at 70% 0%, hsl(var(--primary)/.15), transparent)" }} />

              <div className="flex items-start gap-4">
                {/* Avatar block */}
                <div className="relative shrink-0">
                  <Avatar
                    className={`h-16 w-16 ring-1 ring-border transition-transform duration-300 ${expandedId === m.id ? "scale-105" : "scale-100"}`}
                    role="button"
                    tabIndex={0}
                    aria-label={`نمایش جزئیات ${m.name}`}
                    onClick={() => setExpandedId(expandedId === m.id ? null : m.id)}
                    onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setExpandedId(expandedId === m.id ? null : m.id)}
                  >
                    <AvatarImage src={m.avatar || "/placeholder.svg"} alt={m.name} />
                    <AvatarFallback className="bg-gradient-to-br from-primary to-primary/80 text-white font-semibold text-sm">
                      {m.name.split(" ").map(n => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>

                  {/* small status/role ping */}
                  <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full ring-2 ring-background flex items-center justify-center bg-accent">
                    <Award className="h-3 w-3 text-accent-foreground" />
                    <span className="sr-only">{m.role}</span>
                  </div>
                </div>

                {/* Info stack */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-semibold text-foreground truncate">{m.name}</h3>
                    <div className="flex items-center gap-1 shrink-0">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className={`text-sm font-semibold ${tone.text}`}>{m.rating}</span>
                    </div>
                  </div>

                  {/* Role chip */}
                  <div className="mt-1">
                    <Badge className={`text-[11px] px-2 py-1 rounded-md ${getRoleColor(m.role)}`}>
                      {m.role}
                    </Badge>
                  </div>

                  {/* Rating bar */}
                  <div className="mt-3">
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>امتیاز کل</span>
                      <span className={`font-medium ${tone.text}`}>{getRatingLabel(m.rating)}</span>
                    </div>
                    <div className="mt-1 h-2 w-full rounded-full bg-muted overflow-hidden">
                      <div
                        className={`h-full ${tone.bar} transition-[width] duration-500`}
                        style={{ width: `${width}%` }}
                        aria-valuemin={0}
                        aria-valuemax={10}
                        aria-valuenow={m.rating}
                        role="progressbar"
                      />
                    </div>
                  </div>

                  {/* Actions & tiny trend */}
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleView(m)}
                        className="relative overflow-hidden text-xs h-8 px-3 hover:bg-primary hover:text-primary-foreground transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
                        aria-label={`مشاهده پروفایل ${m.name}`}
                      >
                        {pulseId === m.id && <span className="absolute inset-0 animate-ping rounded-md" />}
                        <Eye className="h-3.5 w-3.5 ml-1" />
                        مشاهده
                      </Button>

                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-xs h-8 px-2"
                        onClick={() => setExpandedId(expandedId === m.id ? null : m.id)}
                        aria-expanded={expandedId === m.id}
                        aria-controls={`details-${m.id}`}
                      >
                        جزئیات
                      </Button>
                    </div>

                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <TrendingUp className="h-3.5 w-3.5 text-green-600" />
                      <span className="text-green-600 font-medium">+۱۲٪</span>
                    </div>
                  </div>

                  {/* Expandable details */}
                  <div
                    id={`details-${m.id}`}
                    className={`transition-[grid-template-rows,opacity] duration-300 ease-out grid ${expandedId === m.id ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="overflow-hidden">
                      <div className="p-3 rounded-xl ring-1 ring-border bg-muted/30">
                        <dl className="grid grid-cols-2 gap-y-2 text-xs">
                          <div className="flex items-center justify-between gap-2">
                            <dt className="text-muted-foreground">نقش</dt>
                            <dd className="font-medium">{m.role}</dd>
                          </div>
                          <div className="flex items-center justify-between gap-2">
                            <dt className="text-muted-foreground">امتیاز</dt>
                            <dd className="font-medium">{m.rating}/۱۰</dd>
                          </div>
                          <div className="flex items-center justify-between gap-2">
                            <dt className="text-muted-foreground">وضعیت</dt>
                            <dd className="text-green-600 font-medium">فعال</dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
