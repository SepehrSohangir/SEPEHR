import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Settings, LogOut, User, Bell, Search } from "lucide-react"
import { Menu, MenuItem, Divider, Box } from "@mui/material"

interface DashboardHeaderProps {
  user: {
    name: string
    role: string
    roles: string[]
    avatar: string
  }
}

export function DashboardHeader({ user }: DashboardHeaderProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <header className="header-glass">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary via-primary/80 to-primary/60 rounded-2xl flex items-center justify-center shadow-2xl hover:shadow-2xl transition-all duration-500 hover:scale-110 glow-primary">
                <span className="text-primary-foreground font-bold text-xl p-2">ار</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-foreground via-primary to-primary bg-clip-text text-transparent">
                   سیستم پرسنلی هوشمند راهبردی
                </h1>
                <p className="text-sm text-muted-foreground font-medium">داشبورد مدیریت تیم</p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">

            {/* Notifications */}
            <Button customVariant="ghost" className="relative h-10 w-10 rounded-full hover:bg-muted/50 transition-all duration-300 hover:scale-105">
              <Bell className="h-5 w-5 text-muted-foreground" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-destructive rounded-full animate-pulse"></span>
            </Button>

            {/* User Info */}
            <div className="text-right">
              <p className="text-sm font-semibold text-foreground">{user.name}</p>
              <div className="flex gap-2 justify-end">
                {user.roles.map((role) => (
                  <Badge 
                    key={role} 
                    variant={role === user.role ? "default" : "secondary"} 
                    className={`text-xs ${
                      role === user.role 
                        ? 'badge-primary' 
                        : 'badge-secondary'
                    }`}
                  >
                    {role}
                  </Badge>
                ))}
              </div>
            </div>

            {/* User Menu */}
            <div>
              <Button 
                customVariant="ghost" 
                className="relative h-12 w-12 rounded-full hover:bg-muted/50 transition-all duration-300 hover:scale-105"
                onClick={handleClick}
                aria-controls={open ? 'user-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <Avatar className="h-12 w-12 ring-2 ring-transparent hover:ring-primary/40 transition-all duration-300">
                  <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                  <AvatarFallback className="bg-gradient-to-br from-primary via-primary/80 to-primary/60 text-primary-foreground font-semibold text-lg">
                    {user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              </Button>
              
              <Menu
                id="user-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                className="w-64 border border-border/50 shadow-2xl rounded-2xl backdrop-blur-xl bg-popover/90"
                PaperProps={{
                  className: "w-64 border border-border/50 shadow-2xl rounded-2xl backdrop-blur-xl bg-popover/90"
                }}
              >
                {/* User Info */}
                <Box className="p-4 border-b border-border/50">
                  <p className="text-sm font-semibold leading-none text-foreground mb-2">{user.name}</p>
                  <p className="text-xs leading-none text-muted-foreground mb-2">اصلی: {user.role}</p>
                  <div className="flex gap-1">
                    {user.roles.map((role) => (
                      <Badge key={role} variant="outline" className="text-xs badge-glass">
                        {role}
                      </Badge>
                    ))}
                  </div>
                </Box>
                
                <MenuItem 
                  onClick={handleClose}
                  className="hover:bg-muted/50 focus:bg-muted/50 rounded-lg transition-colors px-4 py-3"
                >
                  <User className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>پروفایل</span>
                </MenuItem>
                
                <MenuItem 
                  onClick={handleClose}
                  className="hover:bg-muted/50 focus:bg-muted/50 rounded-lg transition-colors px-4 py-3"
                >
                  <Settings className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>تنظیمات</span>
                </MenuItem>
                
                <Divider className="my-2" />
                
                <MenuItem 
                  onClick={handleClose}
                  className="hover:bg-destructive/10 focus:bg-destructive/10 rounded-lg transition-colors text-destructive px-4 py-3"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>خروج</span>
                </MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
