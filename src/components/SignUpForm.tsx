import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface SignUpFormProps {
  id?: string;
  showHeading?: boolean;
}

export const SignUpForm = ({ id = "signup", showHeading = true }: SignUpFormProps) => {
  const [formData, setFormData] = useState({
    email: "",
    products: "",
    socialProfiles: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Application Submitted! 🎉",
      description: "Thanks for applying! We'll review your application and get back to you soon. Keep training hard!",
      duration: 5000,
    });
    
    setFormData({ email: "", products: "", socialProfiles: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id={id} className="py-20 bg-card">
      <div className="container mx-auto px-6">
        {showHeading && (
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-black text-hockey-black mb-6">
              Apply Now to{" "}
              <span className="text-hockey-red">Join the Team!</span>
            </h2>
            <p className="text-xl text-hockey-gray max-w-2xl mx-auto">
              Ready to become a Better Hockey ambassador? Fill out the form below!
            </p>
          </div>
        )}
        
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-hockey-black font-semibold">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-2 border-ice-gray focus:border-hockey-red transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="products" className="text-hockey-black font-semibold">
                  Which Better Hockey Products Do You Own?
                </Label>
                <Input
                  id="products"
                  name="products"
                  value={formData.products}
                  onChange={handleChange}
                  className="border-2 border-ice-gray focus:border-hockey-red transition-colors"
                  placeholder="e.g., Stickhandling Trainer, Tiles"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="socialProfiles" className="text-hockey-black font-semibold">
                Social Media Profile(s) *
              </Label>
              <Input
                id="socialProfiles"
                name="socialProfiles"
                value={formData.socialProfiles}
                onChange={handleChange}
                required
                className="border-2 border-ice-gray focus:border-hockey-red transition-colors"
                placeholder="@yourusername on TikTok, Instagram, etc."
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message" className="text-hockey-black font-semibold">
                Tell Us About Yourself
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="border-2 border-ice-gray focus:border-hockey-red transition-colors resize-none"
                placeholder="What makes you passionate about hockey? What content do you love creating?"
              />
            </div>
            
            <Button
              type="submit"
              variant="energy"
              size="xl"
              disabled={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? "Submitting Application..." : "Apply to Join the Team! 🚀"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};