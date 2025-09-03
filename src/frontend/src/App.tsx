import { useState } from "react"
import { 
  Card, 
  CardContent, 
  CardHeader, 
  Select,
  MenuItem,
  Tabs,
  Tab,
  Box,
  Button,
  Chip
} from "@mui/material"
import { Typography } from "./components/ui/typography"
import { 
  Users, 
  Star, 
  TrendingUp, 
  Calendar, 
  BarChart3, 
  Target, 
  Zap 
} from "lucide-react"
import { DashboardHeader } from "./components/dashboard-header"
import { TeamGrid } from "./components/team-grid"
import EvaluationForm from "./components/evaluation-form"
import { UserProfile } from "./components/user-profile"

// Mock data with Persian names and roles
const mockUser = {
  id: "1",
  name: "سارا احمدی",
  role: "اسکرام مستر",
  roles: ["اسکرام مستر", "تک لید"],
  avatar: "/professional-woman-diverse.png",
  teams: ["تیم مالی", "تیم پلتفرم اصلی"],
}

const mockTeams = [
  {
    id: "1",
    name: "تیم مالی",
    members: [
      { id: "1", name: "علی رضایی", role: "توسعه‌دهنده", avatar: "/developer-man.png", rating: 8.5 },
      { id: "2", name: "فاطمه کریمی", role: "توسعه‌دهنده", avatar: "/developer-woman.png", rating: 9.2 },
      { id: "3", name: "محمد نوری", role: "تک لید", avatar: "/tech-lead-man.png", rating: 8.8 },
      { id: "4", name: "لیلا صادقی", role: "تحلیلگر", avatar: "/analyst-woman.png", rating: 9.0 },
      { id: "5", name: "حسین مرادی", role: "مالک محصول", avatar: "/product-owner-man.png", rating: 8.7 },
      { id: "6", name: "زهرا احمدی", role: "تستر", avatar: "/tester-woman.png", rating: 8.9 },
    ],
  },
  {
    id: "2",
    name: "تیم پلتفرم اصلی",
    members: [
      { id: "7", name: "امیر حسینی", role: "توسعه‌دهنده", avatar: "/developer-person.png", rating: 8.3 },
      { id: "8", name: "مریم غفاری", role: "تک لید", avatar: "/tech-lead-woman.png", rating: 9.1 },
      { id: "9", name: "رضا طاهری", role: "مدیر پایگاه داده", avatar: "/database-admin-man.png", rating: 8.6 },
    ],
  },
]

