import React from "react";
import {
  Card as UICard,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface FeatureCardProps {
  title: string;
  description: string;
  content: string;
  buttonText?: string;
  buttonVariant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  hoverEffect?: boolean;
}

export function FeatureCard({
  title,
  description,
  content,
  buttonText,
  buttonVariant = "outline",
  onClick,
  className,
  icon,
  hoverEffect = true,
}: FeatureCardProps) {
  return (
    <UICard
      className={`p-4 transition-all duration-300 ${
        hoverEffect
          ? "hover:shadow-lg hover:border-primary/50 hover:translate-y-[-4px]"
          : ""
      } ${className || ""}`}
    >
      <CardHeader className="gap-3">
        {icon && (
          <div className="text-primary w-12 h-12 mx-auto md:mx-0">{icon}</div>
        )}
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{content}</p>
      </CardContent>
      {buttonText && (
        <CardFooter>
          <Button variant={buttonVariant} className="w-full" onClick={onClick}>
            {buttonText}
          </Button>
        </CardFooter>
      )}
    </UICard>
  );
}

interface AgencyCardProps {
  title: string;
  content: string;
  className?: string;
  icon?: React.ReactNode;
}

export function AgencyCard({
  title,
  content,
  className,
  icon,
}: AgencyCardProps) {
  return (
    <UICard
      className={`p-4 transition-all duration-300 hover:shadow-md hover:border-primary/30 ${
        className || ""
      }`}
    >
      <CardHeader className="flex flex-row items-center gap-3">
        {icon && <div className="text-primary w-10 h-10">{icon}</div>}
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm">{content}</p>
      </CardContent>
    </UICard>
  );
}
