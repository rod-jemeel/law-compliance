import { Building2, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 container py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have questions about PermitTracker? We&apos;re here to help. Reach
              out to our team using the form below or through our contact
              information.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we&apos;ll get back to you as soon
                  as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
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
                    <Input
                      id="email"
                      type="email"
                      placeholder="john.doe@example.com"
                    />
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
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>
                    Reach out to us directly using the following contact
                    details.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-sm text-muted-foreground">
                        support@permittracker.com
                      </p>
                      <p className="text-sm text-muted-foreground">
                        info@permittracker.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-sm text-muted-foreground">
                        Main: (035) 422-8899
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Support: (035) 422-8900
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Office Address</h3>
                      <p className="text-sm text-muted-foreground">
                        123 Main Street
                        <br />
                        Dumaguete City, Negros Oriental
                        <br />
                        Philippines 6200
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Building2 className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Business Hours</h3>
                      <p className="text-sm text-muted-foreground">
                        Monday - Friday: 8:00 AM - 5:00 PM
                        <br />
                        Saturday: 9:00 AM - 12:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                  <CardDescription>
                    Quick answers to common questions.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium">How do I reset my password?</h3>
                    <p className="text-sm text-muted-foreground">
                      You can reset your password by clicking on the
                      &quot;Forgot Password&quot; link on the login page and
                      following the instructions sent to your email.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium">
                      Can I change my subscription plan?
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Yes, you can upgrade or downgrade your subscription plan
                      at any time through your account settings.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium">
                      How do I cancel my subscription?
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      You can cancel your subscription through your account
                      settings or by contacting our customer support team.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-xl font-semibold mb-4">
              Need Immediate Assistance?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Our customer support team is available to help you with any
              questions or issues you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg">
                <Phone className="mr-2 h-4 w-4" />
                Call Support
              </Button>
              <Button size="lg">
                <Mail className="mr-2 h-4 w-4" />
                Email Support
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
