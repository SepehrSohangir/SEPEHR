"use client"

import * as React from "react"
import {
  Box,
  Card,
  CardContent,
  CardHeader as MUICardHeader,
  CardActions,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Rating,
  Chip,
  Button,
  Stack,
  Divider,
} from "@mui/material"
import { Typography } from "./ui/typography"
import PersonIcon from "@mui/icons-material/Person"
import StarIcon from "@mui/icons-material/Star"
import SendIcon from "@mui/icons-material/Send"
import SaveIcon from "@mui/icons-material/Save"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import InsightsIcon from "@mui/icons-material/Insights"
interface EvaluationFormProps {
  userRole: string
}

type FormState = {
  memberName: string
  role: string
  rating: number | null
  strengths: string
  areasForImprovement: string
  goals: string
  comments: string
  evaluationType: "monthly" | "quarterly" | "annual" | "project-based"
}

export default function EvaluationForm({ userRole }: EvaluationFormProps) {
  const [formData, setFormData] = React.useState<FormState>({
    memberName: "",
    role: "",
    rating: null,
    strengths: "",
    areasForImprovement: "",
    goals: "",
    comments: "",
    evaluationType: "quarterly",
  })

  // For “آخرین ذخیره”
  const [lastSaved, setLastSaved] = React.useState<string>("هرگز")

  const getRatingLabel = (rating: number) => {
    if (rating >= 9) return "عالی"
    if (rating >= 8) return "خوب"
    if (rating >= 7) return "متوسط"
    if (rating >= 6) return "قابل قبول"
    return "نیاز به بهبود"
  }

  const getRatingChipColor = (rating: number): "success" | "primary" | "warning" | "info" | "error" => {
    if (rating >= 9) return "success"
    if (rating >= 8) return "primary"
    if (rating >= 7) return "warning"
    if (rating >= 6) return "info"
    return "error"
  }

  const handleField =
    <K extends keyof FormState>(key: K) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData(prev => ({ ...prev, [key]: e.target.value }))
    }

  const handleSelect =
    <K extends keyof FormState>(key: K) =>
    (e: React.ChangeEvent<{ value: unknown }> | any) => {
      setFormData(prev => ({ ...prev, [key]: e.target.value }))
    }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Submit logic here
    console.log("Evaluation submitted:", formData, "by", userRole)
  }

  const handleSave = () => {
    setLastSaved(new Date().toLocaleString("fa-IR"))
    // Persist draft if needed
  }

  return (
    <Box dir="rtl" sx={{ p: { xs: 2, md: 3 }, maxWidth: 1100, mx: "auto" }}>

      <Box component="form" onSubmit={handleSubmit}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
          {/* Member Info */}
          <Card
            elevation={0}
            sx={{
              height: "100%",
              borderRadius: 3,
              border: theme => `1px solid ${theme.palette.divider}`,
            }}
          >
            <MUICardHeader
              title={
                <Stack direction="row" spacing={1} alignItems="center">
                  <PersonIcon color="primary" fontSize="small" />
                  <Typography variant="subtitle1" fontWeight={700}>
                    اطلاعات عضو
                  </Typography>
                </Stack>
              }
            />
            <CardContent>
              <Stack spacing={2.5}>
                <TextField
                  id="memberName"
                  label="نام عضو تیم"
                  value={formData.memberName}
                  onChange={handleField("memberName")}
                  fullWidth
                />

                <FormControl fullWidth>
                  <InputLabel id="role-label">نقش</InputLabel>
                  <Select
                    labelId="role-label"
                    id="role"
                    value={formData.role}
                    label="نقش"
                    onChange={handleSelect("role")}
                  >
                    <MenuItem value="developer">توسعه‌دهنده</MenuItem>
                    <MenuItem value="technical-lead">تک لید</MenuItem>
                    <MenuItem value="scrum-master">اسکرام مستر</MenuItem>
                    <MenuItem value="product-owner">مالک محصول</MenuItem>
                    <MenuItem value="analyst">تحلیلگر</MenuItem>
                    <MenuItem value="tester">تستر</MenuItem>
                    <MenuItem value="dba">مدیر پایگاه داده</MenuItem>
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel id="evaluationType-label">نوع ارزیابی</InputLabel>
                  <Select
                    labelId="evaluationType-label"
                    id="evaluationType"
                    value={formData.evaluationType}
                    label="نوع ارزیابی"
                    onChange={handleSelect("evaluationType")}
                  >
                    <MenuItem value="monthly">ماهانه</MenuItem>
                    <MenuItem value="quarterly">فصلانه</MenuItem>
                    <MenuItem value="annual">سالانه</MenuItem>
                    <MenuItem value="project-based">بر اساس پروژه</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
            </CardContent>
          </Card>

          {/* Rating */}
          <Card
            elevation={0}
            sx={{
              height: "100%",
              borderRadius: 3,
              border: theme => `1px solid ${theme.palette.divider}`,
            }}
          >
            <MUICardHeader
              title={
                <Stack direction="row" spacing={1} alignItems="center">
                  <StarIcon sx={{ color: "warning.main" }} fontSize="small" />
                  <Typography variant="subtitle1" fontWeight={700}>
                    امتیازدهی عملکرد
                  </Typography>
                </Stack>
              }
            />
            <CardContent>
              <Stack spacing={2}>
                <Typography variant="body2" color="text.secondary">
                  امتیاز کلی عملکرد
                </Typography>

                <Rating
                  name="overall-rating"
                  value={formData.rating}
                  onChange={(_, newValue) => setFormData(p => ({ ...p, rating: newValue }))}
                  max={10}
                  precision={1}
                  icon={<StarIcon fontSize="inherit" />}
                  emptyIcon={<StarIcon fontSize="inherit" />}
                  sx={{ direction: "ltr", alignSelf: "flex-start" }}
                />

                {typeof formData.rating === "number" && formData.rating > 0 && (
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={theme => ({
                      p: 1.5,
                      borderRadius: 2,
                      border: `1px solid ${theme.palette.divider}`,
                      backgroundColor: theme.palette.action.hover,
                    })}
                  >
                    <Typography variant="body2" color="text.secondary">
                      امتیاز:
                    </Typography>
                    <Chip
                      label={`${formData.rating}/۱۰ - ${getRatingLabel(formData.rating)}`}
                      color={getRatingChipColor(formData.rating)}
                      variant="outlined"
                    />
                  </Stack>
                )}
              </Stack>
            </CardContent>
          </Card>

          {/* Detailed Assessment */}
          <Card
            elevation={0}
            sx={{
              borderRadius: 3,
              border: theme => `1px solid ${theme.palette.divider}`,
              gridColumn: { xs: '1', md: '1 / -1' }
            }}
          >
            <MUICardHeader
              title={
                <Stack direction="row" spacing={1} alignItems="center">
                  <InsightsIcon color="primary" fontSize="small" />
                  <Typography variant="subtitle1" fontWeight={700}>
                    ارزیابی تفصیلی
                  </Typography>
                </Stack>
              }
            />
            <CardContent>
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2.5 }}>
                <TextField
                  id="strengths"
                  label="نقاط قوت کلیدی"
                  value={formData.strengths}
                  onChange={handleField("strengths")}
                  fullWidth
                  multiline
                  minRows={4}
                  placeholder="نقاط قوت کلیدی و دستاوردهای عضو تیم را توصیف کنید..."
                />
                <TextField
                  id="areasForImprovement"
                  label="زمینه‌های بهبود"
                  value={formData.areasForImprovement}
                  onChange={handleField("areasForImprovement")}
                  fullWidth
                  multiline
                  minRows={4}
                  placeholder="زمینه‌های خاصی که عضو تیم می‌تواند بهبود دهد را شناسایی کنید..."
                />
                <TextField
                  id="goals"
                  label="اهداف توسعه"
                  value={formData.goals}
                  onChange={handleField("goals")}
                  fullWidth
                  multiline
                  minRows={4}
                  placeholder="اهداف واضح و قابل دستیابی برای دوره ارزیابی بعدی تعیین کنید..."
                />
                <TextField
                  id="comments"
                  label="نظرات اضافی"
                  value={formData.comments}
                  onChange={handleField("comments")}
                  fullWidth
                  multiline
                  minRows={4}
                  placeholder="هرگونه مشاهدات یا توصیه‌های اضافی..."
                />
              </Box>
                          </CardContent>

              <Divider />

              <CardActions sx={{ p: 2.5, justifyContent: "space-between", flexWrap: "wrap", gap: 1.5 }}>
                <Stack direction="row" spacing={1.2} alignItems="center">
                  <AccessTimeIcon fontSize="small" />
                  <Typography variant="caption">آخرین ذخیره: {lastSaved}</Typography>
                </Stack>

                <Stack direction="row" spacing={1.5}>
                  <Button
                    variant="outlined"
                    startIcon={<SaveIcon />}
                    onClick={handleSave}
                  >
                    ذخیره پیش‌نویس
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    startIcon={<SendIcon />}
                  >
                    ارسال ارزیابی
                  </Button>
                </Stack>
              </CardActions>
            </Card>
        </Box>
      </Box>
    </Box>
  )
}
