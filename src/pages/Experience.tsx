import { motion } from "framer-motion";
import { smoothEase } from "@/lib/motion";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import type { ExperienceEntry } from "@/i18n/content";

// Calculates the duration between two dates
function calculateDuration(start: string, end: string | null): string {
  const startDate = new Date(start + "-01");
  const endDate = end ? new Date(end + "-01") : new Date();

  const years = endDate.getFullYear() - startDate.getFullYear();
  const months = endDate.getMonth() - startDate.getMonth();

  let totalMonths = years * 12 + months;
  if (totalMonths < 0) totalMonths = 0;

  const finalYears = Math.floor(totalMonths / 12);
  const finalMonths = totalMonths % 12;

  if (finalYears === 0 && finalMonths === 0) return "1 month";
  if (finalYears === 0)
    return `${finalMonths} ${finalMonths === 1 ? "month" : "months"}`;
  if (finalMonths === 0)
    return `${finalYears} ${finalYears === 1 ? "year" : "years"}`;
  return `${finalYears} ${finalYears === 1 ? "year" : "years"} ${finalMonths} ${finalMonths === 1 ? "month" : "months"}`;
}

// Formats the period range
function formatPeriod(start: string, end: string | null): string {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const startDate = new Date(start + "-01");
  const startMonth = months[startDate.getMonth()];
  const startYear = startDate.getFullYear();

  if (!end) {
    return `${startMonth} ${startYear} — Present`;
  }

  const endDate = new Date(end + "-01");
  const endMonth = months[endDate.getMonth()];
  const endYear = endDate.getFullYear();

  return `${startMonth} ${startYear} — ${endMonth} ${endYear}`;
}

function ExperienceCard({
  item,
  index,
  isLast,
  presentLabel,
}: {
  item: ExperienceEntry;
  index: number;
  isLast: boolean;
  presentLabel: string;
}) {
  const period = formatPeriod(item.startDate, item.endDate);
  const duration = calculateDuration(item.startDate, item.endDate);
  const isCurrent = item.endDate === null;
  const startYear = new Date(item.startDate + "-01").getFullYear();
  const endLabel = isCurrent
    ? presentLabel
    : new Date(item.endDate + "-01").getFullYear();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: smoothEase }}
      className={`grid grid-cols-[auto_1fr] md:grid-cols-[140px_1fr] gap-6 md:gap-10 pb-12 ${
        isLast ? "" : "border-b border-line"
      }`}
    >
      {/* Year marker */}
      <div className="relative">
        <p className="font-mono text-3xl md:text-4xl font-bold text-ink leading-none">
          {startYear}
        </p>
        <p
          className={`font-mono text-sm mt-1 ${
            isCurrent ? "text-ink font-medium" : "text-ink-3"
          }`}
        >
          — {endLabel}
        </p>
      </div>

      {/* Content */}
      <div className="space-y-4 pt-1">
        {/* Company Header */}
        <div className="flex items-start gap-4">
          {/* Company Logo */}
          <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-surface-2 flex items-center justify-center text-ink-2 font-bold text-lg">
            {item.logo}
          </div>

          {/* Company Info */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-ink">
              {item.company}
            </h3>
            <p className="text-ink-2 text-sm">{item.type}</p>
          </div>
        </div>

        {/* Role Section */}
        <div className="space-y-2">
          <h4 className="text-lg font-medium text-ink">{item.role}</h4>

          {/* Period and Location */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink-3">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>
                {period} · {duration}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{item.location}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-ink-2 text-sm leading-relaxed">
          {item.description}
        </p>

        {/* Details List */}
        <ul className="space-y-1.5">
          {item.details.map((detail, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 text-sm text-ink-3"
            >
              <span className="text-ink-3 mt-1">•</span>
              <span>{detail}</span>
            </li>
          ))}
        </ul>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 pt-2">
          {item.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-xs"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Experience() {
  const { t } = useLanguage();

  return (
    <Section id="experience">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: smoothEase }}
        >
          <p className="font-mono text-sm text-ink-3 mb-4">
            $ cat experience.log
          </p>
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="h-8 w-8 text-ink-2" />
            <h2 className="text-3xl md:text-4xl font-bold text-ink">
              {t.experience.title}
            </h2>
          </div>
          <p className="text-ink-2 mb-12">{t.experience.subtitle}</p>

          <div>
            {t.experience.entries.map((item, index) => (
              <ExperienceCard
                key={item.company + item.role + item.startDate}
                item={item}
                index={index}
                isLast={index === t.experience.entries.length - 1}
                presentLabel={t.experience.present}
              />
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
