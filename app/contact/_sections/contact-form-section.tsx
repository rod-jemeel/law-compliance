"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function ContactFormSection() {
  return (
    <Card className="border-0 shadow-md hover:shadow-lg transition-all">
      <CardHeader className="border-b border-slate-100">
        <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wide">
          Reach Out
        </span>
        <CardTitle className="text-xl text-gray-900">
          Send Us a Message
        </CardTitle>
        <CardDescription className="text-slate-500">
          Fill out the form below and we&apos;ll get back to you as soon as
          possible.
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <form className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="first-name">First Name</Label>
              <Input id="first-name" placeholder="John" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Last Name</Label>
              <Input id="last-name" placeholder="Doe" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="john.doe@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" placeholder="+63 912 345 6789" />
          </div>
          <div className="space-y-2">
            <Label>Inquiry Type</Label>
            <RadioGroup defaultValue="general">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="general" id="general" />
                <Label htmlFor="general">General Inquiry</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="support" id="support" />
                <Label htmlFor="support">Technical Support</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="billing" id="billing" />
                <Label htmlFor="billing">Billing Question</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="feedback" id="feedback" />
                <Label htmlFor="feedback">Feedback/Suggestion</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="How can we help you?"
              rows={5}
            />
          </div>
        </form>
      </CardContent>
      <CardFooter className="bg-slate-50 rounded-b-lg border-t border-slate-100">
        <Button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
        >
          Send Message
        </Button>
      </CardFooter>
    </Card>
  );
}