export default function App() {
  const [selectedTeam, setSelectedTeam] = useState(mockTeams[0])
  const [selectedMember, setSelectedMember] = useState(null)
  const [activeTab, setActiveTab] = useState(0)

  const handleMemberSelect = (member: any) => {
    setSelectedMember(member)
    setActiveTab(3)
  }

  const handleBackToOverview = () => {
    setSelectedMember(null)
    setActiveTab(0)
  }

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue)
  }

  const handleTeamChange = (event: any) => {
    const team = mockTeams.find((t) => t.id === event.target.value)
    if (team) {
      setSelectedTeam(team)
    }
  }

  return (
    <div className="min-h-screen bg-background font-persian" dir="rtl" lang="fa">
      <DashboardHeader user={mockUser} />

      <div className="container mx-auto px-6 py-8">
        <Box sx={{ width: '100%' }}>
          <Tabs 
            value={activeTab} 
            onChange={handleTabChange} 
            className="space-y-8"
            sx={{
              '& .MuiTabs-indicator': {
                backgroundColor: 'primary.main',
                height: 3,
                borderRadius: 1.5
              }
            }}
          >
            <Tab 
              label={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Target className="h-4 w-4" />
                  <span className="font-persian-medium">نمای کلی</span>
                </Box>
              }
              sx={{ 
                minHeight: 64,
                '&.Mui-selected': { color: 'primary.main' }
              }}
            />
            <Tab 
              label={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Star className="h-4 w-4" />
                  <span className="font-persian-medium">ارزیابی‌ها</span>
                </Box>
              }
              sx={{ 
                minHeight: 64,
                '&.Mui-selected': { color: 'primary.main' }
              }}
            />
            <Tab 
              label={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <BarChart3 className="h-4 w-4" />
                  <span className="font-persian-medium">تحلیل‌ها</span>
                </Box>
              }
              sx={{ 
                minHeight: 64,
                '&.Mui-selected': { color: 'primary.main' }
              }}
            />
            <Tab 
              label={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Users className="h-4 w-4" />
                  <span className="font-persian-medium">
                    {selectedMember ? "پروفایل" : "انتخاب عضو"}
                  </span>
                </Box>
              }
              disabled={!selectedMember}
              sx={{ 
                minHeight: 64,
                '&.Mui-selected': { color: 'primary.main' }
              }}
            />
          </Tabs>

          {/* Tab Content */}
          <Box sx={{ mt: 4 }}>
            {activeTab === 0 && (
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <Select
                    value={selectedTeam.id}
                    onChange={handleTeamChange}
                    sx={{ 
                      minWidth: 256,
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                        backdropFilter: 'blur(16px)',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)'
                      }
                    }}
                  >
                    {mockTeams.map((team) => (
                      <MenuItem key={team.id} value={team.id}>
                        {team.name}
                      </MenuItem>
                    ))}
                  </Select>
                </div>

                {/* Enhanced Team Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <Card className="stat-card group" sx={{ 
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%)',
                    border: '1px solid rgba(59, 130, 246, 0.2)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
                    }
                  }}>
                    <CardContent>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box>
                          <Typography variant="h3" className="stat-value group-hover:text-primary transition-colors duration-500">
                            {selectedTeam.members.length}
                          </Typography>
                          <Typography variant="body2" className="stat-label">اعضای تیم</Typography>
                        </Box>
                        <Box sx={{ 
                          p: 2, 
                          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(59, 130, 246, 0.1) 100%)',
                          borderRadius: 2,
                          transition: 'all 0.5s ease',
                          '&:hover': {
                            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(59, 130, 246, 0.15) 100%)',
                            transform: 'scale(1.1)'
                          }
                        }}>
                          <Users className="h-8 w-8 text-primary" />
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>

                  <Card className="stat-card group" sx={{ 
                    background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(245, 158, 11, 0.05) 100%)',
                    border: '1px solid rgba(245, 158, 11, 0.2)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
                    }
                  }}>
                    <CardContent>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box>
                          <Typography variant="h3" className="stat-value group-hover:text-primary transition-colors duration-500">
                            {(
                              selectedTeam.members.reduce((acc, member) => acc + member.rating, 0) / selectedTeam.members.length
                            ).toFixed(1)}
                          </Typography>
                          <Typography variant="body2" className="stat-label">میانگین امتیاز</Typography>
                        </Box>
                        <Box sx={{ 
                          p: 2, 
                          background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.2) 0%, rgba(245, 158, 11, 0.1) 100%)',
                          borderRadius: 2,
                          transition: 'all 0.5s ease',
                          '&:hover': {
                            background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.3) 0%, rgba(245, 158, 11, 0.15) 100%)',
                            transform: 'scale(1.1)'
                          }
                        }}>
                          <Star className="h-8 w-8 text-yellow-500" />
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>

                  <Card className="stat-card group" sx={{ 
                    background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(34, 197, 94, 0.05) 100%)',
                    border: '1px solid rgba(34, 197, 94, 0.2)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
                    }
                  }}>
                    <CardContent>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box>
                          <Typography variant="h3" className="stat-value group-hover:text-primary transition-colors duration-500">+۱۲٪</Typography>
                          <Typography variant="body2" className="stat-label">روند عملکرد</Typography>
                        </Box>
                        <Box sx={{ 
                          p: 2, 
                          background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(34, 197, 94, 0.1) 100%)',
                          borderRadius: 2,
                          transition: 'all 0.5s ease',
                          '&:hover': {
                            background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.3) 0%, rgba(34, 197, 94, 0.15) 100%)',
                            transform: 'scale(1.1)'
                          }
                        }}>
                          <TrendingUp className="h-8 w-8 text-green-500" />
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>

                  <Card className="stat-card group" sx={{ 
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%)',
                    border: '1px solid rgba(59, 130, 246, 0.2)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
                    }
                  }}>
                    <CardContent>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box>
                          <Typography variant="h3" className="stat-value group-hover:text-primary transition-colors duration-500">۲ روز</Typography>
                          <Typography variant="body2" className="stat-label">آخرین ارزیابی</Typography>
                        </Box>
                        <Box sx={{ 
                          p: 2, 
                          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(59, 130, 246, 0.1) 100%)',
                          borderRadius: 2,
                          transition: 'all 0.5s ease',
                          '&:hover': {
                            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(59, 130, 246, 0.15) 100%)',
                            transform: 'scale(1.1)'
                          }
                        }}>
                          <Calendar className="h-8 w-8 text-blue-500" />
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="card-interactive group" sx={{ 
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
                    }
                  }}>
                    <CardContent className="p-6">
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box sx={{ 
                          p: 1.5, 
                          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(59, 130, 246, 0.1) 100%)',
                          borderRadius: 1.5,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(59, 130, 246, 0.15) 100%)'
                          }
                        }}>
                          <Zap className="h-8 w-8 text-primary" />
                        </Box>
                        <Box>
                          <Typography variant="h6" className="font-semibold text-foreground">ارزیابی سریع</Typography>
                          <Typography variant="body2" className="text-muted-foreground">شروع ارزیابی جدید تیم</Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>

                  <Card className="card-interactive group" sx={{ 
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
                    }
                  }}>
                    <CardContent className="p-6">
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box sx={{ 
                          p: 1.5, 
                          background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(34, 197, 94, 0.1) 100%)',
                          borderRadius: 1.5,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.3) 0%, rgba(34, 197, 94, 0.15) 100%)'
                          }
                        }}>
                          <BarChart3 className="h-8 w-8 text-green-500" />
                        </Box>
                        <Box>
                          <Typography variant="h6" className="font-semibold text-foreground">مشاهده گزارش‌ها</Typography>
                          <Typography variant="body2" className="text-muted-foreground">دسترسی به تحلیل‌های تفصیلی</Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>

                  <Card className="card-interactive group" sx={{ 
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
                    }
                  }}>
                    <CardContent className="p-6">
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box sx={{ 
                          p: 1.5, 
                          background: 'linear-gradient(135deg, rgba(156, 163, 175, 0.2) 0%, rgba(156, 163, 175, 0.1) 100%)',
                          borderRadius: 1.5,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            background: 'linear-gradient(135deg, rgba(156, 163, 175, 0.3) 0%, rgba(156, 163, 175, 0.15) 100%)'
                          }
                        }}>
                          <Users className="h-8 w-8 text-gray-500" />
                        </Box>
                        <Box>
                          <Typography variant="h6" className="font-semibold text-foreground">تنظیمات تیم</Typography>
                          <Typography variant="body2" className="text-muted-foreground">مدیریت پیکربندی تیم</Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </div>

                <TeamGrid team={selectedTeam} onMemberSelect={handleMemberSelect} />
              </div>
            )}

            {activeTab === 1 && (
              <div className="space-y-8">
                <EvaluationForm userRole={mockUser.role} />
              </div>
            )}

            {activeTab === 2 && (
              <div className="space-y-8">
                <div>
                  <Typography variant="h1" className="section-header">تحلیل‌های عملکرد</Typography>
                  <Typography variant="body1" className="section-subtitle">بینش‌های عمیق در روندهای عملکرد تیم و معیارها</Typography>
                </div>
                <Card className="card-elevated" sx={{ 
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(16px)'
                }}>
                  <CardHeader
                    title={
                      <Typography variant="h4" className="section-header">داشبورد تحلیل پیشرفته</Typography>
                    }
                  />
                  <CardContent>
                    <Box sx={{ textAlign: 'center', py: 10 }}>
                      <Box sx={{ 
                        width: 128, 
                        height: 128, 
                        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(59, 130, 246, 0.1) 100%)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 4,
                        animation: 'float 6s ease-in-out infinite'
                      }}>
                        <BarChart3 className="h-16 w-16 text-primary" />
                      </Box>
                      <Typography variant="h3" sx={{ mb: 2, fontWeight: 'bold' }}>تحلیل‌ها به زودی</Typography>
                      <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 448, mx: 'auto' }}>
                        تحلیل‌های پیشرفته عملکرد، تحلیل روند و بینش‌های پیش‌بینی‌کننده در به‌روزرسانی بعدی در دسترس خواهد بود.
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === 3 && selectedMember && (
              <div className="space-y-8">
                <UserProfile member={selectedMember} onBack={handleBackToOverview} />
              </div>
            )}
          </Box>
        </Box>
      </div>
    </div>
  )
}
