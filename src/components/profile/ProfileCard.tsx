import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  MapPin,
  Link as LinkIcon,
  Calendar,
  Mail,
} from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Cover } from "./Cover";
import { cn } from "@/lib/utils";

interface ProfileCardProps {
  coverImage: string;
  avatarImage: string;
  name: string;
  username: string;
  description: string;
  location?: string;
  website?: string;
  joinedDate?: string;
  yearsExperience?: number;
  totalProjects?: number;
  age?: number;
  socials?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
  onContactClick?: () => void;
}

export function ProfileCard({
  coverImage,
  avatarImage,
  name,
  username,
  description,
  location,
  website,
  joinedDate,
  yearsExperience,
  totalProjects,
  age,
  socials,
  onContactClick,
}: ProfileCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={cn(
        "relative rounded-2xl overflow-hidden",
        "bg-zinc-900/50 backdrop-blur-xl border border-white/10",
        "shadow-2xl shadow-black/20",
      )}
    >
      {/* Cover Image */}
      <Cover src={coverImage} alt={`${name} - Cover`} />

      {/* Avatar - Positioned to overlap cover */}
      <div className="relative px-6">
        <div className="absolute -top-14">
          <Avatar
            src={avatarImage}
            alt={name}
            size="xl"
            className="ring-4 ring-zinc-900"
          />
        </div>

        {/* Social Icons - Top Right */}
        <div className="absolute -top-12 right-6 flex items-center gap-2">
          {socials?.linkedin && (
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-zinc-800/80 backdrop-blur-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-700 transition-all duration-200"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          )}
          {/* {socials?.twitter && (
            <a
              href={socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-zinc-800/80 backdrop-blur-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-700 transition-all duration-200"
            >
              <Twitter className="h-4 w-4" />
            </a>
          )} */}
          {socials?.github && (
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-zinc-800/80 backdrop-blur-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-700 transition-all duration-200"
            >
              <Github className="h-4 w-4" />
            </a>
          )}
          <Button size="sm" asChild className="h-8 px-3 text-xs">
            <a href="mailto:ruanpinheiro762@gmail.com">
              <Mail className="h-3.5 w-3.5" />
              Contato
            </a>
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pt-16 pb-6">
        {/* Name and Username */}
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-zinc-100">{name}</h1>
          <p className="text-zinc-500">@{username}</p>
        </div>

        {/* Description */}
        <p className="text-zinc-300 text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500 mb-6">
          {location && (
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{location}</span>
            </div>
          )}
          {/* {website && (
            <a
              href={`https://${website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <LinkIcon className="h-4 w-4" />
              <span>{website}</span>
            </a>
          )} */}
          {joinedDate && (
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>Joined {joinedDate}</span>
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="flex items-center gap-6 pt-4 border-t border-white/10">
          {yearsExperience !== undefined && (
            <div className="text-center">
              <p className="text-xl font-bold text-zinc-100">
                {yearsExperience}+
              </p>
              <p className="text-xs text-zinc-500 uppercase tracking-wider">
                Years Experience
              </p>
            </div>
          )}
          {totalProjects !== undefined && (
            <div className="text-center">
              <p className="text-xl font-bold text-zinc-100">
                {totalProjects}+
              </p>
              <p className="text-xs text-zinc-500 uppercase tracking-wider">
                Total Projects
              </p>
            </div>
          )}
          {age !== undefined && (
            <div className="text-center">
              <p className="text-xl font-bold text-zinc-100">{age}</p>
              <p className="text-xs text-zinc-500 uppercase tracking-wider">
                Years Old
              </p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
